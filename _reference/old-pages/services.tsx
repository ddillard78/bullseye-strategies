import { Check, ArrowRight, Clock, DollarSign, LayoutDashboard, FileText, ShieldAlert, Users, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useEffect } from "react";
import servicesImg from "@assets/services_production_consultant.png";

export default function Services() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);
  const services = [
    {
      id: "ai",
      title: "AI Integration & Automation",
      icon: <Brain className="w-10 h-10" />,
      description: "Leverage artificial intelligence to transform your business operations. We implement AI-powered solutions for automation, analytics, and decision-making.",
      features: [
        "AI Strategy & Roadmap Development",
        "AI Teaching & Enablement",
        "Process Automation with AI",
        "Predictive Analytics & Forecasting",
        "AI-Powered Business Intelligence"
      ]
    },
    {
      id: "cfo",
      title: "Fractional CFO",
      icon: <DollarSign className="w-10 h-10" />,
      description: "High-level financial strategy without the full-time cost. We provide board-level guidance, cash flow management, and strategic planning.",
      features: [
        "Board Advisory & Governance",
        "Cash Flow Forecasting",
        "Budgeting & Strategic Planning",
        "Bank Relationship Management"
      ]
    },
    {
      id: "erp",
      title: "ERP Implementation",
      icon: <LayoutDashboard className="w-10 h-10" />,
      description: "End-to-end ERP selection and implementation support. We ensure your systems talk to each other and deliver accurate financial data.",
      features: [
        "System Selection & Needs Analysis",
        "Implementation Project Management",
        "Data Migration & Validation",
        "Post-Go-Live Optimization"
      ]
    },
    {
      id: "sop",
      title: "SOP Development",
      icon: <FileText className="w-10 h-10" />,
      description: "Documenting your core processes to ensure consistency, scalability, and reduced reliance on tribal knowledge.",
      features: [
        "Process Mapping",
        "Workflow Optimization",
        "Training Documentation",
        "Knowledge Transfer Systems"
      ]
    },
    {
      id: "fpa",
      title: "FP&A & Analytics",
      icon: <TrendingUpIcon className="w-10 h-10" />,
      description: "Turning raw data into actionable insights. We build robust financial models and real-time dashboards.",
      features: [
        "KPI Dashboard Creation",
        "Profitability Analysis",
        "Scenario Modeling",
        "Variance Analysis"
      ]
    },
    {
      id: "risk",
      title: "Risk Advisory",
      icon: <ShieldAlert className="w-10 h-10" />,
      description: "Protecting your business from the unexpected. We structure comprehensive insurance and risk management programs.",
      features: [
        "Insurance Gap Analysis",
        "Policy Structuring & Negotiation",
        "Enterprise Risk Management",
        "Compliance Review"
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-primary py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
            A comprehensive suite of financial, operational, and systems advisory services designed to scale mid-market companies.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 z-0">
          <img
            src={servicesImg}
            alt="Consultant and production supervisor reviewing data"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 40%" }}
          />
          <div className="absolute inset-0 bg-slate-50/80" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} id={service.id} className="bg-white p-8 rounded-sm shadow-sm border border-slate-200 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="absolute top-0 left-0 w-2 h-full bg-accent" />
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-500 origin-left">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">{service.title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-accent hover:text-red-700 font-bold uppercase tracking-wider text-xs transition-colors cursor-pointer group/link">
                    Discuss this service <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Single Consolidated Section */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-accent font-heading font-bold text-sm uppercase tracking-widest mb-4">Why Choose Us</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">Not just advice. Execution.</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Unlike traditional consultants who leave you with a slide deck, Bullseye Strategies partners with you to implement the solution. We roll up our sleeves and work alongside your team to ensure the systems and processes we build actually work in practice.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 bg-slate-50 border border-slate-100 text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="font-bold text-primary">Rapid Deployment</p>
              <p className="text-xs text-slate-500 mt-1">Quick time to value</p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-100 text-center">
              <DollarSign className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="font-bold text-primary">ROI Focused</p>
              <p className="text-xs text-slate-500 mt-1">Measurable outcomes</p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-100 text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="font-bold text-primary">Hands-On Partner</p>
              <p className="text-xs text-slate-500 mt-1">We work alongside you</p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-100 text-center">
              <Brain className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="font-bold text-primary">AI-Powered</p>
              <p className="text-xs text-slate-500 mt-1">Modern technology solutions</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Need a custom solution?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            We often create hybrid engagements combining Fractional CFO support with specific project deliverables like ERP implementation.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-primary hover:bg-slate-100 rounded-none px-8 font-bold uppercase tracking-widest h-12">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

function TrendingUpIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  )
}
