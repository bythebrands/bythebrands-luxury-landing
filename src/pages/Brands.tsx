import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import { Search } from "lucide-react";

const Brands = () => {
  const brands = [
    { name: "Nike", category: "Fashion" },
    { name: "Apple", category: "Electronics" },
    { name: "Sephora", category: "Beauty" },
    { name: "Gucci", category: "Luxury" },
    { name: "Samsung", category: "Electronics" },
    { name: "Adidas", category: "Fashion" },
    { name: "Rolex", category: "Luxury" },
    { name: "Chanel", category: "Beauty" },
    { name: "Sony", category: "Electronics" },
    { name: "Louis Vuitton", category: "Luxury" },
    { name: "MAC Cosmetics", category: "Beauty" },
    { name: "Puma", category: "Fashion" },
    { name: "Hermès", category: "Luxury" },
    { name: "Microsoft", category: "Electronics" },
    { name: "NARS", category: "Beauty" },
    { name: "Under Armour", category: "Fashion" }
  ];

  const categories = ["All", "Fashion", "Electronics", "Beauty", "Luxury"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Page Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-luxury-text mb-4 tracking-tight">
              Official Brand <span className="font-medium">Stores</span>
            </h1>
            <p className="text-lg text-luxury-text-light mb-8">
              Shop directly from the world's most trusted brands with guaranteed authenticity
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-luxury-text-light w-4 h-4" />
              <Input 
                placeholder="Search brands..." 
                className="pl-10 bg-luxury-surface border-luxury-border"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "luxury" : "luxury-outline"}
                size="sm"
                className="px-6"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Brands Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {brands.map((brand) => (
              <a
                key={brand.name}
                href={`/brands/${brand.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="group bg-white rounded-lg p-8 shadow-luxury hover:shadow-premium transition-all duration-300 border border-luxury-border text-center"
              >
                <div className="text-2xl font-bold text-luxury-text mb-2 group-hover:text-primary transition-colors">
                  {brand.name}
                </div>
                <div className="text-sm text-luxury-text-light mb-4">
                  {brand.category}
                </div>
                <Button variant="luxury-outline" size="sm" className="w-full">
                  Shop Now
                </Button>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Brands;