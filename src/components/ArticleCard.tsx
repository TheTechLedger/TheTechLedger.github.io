import Link from 'next/link';
import Image from 'next/image';

export interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
  image?: string;
  tags?: string[];
  featured?: boolean;
}

interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'featured' | 'compact';
}

export default function ArticleCard({ article, variant = 'default' }: ArticleCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (variant === 'compact') {
    return (
      <article className="border-b border-gray-200 pb-6 last:border-b-0">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm font-semibold text-blue-600">{article.category}</span>
              <span className="text-sm text-gray-500">•</span>
              <span className="text-sm text-gray-500">{article.readTime}</span>
            </div>
            <Link href={`/articles/${article.slug}`}>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors cursor-pointer">
                {article.title}
              </h3>
            </Link>
            <p className="text-gray-600 text-sm mb-2 line-clamp-2">
              {article.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">By {article.author}</span>
              <span className="text-xs text-gray-500">
                {formatDate(article.publishedAt)}
              </span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'featured') {
    return (
      <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
        <div className="h-64 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center relative">
          {article.image ? (
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
          ) : (
            <span className="text-white text-lg font-semibold">Article Image</span>
          )}
          {article.featured && (
            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Featured
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-blue-600">{article.category}</span>
            <span className="text-sm text-gray-500">{article.readTime}</span>
          </div>
          <Link href={`/articles/${article.slug}`}>
            <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors cursor-pointer">
              {article.title}
            </h3>
          </Link>
          <p className="text-gray-600 mb-4 line-clamp-3">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">By {article.author}</span>
            <span className="text-sm text-gray-500">{formatDate(article.publishedAt)}</span>
          </div>
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {article.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    );
  }

  // Default variant
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center relative">
        {article.image ? (
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
          />
        ) : (
          <span className="text-white text-lg font-semibold">Article Image</span>
        )}
        {article.featured && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            Featured
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-blue-600">{article.category}</span>
          <span className="text-sm text-gray-500">{article.readTime}</span>
        </div>
        <Link href={`/articles/${article.slug}`}>
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors cursor-pointer">
            {article.title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-3 line-clamp-2 text-sm">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">By {article.author}</span>
          <span className="text-sm text-gray-500">{formatDate(article.publishedAt)}</span>
        </div>
        {article.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {article.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
} 