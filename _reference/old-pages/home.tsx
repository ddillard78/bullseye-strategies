import { ArrowRight, TrendingUp, ShieldCheck, Settings, BarChart3, Layers, Target, CheckCircle2, Quote, Search, Compass, Wrench, Zap, Rocket, Lightbulb, Sparkles, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import heroImg from "@assets/hero_executives_teaching.png";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Finance executive teaching at computer screen" 
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 30%" }}
          />
          <div className="absolute inset-0 bg-primary/75" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 py-20">
          <div className="max-w-3xl space-y-8 animate-in slide-in-from-bottom-10 duration-700 fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-accent-foreground">Accepting Clients for Q1 2026</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] tracking-tight">
              AI Technology, Teaching, Structuring, Leading, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                Operational and Profitability Maximization
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Bullseye Strategies integrates Fractional CFO leadership, ERP implementation, Operational discipline, and AI to drive valuation and growth for mid-market companies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/book">
                <Button size="lg" className="bg-accent hover:bg-red-700 text-white rounded-none px-8 h-14 text-sm font-bold uppercase tracking-wider shadow-lg hover:shadow-accent/20 transition-all">
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 rounded-none px-8 h-14 text-sm font-bold uppercase tracking-wider backdrop-blur-sm">
                  Explore Services
                </Button>
              </Link>
            </div>

            <div className="pt-12 flex items-center gap-8 border-t border-white/10">
              <div className="text-white">
                <p className="text-3xl font-heading font-bold">600%</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">Revenue Growth</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-white">
                <p className="text-3xl font-heading font-bold">20+</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">Years Experience</p>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <Link href="/dobe-certified" className="hidden sm:block text-white group cursor-pointer" data-testid="link-hero-dobe">
                <p className="text-3xl font-heading font-bold group-hover:text-accent transition-colors">DOBE®</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">Certified Disability-Owned</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-accent font-heading font-bold text-sm uppercase tracking-widest">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary">Integrated Consulting Model</h3>
            <p className="text-slate-600">
              We combine the strategic foresight of a CFO with the operational discipline of a COO and the technical precision of a Systems Architect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<TrendingUp className="w-8 h-8" />}
              title="Fractional CFO"
              description="Strategic financial planning, cash flow management, and board advisory for growth-stage companies."
              href="/services#cfo"
            />
            <ServiceCard 
              icon={<Settings className="w-8 h-8" />}
              title="ERP Implementation"
              description="Selection, implementation, and optimization of ERP systems (NetSuite, Sage, Acumatica) aligned with finance."
              href="/services#erp"
            />
            <ServiceCard 
              icon={<Layers className="w-8 h-8" />}
              title="SOP Development"
              description="Documenting and optimizing core business processes to scale operations and reduce key-person risk."
              href="/services#sop"
            />
            <ServiceCard 
              icon={<BarChart3 className="w-8 h-8" />}
              title="FP&A & Dashboards"
              description="Building forward-looking financial models and real-time KPI dashboards for data-driven decisions."
              href="/services#fpa"
            />
            <ServiceCard 
              icon={<ShieldCheck className="w-8 h-8" />}
              title="Risk Advisory"
              description="Structuring insurance programs and risk management strategies to protect enterprise value."
              href="/services#risk"
            />
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/services">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-none px-8 uppercase tracking-widest font-bold text-xs h-12">
                View All Services <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-accent font-heading font-bold text-sm uppercase tracking-widest mb-4">The Methodology</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">The Bullseye Blueprint</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Financial strategy cannot exist in a vacuum. Our proprietary 5-step methodology aligns your financial goals with operational reality and system capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 mb-12">
            {[
              { icon: <Search className="w-8 h-8" />, title: "Diagnose", desc: "Deep dive assessment of financials, operations, and technology stack." },
              { icon: <Compass className="w-8 h-8" />, title: "Architect", desc: "Designing the target operating model and technology roadmap." },
              { icon: <Wrench className="w-8 h-8" />, title: "Implement", desc: "Hands-on execution of ERPs, SOPs, and financial controls." },
              { icon: <Zap className="w-8 h-8" />, title: "Optimize", desc: "Refining workflows, automating reporting, and driving efficiency." },
              { icon: <Rocket className="w-8 h-8" />, title: "Scale", desc: "Growth strategy, operational excellence, and exit readiness." }
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="bg-slate-50 border border-slate-100 p-8 h-full text-center hover:shadow-lg hover:border-accent/30 transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors duration-300">
                    <span className="text-xl font-bold">{i + 1}</span>
                  </div>
                  <div className="text-primary mb-3 flex justify-center group-hover:text-accent transition-colors duration-300">
                    {step.icon}
                  </div>
                  <h4 className="font-heading font-bold text-primary text-lg mb-2">{step.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
                {i < 4 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5 text-accent" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button className="bg-primary text-white hover:bg-primary/90 rounded-none px-8 uppercase tracking-wider text-xs font-bold h-12">
                Learn More About The Process
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* DOBE Certification Highlight */}
      <section className="py-16 bg-slate-50 border-y border-slate-200" data-testid="section-dobe-highlight">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shrink-0">
              <Award className="w-10 h-10 text-accent" />
            </div>
            <div className="flex-1 space-y-2">
              <h3 className="text-2xl font-heading font-bold text-primary">Certified Disability-Owned Business Enterprise (DOBE®)</h3>
              <p className="text-slate-600 leading-relaxed">
                Bullseye Strategies is certified by Disability:IN as a Disability-Owned Business Enterprise
                — one of fewer than 1,100 worldwide. Engaging us counts as Tier 1 diverse supplier spend for
                your supplier-diversity and ESG programs.
              </p>
            </div>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-none px-8 uppercase tracking-widest font-bold text-xs h-12 shrink-0">
              <Link href="/dobe-certified">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Daily CFO AI Tip */}
      <DailyTipSection />

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-1/3" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">Ready to hit your target?</h2>
          <p className="text-slate-300 text-lg">
            Schedule a complimentary discovery call to assess your financial and operational maturity.
          </p>
          <Link href="/book">
            <Button size="lg" className="bg-accent hover:bg-red-700 text-white rounded-none px-10 h-16 text-base font-bold uppercase tracking-widest shadow-xl">
              Start The Conversation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

function DailyTipSection() {
  const { data: tip, isLoading, isError } = useQuery({
    queryKey: ["/api/daily-tip"],
    queryFn: async () => {
      const res = await fetch("/api/daily-tip");
      if (!res.ok) throw new Error("Failed to fetch daily tip");
      return res.json();
    },
    staleTime: 1000 * 60 * 30,
    retry: 1,
  });

  if (isLoading) {
    return (
      <section className="py-24 bg-[#1B2A4A]" data-testid="daily-tip-loading">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="animate-pulse space-y-4">
            <div className="h-6 bg-white/10 rounded w-48 mx-auto" />
            <div className="h-8 bg-white/10 rounded w-96 mx-auto" />
            <div className="h-32 bg-white/10 rounded max-w-2xl mx-auto" />
          </div>
        </div>
      </section>
    );
  }

  if (isError || !tip) {
    return (
      <section className="py-24 bg-[#1B2A4A]" data-testid="daily-tip-error">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4A843]/10 border border-[#D4A843]/20 mb-6">
            <Sparkles className="w-4 h-4 text-[#D4A843]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4A843]">AI-Generated Daily Insight</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            CFO Tip of the Day
          </h2>
          <div className="max-w-xl mx-auto flex items-start gap-4 bg-white/5 border border-white/10 rounded-sm p-6 text-left">
            <div className="mt-1 p-2 rounded-full bg-[#D4A843]/20 flex-shrink-0">
              <Lightbulb className="w-6 h-6 text-[#D4A843]" />
            </div>
            <p className="text-slate-300 leading-relaxed">
              Today's insight is taking a moment to load. Check back shortly — our AI-powered CFO tips cover cash flow, forecasting, and strategic finance topics to keep your business ahead.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const contentLines = tip.content.split("\n").filter((l: string) => l.trim());
  const hookLine = contentLines[0] || "";
  const bodyLines = contentLines.slice(1, -1).join("\n");
  const hashtagLine = contentLines[contentLines.length - 1] || "";
  const hasHashtags = hashtagLine.includes("#");

  return (
    <section className="py-24 bg-[#1B2A4A] relative overflow-hidden" data-testid="daily-tip-section">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#D4A843] blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-[#2A9D8F] blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4A843]/10 border border-[#D4A843]/20 mb-6">
            <Sparkles className="w-4 h-4 text-[#D4A843]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4A843]">AI-Generated Daily Insight</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
            CFO Tip of the Day
          </h2>
          <p className="text-slate-400 text-sm">
            {tip.dayOfWeek}'s {tip.tipType} · {tip.topic}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tip.hasImage && (
            <div className="lg:col-span-1 flex items-center justify-center">
              <div className="w-full max-w-sm rounded-sm overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="/api/daily-tip/image"
                  alt={`AI illustration for ${tip.topic}`}
                  className="w-full h-auto"
                  data-testid="daily-tip-image"
                  loading="lazy"
                />
              </div>
            </div>
          )}
          
          <div className={`${tip.hasImage ? 'lg:col-span-2' : 'lg:col-span-3 max-w-3xl mx-auto'} space-y-6`}>
            <div className="flex items-start gap-4">
              <div className="mt-1 p-2 rounded-full bg-[#D4A843]/20 flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-[#D4A843]" />
              </div>
              <p
                className="text-xl md:text-2xl font-heading font-bold text-white leading-tight"
                data-testid="daily-tip-hook"
                dangerouslySetInnerHTML={{
                  __html: hookLine
                    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
                    .replace(/\*(.+?)\*/g, "<em>$1</em>"),
                }}
              />
            </div>

            <div className="pl-16 space-y-4">
              <div
                className="text-slate-300 leading-relaxed whitespace-pre-line text-base [&_strong]:text-white [&_strong]:font-semibold"
                data-testid="daily-tip-body"
                dangerouslySetInnerHTML={{
                  __html: bodyLines
                    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
                    .replace(/\*(.+?)\*/g, "<em>$1</em>"),
                }}
              />
              
              {hasHashtags && (
                <p className="text-[#2A9D8F] text-sm font-medium" data-testid="daily-tip-hashtags">
                  {hashtagLine}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description, href }: { icon: React.ReactNode, title: string, description: string, href: string }) {
  return (
    <Link href={href} className="block cursor-pointer">
      <div className="group bg-white p-8 border border-slate-100 shadow-sm hover:shadow-md hover:border-accent/50 transition-all duration-300 relative overflow-hidden h-full">
        <div className="absolute top-0 left-0 w-1 h-0 bg-accent group-hover:h-full transition-all duration-300" />
        <div className="mb-6 text-primary group-hover:text-accent transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-heading font-bold text-primary mb-3">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
        <div className="mt-6 pt-6 border-t border-slate-100 flex items-center text-accent text-xs font-bold uppercase tracking-widest">
          Learn more <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
