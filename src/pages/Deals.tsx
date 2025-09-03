import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { Clock, ArrowRight, Flame } from "lucide-react";

const Deals = () => {
  const todaysTop5 = [
    {
      brand: "Nike",
      deal: "Air Max Collection - Up to 50% Off",
      originalPrice: "$150.00",
      salePrice: "$75.00",
      timeLeft: "12:34:56",
      category: "Fashion"
    },
    {
      brand: "Apple",
      deal: "MacBook Pro M3 - $200 Off",
      originalPrice: "$1,999.00", 
      salePrice: "$1,799.00",
      timeLeft: "08:45:23",
      category: "Tech"
    },
    {
      brand: "Sephora",
      deal: "Beauty Insider Sale - 20% Off",
      originalPrice: "$85.00",
      salePrice: "$68.00", 
      timeLeft: "23:15:47",
      category: "Beauty"
    },
    {
      brand: "Samsung",
      deal: "Galaxy S24 Ultra Trade-In Deal",
      originalPrice: "$1,199.99",
      salePrice: "$799.99",
      timeLeft: "06:22:18",
      category: "Tech"
    },
    {
      brand: "Gucci",
      deal: "Designer Handbags - 30% Off",
      originalPrice: "$2,500.00",
      salePrice: "$1,750.00",
      timeLeft: "18:55:31", 
      category: "Luxury"
    }
  ];

  const allDeals = [
    ...todaysTop5,
    {
      brand: "Adidas",
      deal: "Ultraboost 23 - Limited Edition",
      originalPrice: "$190.00",
      salePrice: "$142.50",
      timeLeft: "15:30:22",
      category: "Fashion"
    },
    {
      brand: "MAC Cosmetics",
      deal: "Lipstick Collection Bundle",
      originalPrice: "$72.00",
      salePrice: "$54.00",
      timeLeft: "09:18:45",
      category: "Beauty"
    },
    {
      brand: "Sony",
      deal: "WH-1000XM5 Headphones Deal",
      originalPrice: "$399.99",
      salePrice: "$299.99",
      timeLeft: "21:42:13",
      category: "Tech"
    }
  ];

  const categories = ["All", "Fashion", "Beauty", "Tech", "Luxury"];
  const sortOptions = ["Ending Soon", "Biggest Savings", "Price: Low to High", "Price: High to Low"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Page Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Flame className="w-6 h-6 text-destructive" />
              <span className="text-sm font-medium text-destructive uppercase tracking-wider">
                Live Deals
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-light text-luxury-text mb-4 tracking-tight">
              Today's Hottest <span className="font-medium">Deals</span>
            </h1>
            <p className="text-lg text-luxury-text-light">
              Exclusive offers from premium brands - updated every hour
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-luxury-text-light mr-2">Filter by:</span>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "luxury" : "luxury-outline"}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
            <select className="px-4 py-2 border border-luxury-border rounded-md bg-background text-luxury-text">
              <option>Sort by: Ending Soon</option>
              {sortOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>

          {/* Today's Top 5 */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-luxury-text mb-8 text-center">
              🔥 Today's Top 5 Deals
            </h2>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-4">
              {todaysTop5.map((deal, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-luxury hover:shadow-premium transition-all duration-300 border border-luxury-border relative"
                >
                  <div className="absolute top-3 right-3 bg-destructive text-destructive-foreground px-2 py-1 rounded text-xs font-medium z-10">
                    #{index + 1}
                  </div>
                  <div className="p-4">
                    <div className="text-lg font-bold text-luxury-text mb-1">
                      {deal.brand}
                    </div>
                    <div className="text-sm text-luxury-text-light mb-3 line-clamp-2">
                      {deal.deal}
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg font-bold text-destructive">
                        {deal.salePrice}
                      </span>
                      <span className="text-sm text-luxury-text-light line-through">
                        {deal.originalPrice}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 mb-3 text-xs text-destructive">
                      <Clock className="w-3 h-3" />
                      {deal.timeLeft}
                    </div>
                    <Button variant="luxury" size="sm" className="w-full text-xs">
                      Shop Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Deals */}
          <div>
            <h2 className="text-3xl font-light text-luxury-text mb-8 text-center">
              All Live Deals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allDeals.map((deal, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-lg overflow-hidden shadow-luxury hover:shadow-premium transition-all duration-300 border border-luxury-border"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-xl font-bold text-luxury-text">
                        {deal.brand}
                      </div>
                      <span className="px-2 py-1 bg-luxury-surface text-xs text-luxury-text-light rounded">
                        {deal.category}
                      </span>
                    </div>
                    
                    <h3 className="font-medium text-luxury-text mb-4 group-hover:text-primary transition-colors">
                      {deal.deal}
                    </h3>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-bold text-destructive">
                        {deal.salePrice}
                      </span>
                      <span className="text-sm text-luxury-text-light line-through">
                        {deal.originalPrice}
                      </span>
                      <span className="text-sm text-green-600 font-medium">
                        Save {Math.round((1 - parseFloat(deal.salePrice.replace(/[$,]/g, '')) / parseFloat(deal.originalPrice.replace(/[$,]/g, ''))) * 100)}%
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-6 text-sm text-destructive">
                      <Clock className="w-4 h-4" />
                      <span>Ends in: {deal.timeLeft}</span>
                    </div>
                    
                    <Button variant="luxury" className="w-full">
                      Shop This Deal
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Deal Alert CTA */}
          <div className="text-center mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-12">
            <h3 className="text-2xl font-medium text-luxury-text mb-4">
              Never Miss a Deal
            </h3>
            <p className="text-luxury-text-light mb-6">
              Get instant notifications when your favorite brands go on sale
            </p>
            <Button variant="luxury-accent" size="lg">
              Set Deal Alerts
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Deals;