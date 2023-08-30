'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  const navs = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Builder', href: '/builder' },
    { id: 2, name: 'About', href: '/about' },
  ];
  return (
    <aside>
      <nav class='flex flex-col gap-y-2 h-screen w-64 p-4 bg-neutral-900'>
        {navs.map((nav) => (
          <Link
            className={`${pathname == nav.href ? 'text-neutral-50 bg-neutral-700' : 'text-neutral-50 hover:bg-neutral-500'} font-semibold px-8 py-5 rounded`}
            href={nav.href}
            key={nav.id}
          >
            {nav.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}