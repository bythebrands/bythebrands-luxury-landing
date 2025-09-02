import { Button } from "@/components/ui/button";
import { Clock, ArrowRight } from "lucide-react";

const BrandDrops = () => {
  const drops = [
    {
      brand: "Nike",
      deal: "Up to 40% Off Running Shoes",
      image: "gradient-from-slate-900-to-slate-700",
      timeLeft: "23:45:12",
      bgColor: "from-slate-50 to-slate-100"
    },
    {
      brand: "Sephora", 
      deal: "Free Shipping on Orders $50+",
      image: "gradient-from-pink-900-to-pink-700",
      timeLeft: "11:23:45",
      bgColor: "from-pink-50 to-pink-100"
    },
    {
      brand: "Apple",
      deal: "Back-to-School MacBook Deals",
      image: "gradient-from-gray-900-to-gray-700", 
      timeLeft: "05:12:33",
      bgColor: "from-gray-50 to-gray-100"
    },
    {
      brand: "Samsung",
      deal: "Galaxy Series Flash Sale",
      image: "gradient-from-blue-900-to-blue-700",
      timeLeft: "18:30:21",
      bgColor: "from-blue-50 to-blue-100"
    }
  ];

  return (
    <section className="py-16 bg-luxury-surface">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header with Scarcity */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-destructive" />
            <span className="text-sm font-medium text-destructive uppercase tracking-wider">
              Today's Brand Drops
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-luxury-text mb-4 tracking-tight">
            Limited-time deals from <span className="font-medium">premium brands</span>
          </h2>
          <p className="text-lg text-luxury-text-light">
            Exclusive offers updated daily. Don't miss out.
          </p>
        </div>

        {/* Brand Drops Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {drops.map((drop, index) => (
            <div 
              key={drop.brand}
              className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-luxury hover:shadow-premium transition-all duration-300 border border-luxury-border"
            >
              {/* Brand Image/Logo Area */}
              <div className={`relative h-32 bg-gradient-to-br ${drop.bgColor} flex items-center justify-center`}>
                <span className="text-2xl font-bold text-luxury-text opacity-80">
                  {drop.brand}
                </span>
                {/* Countdown Badge */}
                <div className="absolute top-3 right-3 bg-destructive text-destructive-foreground px-2 py-1 rounded text-xs font-medium">
                  {drop.timeLeft}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4">
                <h3 className="font-medium text-luxury-text mb-2 group-hover:text-primary transition-colors">
                  {drop.deal}
                </h3>
                <Button 
                  variant="luxury-outline" 
                  size="sm" 
                  className="w-full"
                >
                  Shop Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-luxury-text-light mb-4">
            New deals added every 24 hours
          </p>
          <Button variant="luxury" className="px-8">
            View All Active Deals
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BrandDrops;