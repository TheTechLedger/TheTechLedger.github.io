import { 
  ApiResponse, 
  PaginatedResponse, 
  ApiArticle, 
  ApiCategory, 
  ArticleFilters,
  CreateArticleRequest,
  UpdateArticleRequest,
  UploadResponse,
  NewsletterSubscription,
  ContactFormData,
  ApiError
} from '@/types/api';

class ApiClient {
  private baseUrl: string;
  private apiKey?: string;

  constructor() {
    // You can set these from environment variables
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL || 'https://your-api-domain.com/api';
    this.apiKey = process.env.NEXT_PUBLIC_API_KEY;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (this.apiKey) {
      headers['Authorization'] = `Bearer ${this.apiKey}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Article Methods
  async getArticles(filters: ArticleFilters = {}): Promise<PaginatedResponse<ApiArticle>> {
    const params = new URLSearchParams();
    
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        if (Array.isArray(value)) {
          value.forEach(v => params.append(key, v));
        } else {
          params.append(key, String(value));
        }
      }
    });

    const endpoint = `/articles?${params.toString()}`;
    return this.request<PaginatedResponse<ApiArticle>>(endpoint);
  }

  async getArticle(slug: string): Promise<ApiArticle> {
    const response = await this.request<ApiArticle>(`/articles/${slug}`);
    return response.data;
  }

  async getFeaturedArticles(limit: number = 3): Promise<ApiArticle[]> {
    const response = await this.request<PaginatedResponse<ApiArticle>>(
      `/articles?featured=true&limit=${limit}&sortBy=latest`
    );
    return response.data.data;
  }

  async getRelatedArticles(articleId: string, limit: number = 3): Promise<ApiArticle[]> {
    const response = await this.request<PaginatedResponse<ApiArticle>>(
      `/articles/${articleId}/related?limit=${limit}`
    );
    return response.data.data;
  }

  async createArticle(article: CreateArticleRequest): Promise<ApiArticle> {
    const response = await this.request<ApiArticle>('/articles', {
      method: 'POST',
      body: JSON.stringify(article),
    });
    return response.data;
  }

  async updateArticle(article: UpdateArticleRequest): Promise<ApiArticle> {
    const response = await this.request<ApiArticle>(`/articles/${article.id}`, {
      method: 'PUT',
      body: JSON.stringify(article),
    });
    return response.data;
  }

  async deleteArticle(articleId: string): Promise<void> {
    await this.request(`/articles/${articleId}`, {
      method: 'DELETE',
    });
  }

  // Category Methods
  async getCategories(): Promise<ApiCategory[]> {
    const response = await this.request<ApiCategory[]>('/categories');
    return response.data;
  }

  async getCategory(slug: string): Promise<ApiCategory> {
    const response = await this.request<ApiCategory>(`/categories/${slug}`);
    return response.data;
  }

  async getCategoryArticles(
    slug: string, 
    filters: Omit<ArticleFilters, 'category'> = {}
  ): Promise<PaginatedResponse<ApiArticle>> {
    const params = new URLSearchParams();
    
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        if (Array.isArray(value)) {
          value.forEach(v => params.append(key, v));
        } else {
          params.append(key, String(value));
        }
      }
    });

    const endpoint = `/categories/${slug}/articles?${params.toString()}`;
    return this.request<PaginatedResponse<ApiArticle>>(endpoint);
  }

  // Search Methods
  async searchArticles(query: string, filters: Omit<ArticleFilters, 'q'> = {}): Promise<PaginatedResponse<ApiArticle>> {
    const searchFilters = { ...filters, q: query };
    return this.getArticles(searchFilters);
  }

  // Upload Methods
  async uploadImage(file: File): Promise<UploadResponse> {
    const formData = new FormData();
    formData.append('image', file);

    const url = `${this.baseUrl}/upload/image`;
    
    const headers: HeadersInit = {};
    if (this.apiKey) {
      headers['Authorization'] = `Bearer ${this.apiKey}`;
    }

    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Upload failed: ${response.statusText}`);
    }

    const data = await response.json();
    return data.data;
  }

  // Newsletter Methods
  async subscribeToNewsletter(subscription: NewsletterSubscription): Promise<void> {
    await this.request('/newsletter/subscribe', {
      method: 'POST',
      body: JSON.stringify(subscription),
    });
  }

  async unsubscribeFromNewsletter(email: string): Promise<void> {
    await this.request('/newsletter/unsubscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  }

  // Contact Methods
  async submitContactForm(formData: ContactFormData): Promise<void> {
    await this.request('/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  }

  // Analytics Methods
  async trackArticleView(articleId: string): Promise<void> {
    await this.request(`/analytics/articles/${articleId}/view`, {
      method: 'POST',
    });
  }

  async getArticleAnalytics(articleId: string): Promise<any> {
    const response = await this.request(`/analytics/articles/${articleId}`);
    return response.data;
  }

  // Health Check
  async healthCheck(): Promise<{ status: string; timestamp: string }> {
    const response = await this.request<{ status: string; timestamp: string }>('/health');
    return response.data;
  }
}

// Create a singleton instance
export const apiClient = new ApiClient();

// Export for use in components
export default apiClient; 