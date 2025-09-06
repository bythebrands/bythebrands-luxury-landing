/**
 * Partner Program Page (formerly Join Us)
 */
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import { trackFormSubmission, trackEvent } from "@/lib/analytics";
import { Building2, Users, TrendingUp, Award, CheckCircle, Mail, Phone } from "lucide-react";

const Partner = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    brandCategory: '',
    companySize: '',
    description: '',
    partnershipType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Store in localStorage for development
      const existingPartners = JSON.parse(localStorage.getItem('partner_applications') || '[]');
      existingPartners.push({
        ...formData,
        timestamp: new Date().toISOString(),
        id: Date.now()
      });
      localStorage.setItem('partner_applications', JSON.stringify(existingPartners));

      // In production, this would submit to Netlify Forms or webhook
      // const response = await fetch(process.env.CONTACT_WEBHOOK, { ... });

      trackFormSubmission('partner_application', true);
      trackEvent('partner_application_submitted', {
        company: formData.companyName,
        category: formData.brandCategory,
        partnership_type: formData.partnershipType
      });

      setSubmitted(true);
      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        website: '',
        brandCategory: '',
        companySize: '',
        description: '',
        partnershipType: ''
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Partner application failed:', error);
      trackFormSubmission('partner_application', false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Sales",
      description: "Access our engaged audience of brand enthusiasts and luxury shoppers."
    },
    {
      icon: Users,
      title: "Brand Exposure",
      description: "Feature your brand across our curated marketplace and marketing channels."
    },
    {
      icon: Award,
      title: "Premium Positioning",
      description: "Join an exclusive network of authenticated, premium brands."
    },
    {
      icon: Building2,
      title: "Marketing Support",
      description: "Benefit from our marketing expertise and promotional campaigns."
    }
  ];

  const partnershipTypes = [
    "Brand Partnership",
    "Affiliate Program",
    "Retail Integration", 
    "Marketing Collaboration",
    "Exclusive Launch Partner"
  ];

  const companyCategories = [
    "Fashion & Apparel",
    "Luxury Goods",
    "Electronics & Tech",
    "Beauty & Cosmetics",
    "Sports & Fitness",
    "Home & Lifestyle",
    "Automotive",
    "Other"
  ];

  const companySizes = [
    "Startup (1-10 employees)",
    "Small Business (11-50 employees)",
    "Medium Business (51-200 employees)",
    "Large Business (201-1000 employees)",
    "Enterprise (1000+ employees)"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Partner Program - Join ByTheBrands Exclusive Network"
        description="Partner with ByTheBrands to reach luxury shoppers and brand enthusiasts. Join our exclusive network of authenticated premium brands."
        keywords="brand partnership, affiliate program, luxury brands, retail partnership, brand collaboration"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-luxury-background py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 font-serif">
              Partner Program
            </Badge>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-luxury-text mb-6">
              Join Our Exclusive Brand Network
            </h1>
            <p className="text-xl text-luxury-text-light mb-8 max-w-2xl mx-auto">
              Partner with ByTheBrands to reach engaged luxury shoppers and grow your brand 
              through our curated marketplace platform.
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm text-luxury-text-light">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Exclusive Brand Network
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Marketing Support
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Premium Positioning
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-text mb-4">
              Partner Benefits
            </h2>
            <p className="text-lg text-luxury-text-light">
              Join hundreds of premium brands already benefiting from our platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-luxury-border hover:shadow-luxury transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-luxury-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-luxury-accent" />
                  </div>
                  <h3 className="font-serif font-semibold text-luxury-text mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-luxury-text-light">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-luxury-surface">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-luxury-text mb-4">
                Apply for Partnership
              </h2>
              <p className="text-lg text-luxury-text-light">
                Tell us about your brand and how we can work together
              </p>
            </div>

            <Card className="border-luxury-border">
              <CardHeader>
                <CardTitle className="font-serif text-luxury-text">
                  Partnership Application
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form 
                  onSubmit={handleSubmit}
                  name="partner"
                  data-netlify="true"
                  className="space-y-6"
                >
                  {/* Hidden field for Netlify Forms */}
                  <input type="hidden" name="form-name" value="partner" />
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name *</Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                        required
                        className="bg-background border-luxury-border"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="contactName">Contact Name *</Label>
                      <Input
                        id="contactName"
                        name="contactName"
                        value={formData.contactName}
                        onChange={(e) => handleInputChange('contactName', e.target.value)}
                        required
                        className="bg-background border-luxury-border"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="bg-background border-luxury-border"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="bg-background border-luxury-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Website URL</Label>
                    <Input
                      id="website"
                      name="website"
                      type="url"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                      placeholder="https://your-brand.com"
                      className="bg-background border-luxury-border"
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="brandCategory">Brand Category *</Label>
                      <Select value={formData.brandCategory} onValueChange={(value) => handleInputChange('brandCategory', value)}>
                        <SelectTrigger className="bg-background border-luxury-border">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {companyCategories.map(category => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="companySize">Company Size</Label>
                      <Select value={formData.companySize} onValueChange={(value) => handleInputChange('companySize', value)}>
                        <SelectTrigger className="bg-background border-luxury-border">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          {companySizes.map(size => (
                            <SelectItem key={size} value={size}>
                              {size}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="partnershipType">Partnership Type *</Label>
                      <Select value={formData.partnershipType} onValueChange={(value) => handleInputChange('partnershipType', value)}>
                        <SelectTrigger className="bg-background border-luxury-border">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          {partnershipTypes.map(type => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Tell Us About Your Brand *</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      placeholder="Describe your brand, products, target audience, and partnership goals..."
                      required
                      rows={4}
                      className="bg-background border-luxury-border"
                    />
                  </div>

                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      variant="luxury"
                      size="lg"
                      disabled={isSubmitting || !formData.companyName || !formData.email}
                      className="font-serif px-8"
                    >
                      {isSubmitting ? 'Submitting Application...' : 'Submit Partnership Application'}
                    </Button>
                  </div>

                  {submitted && (
                    <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-700 font-medium">
                        Thank you for your partnership application! We'll review your submission and get back to you within 2-3 business days.
                      </p>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-luxury-text mb-4">
              Questions About Partnership?
            </h2>
            <p className="text-lg text-luxury-text-light mb-8">
              Our partnership team is here to help you get started
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-luxury-border">
                <CardContent className="pt-6 text-center">
                  <Mail className="w-8 h-8 text-luxury-accent mx-auto mb-4" />
                  <h3 className="font-serif font-semibold text-luxury-text mb-2">
                    Email Us
                  </h3>
                  <p className="text-luxury-text-light mb-4">
                    Get in touch with our partnership team
                  </p>
                  <a 
                    href="mailto:partnerships@bythebrands.com"
                    className="text-luxury-accent hover:underline font-medium"
                  >
                    partnerships@bythebrands.com
                  </a>
                </CardContent>
              </Card>
              
              <Card className="border-luxury-border">
                <CardContent className="pt-6 text-center">
                  <Phone className="w-8 h-8 text-luxury-accent mx-auto mb-4" />
                  <h3 className="font-serif font-semibold text-luxury-text mb-2">
                    Schedule a Call
                  </h3>
                  <p className="text-luxury-text-light mb-4">
                    Discuss partnership opportunities directly
                  </p>
                  <a 
                    href="tel:+1-555-BRANDS"
                    className="text-luxury-accent hover:underline font-medium"
                  >
                    +1 (555) BRANDS-1
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partner;