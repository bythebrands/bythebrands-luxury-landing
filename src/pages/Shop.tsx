import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Premium Leather Handbag",
      brand: "Gucci",
      price: "$2,950",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop",
      category: "Luxury"
    },
    {
      id: 2,
      name: "Air Jordan Retro 1",
      brand: "Nike",
      price: "$170",
      image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=400&fit=crop",
      category: "Sneakers"
    },
    {
      id: 3,
      name: "iPhone 15 Pro",
      brand: "Apple",
      price: "$999",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
      category: "Technology"
    },
    {
      id: 4,
      name: "La Mer Moisturizing Cream",
      brand: "La Mer",
      price: "$350",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
      category: "Beauty"
    },
    {
      id: 5,
      name: "Silk Scarf Collection",
      brand: "Hermès",
      price: "$485",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop",
      category: "Luxury"
    },
    {
      id: 6,
      name: "Wireless Headphones",
      brand: "Sony",
      price: "$399",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      category: "Technology"
    },
    {
      id: 7,
      name: "Designer Sunglasses",
      brand: "Ray-Ban",
      price: "$215",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop",
      category: "Accessories"
    },
    {
      id: 8,
      name: "Premium Watch",
      brand: "Rolex",
      price: "$8,500",
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=400&fit=crop",
      category: "Luxury"
    }
  ];

  const categories = ["All", "Luxury", "Technology", "Beauty", "Sneakers", "Accessories"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-luxury-background py-20">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-serif font-bold text-luxury-text mb-6">
            Curated Luxury Collection
          </h1>
          <p className="text-xl text-luxury-text-light max-w-2xl mx-auto mb-8">
            Discover authentic products from the world's most prestigious brands, 
            carefully selected for discerning tastes.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-luxury-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "luxury" : "outline"}
                className="font-serif"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-luxury transition-all duration-300 cursor-pointer border-luxury-border">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-luxury-accent font-serif font-medium mb-1">
                      {product.brand}
                    </p>
                    <h3 className="text-lg font-serif font-semibold text-luxury-text mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="text-xl font-bold text-luxury-text">{product.price}</p>
                      <Button size="sm" variant="luxury" className="font-serif">
                        Shop Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-luxury-background py-16">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-luxury-text mb-4">
            Stay Updated
          </h2>
          <p className="text-luxury-text-light mb-8 max-w-2xl mx-auto">
            Be the first to know about new arrivals, exclusive deals, and luxury trends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border border-luxury-border bg-background text-luxury-text"
            />
            <Button variant="luxury" className="font-serif">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-luxury-border py-8">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <p className="text-luxury-text-light font-serif">
            © 2024 By The Brands. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Shop;