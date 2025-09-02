const FeaturedBrands = () => {
  const categories = [
    {
      name: "Fashion",
      description: "Luxury apparel & accessories from premier fashion houses",
      image: "gradient-from-slate-50-to-slate-100"
    },
    {
      name: "Beauty",
      description: "Premium skincare, makeup & fragrance collections",
      image: "gradient-from-rose-50-to-rose-100"
    },
    {
      name: "Technology",
      description: "Cutting-edge devices & innovative tech solutions",
      image: "gradient-from-blue-50-to-blue-100"
    },
    {
      name: "Lifestyle",
      description: "Home, wellness & curated everyday essentials",
      image: "gradient-from-amber-50-to-amber-100"
    }
  ];

  return (
    <section className="py-24 bg-luxury-surface">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-luxury-text mb-6 tracking-tight">
            Discover by <span className="font-medium">category</span>
          </h2>
          <p className="text-xl text-luxury-text-light leading-relaxed">
            Explore carefully curated collections from the world's most respected brands
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div 
              key={category.name}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg mb-6 aspect-square bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-premium transition-all duration-500">
                <div className="absolute inset-0 bg-luxury-border opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-light text-luxury-text opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                    {category.name[0]}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-medium text-luxury-text mb-2 group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-luxury-text-light text-sm leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-luxury-text-light mb-4">
            Over 500+ premium brands available
          </p>
          <a 
            href="#" 
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View all brands 
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrands;