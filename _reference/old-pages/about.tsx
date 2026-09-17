import { Linkedin, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import founderImg from "@assets/Doug_Dillard_1765144821802.jpeg";
import marathonImg from "@assets/103965_33954188_3343058216_(1)_1770951899115.JPG";

export default function About() {
  return (
    <div className="bg-white">
      {/* Founder Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 bottom-0 w-1/2 z-0 hidden md:block">
          <img
            src={marathonImg}
            alt="Douglas Dillard racing in marathon"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 15%" }}
          />
          <div className="absolute inset-0 bg-white/70" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative">
              <div className="absolute top-4 left-4 w-full h-full border-2 border-accent z-0" />
              <img 
                src={founderImg}
                alt="Douglas Dillard - Founder" 
                className="w-full h-auto relative z-10 transition-all duration-500 shadow-lg"
              />
            </div>
            <div className="space-y-5 md:space-y-6">
              <h2 className="text-accent font-heading font-bold text-sm uppercase tracking-widest">The Founder</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary">Douglas Dillard, MBA</h3>
              <div className="w-20 h-1 bg-primary" />
              <p className="text-slate-600 leading-relaxed">
                Douglas is an award-winning CFO with over 20 years of experience driving financial strategy and operational excellence across high-growth companies ranging from $5M to $350M in revenue.
              </p>
              <p className="text-slate-600 leading-relaxed">
                His track record speaks for itself: engineering 600% revenue growth, improving EBITDA margins from 19% to 35%, and securing over $460M in capital financing.
              </p>
              <p className="text-slate-600 leading-relaxed">
                What distinguishes Douglas is his ability to operate at both strategic and execution levels—equally comfortable presenting to the Board of Directors as he is mapping out SOPs on a whiteboard or configuring an ERP system.
              </p>
              <p className="text-slate-600 leading-relaxed font-medium italic">
                "I built Bullseye to be the partner I always wished I had as a CFO—someone who understands the numbers but also knows how to fix the engine."
              </p>

              {/* Marathon image - mobile only */}
              <div className="block md:hidden relative">
                <div className="absolute top-3 left-3 w-full h-full border-2 border-accent z-0" />
                <img
                  src={marathonImg}
                  alt="Douglas Dillard racing in marathon wheelchair"
                  className="w-full h-auto relative z-10 shadow-lg"
                  style={{ objectPosition: "center 15%" }}
                />
              </div>

              <div className="pt-4 md:pt-6 flex gap-4">
                <div className="flex flex-col">
                   <span className="font-bold text-primary text-lg">20+</span>
                   <span className="text-xs text-slate-500 uppercase">Years Exp</span>
                </div>
                <div className="w-px h-10 bg-slate-200" />
                <div className="flex flex-col">
                   <span className="font-bold text-primary text-lg">50+</span>
                   <span className="text-xs text-slate-500 uppercase">Marathons</span>
                </div>
                <div className="w-px h-10 bg-slate-200" />
                <div className="flex flex-col">
                   <span className="font-bold text-primary text-lg">MBA</span>
                   <span className="text-xs text-slate-500 uppercase">Business</span>
                </div>
              </div>
              <a
                href="https://www.linkedin.com/in/douglasdillard/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-linkedin"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A66C2] hover:bg-[#004182] text-white text-sm font-bold uppercase tracking-wider transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DOBE Certification */}
      <section className="py-16 bg-slate-50 border-y border-slate-200" data-testid="section-about-dobe">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shrink-0">
              <Award className="w-10 h-10 text-accent" />
            </div>
            <div className="flex-1 space-y-2">
              <h3 className="text-2xl font-heading font-bold text-primary">A Certified Disability-Owned Business</h3>
              <p className="text-slate-600 leading-relaxed">
                Bullseye Strategies, LLC is a certified Disability-Owned Business Enterprise (DOBE®),
                certified by Disability:IN — Certificate US01708, valid through July 30, 2029. Douglas's
                resilience isn't a slogan; it's lived experience, on the racecourse and in the boardroom.
              </p>
            </div>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-none px-8 uppercase tracking-widest font-bold text-xs h-12 shrink-0">
              <Link href="/dobe-certified">
                View Certification <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-accent font-heading font-bold text-sm uppercase tracking-widest mb-4">Our DNA</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold">Precision. Resilience. Integrity.</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 border border-white/10 hover:border-accent/50 transition-colors">
              <h4 className="font-heading font-bold text-xl mb-4">Integrated Thinking</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                We reject silos. Finance must understand Operations. Operations must understand Tech. We connect the dots that others miss.
              </p>
            </div>
            <div className="bg-white/5 p-8 border border-white/10 hover:border-accent/50 transition-colors">
              <h4 className="font-heading font-bold text-xl mb-4">Bias for Action</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Strategy without execution is hallucination. We are builders who deliver tangible assets—models, manuals, systems, and capital.
              </p>
            </div>
            <div className="bg-white/5 p-8 border border-white/10 hover:border-accent/50 transition-colors">
              <h4 className="font-heading font-bold text-xl mb-4">Radical Candor</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                We tell you what you need to hear, not just what you want to hear. Real growth requires facing the brutal facts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white text-center">
         <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-primary mb-8">Ready to work with us?</h2>
            <Link href="/book">
              <Button size="lg" className="bg-accent hover:bg-red-700 text-white rounded-none px-10 h-14 font-bold uppercase tracking-widest">
                Schedule a Discovery Call
              </Button>
            </Link>
         </div>
      </section>
    </div>
  );
}
