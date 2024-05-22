import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/`,
      label: "Home",
      active: pathname === `/`,
    },
    {
      href: `/about`,
      label: "About",
      active: pathname === `/about`,
    },
    {
      href: `/gallery`,
      label: "Gallery",
      active: pathname === `/gallery`,
    },
    {
      href: `/contact`,
      label: "Contact",
      active: pathname === `/contact`,
    },
  ];

  return (
    <nav
      className={cn(
        "hidden md:flex items-center space-x-20 lg:space-x-24",
        className
      )}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-lg font-medium transition-colors hover:text-primary",
            route.active
              ? "text-[#FF8A00] dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
