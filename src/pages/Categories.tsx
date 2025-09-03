import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { ArrowRight, Shirt, Smartphone, Sparkles, Crown } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      name: "Sneakers & Streetwear",
      icon: Shirt,
      description: "Latest drops from Nike, Adidas, Puma & more",
      subcategories: ["Running Shoes", "Basketball", "Lifestyle", "Apparel"],
      color: "from-slate-50 to-slate-100"
    },
    {
      name: "Beauty & Skincare", 
      icon: Sparkles,
      description: "Premium beauty from Sephora, MAC, NARS",
      subcategories: ["Makeup", "Skincare", "Fragrance", "Tools"],
      color: "from-pink-50 to-pink-100"
    },
    {
      name: "Tech & Gadgets",
      icon: Smartphone, 
      description: "Latest from Apple, Samsung, Sony & more",
      subcategories: ["Phones", "Laptops", "Audio", "Accessories"],
      color: "from-blue-50 to-blue-100"
    },
    {
      name: "Luxury & Fashion",
      icon: Crown,
      description: "Designer pieces from Gucci, Chanel, Hermès",
      subcategories: ["Handbags", "Jewelry", "Watches", "Clothing"],
      color: "from-yellow-50 to-yellow-100"
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
              Shop by <span className="font-medium">Category</span>
            </h1>
            <p className="text-lg text-luxury-text-light">
              Discover curated collections from the world's most trusted brands
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white rounded-lg overflow-hidden shadow-luxury hover:shadow-premium transition-all duration-300 border border-luxury-border"
                >
                  <div className={`p-8 bg-gradient-to-br ${category.color}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-white rounded-lg shadow-sm">
                        <IconComponent className="w-6 h-6 text-luxury-text" />
                      </div>
                      <h3 className="text-2xl font-medium text-luxury-text">
                        {category.name}
                      </h3>
                    </div>
                    <p className="text-luxury-text-light mb-6">
                      {category.description}
                    </p>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="font-medium text-luxury-text mb-4">Popular Subcategories:</h4>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {category.subcategories.map((sub) => (
                        <span 
                          key={sub}
                          className="text-sm text-luxury-text-light hover:text-luxury-text transition-colors cursor-pointer"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                    <Button variant="luxury-outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Explore Category
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Popular Brands by Category */}
          <div className="text-center bg-luxury-surface rounded-lg p-12">
            <h2 className="text-3xl font-light text-luxury-text mb-8">
              Popular Brands by Category
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-medium text-luxury-text mb-4">Fashion</h4>
                <div className="space-y-2 text-sm text-luxury-text-light">
                  <div>Nike</div>
                  <div>Adidas</div>
                  <div>Puma</div>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-luxury-text mb-4">Beauty</h4>
                <div className="space-y-2 text-sm text-luxury-text-light">
                  <div>Sephora</div>
                  <div>MAC</div>
                  <div>NARS</div>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-luxury-text mb-4">Tech</h4>
                <div className="space-y-2 text-sm text-luxury-text-light">
                  <div>Apple</div>
                  <div>Samsung</div>
                  <div>Sony</div>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-luxury-text mb-4">Luxury</h4>
                <div className="space-y-2 text-sm text-luxury-text-light">
                  <div>Gucci</div>
                  <div>Chanel</div>
                  <div>Hermès</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Categories;