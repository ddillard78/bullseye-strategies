/**
 * Single source of truth for site-wide content.
 * Editing copy here updates every page that consumes it.
 */

export const BOOKING_URL = "https://calendar.app.google/BFe9tYcmiXYqoqnj9";

export const CONTACT = {
  email: "douglas@bullseyestrategies.net",
  altEmail: "info@bullseyestrategies.net",
  phone: "832-868-7347",
  phoneHref: "tel:+18328687347",
  location: "Houston, Texas 77098",
  linkedin: "https://www.linkedin.com/in/douglasdillard/",
};

export const NAV = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Blueprint", href: "/blueprint" },
  { label: "About", href: "/about" },
  { label: "Data Security", href: "/data-security" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    slug: "fractional-cfo",
    title: "Fractional CFO",
    lede: "Board-level financial leadership without a board-level salary.",
    body: "Cash flow you can forecast, a budget that survives contact with reality, and someone who can sit across from your lender and answer the hard question.",
    points: [
      "Cash flow forecasting and working capital management",
      "Budgeting, and the monthly discipline to hold to it",
      "Board and lender reporting",
      "Bank and capital relationship management",
    ],
  },
  {
    slug: "erp-implementation",
    title: "ERP Implementation",
    lede: "The system you were sold, actually delivering the numbers you need.",
    body: "Most failed ERP projects are not software problems. They are scoping, data, and change-management problems. Selection through post-go-live, with finance in the room from day one.",
    points: [
      "Needs analysis and vendor selection (NetSuite, Sage, Acumatica)",
      "Implementation project management",
      "Data migration and validation",
      "Post-go-live optimization and clean-up",
    ],
  },
  {
    slug: "fpa-analytics",
    title: "FP&A & Analytics",
    lede: "Forward-looking numbers, not a rear-view mirror.",
    body: "Financial models and dashboards built so the operator running the business can read them without a finance degree, and act on them the same week.",
    points: [
      "KPI dashboards tied to the decisions they inform",
      "Job, customer, and product profitability analysis",
      "Scenario and sensitivity modeling",
      "Variance analysis with narrative, not just numbers",
    ],
  },
  {
    slug: "sop-development",
    title: "SOP Development",
    lede: "Getting the business out of one person's head.",
    body: "Key-person risk is the quiet valuation killer in a mid-market company. We document the processes that matter, in the form the people doing the work will actually use.",
    points: [
      "Process mapping of core workflows",
      "Workflow redesign and control points",
      "Training documentation and knowledge transfer",
      "Close checklists and month-end discipline",
    ],
  },
  {
    slug: "risk-advisory",
    title: "Risk Advisory",
    lede: "Insurance structured by someone who reads the policy.",
    body: "Coverage gaps surface at the worst possible moment. We review the program you have, price what you are missing, and negotiate the structure you need.",
    points: [
      "Insurance gap analysis against your actual exposures",
      "Policy structuring and broker negotiation",
      "Enterprise risk assessment",
      "Contract and compliance review",
    ],
  },
  {
    slug: "ai-integration",
    title: "AI Integration",
    lede: "Applied where it pays for itself, and nowhere else.",
    body: "Reconciliations, variance narratives, contract review, close support. We build the workflow, teach your team to run it, and hand it over.",
    points: [
      "Practical AI roadmap tied to real cost lines",
      "Workflow automation for finance and operations",
      "Team enablement, so capability stays in-house",
      "Documented data-handling controls from day one",
    ],
  },
];

export const INDUSTRIES = [
  {
    slug: "construction",
    title: "Construction & Real Estate",
    body: "Project-based accounting lives or dies on WIP accuracy. We build the reporting that tells you which jobs are actually making money — while there is still time to do something about it.",
    tags: ["WIP Reporting", "Job Costing", "Lender Reporting", "Percentage of Completion"],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    body: "Inventory valuation and COGS accuracy determine whether your margins are real. We configure the ERP around BOM structure, production routing, and true landed cost.",
    tags: ["Inventory Control", "BOM & Routing", "Standard Costing", "Supply Chain KPIs"],
  },
  {
    slug: "energy",
    title: "Energy & Oilfield Services",
    body: "Cyclical revenue demands a balance sheet that can absorb a downturn. We manage capital intensity, equipment utilization, and the billing complexity that comes with field operations.",
    tags: ["Asset Utilization", "Field Ticket Billing", "Cyclical Cash Flow", "Capex Planning"],
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    body: "When people are the product, utilization and realization are the whole game. We build the scorecards, fix the reporting, and structure the insurance that professional firms routinely get wrong.",
    tags: ["Utilization & Realization", "Corporate Insurance", "Bank Reporting", "Scorecard Design"],
  },
];

