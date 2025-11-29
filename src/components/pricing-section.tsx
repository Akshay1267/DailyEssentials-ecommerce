// import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export function PricingSection() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">
            Get in <span className="text-accent">touch with us</span>
          </h2>
          <p className="text-balance text-lg leading-relaxed text-muted-foreground">
            Have questions? We're here to help. Reach out to our customer support team anytime.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact form */}
            <div className="rounded-xl border border-border bg-card p-8">
              <h3 className="mb-6 text-2xl font-bold">Send us a message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="How can we help you?"
                  />
                </div>
                {/* <Button className="w-full" size="lg"> */}
                  {/* Send Message */}
                {/* </Button> */}
              </form>
            </div>

            {/* Contact information */}
            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-card p-8">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Email Us</h3>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                  Our team typically responds within 24 hours
                </p>
                <a href="mailto:support@dailyessentials.com" className="text-accent hover:underline">
                  support@dailyessentials.com
                </a>
              </div>

              <div className="rounded-xl border border-border bg-card p-8">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Call Us</h3>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground">Mon-Fri from 8am to 8pm EST</p>
                <a href="tel:+18005551234" className="text-accent hover:underline">
                  +1 (800) 555-1234
                </a>
              </div>

              <div className="rounded-xl border border-border bg-card p-8">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Visit Us</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  123 Commerce Street
                  <br />
                  New York, NY 10001
                  <br />
                  United States
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
