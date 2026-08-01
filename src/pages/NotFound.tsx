import { Seo } from '@/components/common/Seo';
import { LinkButton } from '@/components/ui/Button';

export function NotFound() {
  return (
    <>
      <Seo title="Page not found" path="/404" />
      <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-6 text-center">
        <p className="font-mono text-sm text-cyan">404</p>
        <h1 className="text-3xl font-bold">This page doesn't exist</h1>
        <p className="max-w-sm text-muted">
          The page you're looking for was moved or never existed. Let's get you back home.
        </p>
        <LinkButton href="/" variant="primary" className="mt-4">
          Back to home
        </LinkButton>
      </div>
    </>
  );
}
