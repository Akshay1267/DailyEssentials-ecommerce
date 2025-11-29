import { Button } from "@/components/ui/button"
import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl">
      <div className="rounded-2xl border border-border/40 bg-background/80 backdrop-blur-lg shadow-lg px-4 py-4">
        <div className="flex items-center justify-between">

          {/* Logo + Name */}
          <div className="flex items-center gap-2">

            {/* LOGO */}
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent overflow-hidden">
              <Image
                src="/logo.png"
                alt="Logo"
                width={35}
                height={40}
              />
            </div>

            <span className="text-xl font-semibold">DailyEssentials</span>
          </div>

          {/* Nav Menu */}
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#products" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Products
            </a>
            <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Why Us
            </a>
            <a href="#testimonials" className="text-sm text-muted-foreground transition-colors hover:text-foreground " >
              Reviews
            </a>
            <a href="#contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Contact
            </a>
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-4">

            {/* Search */}
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="hidden md:inline-flex relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-accent text-[10px] font-bold text-accent-foreground flex items-center justify-center">
                0
              </span>
            </Button>

            {/* Shop Now */}
            <Button>Shop Now</Button>

            {/* Mobile Menu */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>

          </div>
        </div>
      </div>
    </header>
  )
}
