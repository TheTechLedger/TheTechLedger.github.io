import type { Metadata } from 'next';
import { Suspense } from 'react';
import ArticleCard, { Article } from '@/components/ArticleCard';
import SearchBar from '@/components/SearchBar';
import ArticleFilters from '@/components/ArticleFilters';

export const metadata: Metadata = {
  title: 'Articles - The Tech Ledger',
  description: 'Browse all technology articles, news, and insights from The Tech Ledger.',
};

// Mock data - this will be replaced with API calls
const mockArticles: Article[] = [
  {
    id: 1,
    slug: "apple-ai-integration-ios-18",
    title: "Apple Announces Revolutionary AI Integration in iOS 18",
    excerpt: "The latest iOS update brings groundbreaking artificial intelligence features that will transform how users interact with their devices.",
    content: "Full article content here...",
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
  },
  {
    id: 4,
    slug: "microsoft-quantum-computing-initiative",
    title: "Microsoft's New Quantum Computing Initiative",
    excerpt: "Microsoft invests $10 billion in quantum computing research and development.",
    content: "Full article content here...",
    category: "Quantum Computing",
    author: "Quantum Expert",
    publishedAt: "2025-01-15",
    readTime: "3 min read",
    tags: ["Microsoft", "Quantum Computing", "Research"]
  },
  {
    id: 5,
    slug: "google-privacy-cookie-alternatives",
    title: "Google's Privacy-First Approach: New Cookie Alternatives",
    excerpt: "Google introduces new privacy-focused tracking methods to replace third-party cookies.",
    content: "Full article content here...",
    category: "Privacy & Security",
    author: "Privacy Analyst",
    publishedAt: "2025-01-15",
    readTime: "4 min read",
    tags: ["Google", "Privacy", "Cookies", "Security"]
  },
  {
    id: 6,
    slug: "spacex-starship-orbital-test",
    title: "SpaceX's Starship Successfully Completes Orbital Test",
    excerpt: "Historic milestone achieved as Starship reaches orbit and returns safely to Earth.",
    content: "Full article content here...",
    category: "Space Technology",
    author: "Space Reporter",
    publishedAt: "2025-01-14",
    readTime: "5 min read",
    tags: ["SpaceX", "Starship", "Space", "Orbital"]
  },
  {
    id: 7,
    slug: "meta-vr-neural-interface",
    title: "Meta's VR Breakthrough: Neural Interface Integration",
    excerpt: "Meta announces development of brain-computer interface for next-generation VR experiences.",
    content: "Full article content here...",
    category: "Virtual Reality",
    author: "VR Specialist",
    publishedAt: "2025-01-14",
    readTime: "6 min read",
    tags: ["Meta", "VR", "Neural Interface", "Brain-Computer"]
  },
  {
    id: 8,
    slug: "amazon-drone-delivery-expansion",
    title: "Amazon's Drone Delivery Network Expands Nationwide",
    excerpt: "Amazon Prime Air launches in 50 new cities, revolutionizing last-mile delivery.",
    content: "Full article content here...",
    category: "E-commerce",
    author: "E-commerce Analyst",
    publishedAt: "2025-01-13",
    readTime: "4 min read",
    tags: ["Amazon", "Drone Delivery", "E-commerce", "Logistics"]
  },
  {
    id: 9,
    slug: "nvidia-ai-chip-revolution",
    title: "NVIDIA's Next-Generation AI Chips Set New Performance Records",
    excerpt: "NVIDIA unveils revolutionary AI processors that deliver unprecedented computing power for machine learning applications.",
    content: "Full article content here...",
    category: "Artificial Intelligence",
    author: "Hardware Expert",
    publishedAt: "2025-01-12",
    readTime: "8 min read",
    tags: ["NVIDIA", "AI Chips", "Hardware", "Machine Learning"]
  },
  {
    id: 10,
    slug: "cybersecurity-zero-day-vulnerability",
    title: "Major Cybersecurity Breach: Zero-Day Vulnerability Affects Millions",
    excerpt: "Security researchers discover critical vulnerability in widely-used software, affecting millions of users worldwide.",
    content: "Full article content here...",
    category: "Cybersecurity",
    author: "Security Analyst",
    publishedAt: "2025-01-12",
    readTime: "5 min read",
    tags: ["Cybersecurity", "Zero-Day", "Vulnerability", "Security"]
  }
];

