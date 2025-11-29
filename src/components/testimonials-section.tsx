import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Amazing quality products at great prices! The kitchen essentials I ordered exceeded my expectations. Will definitely order again.",
    author: "Sarah Johnson",
    role: "Verified Buyer",
    company: "New York, NY",
    rating: 5,
  },
  {
    quote:
      "Fast shipping and excellent customer service. The cleaning products are eco-friendly and work wonderfully. Highly recommend!",
    author: "Michael Chen",
    role: "Verified Buyer",
    company: "Los Angeles, CA",
    rating: 5,
  },
  {
    quote:
      "Best online shopping experience I've had. Products arrived perfectly packaged and exactly as described. Love the personal care items!",
    author: "Emily Rodriguez",
    role: "Verified Buyer",
    company: "Chicago, IL",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">
            Loved by <span className="text-accent">50,000+ customers</span>
          </h2>
          <p className="text-balance text-lg leading-relaxed text-muted-foreground">
            See what our satisfied customers are saying about their shopping experience
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col rounded-xl border border-border bg-card p-8 transition-all hover:border-accent/50"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mb-6 flex-1 text-pretty leading-relaxed">"{testimonial.quote}"</blockquote>
              <div>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role} · {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <p className="mb-8 text-center text-sm text-muted-foreground">Trusted brands we carry</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-50">
            <div className="text-2xl font-bold">Dove</div>
            <div className="text-2xl font-bold">Tide</div>
            <div className="text-2xl font-bold">Colgate</div>
            <div className="text-2xl font-bold">Gillette</div>
            <div className="text-2xl font-bold">Pantene</div>
          </div>
        </div>
      </div>
    </section>
  )
}
