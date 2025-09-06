/**
 * Individual Blog Post Page
 */
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import { trackEvent } from "@/lib/analytics";
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react";

// Sample blog post data - in production this would come from CMS
const getBlogPost = (slug: string) => {
  const posts = [
    {
      slug: 'best-nike-deals-this-week',
      title: 'Best Nike Deals This Week: Save Up to 40% on Air Max Collection',
      excerpt: 'Discover the top Nike deals available this week, including exclusive discounts on Air Max, Jordan, and more.',
      content: `
        <h2>This Week's Top Nike Deals</h2>
        <p>Nike is offering some incredible deals this week that you won't want to miss. From the iconic Air Max collection to the latest Jordan releases, there are savings across all categories.</p>
        
        <h3>Air Max Collection - Up to 40% Off</h3>
        <p>The entire Air Max collection is on sale with discounts reaching 40%. This includes:</p>
        <ul>
          <li>Air Max 90 Essential - Now $90 (was $150)</li>
          <li>Air Max 270 - Now $96 (was $160)</li>
          <li>Air Max Plus TN - Now $108 (was $180)</li>
        </ul>
        
        <h3>Jordan Retro Series</h3>
        <p>Select Jordan Retro models are available with significant discounts. The Jordan 1 Retro High is particularly popular this week.</p>
        
        <h3>How to Get These Deals</h3>
        <p>These deals are available directly through Nike's official store and authorized retailers. Make sure to check authenticity when shopping to ensure you're getting genuine Nike products.</p>
        
        <p><strong>Pro Tip:</strong> Sign up for Nike's newsletter to get early access to future sales and exclusive member-only deals.</p>
      `,
      author: 'Sarah Johnson',
      publishedAt: '2024-01-15',
      readTime: 5,
      category: 'Deals',
      tags: ['Nike', 'Sneakers', 'Deals', 'Air Max'],
      image: '/images/blog/nike-deals-hero.jpg',
      featured: true
    },
    {
      slug: 'luxury-brands-authentication-guide',
      title: 'How to Spot Authentic Luxury Brands: Complete Authentication Guide',
      excerpt: 'Learn how to authenticate luxury brands like Gucci, Louis Vuitton, and Chanel with our comprehensive guide.',
      content: `
        <h2>The Importance of Authentication</h2>
        <p>With the rise of counterfeit luxury goods, knowing how to authenticate your purchases has never been more important. This guide will help you spot the differences between authentic and fake luxury items.</p>
        
        <h3>Gucci Authentication Tips</h3>
        <p>When buying Gucci products, pay attention to:</p>
        <ul>
          <li>Serial numbers and authenticity cards</li>
          <li>Quality of materials and craftsmanship</li>
          <li>Logo placement and font consistency</li>
          <li>Hardware quality and weight</li>
        </ul>
        
        <h3>Louis Vuitton Red Flags</h3>
        <p>Louis Vuitton counterfeits often have these telltale signs:</p>
        <ul>
          <li>Poor quality canvas or leather</li>
          <li>Incorrect date codes</li>
          <li>Misaligned monogram patterns</li>
          <li>Cheap hardware that tarnishes quickly</li>
        </ul>
        
        <h3>Where to Buy Authentic Luxury Goods</h3>
        <p>Always purchase from authorized retailers, official brand stores, or verified resellers with authentication guarantees.</p>
      `,
      author: 'Michael Chen',
      publishedAt: '2024-01-12',
      readTime: 8,
      category: 'Guide',
      tags: ['Luxury', 'Authentication', 'Gucci', 'Louis Vuitton'],
      image: '/images/blog/luxury-authentication.jpg',
      featured: false
    }
  ];
  
  return posts.find(post => post.slug === slug);
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-luxury-text mb-4">
            Post Not Found
          </h1>
          <p className="text-luxury-text-light mb-6">
            The blog post you're looking for doesn't exist.
          </p>
          <Link to="/blog">
            <Button variant="luxury" className="font-serif">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      trackEvent('share_post', { post_slug: post.slug, method: 'clipboard' });
    }
  };

  // Related posts (simplified - would be more sophisticated in production)
  const relatedPosts = [
    {
      slug: 'top-5-luxury-brands-2024',
      title: 'Top 5 Luxury Brands to Watch in 2024',
      excerpt: 'Discover the luxury brands that are setting trends this year.',
      image: '/images/blog/luxury-trends.jpg',
      category: 'Trends'
    },
    {
      slug: 'sustainable-fashion-brands',
      title: 'Best Sustainable Fashion Brands',
      excerpt: 'Eco-friendly fashion that doesn\'t compromise on style.',
      image: '/images/blog/sustainable-fashion.jpg',
      category: 'Sustainability'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${post.title} - ByTheBrands Blog`}
        description={post.excerpt}
        ogImage={post.image}
        canonical={`https://bythebrands.com/blog/${post.slug}`}
        keywords={post.tags.join(', ')}
      />

      {/* Header */}
      <section className="py-8 border-b border-luxury-border">
        <div className="container mx-auto px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-luxury-text-light hover:text-luxury-text transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Article */}
      <article className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Article Header */}
            <header className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="outline" className="font-serif">
                  {post.category}
                </Badge>
                {post.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-luxury-text mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-luxury-text-light">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime} min read</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleShare}
                  className="text-luxury-text-light hover:text-luxury-text"
                >
                  <Share2 className="w-4 h-4 mr-1" />
                  Share
                </Button>
              </div>
            </header>

            {/* Featured Image */}
            <div className="aspect-video bg-gradient-to-br from-luxury-surface to-luxury-background rounded-lg mb-8 flex items-center justify-center">
              <span className="text-luxury-text-light text-lg">Featured Image</span>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none text-luxury-text prose-headings:font-serif prose-headings:text-luxury-text prose-p:text-luxury-text prose-li:text-luxury-text prose-strong:text-luxury-text"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Article Footer */}
            <footer className="mt-12 pt-8 border-t border-luxury-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-luxury-text-light">Share this article:</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleShare}
                    className="font-serif"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </footer>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-luxury-surface">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-luxury-text mb-8">
              Related Articles
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.slug} className="group hover:shadow-luxury transition-all duration-300 border-luxury-border">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-gradient-to-br from-luxury-surface to-luxury-background rounded-t-lg flex items-center justify-center">
                      <span className="text-luxury-text-light">Related Post Image</span>
                    </div>
                    <div className="p-6">
                      <Badge variant="outline" className="mb-3">
                        {relatedPost.category}
                      </Badge>
                      <h3 className="text-xl font-serif font-semibold text-luxury-text mb-2 group-hover:text-luxury-accent transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-luxury-text-light mb-4">
                        {relatedPost.excerpt}
                      </p>
                      <Link to={`/blog/${relatedPost.slug}`}>
                        <Button variant="luxury-outline" size="sm" className="font-serif">
                          Read Article
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;