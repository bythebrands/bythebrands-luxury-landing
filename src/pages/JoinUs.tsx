import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, TrendingUp, Users } from "lucide-react";

const JoinUs = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Grow Your Sales",
      description: "Access our curated audience of luxury shoppers"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Premium Placement",
      description: "Featured positioning alongside top-tier brands"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Brand Authority",
      description: "Build trust through our verified marketplace"
    }
  ];

  const partners = [
    "Nike", "Apple", "Gucci", "Sephora", "Samsung", "Adidas", 
    "Louis Vuitton", "Rolex", "Hermès", "Chanel"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-luxury-background py-20">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 font-serif text-luxury-accent border-luxury-accent">
            Partner Program
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-serif font-bold text-luxury-text mb-6">
            Join the Elite
          </h1>
          <p className="text-xl text-luxury-text-light max-w-2xl mx-auto mb-8">
            Partner with By The Brands and showcase your products to a curated 
            audience of luxury consumers worldwide.
          </p>
          <Button size="lg" variant="luxury" className="font-serif text-lg">
            Apply Now
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-luxury-text mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-luxury-text-light text-lg max-w-2xl mx-auto">
              Join a marketplace that elevates your brand and connects you with 
              discerning customers who value authenticity and quality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-luxury transition-all duration-300 border-luxury-border">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-luxury-accent/10 rounded-full flex items-center justify-center text-luxury-accent mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="font-serif text-luxury-text">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-luxury-text-light">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-16 bg-luxury-background">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-luxury-text mb-8">
            Trusted by Global Brands
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="text-luxury-text-light font-serif font-semibold text-lg hover:text-luxury-text transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="border-luxury-border">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-serif font-bold text-luxury-text">
                  Partner Application
                </CardTitle>
                <p className="text-luxury-text-light">
                  Tell us about your brand and we'll get back to you within 48 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-luxury-text font-serif mb-2">
                      Brand Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-md border border-luxury-border bg-background text-luxury-text"
                      placeholder="Your brand name"
                    />
                  </div>
                  <div>
                    <label className="block text-luxury-text font-serif mb-2">
                      Contact Person
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-md border border-luxury-border bg-background text-luxury-text"
                      placeholder="Full name"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-luxury-text font-serif mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-md border border-luxury-border bg-background text-luxury-text"
                      placeholder="business@yourcompany.com"
                    />
                  </div>
                  <div>
                    <label className="block text-luxury-text font-serif mb-2">
                      Website
                    </label>
                    <input
                      type="url"
                      className="w-full px-4 py-3 rounded-md border border-luxury-border bg-background text-luxury-text"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-luxury-text font-serif mb-2">
                    Brand Category
                  </label>
                  <select className="w-full px-4 py-3 rounded-md border border-luxury-border bg-background text-luxury-text">
                    <option>Select category</option>
                    <option>Fashion & Luxury</option>
                    <option>Beauty & Cosmetics</option>
                    <option>Technology</option>
                    <option>Sports & Fitness</option>
                    <option>Home & Lifestyle</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-luxury-text font-serif mb-2">
                    Tell us about your brand
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-luxury-border bg-background text-luxury-text"
                    placeholder="Describe your brand, products, and why you'd be a great fit for By The Brands..."
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1"
                  />
                  <label htmlFor="terms" className="text-luxury-text-light text-sm">
                    I agree to the Terms of Service and Privacy Policy
                  </label>
                </div>

                <Button className="w-full font-serif text-lg" variant="luxury">
                  Submit Application
                </Button>
              </CardContent>
            </Card>
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

export default JoinUs;