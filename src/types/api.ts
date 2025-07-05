// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// Article Types
export interface ApiArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  image?: string;
  tags?: string[];
  featured?: boolean;
  status: 'draft' | 'published' | 'archived';
  views?: number;
  likes?: number;
  comments?: number;
}

export interface CreateArticleRequest {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  tags?: string[];
  featured?: boolean;
  image?: string;
}

export interface UpdateArticleRequest extends Partial<CreateArticleRequest> {
  id: string;
  status?: 'draft' | 'published' | 'archived';
}

// Category Types
export interface ApiCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  color?: string;
  articleCount: number;
}

// Search and Filter Types
export interface ArticleFilters {
  q?: string;
  category?: string;
  tags?: string[];
  author?: string;
  featured?: boolean;
  dateRange?: 'today' | 'week' | 'month' | 'quarter' | 'year';
  status?: 'draft' | 'published' | 'archived';
  page?: number;
  limit?: number;
  sortBy?: 'latest' | 'oldest' | 'popular' | 'featured' | 'views';
}

// API Error Types
export interface ApiError {
  code: string;
  message: string;
  details?: any;
}

// Upload Types
export interface UploadResponse {
  url: string;
  filename: string;
  size: number;
  mimeType: string;
}

// Analytics Types
export interface ArticleAnalytics {
  articleId: string;
  views: number;
  likes: number;
  shares: number;
  comments: number;
  readTime: number;
}

// Newsletter Types
export interface NewsletterSubscription {
  email: string;
  name?: string;
  preferences?: {
    categories?: string[];
    frequency?: 'daily' | 'weekly' | 'monthly';
  };
}

// Contact Form Types
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
} 