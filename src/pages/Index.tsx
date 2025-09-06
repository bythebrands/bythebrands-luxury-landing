import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BrandDrops from "@/components/BrandDrops";
import FeaturedBrands from "@/components/FeaturedBrands";
import OfficialStores from "@/components/OfficialStores";
import TrustBuilders from "@/components/TrustBuilders";
import EmailCapture from "@/components/EmailCapture";
import { Button } from "@/components/ui/button";

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
      <footer className="bg-luxury-background py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-serif font-bold text-luxury-text mb-4">By The Brands</h3>
              <p className="text-luxury-text-light">
                Curated luxury brands and exclusive deals, all in one place.
              </p>
              {/* Newsletter Signup */}
              <div className="mt-6">
                <h4 className="font-serif font-semibold text-luxury-text mb-3">Newsletter</h4>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 rounded-md border border-luxury-border bg-background text-luxury-text text-sm"
                  />
                  <Button size="sm" variant="luxury" className="font-serif">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-serif font-semibold text-luxury-text mb-4">Shop</h4>
              <ul className="space-y-2">
                <li><a href="/shop" className="text-luxury-text-light hover:text-luxury-text transition-colors">Shop</a></li>
                <li><a href="/brands" className="text-luxury-text-light hover:text-luxury-text transition-colors">Brands</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-semibold text-luxury-text mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="text-luxury-text-light hover:text-luxury-text transition-colors">About</a></li>
                <li><a href="/contact" className="text-luxury-text-light hover:text-luxury-text transition-colors">Contact</a></li>
                <li><a href="/join-us" className="text-luxury-text-light hover:text-luxury-text transition-colors">Join Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-semibold text-luxury-text mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-luxury-text-light hover:text-luxury-text transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="text-luxury-text-light hover:text-luxury-text transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-luxury-border pt-8 text-center">
            <p className="text-luxury-text-light font-serif">
              © 2024 By The Brands. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
