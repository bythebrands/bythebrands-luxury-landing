const FeaturedBrands = () => {
  const categories = [
    {
      name: "Sneakers & Streetwear",
      description: "Nike, Adidas, Jordan & exclusive drops",
      icon: "👟",
      brands: "500+ brands",
      bgGradient: "from-slate-50 to-slate-100"
    },
    {
      name: "Beauty & Skincare", 
      description: "Sephora, Ulta, premium beauty brands",
      icon: "💄",
      brands: "300+ brands",
      bgGradient: "from-pink-50 to-pink-100"
    },
    {
      name: "Tech & Gadgets",
      description: "Apple, Samsung, latest innovations",
      icon: "📱",
      brands: "150+ brands", 
      bgGradient: "from-blue-50 to-blue-100"
    },
    {
      name: "Luxury & Fashion",
      description: "Gucci, Chanel, designer collections",
      icon: "👔",
      brands: "200+ brands",
      bgGradient: "from-amber-50 to-amber-100"
    }
  ];

  return (
    <section className="py-24 bg-luxury-surface">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-luxury-text mb-6 tracking-tight">
            Shop by <span className="font-medium">category</span>
          </h2>
          <p className="text-xl text-luxury-text-light leading-relaxed">
            Curated collections from official brand stores, organized for easy shopping
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div 
              key={category.name}
              className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-luxury hover:shadow-premium transition-all duration-300 border border-luxury-border"
            >
              {/* Category Visual */}
              <div className={`relative h-40 bg-gradient-to-br ${category.bgGradient} flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                <div className="text-4xl mb-2">{category.icon}</div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-luxury-text">
                  {category.brands}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-luxury-text mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-luxury-text-light text-sm leading-relaxed mb-4">
                  {category.description}
                </p>
                <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                  <span>Shop now</span>
                  <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
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