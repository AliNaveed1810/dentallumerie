import type { TeamMember } from "@/types";

export const team: TeamMember[] = [
  {
    id: "elena-marchand",
    name: "Dr Elena Marchand",
    role: "Principal Dentist",
    credentials: "BDS (Lond), MSc Restorative Dentistry",
    bio: "Elena founded LUMIÈRE with a simple belief: exceptional dentistry should feel calm, personal and never rushed. She leads the studio’s restorative and cosmetic pathways with a refined, conservative approach.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80",
    specialties: ["Cosmetic dentistry", "Restorative care", "Smile design"],
  },
  {
    id: "james-okonkwo",
    name: "Dr James Okonkwo",
    role: "Associate Dentist",
    credentials: "BDS (Bristol), PGCert Orthodontics",
    bio: "James combines precise clinical technique with a warm, explanatory style. Patients appreciate his clear guidance through alignment, general dentistry and longer-term treatment planning.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1200&q=80",
    specialties: ["Orthodontics", "Clear aligners", "General dentistry"],
  },
  {
    id: "sofia-alvarez",
    name: "Sofia Alvarez",
    role: "Dental Hygienist",
    credentials: "Dip Dent Hygiene, GDC Registered",
    bio: "Sofia makes preventive care feel approachable. Her hygiene appointments focus on gum health, gentle technique and practical habits patients can sustain at home.",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=1200&q=80",
    specialties: ["Dental hygiene", "Periodontal maintenance", "Prevention"],
  },
  {
    id: "nathan-reed",
    name: "Nathan Reed",
    role: "Patient Care Coordinator",
    credentials: "Reception & Patient Experience Lead",
    bio: "Nathan is often the first voice patients hear. He coordinates appointments, answers practical questions and ensures every visit begins with clarity and calm.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80",
    specialties: ["Appointment planning", "Patient guidance", "Studio welcome"],
  },
];
