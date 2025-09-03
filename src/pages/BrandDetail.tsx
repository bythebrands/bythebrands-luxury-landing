import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { Clock, ArrowRight } from "lucide-react";
import { useParams } from "react-router-dom";

const BrandDetail = () => {
  const { brandName } = useParams();
  const formattedBrandName = brandName?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ') || 'Brand';

  const products = [
    {
      name: "Air Max 90 Essential",
      price: "$90.00",
      originalPrice: "$120.00",
      image: "gradient-from-slate-900-to-slate-700"
    },
    {
      name: "React Infinity Run",
      price: "$160.00", 
      originalPrice: "$200.00",
      image: "gradient-from-blue-900-to-blue-700"
    },
    {
      name: "Dri-FIT Training Shorts",
      price: "$25.00",
      originalPrice: "$35.00", 
      image: "gradient-from-green-900-to-green-700"
    },
    {
      name: "Tech Fleece Hoodie",
      price: "$75.00",
      originalPrice: "$100.00",
      image: "gradient-from-gray-900-to-gray-700"
    },
    {
      name: "Air Force 1 '07",
      price: "$90.00",
      originalPrice: "$110.00",
      image: "gradient-from-white-to-gray-200"
    },
    {
      name: "Pro Training Gloves",
      price: "$20.00",
      originalPrice: "$30.00",
      image: "gradient-from-red-900-to-red-700"
    }
  ];

  const relatedBrands = ["Adidas", "Puma", "Under Armour", "New Balance"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Brand Hero */}
          <div className="text-center mb-16">
            <div className="text-6xl font-bold text-luxury-text mb-4">
              {formattedBrandName}
            </div>
            <p className="text-xl text-luxury-text-light mb-8">
              Shop Official {formattedBrandName} Store
            </p>
            <Button variant="luxury-accent" size="lg" className="px-8">
              Visit Official Store
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Featured Deal Banner */}
          <div className="bg-destructive text-destructive-foreground rounded-lg p-6 mb-12 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-5 h-5" />
              <span className="font-medium">Limited Time Offer</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Up to 40% Off {formattedBrandName} Products</h3>
            <p className="mb-4">Sale ends in: 23:45:12</p>
            <Button variant="secondary" size="lg">
              Shop Sale Now
            </Button>
          </div>

          {/* Products Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-luxury-text mb-8 text-center">
              Featured Products
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-lg overflow-hidden shadow-luxury hover:shadow-premium transition-all duration-300 border border-luxury-border"
                >
                  <div className={`h-48 bg-gradient-to-br ${product.image} flex items-center justify-center`}>
                    <span className="text-white text-lg font-medium opacity-80">
                      {product.name}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-medium text-luxury-text mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xl font-bold text-luxury-text">
                        {product.price}
                      </span>
                      <span className="text-sm text-luxury-text-light line-through">
                        {product.originalPrice}
                      </span>
                    </div>
                    <Button variant="luxury" size="sm" className="w-full">
                      Shop Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Related Brands */}
          <div className="text-center">
            <h2 className="text-3xl font-light text-luxury-text mb-8">
              Similar Brands
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {relatedBrands.map((brand) => (
                <a
                  key={brand}
                  href={`/brands/${brand.toLowerCase()}`}
                  className="px-6 py-3 bg-luxury-surface border border-luxury-border rounded-lg hover:shadow-luxury transition-all duration-300 text-luxury-text font-medium"
                >
                  {brand}
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BrandDetail;