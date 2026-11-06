export type Treatment = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  description: string;
  benefits: string[];
  idealFor: string[];
  process: { title: string; detail: string }[];
  image: string;
  imageAlt: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  credentials: string;
  bio: string;
  image: string;
  specialties: string[];
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type AppointmentPayload = {
  fullName: string;
  email: string;
  phone: string;
  preferredTreatment: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
};
