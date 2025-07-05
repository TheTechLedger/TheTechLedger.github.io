# API Integration Setup Guide

## Overview
The Tech Ledger website is now integrated with an external API for article management. This guide will help you configure the API connection and set up the necessary environment variables.

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
# API Configuration
NEXT_PUBLIC_API_URL=https://your-api-domain.com/api
NEXT_PUBLIC_API_KEY=your_api_key_here

# Optional: Analytics and Monitoring
NEXT_PUBLIC_GA_TRACKING_ID=your_google_analytics_id
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn

# Optional: Social Media
NEXT_PUBLIC_TWITTER_HANDLE=@thetechledger
NEXT_PUBLIC_FACEBOOK_PAGE=thetechledger

# Optional: Newsletter Service
NEXT_PUBLIC_NEWSLETTER_API_URL=https://your-newsletter-service.com/api
NEXT_PUBLIC_NEWSLETTER_API_KEY=your_newsletter_api_key

# Optional: Image Upload Service
NEXT_PUBLIC_UPLOAD_API_URL=https://your-upload-service.com/api
NEXT_PUBLIC_UPLOAD_API_KEY=your_upload_api_key

# Development Settings
NEXT_PUBLIC_ENVIRONMENT=development
NEXT_PUBLIC_DEBUG_MODE=true
```

## API Endpoints

The application expects the following API endpoints to be available:

### Articles
- `GET /articles` - List articles with pagination and filters
- `GET /articles/{slug}` - Get single article by slug
- `POST /articles` - Create new article
- `PUT /articles/{id}` - Update article
- `DELETE /articles/{id}` - Delete article
- `GET /articles?featured=true` - Get featured articles

### Categories
- `GET /categories` - List all categories
- `GET /categories/{slug}` - Get category details
- `GET /categories/{slug}/articles` - Get articles by category

### Search
- `GET /articles?q={query}` - Search articles
- `GET /articles?category={category}&tags={tags}&dateRange={range}` - Filter articles

### Upload
- `POST /upload/image` - Upload image file

### Newsletter
- `POST /newsletter/subscribe` - Subscribe to newsletter
- `POST /newsletter/unsubscribe` - Unsubscribe from newsletter

### Contact
- `POST /contact` - Submit contact form

### Analytics
- `POST /analytics/articles/{id}/view` - Track article view
- `GET /analytics/articles/{id}` - Get article analytics

## API Response Format

The API should return responses in the following format:

```json
{
  "success": true,
  "data": {
    // Response data here
  },
  "message": "Optional success message",
  "error": "Optional error message"
}
```

For paginated responses:

```json
{
  "success": true,
  "data": {
    "data": [
      // Array of items
    ],
    "pagination": {
      "page": 1,
      "limit": 12,
      "total": 100,
      "totalPages": 9,
      "hasNext": true,
      "hasPrev": false
    }
  }
}
```

## Article Data Structure

Articles should follow this structure:

```json
{
  "id": "string",
  "slug": "string",
  "title": "string",
  "excerpt": "string",
  "content": "string (HTML allowed)",
  "category": "string",
  "author": "string",
  "publishedAt": "ISO date string",
  "updatedAt": "ISO date string",
  "readTime": "string (e.g., '5 min read')",
  "image": "string (URL)",
  "tags": ["string"],
  "featured": "boolean",
  "status": "draft|published|archived",
  "views": "number",
  "likes": "number",
  "comments": "number"
}
```

## Authentication

The API client uses Bearer token authentication. Include your API key in the `Authorization` header:

```
Authorization: Bearer your_api_key_here
```

## Error Handling

The application handles the following error scenarios:

1. **Network Errors** - Connection issues, timeouts
2. **Authentication Errors** - Invalid API key
3. **Validation Errors** - Invalid request data
4. **Server Errors** - 5xx status codes
5. **Client Errors** - 4xx status codes

## Testing the API

1. Start the development server: `npm run dev`
2. Visit `http://localhost:3000` to see the homepage
3. Visit `http://localhost:3000/articles` to browse articles
4. Visit `http://localhost:3000/admin/articles` to create articles

## Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure your API allows requests from your domain
2. **Authentication Errors**: Verify your API key is correct
3. **404 Errors**: Check that all required endpoints are implemented
4. **Rate Limiting**: Implement proper rate limiting on your API

### Debug Mode

Enable debug mode by setting `NEXT_PUBLIC_DEBUG_MODE=true` to see detailed API logs in the browser console.

## Security Considerations

1. **API Key Security**: Never commit API keys to version control
2. **Input Validation**: Always validate and sanitize user input
3. **HTTPS**: Use HTTPS for all API communications
4. **Rate Limiting**: Implement rate limiting to prevent abuse
5. **CORS**: Configure CORS properly for your domain

## Next Steps

1. Set up your external API with the required endpoints
2. Configure environment variables
3. Test the integration
4. Deploy to production
5. Monitor API usage and performance

## Support

If you encounter issues with the API integration:

1. Check the browser console for error messages
2. Verify your environment variables are set correctly
3. Test API endpoints directly using tools like Postman
4. Check the API documentation for your specific service 