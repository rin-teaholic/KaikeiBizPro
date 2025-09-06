import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSubmissionSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { z } from "zod";

const contactFormSchema = insertContactSubmissionSchema.extend({
  company: z.string()
    .min(1, "企業名は必須です")
    .min(2, "企業名は2文字以上で入力してください")
    .max(100, "企業名は100文字以内で入力してください"),
  name: z.string()
    .min(1, "ご担当者名は必須です")
    .min(2, "ご担当者名は2文字以上で入力してください")
    .max(50, "ご担当者名は50文字以内で入力してください")
    .regex(/^[^\d]*$/, "ご担当者名に数字は含められません"),
  phone: z.string()
    .min(1, "電話番号は必須です")
    .regex(/^[\d\-\(\)\s]+$/, "電話番号は数字、ハイフン、括弧、スペースのみ使用できます")
    .min(10, "電話番号は10桁以上で入力してください")
    .max(15, "電話番号は15桁以内で入力してください"),
  email: z.string()
    .min(1, "メールアドレスは必須です")
    .email("正しいメールアドレス形式で入力してください")
    .max(255, "メールアドレスは255文字以内で入力してください"),
  inquiryType: z.string().optional(),
  employees: z.string().optional(),
  message: z.string()
    .max(1000, "メッセージは1000文字以内で入力してください"),
  agreement: z.boolean().refine(val => val === true, {
    message: "利用規約・プライバシーポリシーに同意してください"
  })
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur", // フィールドからフォーカスが外れた時にバリデーション
    reValidateMode: "onChange", // 入力中にリアルタイムでバリデーション
    defaultValues: {
      company: "",
      name: "",
      phone: "",
      email: "",
      inquiryType: "",
      employees: "",
      message: "",
      agreement: false,
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: Omit<ContactFormData, 'agreement'>) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "送信完了",
        description: data.message,
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "送信エラー",
        description: "送信に失敗しました。もう一度お試しください。",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    },
  });

  const onSubmit = (data: ContactFormData) => {
    const { agreement, ...submitData } = data;
    contactMutation.mutate(submitData);
  };

  const onError = (errors: any) => {
    console.log("Validation errors:", errors);
    toast({
      title: "入力エラー",
      description: "入力内容を確認してください。",
      variant: "destructive",
    });
  };

  return (
    <section id="contact" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">お問い合わせフォーム</h2>
            <p className="text-muted-foreground text-lg">
              以下のフォームに必要事項をご記入ください。<br />
              内容を確認の上、1営業日以内に担当よりご連絡いたします。
            </p>
          </div>
          <div className="bg-card rounded-2xl p-8 shadow-sm" tabIndex={-1}>
            {/* バリデーション状態の表示 */}
            {form.formState.errors && Object.keys(form.formState.errors).length > 0 && (
              <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                <p className="text-destructive font-semibold">入力内容にエラーがあります</p>
              </div>
            )}
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit, onError)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>企業名 <span className="text-destructive">*</span></FormLabel>
                        <FormControl>
                          <Input placeholder="株式会社サンプル" {...field} data-testid="input-company" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ご担当者名 <span className="text-destructive">*</span></FormLabel>
                        <FormControl>
                          <Input placeholder="山田 太郎" {...field} data-testid="input-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>電話番号 <span className="text-destructive">*</span></FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="03-1234-5678" 
                            {...field} 
                            data-testid="input-phone"
                            onChange={(e) => {
                              // 数字のみを抽出してフォーマット
                              const value = e.target.value.replace(/[^\d]/g, '');
                              let formatted = value;
                              
                              if (value.length >= 10) {
                                if (value.startsWith('0')) {
                                  // 固定電話のフォーマット
                                  if (value.length === 10) {
                                    formatted = `${value.slice(0, 2)}-${value.slice(2, 6)}-${value.slice(6)}`;
                                  } else if (value.length === 11) {
                                    formatted = `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(7)}`;
                                  }
                                } else if (value.startsWith('1')) {
                                  // 携帯電話のフォーマット
                                  formatted = `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(7)}`;
                                }
                              }
                              
                              field.onChange(formatted);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>メールアドレス <span className="text-destructive">*</span></FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="example@company.com" {...field} data-testid="input-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="inquiryType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>お問い合わせ内容</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-inquiry-type">
                            <SelectValue placeholder="選択してください" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="trial">無料トライアル申し込み</SelectItem>
                          <SelectItem value="demo">デモンストレーション希望</SelectItem>
                          <SelectItem value="quote">見積もり依頼</SelectItem>
                          <SelectItem value="migration">データ移行相談</SelectItem>
                          <SelectItem value="other">その他</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="employees"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>従業員数</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-employees">
                            <SelectValue placeholder="選択してください" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1-10">1-10名</SelectItem>
                          <SelectItem value="11-50">11-50名</SelectItem>
                          <SelectItem value="51-100">51-100名</SelectItem>
                          <SelectItem value="101-500">101-500名</SelectItem>
                          <SelectItem value="500+">500名以上</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ご質問・ご要望など</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={5} 
                          placeholder="ご質問やご要望がございましたらご記入ください" 
                          {...field} 
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <div className="flex justify-between items-center">
                        <FormMessage />
                        <span className="text-sm text-muted-foreground">
                          {field.value?.length || 0}/1000文字
                        </span>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="agreement"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          data-testid="checkbox-agreement"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm text-muted-foreground">
                          <a href="#" className="text-primary hover:underline">利用規約</a>・
                          <a href="#" className="text-primary hover:underline">プライバシーポリシー</a>
                          にご同意いただいたうえで送信してください。
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors"
                  disabled={contactMutation.isPending || !form.formState.isValid}
                  data-testid="button-submit"
                >
                  {contactMutation.isPending ? "送信中..." : "送信する"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
