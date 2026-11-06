import type { FaqItem } from "@/types";

export const faqItems: FaqItem[] = [
  {
    id: "new-patient",
    question: "How do I book as a new patient?",
    answer:
      "Use the appointment enquiry form to share your preferred treatment and availability. Our reception team will confirm a suitable time — typically within one working day. This demo does not store real medical records.",
  },
  {
    id: "first-visit",
    question: "What happens at my first visit?",
    answer:
      "Your first appointment usually includes a conversation about your goals, a thorough examination and, where helpful, digital imaging. You will leave with a clear outline of recommended next steps.",
  },
  {
    id: "nervous-patients",
    question: "Do you support nervous patients?",
    answer:
      "Yes. We pace appointments carefully, explain each step before it begins and create a calm environment. Please mention any anxieties in your enquiry so we can prepare appropriately.",
  },
  {
    id: "payment",
    question: "How are fees discussed?",
    answer:
      "Treatment options and fees are explained before care begins. There are no surprises — you approve a plan with transparent pricing before we proceed.",
  },
  {
    id: "emergency",
    question: "What if I have a dental emergency?",
    answer:
      "Contact the studio by phone or submit an urgent enquiry. Priority slots are reserved for acute discomfort, trauma or lost restorations wherever possible.",
  },
  {
    id: "ai-assistant",
    question: "What can the AI receptionist help with?",
    answer:
      "The on-site assistant is an integration-ready demonstration. It can guide visitors through opening hours, location details and booking next steps. It is not a clinical advice system.",
  },
];
