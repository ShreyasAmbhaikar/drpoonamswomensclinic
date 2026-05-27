import Link from 'next/link';
import { AnimatedHeading } from '../ui/AnimatedHeading';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
}

export default function PageHeader({ title, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="bg-primary/5 pt-[140px] pb-[80px] lg:pt-[180px] lg:pb-[120px] relative overflow-hidden">
      {/* Background decoration matching 'gradient-bg-metal' could go here if there are SVGs */}
      <div className="container mx-auto px-4 max-w-[1320px]">
        <div className="flex flex-col items-center justify-center text-center">
          <AnimatedHeading
            text={title}
            className="text-[40px] md:text-[50px] lg:text-[70px] font-bold text-primary leading-[1.1] mb-6 capitalize"
          />

          <nav
            role="navigation"
            aria-label="Breadcrumbs"
            className="animate-[fadeInUp_1s_ease-out]"
          >
            <ol className="flex items-center space-x-2 text-[16px] md:text-[18px] font-medium">
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;

                return (
                  <li key={index} className="flex items-center">
                    {index > 0 && <span className="mx-2 text-text">/</span>}
                    {crumb.href && !isLast ? (
                      <Link
                        href={crumb.href}
                        className="text-text hover:text-accent transition-colors duration-300"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-accent">{crumb.label}</span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}
