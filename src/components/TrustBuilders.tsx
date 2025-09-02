import { Shield, Truck, Star } from "lucide-react";

const TrustBuilders = () => {
  const pillars = [
    {
      icon: Shield,
      title: "Authenticity Guaranteed",
      description: "Direct partnerships with official brand stores. Every product is 100% authentic.",
      highlight: "Official Stores Only"
    },
    {
      icon: Truck,
      title: "Fast & Direct Shipping", 
      description: "No middlemen. Products ship directly from brands to your door.",
      highlight: "2-Day Delivery"
    },
    {
      icon: Star,
      title: "Exclusive Brand Deals",
      description: "VIP access to member-only sales and early product launches.",
      highlight: "Updated Daily"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-luxury-text mb-6 tracking-tight">
            Why shop <span className="font-medium">By The Brands?</span>
          </h2>
          <p className="text-xl text-luxury-text-light leading-relaxed">
            The only platform that connects you directly with the world's most trusted brands
          </p>
        </div>

        {/* Trust Pillars */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div 
                key={index}
                className="text-center group"
              >
                {/* Icon */}
                <div className="relative mx-auto w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-accent-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-luxury-text mb-3">
                  {pillar.title}
                </h3>
                <p className="text-luxury-text-light leading-relaxed mb-4">
                  {pillar.description}
                </p>
                
                {/* Highlight Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-luxury-surface rounded-full border border-luxury-border">
                  <span className="text-sm font-medium text-primary">
                    {pillar.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Social Proof Logos */}
        <div className="mt-16 pt-12 border-t border-luxury-border">
          <p className="text-center text-luxury-text-light text-sm mb-8 uppercase tracking-wider">
            Secure payments powered by
          </p>
          <div className="flex items-center justify-center space-x-8 opacity-60">
            <span className="text-sm font-semibold text-luxury-text">Visa</span>
            <span className="text-sm font-semibold text-luxury-text">Mastercard</span>
            <span className="text-sm font-semibold text-luxury-text">PayPal</span>
            <span className="text-sm font-semibold text-luxury-text">Apple Pay</span>
            <span className="text-sm font-semibold text-luxury-text">Google Pay</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBuilders;