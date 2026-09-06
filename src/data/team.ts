// Single source of truth for people — used by the homepage Crew section.

export type TeamMember = {
  name: string;
  role: string;
  photo?: string;
  linkedin?: string;
  description: string;
};

export const founders: TeamMember[] = [
  {
    name: "Mehul Vig",
    role: "Co-Founder",
    photo: "/mehul.jpg",
    linkedin: "https://www.linkedin.com/in/mehul-vig-462345282/",
    description: "Experience in GTM & product through a stablecoin cross-border payments startup across Southeast Asia. Co-founding Aidress.",
  },
  {
    name: "Kabir Sadani",
    role: "Co-Founder",
    photo: "/kabir.jpg",
    linkedin: "https://www.linkedin.com/in/kabir-sadani-a5a057378/",
    description: "Experience in product design and data-driven systems at Sportz Interactive. Co-founding Aidress.",
  },
];

export const advisors: TeamMember[] = [
  {
    name: "Prashanth Ranganathan",
    role: "Advisor",
    photo: "/prashanth.jpg",
    linkedin: "https://www.linkedin.com/in/prashanthr/",
    description: "Serial founder behind multiple acquisitions by Google, PayPal, and PayU.",
  },
  {
    name: "Milind Sanghavi",
    role: "Advisor",
    photo: "/milind.jpg",
    linkedin: "https://www.linkedin.com/in/milindsanghavi/",
    description: "Founder at Xweave, building the future of global cross border payments rails.",
  },
  {
    name: "Vidhya Venkat",
    role: "Advisor",
    description: "Software Engineering Lead at Meta, currently leading infrastructure build for Meta Superintelligence Labs.",
  },
];

export const crewMembers: TeamMember[] = [...founders, ...advisors];

export const contactEmails = {
  general: "teamaidress@gmail.com",
  security: "security@aidress.ai",
  mehul: "mehul@aidress.ai",
  kabir: "kabir@aidress.ai",
};