export const BLUEPRINT = [
  {
    n: "01",
    title: "Diagnose",
    body: "A structured assessment of financials, operations, and systems. We find where the numbers stop being trustworthy and why.",
    detail: "Two to three weeks. You get a written findings document, not a verbal debrief.",
  },
  {
    n: "02",
    title: "Architect",
    body: "Design the target operating model — the reporting, the controls, the system architecture — and sequence the work by payback, not by tidiness.",
    detail: "A roadmap with owners, dependencies, and dollar impact per phase.",
  },
  {
    n: "03",
    title: "Implement",
    body: "Hands-on execution. ERP configuration, SOP rollout, financial controls, close calendar. We do the work alongside your team.",
    detail: "This is the phase most consultants hand off. It is the phase that determines whether any of it sticks.",
  },
  {
    n: "04",
    title: "Optimize",
    body: "Tighten the workflows, automate the reporting, and remove the manual steps that quietly consume your controller's month.",
    detail: "Measured against the baseline captured in Diagnose.",
  },
  {
    n: "05",
    title: "Scale",
    body: "Growth planning, capital readiness, and the operational maturity a buyer or lender will diligence you on.",
    detail: "Whether or not you are selling, this is what makes the business worth more.",
  },
];

/** Verifiable credentials — sourced from Douglas's current CV (Sept 2026). */
export const AWARDS = [
  {
    year: "2023",
    title: "Houston Sports Hall of Fame Honoree",
    detail: "Inspiring Adaptive Athlete of the Year",
  },
  {
    year: "2022",
    title: "10 Best CFOs",
    detail: "C-Level Focus Magazine",
  },
  {
    year: "2018 & 2017",
    title: "CFO of the Year Finalist",
    detail: "Houston Business Journal, twice named",
  },
];

export const SPEAKING = [
  {
    year: "2026",
    title: "CPA by the Bay — main-stage speaker",
    detail:
      "“Implementing AI and Transformation Tools from the CFO / Business Owner,” approximately 150 attendees.",
  },
  {
    year: "2025–2026",
    title: "YPO Key Associates Forum",
    detail:
      "CFO peer session on running a finance function with AI in the loop.",
  },
];

export const BOARDS = [
  {
    role: "Board Member & Treasurer",
    org: "Bee Abled, 501(c)(3)",
    years: "2022–Present",
    detail:
      "Owns budget, reporting and controls; authored the board governance package including tiered spending authorization and a bylaws amendment under Texas BOC Ch. 22.",
  },
  {
    role: "Board Member",
    org: "Stanford Alexander Center for Real Estate, University of Houston",
    years: "2023–Present",
    detail: "",
  },
  {
    role: "Board Member & Treasurer",
    org: "Achilles International Houston",
    years: "2018–2022",
    detail: "",
  },
];

export const CREDENTIALS = [
  "MBA in Accounting, University of Phoenix",
  "BS in Political Science, University of Houston",
  "Six Sigma Green Belt, University of Houston College of Technology",
  "Microsoft Dynamics NAV Certified Professional",
];

/** Concrete, attributable engagement results used in place of vague claims. */
export const PROOF = [
  {
    metric: "15 days → 5 days",
    label: "Month-end close",
    context:
      "Cosentino North America, a $350M multinational with a 25+ subsidiary consolidation group — while automating the executive reporting package.",
  },
  {
    metric: "$5M → $40M",
    label: "Revenue, in three years",
    context:
      "Moderno Porcelain Works, 2021–2024, across 13 locations each running as a distinct P&L, with gross profit margin expanding from 19% to 35%.",
  },
  {
    metric: "$400M+",
    label: "Construction financing closed",
    context:
      "DC Partners, including a $175M syndicated deal and $100M in permanent hotel financing across Houston urban-core developments.",
  },
  {
    metric: "$5M → $150M",
    label: "Monthly loan originations",
    context:
      "NRL Mortgage, after building the KPI and executive reporting framework from nothing — unit profitability improved from 0.25% to 1.00% of volume.",
  },
  {
    metric: "20%",
    label: "Overhead reduction",
    context:
      "Achieved while scaling operations, alongside an insurance program redesign (P&C, D&O, E&O, GL, pollution, K&R) saving 15%+ annually.",
  },
  {
    metric: "+25%",
    label: "Forecast accuracy",
    context:
      "From AI-powered analytics for KPI tracking and revenue forecasting across a 13-location operating portfolio.",
  },
];
