"use client";

import { useMemo, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const contactSchema = z.object({
  projectType: z.string().min(2, "Please choose a project type"),
  budget: z.string().min(2, "Please choose a budget range"),
  timeline: z.string().min(2, "Please choose a timeline"),
  details: z.string().min(20, "Share at least 20 characters"),
  email: z.string().email("Please enter a valid email"),
});

type ContactFormValues = z.infer<typeof contactSchema>;
const stepFields: Array<keyof ContactFormValues> = [
  "projectType",
  "budget",
  "timeline",
  "details",
  "email",
];

export function ContactWizard() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    trigger,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    defaultValues: {
      projectType: "",
      budget: "",
      timeline: "",
      details: "",
      email: "",
    },
  });

  const progress = useMemo(() => ((step + 1) / stepFields.length) * 100, [step]);

  const nextStep = async () => {
    const field = stepFields[step];
    const valid = await trigger(field);
    if (!valid) {
      return;
    }
    setStep((current) => Math.min(current + 1, stepFields.length - 1));
  };

  const previousStep = () => {
    setStep((current) => Math.max(current - 1, 0));
  };

  const onSubmit = handleSubmit(() => {
    setSubmitted(true);
  });

  if (submitted) {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-brand-primary/35 bg-brand-surface/70 p-8 text-center">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary/20"
        >
          <CheckCircle2 className="text-brand-primary" />
        </motion.div>
        <h3 className="mt-4 font-display text-2xl">Project intake received</h3>
        <p className="mt-3 text-sm text-brand-muted">
          Your brief is in our queue. You can expect a response within 2 hours.
        </p>

        <div className="pointer-events-none absolute inset-0">
          {Array.from({ length: 14 }).map((_, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 0, x: 0 }}
              animate={{
                opacity: [0, 1, 0],
                y: [0, -70],
                x: [0, (index % 2 === 0 ? 1 : -1) * 26],
              }}
              transition={{ duration: 1.6, delay: index * 0.08, repeat: Infinity }}
              className="absolute left-1/2 top-[58%] h-2 w-2 rounded-full bg-brand-primary"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-brand-surface/65 p-6">
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.14em] text-brand-subtle">
          <span>Step {step + 1} of {stepFields.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-1 overflow-hidden rounded-full bg-white/10">
          <div className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary transition-[width]" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {step === 0 && (
        <div>
          <label className="text-sm text-brand-muted" htmlFor="projectType">
            Project Type
          </label>
          <select
            id="projectType"
            className="mt-2 w-full rounded-xl border border-white/15 bg-black/25 px-4 py-3 text-sm text-brand-text outline-none focus:border-brand-primary"
            {...register("projectType")}
          >
            <option value="">Choose a type</option>

                  <option value="ecommerce">E-commerce</option>
                  <option value="portfolio">Portfolio</option>
                  <option value="spa">Single-page app</option>
                  <option value="education">Educational platform</option>
                  <option value="other">Something else</option>
          </select>
          <p className="mt-2 text-xs text-rose-300">{errors.projectType?.message}</p>
        </div>
      )}

      {step === 1 && (
        <div>
          <label className="text-sm text-brand-muted" htmlFor="budget">
            Budget Range
          </label>
          <select
            id="budget"
            className="mt-2 w-full rounded-xl border border-white/15 bg-black/25 px-4 py-3 text-sm text-brand-text outline-none focus:border-brand-primary"
            {...register("budget")}
          >
            <option value="">Choose a range</option>
            <option value="₹100k+">₹100k</option>
            <option value="₹50k">₹50k</option>
            <option value="₹25k">₹25k</option>
            <option value="₹20k">₹20k</option>
            <option value="₹10k">₹10k</option>
            <option value="₹5k">₹5k</option>
          </select> 
          <p className="mt-2 text-xs text-rose-300">{errors.budget?.message}</p>
        </div>
      )}

      {step === 2 && (
        <div>
          <label className="text-sm text-brand-muted" htmlFor="timeline">
            Timeline
          </label>
          <select
            id="timeline"
            className="mt-2 w-full rounded-xl border border-white/15 bg-black/25 px-4 py-3 text-sm text-brand-text outline-none focus:border-brand-primary"
            {...register("timeline")}
          >
            <option value="">Choose a timeline</option>
            <option value="1week">1 week</option>
            <option value="2-3weeks">2-3 Weeks</option>
            <option value="#-4weeks">3-4Weeks</option>
            <option value="1 month">1 month</option>
          </select>
          <p className="mt-2 text-xs text-rose-300">{errors.timeline?.message}</p>
        </div>
      )}

      {step === 3 && (
        <div>
          <label className="text-sm text-brand-muted" htmlFor="details">
            Project Details
          </label>
          <textarea
            id="details"
            rows={5}
            className="mt-2 w-full rounded-xl border border-white/15 bg-black/25 px-4 py-3 text-sm text-brand-text outline-none focus:border-brand-primary"
            placeholder="What are you building, what is the current bottleneck, and what outcomes do you need?"
            {...register("details")}
          />
          <p className="mt-2 text-xs text-brand-subtle">Current length: {watch("details").length} characters</p>
          <p className="mt-2 text-xs text-rose-300">{errors.details?.message}</p>
        </div>
      )}

      {step === 4 && (
        <div>
          <label className="text-sm text-brand-muted" htmlFor="email">
            Work Email
          </label>
          <input
            id="email"
            type="email"
            className="mt-2 w-full rounded-xl border border-white/15 bg-black/25 px-4 py-3 text-sm text-brand-text outline-none focus:border-brand-primary"
            placeholder="you@company.com"
            {...register("email")}
          />
          <p className="mt-2 text-xs text-rose-300">{errors.email?.message}</p>
        </div>
      )}

      <div className="mt-8 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={previousStep}
          disabled={step === 0}
          className="btn-secondary disabled:cursor-not-allowed disabled:opacity-40"
        >
          Previous
        </button>

        {step < stepFields.length - 1 ? (
          <button type="button" onClick={nextStep} className="btn-primary">
            Continue
          </button>
        ) : (
          <button type="submit" className="btn-primary">
            Submit Brief
          </button>
        )}
      </div>
    </form>
  );
}
