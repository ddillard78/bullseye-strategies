import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { HardHat, Factory, Droplets, Briefcase, ArrowRight } from "lucide-react";
import constructionImg from "@assets/industry_construction.png";
import manufacturingImg from "@assets/industry_manufacturing.png";
import energyImg from "@assets/industry_energy.png";
import professionalImg from "@assets/industry_professional.png";

export default function Industries() {
  const industries = [
    {
      title: "Construction & Real Estate",
      icon: <HardHat className="w-12 h-12" />,
      desc: "Project-based accounting, WIP reporting, and job costing are critical. We provide real-time visibility into project profitability with expert financial oversight.",
      stats: ["WIP Reporting", "Job Costing", "Lender Reporting"],
      bgImg: constructionImg
    },
    {
      title: "Manufacturing",
      icon: <Factory className="w-12 h-12" />,
      desc: "Inventory management and COGS accuracy can make or break you. We optimize ERPs for BOM management, production planning, and precise margin analysis.",
      stats: ["Inventory Control", "Cost Accounting", "Supply Chain KPIs"],
      bgImg: manufacturingImg
    },
    {
      title: "Energy & Oilfield Services",
      icon: <Droplets className="w-12 h-12" />,
      desc: "Cyclical markets require resilient balance sheets. We help you manage capital intensity, equipment utilization, and complex billing structures.",
      stats: ["Asset Utilization", "Complex Billing", "Cyclical Cash Flow"],
      bgImg: energyImg
    },
    {
      title: "Professional Services",
      icon: <Briefcase className="w-12 h-12" />,
      desc: "People are your product. We focus on corporate insurance structures, ERP decisions and implementations, reporting for banks, scorecard development, and FP&A.",
      stats: ["Corporate Insurance", "ERP Implementation", "Bank Reporting", "Scorecard Dev", "FP&A"],
      bgImg: professionalImg
    }
  ];

  return (
    <div className="bg-white">
      <section className="bg-primary py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/50 z-0" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Industries Served</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Deep sector expertise. We understand the specific KPIs, risks, and systems that drive value in your industry.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((ind, i) => (
              <div key={i} className="group relative overflow-hidden border border-slate-200 hover:border-accent transition-all duration-300 hover:shadow-lg">
                <img
                  src={ind.bgImg}
                  alt={ind.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-50/85 group-hover:bg-slate-50/80 transition-all duration-300" />
                <div className="relative z-10 p-8">
                  <div className="text-primary group-hover:text-accent transition-colors mb-6">
                    {ind.icon}
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-primary mb-4">{ind.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {ind.desc}
                  </p>
                  <div className="space-y-2 pt-6 border-t border-slate-200">
                    {ind.stats.map((stat, j) => (
                      <div key={j} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                        <div className="w-1 h-1 rounded-full bg-accent" />
                        {stat}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Don't see your industry?</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Financial physics apply across all sectors. If you have revenue, complexity, and growth ambitions, we can help.
          </p>
          <Link href="/contact">
             <Button className="bg-primary text-white hover:bg-primary/90 rounded-none px-8 uppercase tracking-widest font-bold">
               Contact Us
             </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
