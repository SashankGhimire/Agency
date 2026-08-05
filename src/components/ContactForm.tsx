import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, Building, Mail, User, MessageSquare } from 'lucide-react';

interface ContactFormProps {
  prefilledData?: {
    businessType?: string;
    details?: string;
    serviceName?: string;
  } | null;
}

export const ContactForm: React.FC<ContactFormProps> = ({ prefilledData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    businessType: '',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (prefilledData) {
      setFormData((prev) => ({
        ...prev,
        businessType: prefilledData.businessType || prefilledData.serviceName || prev.businessType,
        details: prefilledData.details || prefilledData.serviceName ? `Inquiry regarding: ${prefilledData.serviceName}. ` : prev.details
      }));

      // Scroll to contact form smoothly
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [prefilledData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger Confetti Celebration
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.error(err);
      }
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative bg-zinc-900/5 dark:bg-[#030305] border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Let's Build Your Website
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Let's Build Something Amazing Together
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            Tell us about your project. We respond within 4 hours with a custom strategy and roadmap.
          </p>
        </div>

        {submitted ? (
          <div className="glass-panel p-10 rounded-3xl text-center border border-emerald-500/40 bg-emerald-500/5 max-w-2xl mx-auto space-y-4 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Project Inquiry Received!
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Thank you, <strong className="text-zinc-900 dark:text-white">{formData.name}</strong>. Our senior web architects have received your inquiry for <strong className="text-blue-500">{formData.businessName || 'your business'}</strong>.
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              We will review your requirements and reply to <span className="underline">{formData.email}</span> within 4 hours with a detailed strategy call proposal.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 px-6 py-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-semibold hover:bg-zinc-200 dark:hover:bg-zinc-700 cursor-pointer"
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="glass-panel p-8 sm:p-12 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-2xl relative space-y-6"
            id="project-inquiry-form"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-2 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-blue-500" /> Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Sujan Shrestha"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  id="form-input-name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-2 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-500" /> Business Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@yourbusiness.com.np"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  id="form-input-email"
                />
              </div>

              {/* Business Name */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-2 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-blue-500" /> Business / Brand Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Everest Gym & Fitness"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full p-3.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-blue-500 transition-all"
                  id="form-input-business"
                />
              </div>

              {/* Business Type */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-2">
                  Business Type / Industry
                </label>
                <input
                  type="text"
                  placeholder="e.g. Restaurant, Gym, Retail Shop, Clinic"
                  value={formData.businessType}
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                  className="w-full p-3.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-blue-500 transition-all"
                  id="form-input-industry"
                />
              </div>
            </div>

            {/* Project Details */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-2 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-blue-500" /> Project Details & Objectives
              </label>
              <textarea
                rows={4}
                required
                placeholder="Tell us about your business goals, current website pain points, and target features..."
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full p-3.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                id="form-textarea-details"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer group"
              id="form-submit-btn"
            >
              {isSubmitting ? (
                <span>Submitting Proposal...</span>
              ) : (
                <>
                  <span>Send Project Inquiry</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        )}

      </div>
    </section>
  );
};
