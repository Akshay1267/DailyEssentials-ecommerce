// import { Button } from "@/components/ui/button"
import { ArrowRight, ShoppingBag } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
            <ShoppingBag className="h-4 w-4 text-accent" />
            <span className="text-muted-foreground">Free Shipping on Orders Over $50</span>
          </div>

          <h1 className="mb-6 text-balance text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Quality products for your <span className="text-accent">everyday life</span>
          </h1>

          <p className="mb-10 text-balance text-lg leading-relaxed text-muted-foreground md:text-xl">
            Discover a curated selection of daily essentials from trusted brands. Shop smart, live better with products
            that make your everyday routines easier and more enjoyable.
          </p>

          {/* CTA buttons */}
          {/* <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 text-base">
              Shop All Products
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-transparent">
              View Categories
            </Button>
          </div> */}

          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="rounded-lg border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
              <div className="mb-2 text-3xl font-bold">500+</div>
              <div className="text-sm text-muted-foreground">Quality Products</div>
            </div>
            <div className="rounded-lg border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
              <div className="mb-2 text-3xl font-bold">50k+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="rounded-lg border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
              <div className="mb-2 text-3xl font-bold">4.8★</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="rounded-lg border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
              <div className="mb-2 text-3xl font-bold">24/7</div>
              <div className="text-sm text-muted-foreground">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
