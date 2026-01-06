import Link from "next/link";

const nav = [
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/publications", label: "Publications" },
  { href: "/certificates", label: "Certificates" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center px-6 py-4">
        {/* Name — aligned with content start */}
        <Link href="/" className="text-sm font-semibold text-zinc-900">
          Nitin Singh Rathore
        </Link>

        {/* Nav — pushed to content edge */}
        <nav className="ml-auto hidden items-center gap-3 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="
                rounded-full
                border border-zinc-200
                bg-white
                px-3.5 py-1.5
                text-sm font-medium
                text-zinc-800
                hover:bg-zinc-100
                hover:border-zinc-300
                transition
              "
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

