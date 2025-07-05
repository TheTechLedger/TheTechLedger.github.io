import { Suspense } from 'react';
import ArticlesClientPage from './ArticlesClientPage';

export default function ArticlesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ArticlesClientPage />
    </Suspense>
  );
} 