const categories = [
  { name: "Artificial Intelligence", count: 45, color: "bg-purple-100 text-purple-800" },
  { name: "Mobile Technology", count: 32, color: "bg-green-100 text-green-800" },
  { name: "Cybersecurity", count: 28, color: "bg-red-100 text-red-800" },
  { name: "Startups", count: 23, color: "bg-blue-100 text-blue-800" },
  { name: "Gaming", count: 19, color: "bg-yellow-100 text-yellow-800" },
  { name: "Blockchain", count: 15, color: "bg-indigo-100 text-indigo-800" },
  { name: "Quantum Computing", count: 12, color: "bg-pink-100 text-pink-800" },
  { name: "Space Technology", count: 8, color: "bg-gray-100 text-gray-800" }
];

interface ArticlesPageProps {
  searchParams: {
    q?: string;
    category?: string;
    tags?: string | string[];
    dateRange?: string;
    page?: string;
  };
}

export default function ArticlesPage({ searchParams }: ArticlesPageProps) {
  // Filter articles based on search params
  let filteredArticles = [...mockArticles];

  // Search filter
  if (searchParams.q) {
    const query = searchParams.q.toLowerCase();
    filteredArticles = filteredArticles.filter(article =>
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query) ||
      article.content.toLowerCase().includes(query) ||
      article.tags?.some(tag => tag.toLowerCase().includes(query))
    );
  }

  // Category filter
  if (searchParams.category) {
    filteredArticles = filteredArticles.filter(article =>
      article.category === searchParams.category
    );
  }

  // Tags filter
  if (searchParams.tags) {
    const tags = Array.isArray(searchParams.tags) ? searchParams.tags : [searchParams.tags];
    filteredArticles = filteredArticles.filter(article =>
      article.tags?.some(tag => tags.includes(tag))
    );
  }

  // Date range filter (simplified)
  if (searchParams.dateRange) {
    const now = new Date();
    const filterDate = new Date();
    
    switch (searchParams.dateRange) {
      case 'today':
        filterDate.setDate(now.getDate() - 1);
        break;
      case 'week':
        filterDate.setDate(now.getDate() - 7);
        break;
      case 'month':
        filterDate.setMonth(now.getMonth() - 1);
        break;
      case 'quarter':
        filterDate.setMonth(now.getMonth() - 3);
        break;
      case 'year':
        filterDate.setFullYear(now.getFullYear() - 1);
        break;
    }
    
    filteredArticles = filteredArticles.filter(article =>
      new Date(article.publishedAt) >= filterDate
    );
  }

  // Pagination
  const page = parseInt(searchParams.page || '1');
  const articlesPerPage = 9;
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (page - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const paginatedArticles = filteredArticles.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Articles</h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover the latest technology news, insights, and trends
            </p>
            <SearchBar className="max-w-2xl" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <ArticleFilters
                categories={categories}
                selectedCategory={searchParams.category}
                selectedTags={Array.isArray(searchParams.tags) ? searchParams.tags : searchParams.tags ? [searchParams.tags] : []}
                dateRange={searchParams.dateRange}
              />
            </div>

            {/* Articles Grid */}
            <div className="lg:col-span-3">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {searchParams.q ? `Search Results for "${searchParams.q}"` : 'All Articles'}
                  </h2>
                  <p className="text-gray-600">
                    {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="latest">Latest</option>
                    <option value="oldest">Oldest</option>
                    <option value="popular">Most Popular</option>
                    <option value="featured">Featured</option>
                  </select>
                </div>
              </div>

              {/* Articles Grid */}
              {paginatedArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {paginatedArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No articles found</h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your search criteria or filters
                  </p>
                  <button
                    onClick={() => window.location.href = '/articles'}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12 flex items-center justify-center">
                  <nav className="flex items-center space-x-2">
                    <button
                      disabled={page === 1}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Previous
                    </button>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                      <button
                        key={pageNum}
                        className={`px-3 py-2 border rounded-lg ${
                          pageNum === page
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {pageNum}
                      </button>
                    ))}
                    
                    <button
                      disabled={page === totalPages}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
                    </button>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 