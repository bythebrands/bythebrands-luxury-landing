import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full border-b border-luxury-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-serif text-luxury-text tracking-tight font-bold">
              By The Brands
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-luxury-text-light hover:text-luxury-text transition-colors font-serif">
              Home
            </a>
            <a href="/shop" className="text-luxury-text-light hover:text-luxury-text transition-colors font-serif">
              Shop
            </a>
            <a href="/brands" className="text-luxury-text-light hover:text-luxury-text transition-colors font-serif">
              Brands
            </a>
            <a href="/about" className="text-luxury-text-light hover:text-luxury-text transition-colors font-serif">
              About
            </a>
            <a href="/contact" className="text-luxury-text-light hover:text-luxury-text transition-colors font-serif">
              Contact
            </a>
            <a href="/join-us" className="text-luxury-text-light hover:text-luxury-text transition-colors font-serif">
              Join Us
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-luxury-text-light hover:text-luxury-text">
              Sign In
            </Button>
            <Button variant="luxury" size="sm">
              Join
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;