import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full border-b border-luxury-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-xl font-semibold text-luxury-text tracking-tight">
              By The Brands
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/brands" className="text-luxury-text-light hover:text-luxury-text transition-colors">
              Brands
            </a>
            <a href="/categories" className="text-luxury-text-light hover:text-luxury-text transition-colors">
              Categories
            </a>
            <a href="/deals" className="text-luxury-text-light hover:text-luxury-text transition-colors">
              Deals
            </a>
            <a href="/blog" className="text-luxury-text-light hover:text-luxury-text transition-colors">
              Blog
            </a>
            <a href="/contact" className="text-luxury-text-light hover:text-luxury-text transition-colors">
              Contact
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