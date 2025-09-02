import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-hero">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-luxury-text mb-8 tracking-tight leading-tight">
            Shop directly from the world's{" "}
            <span className="font-medium">most trusted brands.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-luxury-text-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover authentic luxury products with guaranteed authenticity, 
            delivered directly from the brands you love.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="luxury-accent" 
              size="lg"
              className="px-8 py-6 text-lg"
            >
              Explore brands
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="luxury-outline" 
              size="lg"
              className="px-8 py-6 text-lg"
            >
              Learn more
            </Button>
          </div>

          {/* Brand logos grid for authority bias */}
          <div className="mt-16 pt-8 border-t border-luxury-border">
            <p className="text-sm text-luxury-text-light mb-6 uppercase tracking-wider text-center">
              Shop from the world's most trusted brands
            </p>
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 items-center justify-items-center opacity-60">
              <div className="h-8 flex items-center justify-center text-lg font-semibold text-luxury-text">Nike</div>
              <div className="h-8 flex items-center justify-center text-lg font-semibold text-luxury-text">Apple</div>
              <div className="h-8 flex items-center justify-center text-lg font-semibold text-luxury-text">Sephora</div>
              <div className="h-8 flex items-center justify-center text-lg font-semibold text-luxury-text">Gucci</div>
              <div className="h-8 flex items-center justify-center text-lg font-semibold text-luxury-text">Samsung</div>
              <div className="h-8 flex items-center justify-center text-lg font-semibold text-luxury-text">Adidas</div>
              <div className="h-8 flex items-center justify-center text-lg font-semibold text-luxury-text">Rolex</div>
              <div className="h-8 flex items-center justify-center text-lg font-semibold text-luxury-text">Chanel</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;