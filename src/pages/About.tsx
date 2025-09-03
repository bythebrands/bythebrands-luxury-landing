import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { Shield, Truck, Star, Users, Award, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Authenticity Guaranteed",
      description: "Every product comes directly from official brand stores, ensuring 100% authenticity."
    },
    {
      icon: Truck, 
      title: "Direct from Brands",
      description: "Skip the middlemen. Shop directly from the world's most trusted brand retailers."
    },
    {
      icon: Star,
      title: "Exclusive Deals", 
      description: "Access special promotions and insider deals you won't find anywhere else."
    },
    {
      icon: Users,
      title: "Community Curated",
      description: "Our platform is built by shoppers, for shoppers who demand quality and trust."
    }
  ];

  const stats = [
    { number: "500+", label: "Trusted Brands" },
    { number: "2M+", label: "Happy Customers" },
    { number: "99.9%", label: "Authenticity Rate" }, 
    { number: "24/7", label: "Customer Support" }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "Former retail executive with 15+ years at luxury brands.",
      image: "gradient-from-blue-900-to-blue-700"
    },
    {
      name: "Michael Chen", 
      role: "Head of Brand Partnerships",
      bio: "Built relationships with 500+ official brand stores.",
      image: "gradient-from-green-900-to-green-700"
    },
    {
      name: "Emma Rodriguez",
      role: "Chief Product Officer", 
      bio: "Product visionary focused on seamless shopping experiences.",
      image: "gradient-from-pink-900-to-pink-700"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-light text-luxury-text mb-6 tracking-tight">
              Curated by the brands, <br />
              <span className="font-medium">for the shoppers.</span>
            </h1>
            <p className="text-xl text-luxury-text-light leading-relaxed max-w-3xl mx-auto">
              ByTheBrands was born from a simple belief: shopping should be trustworthy, 
              authentic, and direct. We connect you with official brand stores, eliminating 
              counterfeits and ensuring every purchase is genuine.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-luxury-text-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Mission Statement */}
          <div className="bg-luxury-surface rounded-lg p-12 mb-20 text-center">
            <div className="flex justify-center mb-6">
              <Heart className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-3xl font-light text-luxury-text mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-luxury-text-light max-w-3xl mx-auto leading-relaxed">
              To democratize access to authentic brand shopping by creating a trusted marketplace 
              where customers can confidently discover and purchase from official brand stores, 
              knowing every product is genuine and every deal is legitimate.
            </p>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-4xl font-light text-luxury-text text-center mb-12">
              Why Choose <span className="font-medium">ByTheBrands</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-primary/10 rounded-lg">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-medium text-luxury-text mb-3">
                      {value.title}
                    </h3>
                    <p className="text-luxury-text-light">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Trust Badges */}
          <div className="bg-white rounded-lg p-12 shadow-luxury border border-luxury-border mb-20">
            <h2 className="text-3xl font-light text-luxury-text text-center mb-8">
              Trusted & Verified
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-luxury-text" />
                <span className="font-semibold text-luxury-text">BBB Accredited</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-luxury-text" />
                <span className="font-semibold text-luxury-text">SSL Secured</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-6 h-6 text-luxury-text" />
                <span className="font-semibold text-luxury-text">5-Star Rated</span>
              </div>
              <div className="h-6 flex items-center justify-center text-lg font-semibold text-luxury-text">
                Visa
              </div>
              <div className="h-6 flex items-center justify-center text-lg font-semibold text-luxury-text">
                Mastercard
              </div>
              <div className="h-6 flex items-center justify-center text-lg font-semibold text-luxury-text">
                PayPal
              </div>
            </div>
          </div>

          {/* Team */}
          <div className="mb-20">
            <h2 className="text-4xl font-light text-luxury-text text-center mb-12">
              Meet Our <span className="font-medium">Team</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <div className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-br ${member.image} flex items-center justify-center mb-4`}>
                    <Users className="w-12 h-12 text-white opacity-80" />
                  </div>
                  <h3 className="text-xl font-medium text-luxury-text mb-1">
                    {member.name}
                  </h3>
                  <div className="text-primary font-medium mb-3">
                    {member.role}
                  </div>
                  <p className="text-luxury-text-light">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-12">
            <h3 className="text-3xl font-medium text-luxury-text mb-4">
              Ready to Shop with Confidence?
            </h3>
            <p className="text-luxury-text-light mb-8 max-w-2xl mx-auto">
              Join millions of shoppers who trust ByTheBrands for authentic, 
              verified purchases from the world's most beloved brands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="luxury-accent" size="lg" className="px-8">
                Start Shopping
              </Button>
              <Button variant="luxury-outline" size="lg" className="px-8">
                View All Brands
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;