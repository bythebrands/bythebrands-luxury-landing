import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Crown } from "lucide-react";

const EmailCapture = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-luxury-surface to-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-accent rounded-full mb-6">
            <Crown className="w-4 h-4 text-accent-foreground" />
            <span className="text-sm font-medium text-accent-foreground uppercase tracking-wider">
              VIP Access
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-light text-luxury-text mb-4 tracking-tight">
            Join the <span className="font-medium">Brand Insider Club</span>
          </h2>
          
          <p className="text-lg text-luxury-text-light mb-8 leading-relaxed">
            Be the first to know about exclusive brand drops, VIP-only sales, and member perks from the world's most coveted brands.
          </p>

          {/* Email Form */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-luxury-text-light" />
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="pl-10 h-12 bg-white border-luxury-border focus:border-primary"
              />
            </div>
            <Button 
              variant="luxury" 
              size="lg"
              className="h-12 px-8"
            >
              Get Early Access
            </Button>
          </div>

          {/* Benefits List */}
          <div className="grid sm:grid-cols-3 gap-4 text-sm text-luxury-text-light">
            <div className="flex items-center justify-center gap-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              <span>Exclusive deals</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              <span>Early brand access</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              <span>VIP member perks</span>
            </div>
          </div>

          {/* Trust Line */}
          <p className="text-xs text-luxury-text-light mt-6">
            Join 50,000+ insider members. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmailCapture;