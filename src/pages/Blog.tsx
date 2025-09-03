import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import { Search, Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "The Ultimate Guide to Authentic Brand Shopping in 2024",
    excerpt: "Discover how to spot authentic products, find the best deals, and shop directly from official brand stores with confidence.",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    category: "Shopping Guide",
    readTime: "8 min read",
    image: "gradient-from-blue-900-to-blue-700"
  };

  const blogPosts = [
    {
      title: "Best Nike Deals This Week",
      excerpt: "From Air Max to Jordan, here are the top Nike deals you don't want to miss.",
      author: "Mike Chen", 
      date: "March 12, 2024",
      category: "Deals",
      readTime: "5 min read",
      image: "gradient-from-slate-900-to-slate-700"
    },
    {
      title: "Top 5 Luxury Brands on Sale Now",
      excerpt: "Discover which premium luxury brands are offering rare discounts this month.",
      author: "Emma Rodriguez",
      date: "March 10, 2024", 
      category: "Luxury",
      readTime: "6 min read",
      image: "gradient-from-yellow-900-to-yellow-700"
    },
    {
      title: "How to Spot Authentic Brand Stores",
      excerpt: "Learn the key indicators that distinguish official brand retailers from counterfeit sellers.",
      author: "David Kim",
      date: "March 8, 2024",
      category: "Tips",
      readTime: "7 min read", 
      image: "gradient-from-green-900-to-green-700"
    },
    {
      title: "Sephora's Beauty Insider Secrets", 
      excerpt: "Maximize your beauty shopping with insider tips from Sephora's loyalty program.",
      author: "Lisa Park",
      date: "March 5, 2024",
      category: "Beauty",
      readTime: "4 min read",
      image: "gradient-from-pink-900-to-pink-700"
    },
    {
      title: "Apple's Latest Product Launch: What to Expect",
      excerpt: "Everything you need to know about Apple's newest releases and where to buy them.",
      author: "Tom Wilson", 
      date: "March 3, 2024",
      category: "Tech",
      readTime: "6 min read",
      image: "gradient-from-gray-900-to-gray-700"
    },
    {
      title: "Summer Fashion Trends from Top Brands",
      excerpt: "Discover this season's must-have pieces from Nike, Adidas, and other fashion leaders.",
      author: "Sophie Brown",
      date: "March 1, 2024",
      category: "Fashion", 
      readTime: "5 min read",
      image: "gradient-from-red-900-to-red-700"
    }
  ];

  const categories = ["All", "Deals", "Tips", "Beauty", "Tech", "Fashion", "Luxury"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Page Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-luxury-text mb-4 tracking-tight">
              Brand Shopping <span className="font-medium">Insights</span>
            </h1>
            <p className="text-lg text-luxury-text-light mb-8">
              Expert guides, deal alerts, and insider tips for authentic brand shopping
            </p>
            
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-luxury-text-light w-4 h-4" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10 bg-luxury-surface border-luxury-border"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "luxury" : "luxury-outline"}
                size="sm"
                className="px-6"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Article */}
          <div className="mb-16">
            <div className="bg-white rounded-lg overflow-hidden shadow-luxury border border-luxury-border">
              <div className={`h-64 bg-gradient-to-br ${featuredPost.image} flex items-center justify-center`}>
                <span className="text-white text-xl font-medium opacity-80">Featured Article</span>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-luxury-text-light">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-luxury-text-light">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </div>
                  <span className="text-sm text-luxury-text-light">
                    {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="text-3xl font-medium text-luxury-text mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-luxury-text-light mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <Button variant="luxury-accent">
                  Read Article
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={index}
                className="group bg-white rounded-lg overflow-hidden shadow-luxury hover:shadow-premium transition-all duration-300 border border-luxury-border"
              >
                <div className={`h-48 bg-gradient-to-br ${post.image} flex items-center justify-center`}>
                  <span className="text-white text-lg font-medium opacity-80">
                    {post.category}
                  </span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-1 bg-luxury-surface text-xs text-luxury-text-light rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-luxury-text-light">
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-medium text-luxury-text mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-luxury-text-light text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-luxury-text-light">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <span className="text-xs text-luxury-text-light">
                      {post.date}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="text-center mt-16 bg-luxury-surface rounded-lg p-12">
            <h3 className="text-2xl font-medium text-luxury-text mb-4">
              Stay Updated with Brand News
            </h3>
            <p className="text-luxury-text-light mb-6 max-w-2xl mx-auto">
              Get the latest brand deals, shopping guides, and insider tips delivered to your inbox weekly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="flex-1 bg-background border-luxury-border"
              />
              <Button variant="luxury">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;