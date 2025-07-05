'use client';

import { useState, useEffect, useCallback } from 'react';
import { apiClient } from '@/lib/api-client';
import { ArticleFilters, ApiArticle, ApiCategory } from '@/types/api';
import { transformApiArticlesToArticles, transformApiCategoryToCategory } from '@/lib/data-transformers';

interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

interface UseApiReturn<T> extends UseApiState<T> {
  refetch: () => Promise<void>;
  setData: (data: T) => void;
}

// Dummy data for static export
const dummyArticles: any[] = [];
const dummyCategories: any[] = [];

// Hook for fetching articles
export function useArticles(filters: ArticleFilters = {}) {
  const [state, setState] = useState<UseApiState<any>>({
    data: { articles: dummyArticles, pagination: { page: 1, limit: 10, total: 0, totalPages: 1, hasNext: false, hasPrev: false } },
    loading: false,
    error: null,
  });
  return {
    ...state,
    refetch: async () => {},
    setData: (data: any) => setState(prev => ({ ...prev, data })),
  };
}

// Hook for fetching a single article
export function useArticle(slug: string) {
  const [state, setState] = useState<UseApiState<any>>({
    data: null,
    loading: false,
    error: null,
  });
  return {
    ...state,
    refetch: async () => {},
    setData: (data: any) => setState(prev => ({ ...prev, data })),
  };
}

// Hook for fetching categories
export function useCategories() {
  const [state, setState] = useState<UseApiState<any>>({
    data: dummyCategories,
    loading: false,
    error: null,
  });
  return {
    ...state,
    refetch: async () => {},
    setData: (data: any) => setState(prev => ({ ...prev, data })),
  };
}

// Hook for fetching featured articles
export function useFeaturedArticles(limit: number = 3) {
  const [state, setState] = useState<UseApiState<any>>({
    data: dummyArticles,
    loading: false,
    error: null,
  });
  return {
    ...state,
    refetch: async () => {},
    setData: (data: any) => setState(prev => ({ ...prev, data })),
  };
}

// Hook for article mutations (create, update, delete)
export function useArticleMutations() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createArticle = useCallback(async (articleData: any) => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiClient.createArticle(articleData);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to create article';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateArticle = useCallback(async (articleData: any) => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiClient.updateArticle(articleData);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to update article';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteArticle = useCallback(async (articleId: string) => {
    try {
      setLoading(true);
      setError(null);
      await apiClient.deleteArticle(articleId);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to delete article';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    createArticle,
    updateArticle,
    deleteArticle,
    loading,
    error,
  };
}

// Hook for newsletter subscription
export function useNewsletterSubscription() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const subscribe = useCallback(async (subscriptionData: any) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);
      await apiClient.subscribeToNewsletter(subscriptionData);
      setSuccess(true);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to subscribe';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    subscribe,
    loading,
    error,
    success,
  };
}

// Hook for contact form submission
export function useContactForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitForm = useCallback(async (formData: any) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);
      await apiClient.submitContactForm(formData);
      setSuccess(true);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to submit form';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    submitForm,
    loading,
    error,
    success,
  };
} 