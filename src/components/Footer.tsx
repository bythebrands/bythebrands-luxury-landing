/**
 * Site Footer with Newsletter Signup
 */
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { trackNewsletterSignup, trackFormSubmission } from "@/lib/analytics";
import { Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    try {
      // Store in localStorage for development
      const existingEmails = JSON.parse(localStorage.getItem('newsletter_emails') || '[]');
      existingEmails.push({
        email,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('newsletter_emails', JSON.stringify(existingEmails));

      // In production, this would post to Mailchimp or your newsletter service
      // const response = await fetch(process.env.MAILCHIMP_FORM_ACTION, { ... });
      
      trackNewsletterSignup(email);
      trackFormSubmission('newsletter', true);
      
      setSubmitted(true);
      setEmail('');
      
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Newsletter signup failed:', error);
      trackFormSubmission('newsletter', false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-surface border-t border-luxury-border">
      {/* Newsletter Section */}
      <div className="border-b border-luxury-border py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-2xl font-serif font-bold text-luxury-text mb-2">
              Join the Brand Insider Club
            </h3>
            <p className="text-luxury-text-light mb-6">
              Get exclusive deals and early access to brand drops
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-background border-luxury-border"
                disabled={isSubmitting}
              />
              <Button 
                type="submit" 
                variant="luxury"
                disabled={isSubmitting || !email}
                className="font-serif"
              >
                {isSubmitting ? 'Joining...' : 'Join'}
              </Button>
            </form>
            
            {submitted && (
              <p className="text-sm text-green-600 mt-2">
                Thank you for joining! Check your email for confirmation.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-8">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Info */}
            <div className="md:col-span-2">
              <h4 className="text-2xl font-serif font-bold text-luxury-text mb-4">
                By The Brands
              </h4>
              <p className="text-luxury-text-light mb-4 max-w-md">
                Your trusted destination for authentic brand experiences. 
                Shop directly from official stores with guaranteed authenticity.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com/bythebrands" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-luxury-text-light hover:text-luxury-accent transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://twitter.com/bythebrands" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-luxury-text-light hover:text-luxury-accent transition-colors"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="https://youtube.com/bythebrands" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-luxury-text-light hover:text-luxury-accent transition-colors"
                  aria-label="Subscribe to our YouTube channel"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="font-serif font-medium text-luxury-text mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li><a href="/about" className="text-luxury-text-light hover:text-luxury-text transition-colors">About</a></li>
                <li><a href="/brands" className="text-luxury-text-light hover:text-luxury-text transition-colors">Brands</a></li>
                <li><a href="/deals" className="text-luxury-text-light hover:text-luxury-text transition-colors">Deals</a></li>
                <li><a href="/blog" className="text-luxury-text-light hover:text-luxury-text transition-colors">Blog</a></li>
                <li><a href="/contact" className="text-luxury-text-light hover:text-luxury-text transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h5 className="font-serif font-medium text-luxury-text mb-4">Legal</h5>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-luxury-text-light hover:text-luxury-text transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="text-luxury-text-light hover:text-luxury-text transition-colors">Terms of Service</a></li>
                <li><a href="/partner" className="text-luxury-text-light hover:text-luxury-text transition-colors">Partner Program</a></li>
                <li><a href="mailto:support@bythebrands.com" className="text-luxury-text-light hover:text-luxury-text transition-colors">Support</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-luxury-border mt-8 pt-6 text-center">
            <p className="text-luxury-text-light font-serif">
              © {currentYear} By The Brands. All rights reserved. 
              <span className="ml-2 text-xs">Authenticity guaranteed — official brand stores</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;