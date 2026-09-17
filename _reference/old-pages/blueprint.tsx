import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Target, Search, PenTool, Settings, LineChart } from "lucide-react";
import blueprintImg from "@assets/generated_images/bullseye_blueprint_methodology_infographic_concept.png";

export default function Blueprint() {
  return (
    <div className="bg-white">
      <section className="bg-primary py-20 md:py-32 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">The Bullseye Blueprint</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Our proprietary methodology for aligning financial strategy, operational execution, and technology infrastructure.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center mb-20">
            <img 
              src={blueprintImg} 
              alt="Bullseye Blueprint Diagram" 
              className="max-w-3xl w-full h-auto rounded-sm shadow-2xl border border-slate-100 mb-12"
            />
            <p className="text-slate-600 text-center max-w-3xl text-lg">
              Most consultants solve one piece of the puzzle. We solve the whole picture. The Bullseye Blueprint ensures that every financial goal is supported by an operational process and measured by a reliable system.
            </p>
          </div>

          <div className="space-y-8 md:space-y-16">
            
            {[
              {
                step: "01",
                title: "Diagnose",
                icon: <Search className="w-6 h-6" />,
                desc: "We start with a deep dive into your financials, operations, and tech stack. We identify the leaks, the bottlenecks, and the hidden risks.",
                deliverable: "Deliverable: Business Health Assessment Report"
              },
              {
                step: "02",
                title: "Architect",
                icon: <PenTool className="w-6 h-6" />,
                desc: "We design the 'To-Be' state. This includes the ideal organizational structure, the technology roadmap, and the financial model for growth.",
                deliverable: "Deliverable: Strategic Roadmap & Forecast"
              },
              {
                step: "03",
                title: "Implement",
                icon: <Settings className="w-6 h-6" />,
                desc: "The heavy lifting. We configure the ERP, write the SOPs, clean the data, and train the team. We don't leave until it works.",
                deliverable: "Deliverable: Live Systems & Documented Processes"
              },
              {
                step: "04",
                title: "Optimize",
                icon: <LineChart className="w-6 h-6" />,
                desc: "We refine the machine. We build dashboards, automate reporting, and establish a rhythm of monthly financial reviews.",
                deliverable: "Deliverable: Automated KPI Dashboards"
              },
              {
                step: "05",
                title: "Scale",
                icon: <Target className="w-6 h-6" />,
                desc: "With the foundation set, we focus on capital allocation, M&A, or exit planning. Your business is now an investable asset.",
                deliverable: "Deliverable: Capital Raise / Exit Strategy"
              }
            ].map((item, index) => (
              <div key={index} className="relative group" data-testid={`phase-${item.step}`}>
                
                {/* Mobile Layout */}
                <div className="md:hidden flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                    <div className="w-px flex-1 bg-slate-200 group-last:hidden" />
                  </div>
                  <div className="space-y-3 pb-8">
                    <span className="text-accent font-bold text-sm tracking-widest uppercase">Phase {item.step}</span>
                    <h3 className="text-2xl font-heading font-bold text-primary">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                    <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold border border-slate-200 mt-2">
                      {item.deliverable}
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-12 md:items-start">
                  {/* Left Content */}
                  <div className={`text-right ${index % 2 === 0 ? '' : 'order-3 text-left'}`}>
                    {index % 2 === 0 && (
                      <div className="space-y-3">
                        <span className="text-accent font-bold text-sm tracking-widest uppercase">Phase {item.step}</span>
                        <h3 className="text-2xl font-heading font-bold text-primary">{item.title}</h3>
                        <p className="text-slate-600">{item.desc}</p>
                        <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold border border-slate-200 mt-2">
                          {item.deliverable}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Center Icon */}
                  <div className="order-2 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-white border-2 border-primary flex items-center justify-center relative z-10 group-hover:border-accent group-hover:scale-110 transition-all duration-300">
                      <div className="text-primary group-hover:text-accent transition-colors">
                        {item.icon}
                      </div>
                    </div>
                    <div className="w-px flex-1 bg-slate-200 mt-4 group-last:hidden" style={{minHeight: '60px'}} />
                  </div>

                  {/* Right Content */}
                  <div className={`text-left ${index % 2 === 0 ? 'order-3' : 'order-1 text-right'}`}>
                    {index % 2 !== 0 && (
                      <div className="space-y-3">
                        <span className="text-accent font-bold text-sm tracking-widest uppercase">Phase {item.step}</span>
                        <h3 className="text-2xl font-heading font-bold text-primary">{item.title}</h3>
                        <p className="text-slate-600">{item.desc}</p>
                        <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold border border-slate-200 mt-2">
                          {item.deliverable}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 text-center">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl font-heading font-bold text-primary mb-6">See how the Blueprint applies to your business</h2>
           <Link href="/contact">
             <Button size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-none px-10 font-bold uppercase tracking-widest h-14">
               Get a Blueprint Assessment
             </Button>
           </Link>
        </div>
      </section>
    </div>
  );
}
