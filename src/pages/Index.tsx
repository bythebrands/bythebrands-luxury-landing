import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BrandDrops from "@/components/BrandDrops";
import FeaturedBrands from "@/components/FeaturedBrands";
import OfficialStores from "@/components/OfficialStores";
import TrustBuilders from "@/components/TrustBuilders";
import EmailCapture from "@/components/EmailCapture";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BrandDrops />
        <FeaturedBrands />
        <OfficialStores />
        <TrustBuilders />
        <EmailCapture />
      </main>
      <footer className="bg-luxury-surface border-t border-luxury-border py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-luxury-text mb-4">By The Brands</h3>
              <p className="text-sm text-luxury-text-light leading-relaxed">
                Curated by the brands, for the shoppers.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-luxury-text mb-3">Shop</h4>
              <ul className="space-y-2 text-sm text-luxury-text-light">
                <li><a href="/brands" className="hover:text-luxury-text transition-colors">All Brands</a></li>
                <li><a href="/categories" className="hover:text-luxury-text transition-colors">Categories</a></li>
                <li><a href="/deals" className="hover:text-luxury-text transition-colors">Today's Deals</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-luxury-text mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-luxury-text-light">
                <li><a href="/about" className="hover:text-luxury-text transition-colors">About</a></li>
                <li><a href="/contact" className="hover:text-luxury-text transition-colors">Contact</a></li>
                <li><a href="/blog" className="hover:text-luxury-text transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-luxury-text mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-luxury-text-light">
                <li><a href="/privacy" className="hover:text-luxury-text transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-luxury-text transition-colors">Terms</a></li>
                <li><a href="/security" className="hover:text-luxury-text transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-luxury-border text-center">
            <p className="text-sm text-luxury-text-light">
              © 2024 By The Brands. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
