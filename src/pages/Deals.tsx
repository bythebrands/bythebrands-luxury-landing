/**
 * Deals Page - Time-Limited Brand Deals
 */
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import Countdown from "@/components/Countdown";
import { createProductLink, trackAffiliateClick } from "@/lib/affiliate";
import { Clock, TrendingUp } from "lucide-react";

const Deals = () => {
  const deals = [
    {
      id: 'nike-flash-sale',
      productName: 'Air Max Collection',
      brandName: 'Nike',
      originalPrice: 150,
      dealPrice: 90,
      discount: 40,
      expiresAt: new Date(Date.now() + 23 * 60 * 60 * 1000).toISOString(),
      category: 'Fashion'
    },
    {
      id: 'apple-macbook',
      productName: 'MacBook Air M2',
      brandName: 'Apple',
      originalPrice: 1199,
      dealPrice: 999,
      discount: 17,
      expiresAt: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
      category: 'Electronics'
    }
  ];

  const handleDealClick = (deal: any) => {
    trackAffiliateClick({
      brandName: deal.brandName,
      productName: deal.productName,
      category: deal.category
    });
    
    const affiliateUrl = createProductLink(deal.brandName, deal.productName, deal.category);
    window.open(affiliateUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background py-16">
      <SEO
        title="Exclusive Brand Deals & Limited-Time Offers - ByTheBrands"
        description="Discover time-limited deals from top brands. Save up to 50% on Nike, Apple, and more."
      />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="w-6 h-6 text-destructive" />
            <Badge variant="destructive" className="font-serif">Limited Time Offers</Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-luxury-text mb-4">
            Today's Top Deals
          </h1>
          <p className="text-xl text-luxury-text-light">
            Exclusive time-limited offers from your favorite brands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <Card key={deal.id} className="group cursor-pointer hover:shadow-luxury transition-all duration-300 border-luxury-border">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-luxury-surface to-luxury-background flex items-center justify-center">
                    <span className="text-2xl font-bold text-luxury-text-light">
                      {deal.brandName}
                    </span>
                  </div>
                  <Badge variant="destructive" className="absolute top-2 left-2 font-bold">
                    -{deal.discount}%
                  </Badge>
                </div>
                
                <div className="p-4">
                  <span className="text-xs text-luxury-accent font-medium uppercase tracking-wide">
                    {deal.brandName}
                  </span>
                  <h3 className="text-sm font-serif font-semibold text-luxury-text mt-1 mb-2">
                    {deal.productName}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      <span className="text-lg font-bold text-luxury-text">
                        ${deal.dealPrice}
                      </span>
                      <span className="text-xs text-luxury-text-light line-through">
                        ${deal.originalPrice}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <Countdown 
                      targetDate={deal.expiresAt}
                      className="text-xs justify-center"
                    />
                  </div>
                  
                  <Button 
                    variant="luxury"
                    size="sm"
                    onClick={() => handleDealClick(deal)}
                    className="w-full font-serif"
                  >
                    Shop Deal
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deals;