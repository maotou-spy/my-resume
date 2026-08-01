import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';

const Home = lazy(() => import('@/pages/Home').then((m) => ({ default: m.Home })));
const NotFound = lazy(() => import('@/pages/NotFound').then((m) => ({ default: m.NotFound })));

export function AppRoutes() {
  return (
    <Layout>
      <Suspense fallback={<div className="min-h-screen" aria-hidden />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
