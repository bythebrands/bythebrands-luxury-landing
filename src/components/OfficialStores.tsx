import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const OfficialStores = () => {
  const stores = [
    { name: "Nike", category: "Sports & Lifestyle", verified: true },
    { name: "Samsung", category: "Technology", verified: true },
    { name: "Sephora", category: "Beauty & Skincare", verified: true },
    { name: "Gucci", category: "Luxury Fashion", verified: true },
    { name: "Apple", category: "Technology", verified: true },
    { name: "Adidas", category: "Sports & Lifestyle", verified: true },
    { name: "Chanel", category: "Luxury Beauty", verified: true },
    { name: "Rolex", category: "Luxury Watches", verified: true }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-luxury-surface border border-luxury-border rounded-full mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-luxury-text uppercase tracking-wider">
              Official Partners
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-luxury-text mb-6 tracking-tight">
            Official brand stores on <span className="font-medium">By The Brands</span>
          </h2>
          <p className="text-xl text-luxury-text-light leading-relaxed">
            Shop directly from verified brand storefronts with guaranteed authenticity
          </p>
        </div>

        {/* Stores Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stores.map((store, index) => (
            <div 
              key={store.name}
              className="group bg-white p-6 rounded-lg border border-luxury-border hover:shadow-premium transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-luxury-surface rounded-lg flex items-center justify-center">
                  <span className="font-bold text-luxury-text text-sm">
                    {store.name.substring(0, 2).toUpperCase()}
                  </span>
                </div>
                {store.verified && (
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
              
              <h3 className="font-semibold text-luxury-text mb-1 group-hover:text-primary transition-colors">
                {store.name}
              </h3>
              <p className="text-xs text-luxury-text-light mb-4">
                {store.category}
              </p>
              
              <Button 
                variant="luxury-outline" 
                size="sm" 
                className="w-full text-xs"
              >
                Shop Store
                <ExternalLink className="ml-2 w-3 h-3" />
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-luxury-text-light mb-6">
            Over 500+ official brand stores available
          </p>
          <Button variant="luxury" size="lg" className="px-8">
            Browse All Official Stores
            <ExternalLink className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OfficialStores;