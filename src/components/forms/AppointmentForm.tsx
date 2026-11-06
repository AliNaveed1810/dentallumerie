"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { treatments } from "@/data/treatments";
import {
  appointmentSchema,
  type AppointmentFormValues,
} from "@/lib/validations";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full rounded-md border border-[var(--color-forest)]/15 bg-white px-4 py-3 font-[family-name:var(--font-manrope)] text-sm text-[var(--color-ink)] outline-none transition-colors placeholder:text-[var(--color-forest)]/35 focus:border-[var(--color-sage)]";

export function AppointmentForm({
  defaultTreatment,
}: {
  defaultTreatment?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      preferredTreatment: defaultTreatment ?? "general-enquiry",
      preferredTime: undefined,
      message: "",
    },
  });

  async function onSubmit(values: AppointmentFormValues) {
    setServerError(null);
    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(data?.error ?? "Unable to submit enquiry");
      }

      setSubmitted(true);
      reset();
    } catch (error) {
      setServerError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-[var(--color-forest)]/10 bg-white px-6 py-12 text-center md:px-10">
        <CheckCircle2 className="mx-auto h-12 w-12 text-[var(--color-sage)]" />
        <h2 className="mt-5 font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-ink)]">
          Enquiry received
        </h2>
        <p className="mx-auto mt-4 max-w-md font-[family-name:var(--font-manrope)] text-sm leading-relaxed text-[var(--color-forest)]/75">
          Thank you. In a live clinic workflow, this enquiry would notify
          reception and can hand off to WhatsApp or email automation. This demo
          stores nothing sensitive.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" variant="secondary">
            Return home
          </Button>
          <Button
            type="button"
            onClick={() => setSubmitted(false)}
          >
            Send another enquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-2xl border border-[var(--color-forest)]/10 bg-white p-6 md:p-8"
      noValidate
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full name" error={errors.fullName?.message}>
          <input
            {...register("fullName")}
            autoComplete="name"
            className={fieldClass}
            placeholder="Alex Morgan"
          />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            autoComplete="email"
            className={fieldClass}
            placeholder="alex@email.com"
          />
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Phone" error={errors.phone?.message}>
          <input
            {...register("phone")}
            type="tel"
            autoComplete="tel"
            className={fieldClass}
            placeholder="+44 7700 900123"
          />
        </Field>
        <Field
          label="Preferred treatment"
          error={errors.preferredTreatment?.message}
        >
          <select {...register("preferredTreatment")} className={fieldClass}>
            <option value="general-enquiry">General enquiry</option>
            {treatments.map((treatment) => (
              <option key={treatment.slug} value={treatment.slug}>
                {treatment.name}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Preferred date" error={errors.preferredDate?.message}>
          <input
            {...register("preferredDate")}
            type="date"
            className={fieldClass}
          />
        </Field>
        <Field label="Preferred time" error={errors.preferredTime?.message}>
          <select {...register("preferredTime")} className={fieldClass}>
            <option value="">Select a time of day</option>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>
        </Field>
      </div>

      <Field label="Message (optional)" error={errors.message?.message}>
        <textarea
          {...register("message")}
          rows={4}
          className={cn(fieldClass, "resize-y")}
          placeholder="Tell us briefly what you would like help with. Please do not include medical records."
        />
      </Field>

      <label className="flex items-start gap-3 font-[family-name:var(--font-manrope)] text-sm leading-relaxed text-[var(--color-forest)]/75">
        <input
          type="checkbox"
          {...register("consent")}
          className="mt-1 h-4 w-4 rounded border-[var(--color-forest)]/30 text-[var(--color-forest)] focus:ring-[var(--color-sage)]"
        />
        <span>
          I understand this is a fictional clinic demo and my enquiry will not
          create a real clinical record.
        </span>
      </label>
      {errors.consent?.message ? (
        <p className="text-sm text-red-700">{errors.consent.message}</p>
      ) : null}

      {serverError ? (
        <p className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
          {serverError}
        </p>
      ) : null}

      <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isSubmitting}>
        {isSubmitting ? "Sending enquiry…" : "Request appointment"}
      </Button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-[family-name:var(--font-manrope)] text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-forest)]/70">
        {label}
      </span>
      {children}
      {error ? <p className="mt-2 text-sm text-red-700">{error}</p> : null}
    </label>
  );
}
