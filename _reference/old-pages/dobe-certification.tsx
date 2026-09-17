import { Award, CheckCircle2, Building2, Handshake, FileCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { DOBE_FAQS as FAQS } from "@shared/dobe";

// FAQPage JSON-LD is injected server-side for this route (see server/seoMeta.ts),
// so crawlers that don't execute JavaScript still receive the structured data.
// document.title is kept in sync by usePageMeta (client/src/hooks/use-page-meta.ts).
export default function DobeCertification() {

  return (
    <div className="bg-white">
      {/* Hero / Direct answer */}
      <section className="bg-primary text-white py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Award className="w-4 h-4 text-accent" />
            <span className="text-xs font-semibold uppercase tracking-widest">Disability:IN Certified</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-bold leading-tight mb-6">
            Certified Disability-Owned Business Enterprise (DOBE®)
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed" data-testid="text-dobe-direct-answer">
            Bullseye Strategies, LLC is a certified Disability-Owned Business Enterprise (DOBE®), certified
            by Disability:IN — Certificate US01708, valid through July 30, 2029. Engaging Bullseye Strategies
            qualifies as Tier 1 diverse supplier spend for corporate supplier-diversity programs.
          </p>
        </div>
      </section>

      {/* Key facts */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <p className="text-2xl md:text-3xl font-heading font-bold text-primary">US01708</p>
              <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Certificate Number</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-heading font-bold text-primary">2029</p>
              <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Valid Through July 30</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-heading font-bold text-primary">&lt;1,100</p>
              <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Certified DOBEs Worldwide</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-heading font-bold text-primary">51%+</p>
              <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Disability Owned &amp; Led</p>
            </div>
          </div>
        </div>
      </section>

      {/* What it means + certificate */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-accent font-heading font-bold text-sm uppercase tracking-widest">What DOBE Certification Means</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary">A verified diversity credential, not a self-declared one</h3>
              <p className="text-slate-600 leading-relaxed">
                Disability:IN — the leading global nonprofit for business disability inclusion — certifies a
                business as a DOBE® only after verifying that it is at least 51% owned, operated, controlled,
                and managed by a person with a disability. Fewer than 1,100 businesses in more than 50
                countries hold this certification.
              </p>
              <p className="text-slate-600 leading-relaxed">
                For Bullseye Strategies, the certification reflects founder Douglas Dillard's lived experience:
                an award-winning CFO and 50+ time marathon competitor who built a consulting practice on
                precision, resilience, and execution.
              </p>
              <div className="space-y-3">
                {[
                  "Certified by Disability:IN — Certificate US01708",
                  "Signed by Jill Houghton, President & CEO, Disability:IN",
                  "Valid through July 30, 2029",
                ].map((line) => (
                  <div key={line} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-slate-700">{line}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-4 left-4 w-full h-full border-2 border-accent z-0" />
              <a href="/dobe-certificate.jpeg" target="_blank" rel="noopener noreferrer" data-testid="link-dobe-certificate">
                <img
                  src="/dobe-certificate.jpeg"
                  alt="Disability:IN DOBE certificate US01708 recognizing Bullseye Strategies, LLC as a Certified Disability-Owned Business Enterprise, valid through July 30, 2029"
                  className="w-full h-auto relative z-10 shadow-lg bg-white"
                  data-testid="img-dobe-certificate"
                />
              </a>
              <p className="text-xs text-slate-400 mt-6 text-center relative z-10">Click the certificate to view full size</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for clients */}
      <section className="py-20 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-accent font-heading font-bold text-sm uppercase tracking-widest mb-4">Why It Matters to Your Company</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold">Supplier diversity impact with every engagement</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/5 p-8 border border-white/10">
              <Building2 className="w-8 h-8 text-accent mb-4" />
              <h4 className="font-heading font-bold text-xl mb-3">Tier 1 Diverse Spend</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Engagements with Bullseye Strategies count as Tier 1 disability-owned supplier spend —
                directly reportable in your supplier-diversity and ESG programs.
              </p>
            </div>
            <div className="bg-white/5 p-8 border border-white/10">
              <FileCheck className="w-8 h-8 text-accent mb-4" />
              <h4 className="font-heading font-bold text-xl mb-3">Contract &amp; RFP Advantage</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Many enterprise and government contracts include diverse-supplier requirements or scoring.
                A certified DOBE partner strengthens those submissions.
              </p>
            </div>
            <div className="bg-white/5 p-8 border border-white/10">
              <Handshake className="w-8 h-8 text-accent mb-4" />
              <h4 className="font-heading font-bold text-xl mb-3">Same Elite Expertise</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                The certification is in addition to — never instead of — results: 600% revenue growth
                engineered, $460M+ capital secured, 20+ years of CFO leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-accent font-heading font-bold text-sm uppercase tracking-widest mb-4">Common Questions</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary">DOBE Certification FAQ</h3>
          </div>
          <div className="space-y-8">
            {FAQS.map((f) => (
              <div key={f.q} className="border-b border-slate-200 pb-8">
                <h4 className="font-heading font-bold text-lg text-primary mb-3">{f.q}</h4>
                <p className="text-slate-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50 text-center border-t border-slate-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">Add a certified DOBE to your supplier network</h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Schedule a complimentary discovery call to discuss fractional CFO, ERP, and operational consulting — and strengthen your supplier diversity program at the same time.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-red-700 text-white rounded-none px-10 h-14 font-bold uppercase tracking-widest">
            <Link href="/book">
              Schedule a Discovery Call <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
