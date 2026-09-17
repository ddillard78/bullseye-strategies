import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name is required"),
  revenue: z.string().optional(),
  message: z.string().min(10, "Please provide a brief message about your needs"),
});

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      revenue: "",
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Message Sent Successfully",
        description: "Thank you. We will be in touch within 24 hours to schedule your consultation.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again or call us directly.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    submitMutation.mutate(values);
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to optimize your financial and operational performance? Let's start the conversation.
          </p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">Get in Touch</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Whether you need immediate interim leadership, a full ERP implementation, or a strategic review, our team is ready to mobilize.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center text-accent shadow-sm shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-primary text-lg">Office</h4>
                  <p className="text-slate-600">3120 Southwest Fwy Ste 101<br />Houston, Texas 77098</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center text-accent shadow-sm shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-primary text-lg">Phone</h4>
                  <p className="text-slate-600">(832) 868-7347</p>
                  <p className="text-sm text-slate-400 mt-1">Mon-Fri, 8am - 6pm CST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center text-accent shadow-sm shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-primary text-lg">Email</h4>
                  <a href="mailto:info@bullseyestrategies.net" className="text-slate-600 hover:text-accent">info@bullseyestrategies.net</a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border border-slate-100 shadow-sm">
              <h4 className="font-heading font-bold text-primary mb-4">What happens next?</h4>
              <ul className="space-y-3">
                {[
                  "We'll respond within 24 hours to schedule a call.",
                  "A brief discovery conversation (30 mins).",
                  "We deliver a customized proposal and roadmap.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <Card className="border-0 shadow-xl rounded-sm overflow-hidden">
            <div className="h-2 bg-accent w-full" />
            <CardContent className="p-8 md:p-10">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-primary mb-4">Thank You!</h3>
                  <p className="text-slate-600 mb-6">
                    We've received your inquiry and will respond within 24 hours.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-heading font-bold text-primary mb-6">Send us a message</h3>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="John Doe" 
                                  {...field} 
                                  className="rounded-none h-12 bg-slate-50 border-slate-200 focus:border-accent" 
                                  data-testid="input-name"
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
                              <FormLabel>Work Email</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="john@company.com" 
                                  {...field} 
                                  className="rounded-none h-12 bg-slate-50 border-slate-200 focus:border-accent"
                                  data-testid="input-email"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Acme Corp" 
                                  {...field} 
                                  className="rounded-none h-12 bg-slate-50 border-slate-200 focus:border-accent"
                                  data-testid="input-company"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="revenue"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Annual Revenue (Optional)</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="rounded-none h-12 bg-slate-50 border-slate-200 focus:border-accent" data-testid="select-revenue">
                                    <SelectValue placeholder="Select range" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="<1M">Less than $1M</SelectItem>
                                  <SelectItem value="1M-5M">$1M - $5M</SelectItem>
                                  <SelectItem value="5M-20M">$5M - $20M</SelectItem>
                                  <SelectItem value="20M-50M">$20M - $50M</SelectItem>
                                  <SelectItem value="50M+">$50M+</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>How can we help?</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us about your current challenges..." 
                                className="rounded-none min-h-[150px] bg-slate-50 border-slate-200 focus:border-accent resize-none" 
                                {...field}
                                data-testid="textarea-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        disabled={submitMutation.isPending}
                        className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-base font-bold uppercase tracking-widest rounded-none"
                        data-testid="button-submit"
                      >
                        {submitMutation.isPending ? "Sending..." : "Submit Request"}
                      </Button>
                    </form>
                  </Form>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
