import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { FileText, Download, ArrowRight } from "lucide-react";

export default function Resources() {
  const articles = [
    {
      title: "Why Your ERP Implementation Will Fail (And How to Fix It)",
      category: "Systems",
      date: "October 12, 2024",
      excerpt: "Most ERP projects go over budget and under deliver. The reason usually isn't the software—it's the process."
    },
    {
      title: "The 13-Week Cash Flow Forecast: Your Survival Tool",
      category: "Finance",
      date: "September 28, 2024",
      excerpt: "Profit is opinion; cash is fact. Learn how to build a forecast that gives you visibility around corners."
    },
    {
      title: "Preparing for Due Diligence: A CFO's Checklist",
      category: "Capital Raise",
      date: "September 15, 2024",
      excerpt: "Investors don't just look at growth; they look at governance. Here is what you need in your data room."
    }
  ];

  return (
    <div className="bg-white">
      <section className="bg-primary py-20 md:py-32 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Insights & Resources</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Strategic thinking for the modern executive. Download our tools or read our latest analysis.
          </p>
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="py-16 bg-accent/5 border-b border-accent/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white p-8 md:p-12 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-8">
            <div className="bg-primary/5 p-6 rounded-full shrink-0">
              <FileText className="w-12 h-12 text-accent" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-heading font-bold text-primary mb-2">Free Business Health Assessment</h2>
              <p className="text-slate-600">
                Take our comprehensive 50-point assessment to identify gaps in your financial, operational, and systems maturity. Get a personalized score and roadmap.
              </p>
            </div>
            <Link href="/book">
              <Button size="lg" className="bg-accent hover:bg-red-700 text-white rounded-none px-8 font-bold uppercase tracking-widest shrink-0">
                Request Assessment <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-heading font-bold text-primary mb-12">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <div key={i} className="group border border-slate-200 hover:border-accent transition-colors p-8 bg-white">
                <div className="text-xs font-bold text-accent uppercase tracking-widest mb-4">{article.category}</div>
                <h3 className="text-xl font-heading font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                  <a href="#">{article.title}</a>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                  <span className="text-xs text-slate-400">{article.date}</span>
                  <span className="text-xs font-bold text-primary flex items-center uppercase tracking-wider">Read <ArrowRight className="ml-2 w-3 h-3" /></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
