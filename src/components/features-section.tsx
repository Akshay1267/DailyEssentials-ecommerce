import { Truck, RefreshCcw, Shield, Headphones, CreditCard, Package } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Enjoy free delivery on all orders over $50. Fast and reliable shipping to your doorstep nationwide.",
  },
  {
    icon: RefreshCcw,
    title: "Easy Returns",
    description: "Not satisfied? Return any product within 30 days for a full refund. No questions asked.",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Shop with confidence. All transactions are encrypted and your payment information is protected.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our customer service team is always ready to help you with any questions or concerns.",
  },
  {
    icon: CreditCard,
    title: "Flexible Payment",
    description:
      "Multiple payment options including credit cards, debit cards, and digital wallets for your convenience.",
  },
  {
    icon: Package,
    title: "Quality Guarantee",
    description: "Every product is carefully selected and inspected to ensure you receive only the best quality.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">
            Why shop with <span className="text-accent">DailyEssentials</span>
          </h2>
          <p className="text-balance text-lg leading-relaxed text-muted-foreground">
            We make online shopping easy, secure, and enjoyable with benefits designed around your needs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
