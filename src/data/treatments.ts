import type { Treatment } from "@/types";

export const treatments: Treatment[] = [
  {
    slug: "general-dentistry",
    name: "General Dentistry",
    shortName: "General dentistry",
    tagline: "Routine examinations and preventive care.",
    summary:
      "Comprehensive check-ups, preventive guidance and restorative care designed to keep your smile healthy for the long term.",
    description:
      "Our general dentistry appointments focus on prevention, early detection and calm, thorough care. From routine examinations and digital imaging to fillings and oral health advice, every visit is paced around your comfort and clarity.",
    benefits: [
      "Thorough clinical examinations",
      "Personalised preventive plans",
      "Early detection of dental concerns",
      "Calm, unhurried appointments",
    ],
    idealFor: [
      "Patients seeking regular dental maintenance",
      "Anyone new to private dental care",
      "Those who prefer a gentle, explanatory approach",
    ],
    process: [
      {
        title: "Consultation",
        detail: "We review your history, concerns and goals before examining your teeth and gums.",
      },
      {
        title: "Assessment",
        detail: "Digital imaging and clinical checks help us understand your oral health clearly.",
      },
      {
        title: "Care plan",
        detail: "You receive a transparent plan with recommended next steps and timing.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Modern dental treatment room with natural light",
  },
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    shortName: "Cosmetic dentistry",
    tagline: "Personalised aesthetic treatments.",
    summary:
      "Smile enhancement consultations tailored to your features, goals and the natural character of your smile.",
    description:
      "Cosmetic dentistry at LUMIÈRE is never one-size-fits-all. We take time to understand how you want to feel when you smile, then explore refined options — from bonding and veneers to subtle reshaping — with honesty about outcomes and maintenance.",
    benefits: [
      "Bespoke smile assessments",
      "Natural-looking aesthetic planning",
      "Conservative treatment options where suitable",
      "Clear discussion of expectations",
    ],
    idealFor: [
      "Patients seeking smile refinement",
      "Those preparing for a special occasion",
      "Anyone wanting discreet aesthetic improvement",
    ],
    process: [
      {
        title: "Smile conversation",
        detail: "We discuss what you notice about your smile and what you would like to change.",
      },
      {
        title: "Visual planning",
        detail: "Photography and clinical assessment help us design a balanced aesthetic approach.",
      },
      {
        title: "Treatment journey",
        detail: "Care is delivered in carefully staged visits with review at every step.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Close-up of a confident, natural smile",
  },
  {
    slug: "orthodontics",
    name: "Orthodontics",
    shortName: "Orthodontics",
    tagline: "Options for improving dental alignment.",
    summary:
      "Alignment consultations exploring clear aligners and orthodontic pathways suited to your lifestyle.",
    description:
      "Whether you are considering subtle alignment or a more comprehensive orthodontic plan, we guide you through suitable options with a focus on comfort, discretion and predictable results.",
    benefits: [
      "Clear aligner consultations",
      "Lifestyle-conscious treatment planning",
      "Regular progress reviews",
      "Retention guidance after treatment",
    ],
    idealFor: [
      "Adults seeking discreet alignment",
      "Patients with crowding or spacing concerns",
      "Those wanting a structured orthodontic pathway",
    ],
    process: [
      {
        title: "Alignment assessment",
        detail: "We evaluate bite, spacing and your preferred level of visibility during treatment.",
      },
      {
        title: "Option review",
        detail: "Suitable orthodontic approaches are explained with timelines and aftercare.",
      },
      {
        title: "Guided progress",
        detail: "Appointments track movement and keep your plan on course.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Clear dental aligner held carefully in hand",
  },
  {
    slug: "clear-aligners",
    name: "Clear Aligners",
    shortName: "Clear aligners",
    tagline: "Orthodontic consultations with discretion in mind.",
    summary:
      "Nearly invisible aligner consultations for patients who want to straighten their smile without traditional braces.",
    description:
      "Clear aligner treatment begins with a detailed suitability assessment. We explain wear routines, expected timelines and retention, so you can decide with confidence whether aligners fit your day-to-day life.",
    benefits: [
      "Discreet, removable aligners",
      "Digital treatment visualisation where suitable",
      "Flexible lifestyle considerations",
      "Dedicated review appointments",
    ],
    idealFor: [
      "Professionals seeking a low-profile option",
      "Mild to moderate alignment needs",
      "Patients comfortable with consistent wear schedules",
    ],
    process: [
      {
        title: "Suitability check",
        detail: "Clinical assessment confirms whether clear aligners are appropriate for your case.",
      },
      {
        title: "Plan & fitting",
        detail: "A staged aligner sequence is prepared with clear instructions for wear and care.",
      },
      {
        title: "Monitoring",
        detail: "We review progress and refine the plan as your smile moves.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Dental professional presenting clear aligners",
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    shortName: "Teeth whitening",
    tagline: "Professional whitening consultations.",
    summary:
      "Clinically guided whitening designed to brighten your smile safely and appropriately for your enamel.",
    description:
      "Professional whitening starts with an assessment of shade, sensitivity and suitability. We discuss in-clinic and take-home pathways so you understand realistic results and how to maintain them.",
    benefits: [
      "Shade assessment before treatment",
      "Sensitivity-aware protocols",
      "Guidance on lasting results",
      "Safe professional products only",
    ],
    idealFor: [
      "Patients wanting a brighter smile",
      "Those preparing for photography or events",
      "Anyone preferring clinically supervised whitening",
    ],
    process: [
      {
        title: "Shade review",
        detail: "We assess your current shade and discuss achievable, natural-looking outcomes.",
      },
      {
        title: "Whitening plan",
        detail: "A suitable clinical or supervised home protocol is recommended.",
      },
      {
        title: "Aftercare",
        detail: "You leave with clear advice on diet, sensitivity and maintaining brightness.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Bright, confident smile after professional whitening care",
  },
  {
    slug: "dental-hygiene",
    name: "Dental Hygiene",
    shortName: "Dental hygiene",
    tagline: "Preventive dental care.",
    summary:
      "Professional cleaning and gum-health appointments that leave your mouth fresher and your home care clearer.",
    description:
      "Hygiene visits at LUMIÈRE combine careful scaling, polishing and tailored oral-care advice. We focus on gum health, comfort and habits that support long-term prevention.",
    benefits: [
      "Professional plaque and tartar removal",
      "Gum health monitoring",
      "Personalised home-care coaching",
      "Fresh, polished finish",
    ],
    idealFor: [
      "Patients maintaining regular preventive care",
      "Those noticing bleeding or sensitivity",
      "Anyone seeking a thorough professional clean",
    ],
    process: [
      {
        title: "Gum assessment",
        detail: "We check gum health and identify areas that need focused attention.",
      },
      {
        title: "Clean & polish",
        detail: "Gentle professional cleaning removes buildup and refreshes the enamel surface.",
      },
      {
        title: "Prevention tips",
        detail: "You receive practical advice tailored to your mouth and routine.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Dental hygiene instruments prepared in a calm clinic setting",
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    shortName: "Dental implants",
    tagline: "Restorative treatment consultations.",
    summary:
      "Implant consultations for replacing missing teeth with a stable, natural-feeling restorative option.",
    description:
      "Dental implant journeys begin with careful planning. We assess bone, gum health and restorative goals, then explain the stages of treatment so you understand timelines, healing and long-term maintenance.",
    benefits: [
      "Detailed implant suitability assessment",
      "Restorative planning for function and aesthetics",
      "Staged, transparent treatment timelines",
      "Long-term maintenance guidance",
    ],
    idealFor: [
      "Patients missing one or more teeth",
      "Those seeking a fixed restorative solution",
      "Anyone wanting a thorough implant consultation",
    ],
    process: [
      {
        title: "Clinical planning",
        detail: "Imaging and examination determine whether implants are a suitable pathway.",
      },
      {
        title: "Treatment stages",
        detail: "We outline placement, healing and final restoration with clear expectations.",
      },
      {
        title: "Restoration & review",
        detail: "Your final restoration is refined for comfort, function and appearance.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Modern dental operatory prepared for restorative care",
  },
  {
    slug: "dental-crowns",
    name: "Dental Crowns",
    shortName: "Dental crowns",
    tagline: "Protecting and restoring compromised teeth.",
    summary:
      "Crown consultations for strengthening damaged teeth while restoring natural shape and appearance.",
    description:
      "When a tooth needs greater protection than a filling can provide, a carefully planned crown can restore strength and contour. We discuss materials, shade matching and aftercare with clarity.",
    benefits: [
      "Strength for weakened teeth",
      "Natural shade and contour matching",
      "Durable restorative options",
      "Protective long-term planning",
    ],
    idealFor: [
      "Teeth with large existing restorations",
      "Fractured or heavily worn teeth",
      "Patients needing restorative reinforcement",
    ],
    process: [
      {
        title: "Tooth assessment",
        detail: "We evaluate structure, bite and the most suitable restorative approach.",
      },
      {
        title: "Preparation & temporary",
        detail: "The tooth is prepared and protected while your crown is crafted.",
      },
      {
        title: "Fit & finish",
        detail: "Your crown is fitted, adjusted for comfort and polished for a natural look.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Dental clinic interior with soft lighting",
  },
  {
    slug: "root-canal-treatment",
    name: "Root Canal Treatment",
    shortName: "Root canal treatment",
    tagline: "Calm, careful endodontic care.",
    summary:
      "Root canal consultations focused on relieving discomfort and preserving your natural tooth wherever possible.",
    description:
      "Endodontic treatment is explained step by step so you know what to expect. We prioritise comfort, clear communication and preserving natural teeth when clinically appropriate.",
    benefits: [
      "Tooth-preserving treatment where suitable",
      "Careful local anaesthetic protocols",
      "Clear explanation before every stage",
      "Aftercare for comfort and healing",
    ],
    idealFor: [
      "Patients with deep decay or pulp inflammation",
      "Those experiencing dental pain",
      "Anyone wanting to understand endodontic options",
    ],
    process: [
      {
        title: "Diagnosis",
        detail: "We identify the source of discomfort and confirm whether root canal care is indicated.",
      },
      {
        title: "Treatment",
        detail: "The canal system is cleaned and sealed with attention to comfort throughout.",
      },
      {
        title: "Restoration",
        detail: "A suitable restoration protects the tooth after endodontic treatment.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Calm dental consultation environment",
  },
  {
    slug: "emergency-dental",
    name: "Emergency Dental Consultations",
    shortName: "Emergency dental",
    tagline: "Prompt guidance when dental discomfort cannot wait.",
    summary:
      "Same-day or priority consultations for urgent dental concerns, with clear next steps and reassurance.",
    description:
      "Dental emergencies are stressful. Our reception team prioritises urgent enquiries and helps you understand what to expect from an emergency consultation — from pain relief pathways to temporary protective care.",
    benefits: [
      "Priority enquiry handling",
      "Clear triage and guidance",
      "Comfort-focused urgent care",
      "Follow-up planning after the acute visit",
    ],
    idealFor: [
      "Sudden toothache or swelling",
      "Chipped or knocked teeth",
      "Lost fillings or crowns causing discomfort",
    ],
    process: [
      {
        title: "Urgent contact",
        detail: "Call or submit an enquiry describing your symptoms and availability.",
      },
      {
        title: "Assessment",
        detail: "We examine the concern, relieve discomfort where possible and explain options.",
      },
      {
        title: "Next steps",
        detail: "You leave with a plan for definitive care and how to stay comfortable in the meantime.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Welcoming clinic reception ready to assist patients",
  },
];

export const featuredTreatmentSlugs = [
  "general-dentistry",
  "cosmetic-dentistry",
  "orthodontics",
  "teeth-whitening",
] as const;

export function getTreatment(slug: string) {
  return treatments.find((treatment) => treatment.slug === slug);
}

export function getFeaturedTreatments() {
  return featuredTreatmentSlugs
    .map((slug) => getTreatment(slug))
    .filter((treatment): treatment is Treatment => Boolean(treatment));
}
