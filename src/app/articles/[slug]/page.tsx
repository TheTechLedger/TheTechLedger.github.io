import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ArticleCard, { Article } from '@/components/ArticleCard';

// Mock data - this will be replaced with API calls
const mockArticles: Article[] = [
  {
    id: 1,
    slug: "apple-ai-integration-ios-18",
    title: "Apple Announces Revolutionary AI Integration in iOS 18",
    excerpt: "The latest iOS update brings groundbreaking artificial intelligence features that will transform how users interact with their devices.",
    content: `
      <p>Apple has officially announced iOS 18, the most significant update to its mobile operating system in years. The new version introduces revolutionary artificial intelligence features that promise to transform how users interact with their iPhones and iPads.</p>
      
      <h2>Key AI Features</h2>
      <p>The centerpiece of iOS 18 is the new AI Assistant, which goes far beyond the current Siri capabilities. This new system can:</p>
      <ul>
        <li>Understand context across multiple apps and conversations</li>
        <li>Generate personalized content based on user preferences</li>
        <li>Automate complex tasks with natural language commands</li>
        <li>Provide real-time translation in over 40 languages</li>
      </ul>
      
      <h2>Enhanced Privacy</h2>
      <p>Apple has emphasized that all AI processing happens on-device, ensuring user privacy is maintained. The company has also introduced new privacy controls that give users granular control over how their data is used for AI features.</p>
      
      <h2>Developer Tools</h2>
      <p>The new iOS 18 SDK includes powerful AI development tools that allow third-party developers to integrate AI capabilities into their apps. This opens up a world of possibilities for innovative applications.</p>
      
      <h2>Performance Improvements</h2>
      <p>Beyond AI features, iOS 18 brings significant performance improvements, with faster app launches, improved battery life, and enhanced security features. The update is optimized for all supported devices, from the iPhone 11 to the latest iPhone 15 Pro Max.</p>
      
      <h2>Availability</h2>
      <p>iOS 18 will be available as a public beta in July 2025, with the final release scheduled for September. The update will be free for all compatible devices.</p>
    `,
    category: "Mobile Technology",
    author: "Tech Team",
    publishedAt: "2025-01-15",
    readTime: "5 min read",
    featured: true,
    tags: ["AI", "iOS", "Apple", "Mobile"]
  },
  {
    id: 2,
    slug: "openai-gpt-5-release",
    title: "OpenAI Releases GPT-5: A New Era of AI Capabilities",
    excerpt: "The newest iteration of GPT promises unprecedented reasoning abilities and multimodal understanding.",
    content: "Full article content here...",
    category: "Artificial Intelligence",
    author: "AI Reporter",
    publishedAt: "2025-01-14",
    readTime: "7 min read",
    featured: true,
    tags: ["AI", "OpenAI", "GPT-5", "Machine Learning"]
  },
  {
    id: 3,
    slug: "tesla-autonomous-driving-breakthrough",
    title: "Tesla's Autonomous Driving Breakthrough: Level 4 Autonomy Achieved",
    excerpt: "Tesla announces major milestone in self-driving technology with new hardware and software updates.",
    content: "Full article content here...",
    category: "Automotive Tech",
    author: "Auto Expert",
    publishedAt: "2025-01-13",
    readTime: "6 min read",
    featured: true,
    tags: ["Tesla", "Autonomous", "Self-driving", "Automotive"]
  }
];

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = mockArticles.find(a => a.slug === slug);
  
  if (!article) {
    return {
      title: 'Article Not Found - The Tech Ledger',
      description: 'The requested article could not be found.',
    };
  }

  return {
    title: `${article.title} - The Tech Ledger`,
    description: article.excerpt,
    keywords: article.tags?.join(', '),
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author],
      tags: article.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = mockArticles.find(a => a.slug === slug);
  
  if (!article) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Get related articles (same category, excluding current article)
  const relatedArticles = mockArticles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  const shareUrl = `https://thetechledger.github.io/articles/${article.slug}`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Article Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <ol className="flex items-center space-x-2 text-sm text-gray-500">
                <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
                <li>/</li>
                <li><Link href="/articles" className="hover:text-blue-600">Articles</Link></li>
                <li>/</li>
                <li><Link href={`/category/${article.category.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-blue-600">{article.category}</Link></li>
                <li>/</li>
                <li className="text-gray-900">{article.title}</li>
              </ol>
            </nav>

            {/* Article Meta */}
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                  {article.category}
                </span>
                {article.featured && (
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                )}
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {article.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {article.excerpt}
              </p>
              
              {/* Author and Date */}
              <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {article.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">By {article.author}</p>
                    <p className="text-sm text-gray-500">{formatDate(article.publishedAt)} • {article.readTime}</p>
                  </div>
                </div>
                
                {/* Social Share */}
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-500">Share:</span>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <article className="bg-white rounded-lg shadow-lg p-8">
                  {/* Featured Image */}
                  <div className="h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg mb-8 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">Article Featured Image</span>
                  </div>
                  
                  {/* Article Content */}
                  <div 
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
                  
                  {/* Tags */}
                  {article.tags && article.tags.length > 0 && (
                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag) => (
                          <Link
                            key={tag}
                            href={`/articles?tags=${tag}`}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-800 transition-colors"
                          >
                            #{tag}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Author Info */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">About the Author</h3>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">
                        {article.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{article.author}</p>
                      <p className="text-sm text-gray-500">Tech Journalist</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {article.author} is a technology journalist with expertise in {article.category.toLowerCase()}. 
                    They have been covering the tech industry for over 5 years.
                  </p>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-6 text-white">
                  <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
                  <p className="text-blue-100 text-sm mb-4">
                    Get the latest tech news delivered to your inbox.
                  </p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 border border-blue-400 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:border-transparent"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full bg-white text-blue-600 py-2 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
} 