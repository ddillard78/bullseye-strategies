import { Shield, Lock, Eye, Trash2, Server, CheckCircle2, XCircle, ChevronDown, ExternalLink, FileText, Users, Database, AlertTriangle } from "lucide-react";
import { useState } from "react";
import vaultImg from "@assets/data_security_vault.png";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-slate-200 bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-slate-50 transition-colors"
        data-testid={`faq-toggle-${question.slice(0, 20).replace(/\s+/g, '-').toLowerCase()}`}
      >
        <span className="font-bold text-primary pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-accent shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function DataSecurity() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-primary py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={vaultImg}
            alt="Bank vault door"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-10 h-10 text-accent" />
            <span className="text-accent font-heading font-bold text-sm uppercase tracking-widest">Data Security & Privacy</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Client Data Security & Privacy
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            How We Protect Your Information When Leveraging AI-Powered Financial Analysis
          </p>
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-sm backdrop-blur-sm">
            <FileText className="w-4 h-4 text-accent" />
            <span className="text-white text-sm">February 2026 &nbsp;|&nbsp; Version 1.0</span>
          </div>
        </div>
      </section>

      {/* Commitment Banner */}
      <section className="bg-slate-50 border-b border-slate-200 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <Lock className="w-6 h-6 text-accent" />
              <h2 className="text-accent font-heading font-bold text-sm uppercase tracking-widest">Our Commitment</h2>
            </div>
            <p className="text-xl md:text-2xl font-heading font-bold text-primary leading-relaxed">
              Bullseye Strategies does not store your data. We use AI as a tool, not a vault. Your files are analyzed temporarily, results are delivered to your secure environment, and working sessions are deleted.
            </p>
          </div>
        </div>
      </section>

      {/* Letter to Clients */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">A Letter to Our Clients</h2>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                At Bullseye Strategies, we leverage advanced artificial intelligence to deliver financial analysis, strategic consulting, and operational insights that would traditionally require days or weeks of manual work. We use Claude, built by Anthropic, as our primary AI analysis platform.
              </p>
              <p>
                We understand that handing over financial statements, general ledger detail, board reports, and other sensitive business information requires trust. This document explains, in plain language, exactly how your data is handled, where it goes, and what protections are in place to keep it safe.
              </p>
              <p className="font-semibold text-primary italic">
                The short version: We treat your data the way we treat our own. It comes in, we do the work, the results go back to you, and the working session is wiped clean.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Use AI */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-accent font-heading font-bold text-sm uppercase tracking-widest mb-4">The Process</h2>
            <h3 className="text-3xl font-heading font-bold text-primary mb-6">How We Use AI to Analyze Your Data</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-12">
              Think of our process like bringing documents to a meeting room. You bring the files in, we work on them together at the table, we hand you back the finished product, and then the room is cleared. Nothing stays behind.
            </p>

            <div className="space-y-0">
              {[
                { step: "1", title: "You provide the source files", desc: "You send us the documents that need analysis — financial statements, GL exports, contracts, board materials, or any other business data." },
                { step: "2", title: "We upload them into a temporary AI session", desc: "Your files are loaded into a private Claude session solely for the purpose of performing the requested analysis. This session is encrypted and isolated — no other user, client, or Anthropic employee can see it." },
                { step: "3", title: "The analysis is performed", desc: "Claude processes your data and produces the deliverable — whether that's a variance analysis, a board report, a contract review, a cost trend breakdown, or any other work product." },
                { step: "4", title: "Results are exported to your secure storage", desc: "The finished work product is delivered directly into your company's secure storage environment." },
                { step: "5", title: "The working session is deleted", desc: "Once the deliverable has been exported and confirmed, the Claude conversation — including all uploaded files, prompts, and outputs — is permanently deleted. Your data does not remain in the AI platform." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 pb-8 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">
                      {item.step}
                    </div>
                    {i < 4 && <div className="w-0.5 h-full bg-slate-200 mt-2" />}
                  </div>
                  <div className="pb-4">
                    <h4 className="font-bold text-primary text-lg mb-2">{item.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do / Don't Do */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-primary mb-10 text-center">What We Do With Your Data</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-50 border border-red-100 p-8">
                <h3 className="font-heading font-bold text-primary text-lg mb-6 flex items-center gap-2">
                  <XCircle className="w-6 h-6 text-red-500" />
                  We NEVER Do This
                </h3>
                <ul className="space-y-4">
                  {[
                    "Store your files in AI systems permanently",
                    "Allow AI to train on your data",
                    "Share your information with other clients",
                    "Leave your data accessible on the open internet",
                    "Use your data for any purpose other than the work you hired us to do",
                    "Store credentials, account numbers, or passwords"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <XCircle className="w-4 h-4 text-red-500 mt-1 shrink-0" />
                      <span className="text-slate-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-50 border border-green-100 p-8">
                <h3 className="font-heading font-bold text-primary text-lg mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  We ALWAYS Do This
                </h3>
                <ul className="space-y-4">
                  {[
                    "Delete working sessions after deliverables are exported",
                    "Use platforms that contractually prohibit training on client data",
                    "Maintain isolated, encrypted sessions per engagement",
                    "Export results behind your firewall or secured cloud storage",
                    "Process only what is necessary for the specific task at hand",
                    "Advise you to enter sensitive credentials yourself"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                      <span className="text-slate-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where Results Are Stored */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-accent font-heading font-bold text-sm uppercase tracking-widest mb-4">Secure Delivery</h2>
            <h3 className="text-3xl font-heading font-bold text-primary mb-6">Where Your Results Are Stored</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-12">
              Every deliverable Bullseye Strategies produces is exported to a secure storage environment that sits behind access controls, encryption, and authentication — not on the open internet, and not inside the AI platform.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Server className="w-8 h-8 text-primary" />
                  <h4 className="font-heading font-bold text-primary text-xl">Option A</h4>
                </div>
                <h5 className="font-bold text-primary mb-4">Your Existing Secure Storage</h5>
                <p className="text-slate-600 text-sm leading-relaxed">
                  If your organization already uses a secure document management platform — such as ShareFile, SharePoint, Box, OneDrive for Business, or a similar solution — we deliver all work product directly into your environment. You maintain full ownership, full audit trail, and full permission management.
                </p>
              </div>
              <div className="bg-white p-8 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-8 h-8 text-primary" />
                  <h4 className="font-heading font-bold text-primary text-xl">Option B</h4>
                </div>
                <h5 className="font-bold text-primary mb-4">Bullseye-Managed Google Workspace</h5>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  For clients without enterprise-grade storage, we set up a dedicated Google Workspace environment configured with hardened security settings:
                </p>
                <ul className="space-y-3">
                  {[
                    { label: "Multi-Factor Authentication (MFA)", desc: "Every user must verify their identity through a second device." },
                    { label: "Dedicated folder per client", desc: "No other client can see your files." },
                    { label: "Link sharing disabled", desc: "Files cannot be accessed without a verified login." },
                    { label: "AES-256 encryption", desc: "Files are encrypted at rest and in transit with TLS 1.2+." },
                    { label: "Access logging", desc: "Every file access, download, and modification is logged." },
                    { label: "SOC 2 & ISO 27001 compliant", desc: "Same certifications required by banks and government agencies." }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-1 shrink-0" />
                      <div>
                        <span className="font-semibold text-primary text-sm">{item.label}</span>
                        <span className="text-slate-500 text-sm"> — {item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the AI Platform */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-accent font-heading font-bold text-sm uppercase tracking-widest mb-4">AI Platform</h2>
            <h3 className="text-3xl font-heading font-bold text-primary mb-6">About the AI Platform We Use</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Bullseye Strategies uses Claude, developed by Anthropic, for AI-powered analysis. Anthropic is a leading AI safety company headquartered in San Francisco. Here is what you should know about how they handle data:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <Lock className="w-6 h-6" />, title: "Encryption everywhere", desc: "All data sent to and from Claude is encrypted in transit (while moving) and at rest (while stored temporarily)." },
                { icon: <Eye className="w-6 h-6" />, title: "No employee access by default", desc: "Anthropic employees cannot access your conversations unless required for safety enforcement under strict access controls." },
                { icon: <Shield className="w-6 h-6" />, title: "Data is not used to train AI models", desc: "Client data uploaded during Bullseye Strategies sessions is not used to train, improve, or fine-tune Claude or any other AI model." },
                { icon: <Users className="w-6 h-6" />, title: "Sessions are isolated", desc: "Each conversation is separate. Another user cannot see your data, and Claude does not carry information between sessions." },
                { icon: <Trash2 className="w-6 h-6" />, title: "Deleted means deleted", desc: "When a conversation is deleted, the data is removed from Anthropic's systems within 30 days. Bullseye deletes all sessions after deliverables are exported." },
                { icon: <CheckCircle2 className="w-6 h-6" />, title: "SOC 2 Type II certified", desc: "Anthropic has achieved SOC 2 Type II, ISO 27001:2022, and ISO/IEC 42001:2023 certifications, verified by third-party auditors." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 bg-slate-50 border border-slate-100">
                  <div className="text-accent shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-primary mb-2">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-primary mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-3">
              <FAQItem
                question="Can someone on the internet find my data?"
                answer="No. Your data is never posted to a website, never indexed by search engines, and never accessible via a public URL. It exists only within an encrypted, authenticated environment — either your own secure storage or the Bullseye-managed Google Workspace — and requires a verified login with multi-factor authentication to access."
              />
              <FAQItem
                question="Does the AI learn from my financial data?"
                answer="No. Claude does not use your data to train or improve itself. Your financial statements, ledger detail, and board reports are processed to generate the specific analysis you requested — nothing more. When the session is deleted, the AI has no memory of your data."
              />
              <FAQItem
                question="What if I already have ShareFile, SharePoint, or another secure platform?"
                answer="Excellent. We will deliver all work product directly into your existing environment. You maintain full control over access, permissions, and audit trails. No additional setup is needed on your end."
              />
              <FAQItem
                question="What if I don't have secure storage?"
                answer="No problem. Bullseye Strategies will set up a Google Workspace environment with MFA, access controls, and encryption specifically for your engagement. You will receive login credentials and can access your files securely from any device. This is included as part of our service."
              />
              <FAQItem
                question="Can my auditors verify this process?"
                answer="Yes. We can provide your auditors with documentation of our data handling procedures, the security certifications of the platforms we use (Anthropic's SOC 2 Type II, Google Workspace's SOC 2/ISO 27001), and access logs showing who viewed or downloaded specific files and when."
              />
              <FAQItem
                question="Who at Bullseye Strategies can see my data?"
                answer="Only the Bullseye Strategies team member(s) assigned to your engagement. We do not share client data between engagements, and access to your files is limited to the individuals performing your analysis."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Summary Table */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-primary mb-10 text-center">Security Summary</h2>
            <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
              <table className="w-full border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 text-left font-heading font-bold text-sm uppercase tracking-wider">Concern</th>
                    <th className="p-4 text-left font-heading font-bold text-sm uppercase tracking-wider">How Bullseye Addresses It</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { concern: "Data stored in AI", solution: "All sessions deleted after deliverables exported" },
                    { concern: "AI training on my data", solution: "Platform contractually prohibited from using client data for training" },
                    { concern: "Unauthorized access", solution: "MFA, role-based permissions, encrypted storage behind firewall" },
                    { concern: "Internet exposure", solution: "No public URLs, no search engine indexing, authentication required" },
                    { concern: "Audit compliance", solution: "Full access logs, SOC 2/ISO 27001 certified platforms, documentation available" },
                    { concern: "No secure storage", solution: "Bullseye sets up Google Workspace with MFA at no extra charge" }
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                      <td className="p-4 border border-slate-200 font-semibold text-primary text-sm">{row.concern}</td>
                      <td className="p-4 border border-slate-200 text-slate-600 text-sm">{row.solution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Security Brief */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-accent" />
              <h2 className="text-accent font-heading font-bold text-sm uppercase tracking-widest">Technical Brief</h2>
            </div>
            <h3 className="text-3xl font-heading font-bold text-white mb-4">For IT Professionals & Security Teams</h3>
            <p className="text-slate-300 leading-relaxed mb-12">
              Bullseye Strategies utilizes Anthropic's Claude platform as its primary AI analysis engine for financial consulting engagements. Below are the technical details your security and IT teams need to evaluate our data handling posture.
            </p>

            {/* Data Flow Architecture */}
            <h4 className="text-xl font-heading font-bold text-white mb-6">Data Flow Architecture</h4>
            <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 mb-16">
              <table className="w-full border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-white/10">
                    <th className="p-3 text-left text-xs font-bold uppercase tracking-wider text-accent">Stage</th>
                    <th className="p-3 text-left text-xs font-bold uppercase tracking-wider text-accent">Process</th>
                    <th className="p-3 text-left text-xs font-bold uppercase tracking-wider text-accent">Security Controls</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { stage: "Ingestion", process: "Client source files received via secure transfer or direct upload", controls: "TLS 1.2+ in transit; files not stored on Bullseye infrastructure" },
                    { stage: "Processing", process: "Files uploaded to isolated Claude session for analysis", controls: "AES-256 at rest; TLS 1.2+ in transit; session-scoped isolation" },
                    { stage: "Output", process: "Deliverables generated within Claude environment", controls: "Outputs inherit session encryption; no persistent storage on AI platform" },
                    { stage: "Delivery", process: "Results exported to client's secure storage or Bullseye-managed Google Workspace", controls: "Destination-dependent: ShareFile, SharePoint, Box, or Google Workspace with MFA" },
                    { stage: "Cleanup", process: "Claude conversation and all uploaded assets permanently deleted", controls: "Anthropic purges deleted data within 30 days; session becomes irrecoverable" }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/10">
                      <td className="p-3 text-sm font-semibold text-white">{row.stage}</td>
                      <td className="p-3 text-sm text-slate-300">{row.process}</td>
                      <td className="p-3 text-sm text-slate-300">{row.controls}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* AI Platform Security */}
            <h4 className="text-xl font-heading font-bold text-white mb-6">AI Platform Security (Anthropic Claude)</h4>
            <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 mb-16">
              <table className="w-full border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-white/10">
                    <th className="p-3 text-left text-xs font-bold uppercase tracking-wider text-accent">Control</th>
                    <th className="p-3 text-left text-xs font-bold uppercase tracking-wider text-accent">Implementation</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { control: "Certifications", impl: "SOC 2 Type I & Type II, ISO 27001:2022, ISO/IEC 42001:2023, HIPAA eligible" },
                    { control: "Encryption (Transit)", impl: "TLS 1.2+ for all API and web interface communications" },
                    { control: "Encryption (Rest)", impl: "AES-256 encryption for all stored data" },
                    { control: "Data Training Policy", impl: "Client data NOT used for model training under commercial terms" },
                    { control: "Data Retention", impl: "30-day default retention; deleted conversations purged within 30 days" },
                    { control: "Access Controls", impl: "RBAC; just-in-time privileged access; MFA required; quarterly access reviews" },
                    { control: "Session Isolation", impl: "Cryptographically isolated; no cross-session or cross-user data access" },
                    { control: "Employee Access", impl: "No default access; limited to Trust & Safety on need-to-know basis" },
                    { control: "Network Security", impl: "Cloud-native architecture with network segmentation; zero-trust principles" },
                    { control: "Incident Response", impl: "Documented incident tracking and response with formal remediation procedures" }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/10">
                      <td className="p-3 text-sm font-semibold text-white">{row.control}</td>
                      <td className="p-3 text-sm text-slate-300">{row.impl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Google Workspace Settings */}
            <h4 className="text-xl font-heading font-bold text-white mb-6">Google Workspace Hardened Configuration</h4>
            <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 mb-16">
              <table className="w-full border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-white/10">
                    <th className="p-3 text-left text-xs font-bold uppercase tracking-wider text-accent">Setting</th>
                    <th className="p-3 text-left text-xs font-bold uppercase tracking-wider text-accent">Configuration</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { setting: "Authentication", config: "MFA enforced (TOTP or security key); SSO available upon request" },
                    { setting: "Sharing Policy", config: "External sharing disabled; \"Anyone with the link\" disabled; domain-restricted sharing only" },
                    { setting: "Encryption", config: "AES-256 at rest; TLS 1.2+ in transit (Google default)" },
                    { setting: "Access Logging", config: "Google Workspace Admin audit logs enabled; Drive activity logs retained" },
                    { setting: "Data Residency", config: "US data center region (configurable for compliance requirements)" },
                    { setting: "Retention", config: "Client-defined retention policies; no auto-deletion without client authorization" },
                    { setting: "Compliance", config: "SOC 2 Type II, ISO 27001, ISO 27017, ISO 27018, FedRAMP, HIPAA eligible" },
                    { setting: "Session Timeout", config: "Configurable session expiration; 30-minute idle timeout recommended" }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/10">
                      <td className="p-3 text-sm font-semibold text-white">{row.setting}</td>
                      <td className="p-3 text-sm text-slate-300">{row.config}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Risk Mitigation */}
            <h4 className="text-xl font-heading font-bold text-white mb-6">Risk Mitigation Summary</h4>
            <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 mb-16">
              <table className="w-full border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-white/10">
                    <th className="p-3 text-left text-xs font-bold uppercase tracking-wider text-accent">Threat Vector</th>
                    <th className="p-3 text-left text-xs font-bold uppercase tracking-wider text-accent">Risk</th>
                    <th className="p-3 text-left text-xs font-bold uppercase tracking-wider text-accent">Mitigation</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { threat: "Data at rest in AI", risk: "Persistent exposure if sessions not deleted", mitigation: "Mandatory session deletion post-delivery; 30-day backend purge by Anthropic" },
                    { threat: "Model training", risk: "Client data incorporated into AI training corpus", mitigation: "Contractually prohibited under Anthropic commercial/opted-out terms; ZDR available" },
                    { threat: "Unauthorized access", risk: "Credential compromise or insider threat", mitigation: "MFA enforced; RBAC; session isolation; no cross-client visibility" },
                    { threat: "Data in transit", risk: "Man-in-the-middle interception", mitigation: "TLS 1.2+ enforced on all connections to Claude and storage platforms" },
                    { threat: "Search engine indexing", risk: "Sensitive docs discoverable via web crawlers", mitigation: "No public URLs; all storage behind authentication" },
                    { threat: "Third-party exposure", risk: "AI vendor shares data with partners", mitigation: "Anthropic does not sell or share customer data; SOC 2 Type II audited" },
                    { threat: "Regulatory compliance", risk: "Failure to meet audit requirements", mitigation: "Full audit trail available; SOC 2/ISO 27001 certified platforms" }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/10">
                      <td className="p-3 text-sm font-semibold text-white">{row.threat}</td>
                      <td className="p-3 text-sm text-slate-300">{row.risk}</td>
                      <td className="p-3 text-sm text-slate-300">{row.mitigation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Verification & References */}
            <h4 className="text-xl font-heading font-bold text-white mb-6">Verification & References</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { label: "Anthropic Trust Center", url: "https://trust.anthropic.com" },
                { label: "Anthropic Privacy Center", url: "https://privacy.claude.com" },
                { label: "Anthropic Consumer Terms", url: "https://anthropic.com/news/updates-to-our-consumer-terms" },
                { label: "Google Workspace Security", url: "https://workspace.google.com/security" }
              ].map((ref, i) => (
                <a key={i} href={ref.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-4 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <ExternalLink className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-sm text-white">{ref.label}</span>
                </a>
              ))}
            </div>
            <p className="text-slate-400 text-sm">
              SOC 2 reports available upon request through Anthropic's sales team or via the Trust Center portal.
            </p>
            <p className="text-slate-400 text-sm mt-4">
              For technical inquiries regarding Bullseye Strategies' data handling architecture, please contact us directly. We welcome security assessments and are available for calls with your IT, compliance, or audit teams.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Questions About Data Security?</h2>
          <p className="text-slate-600 text-lg mb-8">
            If you have questions about our data handling practices or would like to discuss your organization's specific security requirements, please contact us directly. We are happy to walk through this process in detail with you or your IT team.
          </p>
          <a href="mailto:info@bullseyestrategies.net">
            <button className="bg-accent hover:bg-red-700 text-white rounded-none px-8 h-14 text-sm font-bold uppercase tracking-wider shadow-lg transition-colors">
              Contact Us About Data Security
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
