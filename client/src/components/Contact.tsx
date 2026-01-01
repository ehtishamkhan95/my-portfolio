import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Send, Loader2 } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    try {
      await apiRequest("POST", "/api/contact", formData);
      toast({
        title: "Message Sent",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef as any}
      className="min-h-screen py-12 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-6 bg-card/30 flex items-center"
      data-testid="section-contact"
    >
      <div className="max-w-5xl mx-auto w-full">
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 scroll-fade-in ${
            isVisible ? "visible" : ""
          }`}
          data-testid="text-contact-heading"
        >
          Let's Build Something
        </h2>
        <p
          className={`text-center text-muted-foreground text-base sm:text-lg mb-12 sm:mb-16 max-w-2xl mx-auto scroll-fade-in stagger-1 px-4 ${
            isVisible ? "visible" : ""
          }`}
        >
          Have a project in mind? Let's discuss how we can work together
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <div
            className={`lg:col-span-2 scroll-slide-left stagger-2 ${
              isVisible ? "visible" : ""
            }`}
          >
            <Card className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="text-sm sm:text-base"
                    data-testid="input-name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="text-sm sm:text-base"
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                    className="text-sm sm:text-base"
                    data-testid="input-message"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-sm sm:text-base"
                  disabled={isSending}
                  data-testid="button-submit"
                >
                  {isSending ? (
                    <Loader2 className="h-3 w-3 sm:h-4 sm:w-4 mr-2 animate-spin" />
                  ) : (
                    <Send className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  )}
                  {isSending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </div>

          <div
            className={`space-y-4 sm:space-y-6 scroll-slide-right stagger-2 ${
              isVisible ? "visible" : ""
            }`}
          >
            <Card className="p-4 sm:p-6">
              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <h3 className="font-semibold text-sm sm:text-base">Email</h3>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base break-all">
                khanehtisham.a@gmail.com
              </p>
            </Card>

            {/* <Card className="p-6 hover-elevate active-elevate-2 transition-all cursor-pointer">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
                data-testid="link-github"
              >
                <SiGithub className="h-5 w-5" />
                <div>
                  <h3 className="font-semibold">GitHub</h3>
                  <p className="text-sm text-muted-foreground">View my code</p>
                </div>
              </a>
            </Card> */}

            <Card className="p-4 sm:p-6 hover-elevate active-elevate-2 transition-all cursor-pointer">
              <a
                href="https://www.linkedin.com/in/ehtishamkhan95/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3"
                data-testid="link-linkedin"
              >
                <SiLinkedin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">
                    LinkedIn
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Connect with me
                  </p>
                </div>
              </a>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
