import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">BeWear</span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/authentication" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Sign In
          </Link>
        </nav>
      </div>
    </header>
  );
}
