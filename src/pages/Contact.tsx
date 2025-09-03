import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import { Mail, MessageCircle, Phone, MapPin, Instagram, Twitter, Youtube } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help with orders, returns, or general questions",
      contact: "support@bythebrands.com",
      availability: "Response within 24 hours"
    },
    {
      icon: MessageCircle,
      title: "Live Chat", 
      description: "Instant help for urgent questions",
      contact: "Available on website",
      availability: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our customer care team", 
      contact: "1-800-BTB-SHOP",
      availability: "Mon-Fri 9AM-8PM EST"
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: "Instagram", handle: "@bythebrands" },
    { icon: Twitter, name: "Twitter", handle: "@bythebrands" },
    { icon: Youtube, name: "YouTube", handle: "/bythebrands" }
  ];

  const faqs = [
    {
      question: "How do I know products are authentic?",
      answer: "All products come directly from official brand stores and authorized retailers."
    },
    {
      question: "What's your return policy?",
      answer: "Returns follow each brand's individual policy. We facilitate the process for you."
    },
    {
      question: "Do you offer price matching?",
      answer: "We work directly with brands to offer competitive pricing and exclusive deals."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Page Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-luxury-text mb-4 tracking-tight">
              Get in <span className="font-medium">Touch</span>
            </h1>
            <p className="text-lg text-luxury-text-light">
              Have questions? We're here to help you shop with confidence.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-luxury border border-luxury-border p-8">
                <h2 className="text-2xl font-medium text-luxury-text mb-6">
                  Send us a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-luxury-text mb-2">
                        First Name
                      </label>
                      <Input 
                        placeholder="Your first name"
                        className="bg-luxury-surface border-luxury-border"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-luxury-text mb-2">
                        Last Name
                      </label>
                      <Input 
                        placeholder="Your last name"
                        className="bg-luxury-surface border-luxury-border"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-luxury-text mb-2">
                      Email Address
                    </label>
                    <Input 
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-luxury-surface border-luxury-border"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-luxury-text mb-2">
                      Subject
                    </label>
                    <select className="w-full px-3 py-2 border border-luxury-border rounded-md bg-luxury-surface text-luxury-text">
                      <option>General Inquiry</option>
                      <option>Order Support</option>
                      <option>Brand Partnership</option>
                      <option>Technical Issue</option>
                      <option>Feedback</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-luxury-text mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      className="bg-luxury-surface border-luxury-border"
                    />
                  </div>
                  
                  <Button variant="luxury" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <div className="bg-luxury-surface rounded-lg p-6">
                <h3 className="text-xl font-medium text-luxury-text mb-6">
                  Other Ways to Reach Us
                </h3>
                <div className="space-y-6">
                  {contactMethods.map((method, index) => {
                    const IconComponent = method.icon;
                    return (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <IconComponent className="w-5 h-5 text-primary" />
                          </div>
                        </div>
                        <div>
                          <div className="font-medium text-luxury-text mb-1">
                            {method.title}
                          </div>
                          <div className="text-sm text-luxury-text-light mb-2">
                            {method.description}
                          </div>
                          <div className="text-sm font-medium text-luxury-text">
                            {method.contact}
                          </div>
                          <div className="text-xs text-luxury-text-light">
                            {method.availability}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-lg shadow-luxury border border-luxury-border p-6">
                <h3 className="text-xl font-medium text-luxury-text mb-6">
                  Follow Us
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href="#"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-luxury-surface transition-colors"
                      >
                        <IconComponent className="w-5 h-5 text-luxury-text" />
                        <div>
                          <div className="font-medium text-luxury-text">
                            {social.name}
                          </div>
                          <div className="text-sm text-luxury-text-light">
                            {social.handle}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-luxury-surface rounded-lg p-6">
                <h3 className="text-xl font-medium text-luxury-text mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-luxury-text-light">Monday - Friday</span>
                    <span className="text-luxury-text">9:00 AM - 8:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-luxury-text-light">Saturday</span>
                    <span className="text-luxury-text">10:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-luxury-text-light">Sunday</span>
                    <span className="text-luxury-text">12:00 PM - 5:00 PM EST</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-light text-luxury-text text-center mb-12">
              Frequently Asked <span className="font-medium">Questions</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-luxury border border-luxury-border p-6">
                  <h4 className="font-medium text-luxury-text mb-3">
                    {faq.question}
                  </h4>
                  <p className="text-sm text-luxury-text-light">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="luxury-outline">
                View All FAQs
              </Button>
            </div>
          </div>

          {/* Office Location */}
          <div className="mt-16 bg-luxury-surface rounded-lg p-12 text-center">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-medium text-luxury-text mb-4">
              Visit Our Office
            </h3>
            <p className="text-luxury-text-light mb-2">
              123 Brand Street, Suite 456
            </p>
            <p className="text-luxury-text-light mb-6">
              New York, NY 10001
            </p>
            <Button variant="luxury-outline">
              Get Directions
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;