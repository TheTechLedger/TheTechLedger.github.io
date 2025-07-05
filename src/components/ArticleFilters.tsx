'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface Category {
  name: string;
  count: number;
  color: string;
}

interface ArticleFiltersProps {
  categories: Category[];
  selectedCategory?: string;
  selectedTags?: string[];
  dateRange?: string;
}

export default function ArticleFilters({ 
  categories, 
  selectedCategory, 
  selectedTags = [], 
  dateRange 
}: ArticleFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  const updateFilters = (updates: Record<string, string | string[]>) => {
    const params = new URLSearchParams(searchParams);
    
    Object.entries(updates).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        params.delete(key);
        value.forEach(v => params.append(key, v));
      } else {
        params.set(key, value);
      }
    });
    
    router.push(`/articles?${params.toString()}`);
  };

  const handleCategoryChange = (category: string) => {
    if (selectedCategory === category) {
      updateFilters({ category: '' });
    } else {
      updateFilters({ category });
    }
  };

  const handleTagToggle = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    
    updateFilters({ tags: newTags });
  };

  const handleDateRangeChange = (range: string) => {
    updateFilters({ dateRange: range });
  };

  const clearFilters = () => {
    router.push('/articles');
  };

  const hasActiveFilters = selectedCategory || selectedTags.length > 0 || dateRange;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Categories</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category.name} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === category.name}
                onChange={() => handleCategoryChange(category.name)}
                className="sr-only"
              />
              <div className={`flex items-center justify-between w-full p-2 rounded-lg border transition-colors ${
                selectedCategory === category.name
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}>
                <span className="text-sm font-medium text-gray-900">{category.name}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${category.color}`}>
                  {category.count}
                </span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Date Range */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Date Range</h4>
        <select
          value={dateRange || ''}
          onChange={(e) => handleDateRangeChange(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">All time</option>
          <option value="today">Today</option>
          <option value="week">This week</option>
          <option value="month">This month</option>
          <option value="quarter">This quarter</option>
          <option value="year">This year</option>
        </select>
      </div>

      {/* Popular Tags */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Popular Tags</h4>
        <div className="flex flex-wrap gap-2">
          {['AI', 'Machine Learning', 'Cybersecurity', 'Startups', 'Mobile', 'Web Development', 'Cloud Computing', 'Blockchain'].map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagToggle(tag)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                selectedTags.includes(tag)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="pt-4 border-t border-gray-200">
          <h4 className="text-sm font-semibold text-gray-700 mb-3">Active Filters</h4>
          <div className="flex flex-wrap gap-2">
            {selectedCategory && (
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                Category: {selectedCategory}
                <button
                  onClick={() => handleCategoryChange(selectedCategory)}
                  className="ml-2 hover:text-blue-600"
                >
                  ×
                </button>
              </span>
            )}
            {selectedTags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                {tag}
                <button
                  onClick={() => handleTagToggle(tag)}
                  className="ml-2 hover:text-green-600"
                >
                  ×
                </button>
              </span>
            ))}
            {dateRange && (
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                {dateRange}
                <button
                  onClick={() => handleDateRangeChange('')}
                  className="ml-2 hover:text-purple-600"
                >
                  ×
                </button>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 