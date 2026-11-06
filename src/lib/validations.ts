import { z } from "zod";
import { treatments } from "@/data/treatments";

const treatmentValues = [
  "general-enquiry",
  ...treatments.map((treatment) => treatment.slug),
] as const;

export const appointmentSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name")
    .max(80, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(8, "Please enter a valid phone number")
    .max(20, "Phone number is too long")
    .regex(/^[+()\d\s-]+$/, "Please enter a valid phone number"),
  preferredTreatment: z.enum(treatmentValues, {
    message: "Please select a preferred treatment",
  }),
  preferredDate: z.string().min(1, "Please choose a preferred date"),
  preferredTime: z.enum(["morning", "afternoon", "evening"], {
    message: "Please choose a preferred time",
  }),
  message: z.string().trim().max(500, "Message is too long").optional(),
  consent: z.literal(true, {
    message: "Please confirm you understand this is a demo enquiry",
  }),
});

export type AppointmentFormValues = z.infer<typeof appointmentSchema>;
