import { ApiArticle, ApiCategory } from '@/types/api';
import { Article } from '@/components/ArticleCard';

// Transform API Article to Component Article
export function transformApiArticleToArticle(apiArticle: ApiArticle): Article {
  return {
    id: parseInt(apiArticle.id) || 0,
    slug: apiArticle.slug,
    title: apiArticle.title,
    excerpt: apiArticle.excerpt,
    content: apiArticle.content,
    category: apiArticle.category,
    author: apiArticle.author,
    publishedAt: apiArticle.publishedAt,
    readTime: apiArticle.readTime,
    image: apiArticle.image,
    tags: apiArticle.tags,
    featured: apiArticle.featured,
  };
}

// Transform multiple API Articles to Component Articles
export function transformApiArticlesToArticles(apiArticles: ApiArticle[]): Article[] {
  return apiArticles.map(transformApiArticleToArticle);
}

// Transform API Category to Component Category
export function transformApiCategoryToCategory(apiCategory: ApiCategory) {
  return {
    name: apiCategory.name,
    count: apiCategory.articleCount,
    color: apiCategory.color || getDefaultCategoryColor(apiCategory.name),
  };
}

// Transform multiple API Categories to Component Categories
export function transformApiCategoriesToCategories(apiCategories: ApiCategory[]) {
  return apiCategories.map(transformApiCategoryToCategory);
}

// Get default color for category if not provided
function getDefaultCategoryColor(categoryName: string): string {
  const colorMap: Record<string, string> = {
    'Artificial Intelligence': 'bg-purple-100 text-purple-800',
    'Mobile Technology': 'bg-green-100 text-green-800',
    'Cybersecurity': 'bg-red-100 text-red-800',
    'Startups': 'bg-blue-100 text-blue-800',
    'Gaming': 'bg-yellow-100 text-yellow-800',
    'Blockchain': 'bg-indigo-100 text-indigo-800',
    'Quantum Computing': 'bg-pink-100 text-pink-800',
    'Space Technology': 'bg-gray-100 text-gray-800',
    'Privacy & Security': 'bg-orange-100 text-orange-800',
    'Virtual Reality': 'bg-teal-100 text-teal-800',
    'E-commerce': 'bg-emerald-100 text-emerald-800',
    'Automotive Tech': 'bg-slate-100 text-slate-800',
  };

  return colorMap[categoryName] || 'bg-gray-100 text-gray-800';
}

// Calculate read time from content
export function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

// Format date for display
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Generate slug from title
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Validate article data
export function validateArticleData(data: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.title || data.title.trim().length < 5) {
    errors.push('Title must be at least 5 characters long');
  }

  if (!data.excerpt || data.excerpt.trim().length < 20) {
    errors.push('Excerpt must be at least 20 characters long');
  }

  if (!data.content || data.content.trim().length < 100) {
    errors.push('Content must be at least 100 characters long');
  }

  if (!data.category || data.category.trim().length === 0) {
    errors.push('Category is required');
  }

  if (!data.author || data.author.trim().length === 0) {
    errors.push('Author is required');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

// Sanitize HTML content
export function sanitizeHtml(html: string): string {
  // Basic HTML sanitization - you might want to use a library like DOMPurify
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '');
}

// Extract tags from content
export function extractTagsFromContent(content: string): string[] {
  const hashtagRegex = /#(\w+)/g;
  const matches = content.match(hashtagRegex);
  return matches ? matches.map(tag => tag.slice(1)) : [];
}

// Generate excerpt from content
export function generateExcerpt(content: string, maxLength: number = 150): string {
  const plainText = content.replace(/<[^>]*>/g, '');
  if (plainText.length <= maxLength) {
    return plainText;
  }
  return plainText.substring(0, maxLength).trim() + '...';
} 