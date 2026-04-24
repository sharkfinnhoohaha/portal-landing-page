import Link from "next/link";
import { ArrowRight, Check, Zap, Shield, Palette, Lock, Globe } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] font-mono selection:bg-white selection:text-black">
      {/* ASCII Art Header */}
      <nav className="border-b border-[#1a1a1a] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          <span className="text-sm tracking-widest uppercase">Portal</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-[#666]">
          <Link href="#features" className="hover:text-white transition-colors">Features</Link>
          <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="/sign-in" className="hover:text-white transition-colors">Sign In</Link>
          <Link 
            href="/sign-up" 
            className="bg-white text-black px-4 py-2 hover:bg-[#e5e5e5] transition-colors"
          >
            Get Started →
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 pt-32 pb-20 max-w-5xl mx-auto">
        <div className="mb-8">
          <span className="text-xs text-[#666] border border-[#333] px-3 py-1">
            v1.0 — Now in Public Beta
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-normal leading-[1.1] mb-8">
          Client portals
          <br />
          <span className="text-[#666]">for freelancers.</span>
          <br />
          <span className="text-[#333]">______________</span>
        </h1>

        <p className="text-lg text-[#888] max-w-xl mb-12 leading-relaxed">
          Stop sending files over email. Give your clients a branded portal 
          to track projects, approve deliverables, and stay in the loop.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Link 
            href="/sign-up"
            className="bg-white text-black px-8 py-4 text-sm hover:bg-[#e5e5e5] transition-colors inline-flex items-center gap-2"
          >
            Create Your Portal <ArrowRight className="w-4 h-4" />
          </Link>
          <span className="text-sm text-[#444]">14-day free trial. No credit card.</span>
        </div>

        {/* Terminal Mockup */}
        <div className="mt-20 border border-[#1a1a1a] bg-[#0d0d0d]">
          <div className="border-b border-[#1a1a1a] px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#333]" />
            <div className="w-3 h-3 rounded-full bg-[#333]" />
            <div className="w-3 h-3 rounded-full bg-[#333]" />
            <span className="ml-4 text-xs text-[#444]">overlook-strategy.portal.app</span>
          </div>
          <div className="p-8 font-mono text-sm leading-relaxed">
            <div className="text-[#444] mb-4">
              <span className="text-[#666]">$</span> portal create-project "Website Redesign"
            </div>
            <div className="text-[#666] mb-2">✓ Project created: #PRJ-001</div>
            <div className="text-[#666] mb-2">✓ Client invited: sarah@client.com</div>
            <div className="text-[#666] mb-4">✓ Portal live: https://overlook.portal.app/sarah</div>
            <div className="text-[#444]">
              <span className="text-[#666]">$</span> <span className="animate-pulse">_</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="border-t border-[#1a1a1a] px-6 py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm text-[#666] mb-4 tracking-widest uppercase">The Problem</h2>
            <p className="text-2xl md:text-3xl leading-tight mb-6">
              Your clients are lost in 
              <span className="text-[#666]">threads, drives, and drafts.</span>
            </p>
            <ul className="space-y-3 text-sm text-[#888]">
              <li className="flex items-start gap-3">
                <span className="text-[#333]">01</span>
                Feedback scattered across emails, Slack, and Figma comments
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#333]">02</span>
                Files versioned as "final_v2_ACTUAL_final.pdf"
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#333]">03</span>
                No single source of truth for project status
              </li>
            </ul>
          </div>
          <div className="border border-[#1a1a1a] p-8 bg-[#0d0d0d]">
            <div className="text-[#333] text-xs mb-4">INBOX — 47 UNREAD</div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs">
                <div className="w-2 h-2 bg-red-500 rounded-full" />
                <span className="text-[#666]">Re: Re: Re: Website feedback</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <div className="w-2 h-2 bg-red-500 rounded-full" />
                <span className="text-[#666]">Fwd: Logo_v3_FINAL.ai</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <div className="w-2 h-2 bg-red-500 rounded-full" />
                <span className="text-[#666]">Did you get my last email?</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="border-t border-[#1a1a1a] px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm text-[#666] mb-16 tracking-widest uppercase">Features</h2>
          
          <div className="grid md:grid-cols-3 gap-1">
            {[
              {
                icon: <Globe className="w-5 h-5" />,
                title: "Branded Portals",
                desc: "Your logo. Your colors. Your domain. Every client sees your brand, not ours."
              },
              {
                icon: <Check className="w-5 h-5" />,
                title: "Approval Workflows",
                desc: "Clients review deliverables and click approve. No more 'looks good' in Slack."
              },
              {
                icon: <Zap className="w-5 h-5" />,
                title: "Project Timeline",
                desc: "Visual milestones keep everyone aligned. Clients know exactly where things stand."
              },
              {
                icon: <Shield className="w-5 h-5" />,
                title: "Secure by Default",
                desc: "Token-based access. No passwords for clients. SSL everywhere. Your data is yours."
              },
              {
                icon: <Palette className="w-5 h-5" />,
                title: "White Label",
                desc: "Remove all Portal branding. Agency plan includes custom domains and CSS injection."
              },
              {
                icon: <Lock className="w-5 h-5" />,
                title: "AI-Powered",
                desc: "Upload project briefs, let clients ask questions. Local AI via Ollama. Zero data leakage."
              }
            ].map((feature, i) => (
              <div 
                key={i}
                className="border border-[#1a1a1a] p-8 hover:border-[#333] transition-colors group"
              >
                <div className="text-[#666] mb-6 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-sm mb-3">{feature.title}</h3>
                <p className="text-xs text-[#666] leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-[#1a1a1a] px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm text-[#666] mb-4 tracking-widest uppercase">Pricing</h2>
          <p className="text-2xl md:text-3xl mb-16">Simple. No hidden fees.</p>

          <div className="grid md:grid-cols-3 gap-1">
            {/* Free */}
            <div className="border border-[#1a1a1a] p-8">
              <div className="text-xs text-[#666] mb-2">Free</div>
              <div className="text-3xl mb-8">$0<span className="text-sm text-[#666]">/mo</span></div>
              <ul className="space-y-3 text-xs text-[#888] mb-8">
                <li className="flex items-center gap-2"><Check className="w-3 h-3" /> 1 client</li>
                <li className="flex items-center gap-2"><Check className="w-3 h-3" /> Basic portal</li>
                <li className="flex items-center gap-2"><Check className="w-3 h-3" /> File sharing</li>
              </ul>
              <Link 
                href="/sign-up"
                className="block text-center border border-[#333] px-4 py-3 text-xs hover:bg-white hover:text-black transition-colors"
              >
                Start Free
              </Link>
            </div>

            {/* Pro */}
            <div className="border border-white p-8 relative">
              <div className="absolute top-0 right-0 bg-white text-black text-[10px] px-3 py-1">
                MOST POPULAR
              </div>
              <div className="text-xs text-white mb-2">Pro</div>
              <div className="text-3xl mb-8">$19<span className="text-sm text-[#666]">/mo</span></div>
              <ul className="space-y-3 text-xs text-[#888] mb-8">
                <li className="flex items-center gap-2"><Check className="w-3 h-3" /> Unlimited clients</li>
                <li className="flex items-center gap-2"><Check className="w-3 h-3" /> AI features</li>
                <li className="flex items-center gap-2"><Check className="w-3 h-3" /> White-label branding</li>
                <li className="flex items-center gap-2"><Check className="w-3 h-3" /> Priority support</li>
              </ul>
              <Link 
                href="/sign-up"
                className="block text-center bg-white text-black px-4 py-3 text-xs hover:bg-[#e5e5e5] transition-colors"
              >
                Start Pro Trial
              </Link>
            </div>

            {/* Agency */}
            <div className="border border-[#1a1a1a] p-8">
              <div className="text-xs text-[#666] mb-2">Agency</div>
              <div className="text-3xl mb-8">$49<span className="text-sm text-[#666]">/mo</span></div>
              <ul className="space-y-3 text-xs text-[#888] mb-8">
                <li className="flex items-center gap-2"><Check className="w-3 h-3" /> Everything in Pro</li>
                <li className="flex items-center gap-2"><Check className="w-3 h-3" /> Team members</li>
                <li className="flex items-center gap-2"><Check className="w-3 h-3" /> Custom domains</li>
                <li className="flex items-center gap-2"><Check className="w-3 h-3" /> CSS injection</li>
              </ul>
              <Link 
                href="/sign-up"
                className="block text-center border border-[#333] px-4 py-3 text-xs hover:bg-white hover:text-black transition-colors"
              >
                Start Agency Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1a1a1a] px-6 py-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl mb-6">
            Ready to <span className="text-[#666]">impress</span> your clients?
          </h2>
          <p className="text-[#888] mb-12 max-w-md mx-auto">
            Join freelancers who've replaced email chaos with clean, branded portals.
          </p>
          <Link 
            href="/sign-up"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 hover:bg-[#e5e5e5] transition-colors"
          >
            Create Your Portal <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1a1a1a] px-6 py-12">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#333] rounded-full" />
            <span className="text-xs text-[#666]">Portal © 2026</span>
          </div>
          <div className="flex gap-6 text-xs text-[#666]">
            <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-white transition-colors">GitHub</Link>
            <Link href="#" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
