import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Tech Ledger - Latest Technology News',
  description: 'Stay updated with the latest technology news, trends, and insights from around the world.',
};

// Mock data for demonstration - this will be replaced with real API data
const featuredArticles = [
  {
    id: 1,
    title: "Apple Announces Revolutionary AI Integration in iOS 18",
    excerpt: "The latest iOS update brings groundbreaking artificial intelligence features that will transform how users interact with their devices.",
    category: "Mobile Technology",
    author: "Tech Team",
    publishedAt: "2025-01-15",
    readTime: "5 min read",
    image: "/api/placeholder/600/400"
  },
  {
    id: 2,
    title: "OpenAI Releases GPT-5: A New Era of AI Capabilities",
    excerpt: "The newest iteration of GPT promises unprecedented reasoning abilities and multimodal understanding.",
    category: "Artificial Intelligence",
    author: "AI Reporter",
    publishedAt: "2025-01-14",
    readTime: "7 min read",
    image: "/api/placeholder/600/400"
  },
  {
    id: 3,
    title: "Tesla's Autonomous Driving Breakthrough: Level 4 Autonomy Achieved",
    excerpt: "Tesla announces major milestone in self-driving technology with new hardware and software updates.",
    category: "Automotive Tech",
    author: "Auto Expert",
    publishedAt: "2025-01-13",
    readTime: "6 min read",
    image: "/api/placeholder/600/400"
  }
];

const latestNews = [
  {
    id: 4,
    title: "Microsoft's New Quantum Computing Initiative",
    excerpt: "Microsoft invests $10 billion in quantum computing research and development.",
    category: "Quantum Computing",
    publishedAt: "2025-01-15",
    readTime: "3 min read"
  },
  {
    id: 5,
    title: "Google's Privacy-First Approach: New Cookie Alternatives",
    excerpt: "Google introduces new privacy-focused tracking methods to replace third-party cookies.",
    category: "Privacy & Security",
    publishedAt: "2025-01-15",
    readTime: "4 min read"
  },
  {
    id: 6,
    title: "SpaceX's Starship Successfully Completes Orbital Test",
    excerpt: "Historic milestone achieved as Starship reaches orbit and returns safely to Earth.",
    category: "Space Technology",
    publishedAt: "2025-01-14",
    readTime: "5 min read"
  },
  {
    id: 7,
    title: "Meta's VR Breakthrough: Neural Interface Integration",
    excerpt: "Meta announces development of brain-computer interface for next-generation VR experiences.",
    category: "Virtual Reality",
    publishedAt: "2025-01-14",
    readTime: "6 min read"
  },
  {
    id: 8,
    title: "Amazon's Drone Delivery Network Expands Nationwide",
    excerpt: "Amazon Prime Air launches in 50 new cities, revolutionizing last-mile delivery.",
    category: "E-commerce",
    publishedAt: "2025-01-13",
    readTime: "4 min read"
  }
];

const categories = [
  { name: "Artificial Intelligence", count: 45, color: "bg-purple-100 text-purple-800" },
  { name: "Mobile Technology", count: 32, color: "bg-green-100 text-green-800" },
  { name: "Cybersecurity", count: 28, color: "bg-red-100 text-red-800" },
  { name: "Startups", count: 23, color: "bg-blue-100 text-blue-800" },
  { name: "Gaming", count: 19, color: "bg-yellow-100 text-yellow-800" },
  { name: "Blockchain", count: 15, color: "bg-indigo-100 text-indigo-800" }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Stay Ahead with The Tech Ledger
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Your trusted source for the latest technology news, trends, and insights from around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/articles" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Browse Articles
              </Link>
              <Link 
                href="/about" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Articles</h2>
            <p className="text-gray-600">The most important tech stories of the week</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">Article Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-blue-600">{article.category}</span>
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {article.author}</span>
                    <span className="text-sm text-gray-500">{new Date(article.publishedAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News & Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Latest News */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest News</h2>
              <div className="space-y-6">
                {latestNews.map((article) => (
                  <article key={article.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-semibold text-blue-600">{article.category}</span>
                          <span className="text-sm text-gray-500">•</span>
                          <span className="text-sm text-gray-500">{article.readTime}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors cursor-pointer">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-2">
                          {article.excerpt}
                        </p>
                        <span className="text-xs text-gray-500">
                          {new Date(article.publishedAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              <div className="mt-8">
                <Link 
                  href="/articles" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                >
                  View All Articles
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Categories Sidebar */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Categories</h2>
              <div className="space-y-3">
                {categories.map((category) => (
                  <Link 
                    key={category.name}
                    href={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900">{category.name}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${category.color}`}>
                      {category.count}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="mt-8 bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Stay Updated</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get the latest tech news delivered to your inbox every morning.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl text-gray-300 mb-8">
            Connect with tech enthusiasts, share insights, and stay informed about the latest developments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </Link>
            <Link 
              href="/about" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
