export const siteConfig = {
  name: "LUMIÈRE",
  fullName: "LUMIÈRE Dental Studio",
  tagline: "Confidence begins with care.",
  description:
    "A contemporary private dental studio in London combining modern dentistry, personalised patient care and an exceptionally comfortable experience.",
  demoNotice:
    "This is a fictional clinic created as a portfolio demonstration. No real patient data is collected.",
  url: "https://lumiere-dental.demo",
  location: {
    address: "24 Harley Street",
    city: "London",
    postcode: "W1G 9QN",
    country: "United Kingdom",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.592!2d-0.147!3d51.520!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad6c0b0b0b1%3A0x0!2sHarley%20Street!5e0!3m2!1sen!2suk!4v1700000000000",
  },
  contact: {
    phone: "+44 20 7946 0958",
    phoneHref: "tel:+442079460958",
    email: "hello@lumiere-dental.demo",
    whatsapp: "447946095800",
    whatsappMessage:
      "Hello LUMIÈRE Dental Studio — I would like to enquire about an appointment.",
  },
  hours: [
    { day: "Monday – Friday", time: "08:00 – 19:00" },
    { day: "Saturday", time: "09:00 – 14:00" },
    { day: "Sunday", time: "Closed" },
  ],
  nav: [
    { href: "/about", label: "About" },
    { href: "/treatments", label: "Treatments" },
    { href: "/our-team", label: "Our Team" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`;
