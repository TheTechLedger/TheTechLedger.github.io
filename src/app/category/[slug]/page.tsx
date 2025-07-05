import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleCard, { Article } from '@/components/ArticleCard';
import SearchBar from '@/components/SearchBar';

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

const categoryColors: Record<string, string> = {
  "artificial-intelligence": "bg-purple-100 text-purple-800",
  "mobile-technology": "bg-green-100 text-green-800",
  "cybersecurity": "bg-red-100 text-red-800",
  "startups": "bg-blue-100 text-blue-800",
  "gaming": "bg-yellow-100 text-yellow-800",
  "blockchain": "bg-indigo-100 text-indigo-800",
  "quantum-computing": "bg-pink-100 text-pink-800",
  "space-technology": "bg-gray-100 text-gray-800",
  "privacy-security": "bg-orange-100 text-orange-800",
  "virtual-reality": "bg-teal-100 text-teal-800",
  "e-commerce": "bg-emerald-100 text-emerald-800",
  "automotive-tech": "bg-slate-100 text-slate-800"
};

const categoryNames: Record<string, string> = {
  "artificial-intelligence": "Artificial Intelligence",
  "mobile-technology": "Mobile Technology",
  "cybersecurity": "Cybersecurity",
  "startups": "Startups",
  "gaming": "Gaming",
  "blockchain": "Blockchain",
  "quantum-computing": "Quantum Computing",
  "space-technology": "Space Technology",
  "privacy-security": "Privacy & Security",
  "virtual-reality": "Virtual Reality",
  "e-commerce": "E-commerce",
  "automotive-tech": "Automotive Tech"
};

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams: {
    q?: string;
    page?: string;
  };
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const categoryName = categoryNames[slug];
  
  if (!categoryName) {
    return {
      title: 'Category Not Found - The Tech Ledger',
      description: 'The requested category could not be found.',
    };
  }

  return {
    title: `${categoryName} Articles - The Tech Ledger`,
    description: `Browse the latest ${categoryName.toLowerCase()} articles, news, and insights from The Tech Ledger.`,
    keywords: `${categoryName.toLowerCase()}, technology, news, articles`,
  };
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { slug } = await params;
  const categoryName = categoryNames[slug];
  
  if (!categoryName) {
    notFound();
  }

  // Filter articles by category
  let categoryArticles = mockArticles.filter(article => 
    article.category.toLowerCase().replace(/\s+/g, '-') === slug
  );

  // Apply search filter if provided
  if (searchParams.q) {
    const query = searchParams.q.toLowerCase();
    categoryArticles = categoryArticles.filter(article =>
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query) ||
      article.content.toLowerCase().includes(query) ||
      article.tags?.some(tag => tag.toLowerCase().includes(query))
    );
  }

  // Pagination
  const page = parseInt(searchParams.page || '1');
  const articlesPerPage = 9;
  const totalPages = Math.ceil(categoryArticles.length / articlesPerPage);
  const startIndex = (page - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const paginatedArticles = categoryArticles.slice(startIndex, endIndex);

  const categoryColor = categoryColors[slug] || "bg-blue-100 text-blue-800";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Category Header */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <ol className="flex items-center space-x-2 text-sm text-gray-500">
                <li><a href="/" className="hover:text-blue-600">Home</a></li>
                <li>/</li>
                <li><a href="/articles" className="hover:text-blue-600">Articles</a></li>
                <li>/</li>
                <li className="text-gray-900">{categoryName}</li>
              </ol>
            </nav>

            {/* Category Info */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${categoryColor}`}>
                  {categoryName}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {categoryName} Articles
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover the latest {categoryName.toLowerCase()} news, insights, and trends
              </p>
              <SearchBar className="max-w-2xl mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {searchParams.q ? `Search Results for "${searchParams.q}" in ${categoryName}` : `All ${categoryName} Articles`}
                </h2>
                <p className="text-gray-600">
                  {categoryArticles.length} article{categoryArticles.length !== 1 ? 's' : ''} found
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
                  {searchParams.q 
                    ? `No articles found for "${searchParams.q}" in ${categoryName}`
                    : `No articles available in ${categoryName} yet.`
                  }
                </p>
                <a
                  href="/articles"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Browse All Articles
                </a>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center">
                <nav className="flex items-center space-x-2">
                  <a
                    href={`/category/${slug}?page=${page - 1}${searchParams.q ? `&q=${searchParams.q}` : ''}`}
                    className={`px-3 py-2 border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-50 ${
                      page === 1 ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    Previous
                  </a>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <a
                      key={pageNum}
                      href={`/category/${slug}?page=${pageNum}${searchParams.q ? `&q=${searchParams.q}` : ''}`}
                      className={`px-3 py-2 border rounded-lg ${
                        pageNum === page
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {pageNum}
                    </a>
                  ))}
                  
                  <a
                    href={`/category/${slug}?page=${page + 1}${searchParams.q ? `&q=${searchParams.q}` : ''}`}
                    className={`px-3 py-2 border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-50 ${
                      page === totalPages ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    Next
                  </a>
                </nav>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore Other Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(categoryNames).map(([categorySlug, name]) => {
                if (categorySlug === slug) return null;
                return (
                  <a
                    key={slug}
                    href={`/category/${slug}`}
                    className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors text-center"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">{name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryColors[slug] || 'bg-gray-100 text-gray-800'}`}>
                      {mockArticles.filter(article => 
                        article.category.toLowerCase().replace(/\s+/g, '-') === slug
                      ).length} articles
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 