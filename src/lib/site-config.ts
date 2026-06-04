export const siteConfig = {
  name: "Dr. Poonam's Women's Clinic",
  shortName: "Dr. Poonam's Clinic",
  description: "Dr. Poonam's Women's Clinic is a leading gynecologist clinic in Keshav Nagar, Pune. Led by Dr. Poonam (MBBS, DGO, PGDMCH), senior obstetrician-gynecologist, offering expert care in normal delivery, infertility, IUI, PCOD, and laparoscopic procedures.",
  url: "https://yourdomain.com", // update to client domain when active
  logo: "/images/logo-women-health.svg",
  footerLogo: "/images/footer-logo.svg",
  
  doctor: {
    name: "Dr. Poonam",
    qualifications: "MBBS, DGO, PGDMCH",
    role: "Senior Consultant Obstetrician & Gynecologist",
    experience: "+15 Years"
  },

  // NAP (Name, Address, Phone) details
  contact: {
    phone: "097119 29529",
    phoneRaw: "+919711929529",
    address: "Shop No 33, Shopping Complex, Mantra Mesmer Rd, in front of Florida River Bank, Keshav Nagar, Mundhwa, Mundhawa, Pune, Maharashtra 411036",
    hours: {
      weekday: "Monday to Saturday (10am - 2pm, 6pm - 9pm)",
      sunday: "Sunday (Closed)"
    },
    hoursShort: "Mo,Tu,We,Th,Fr,Sa 10:00-14:00 18:00-21:00",
    mapsLink: "https://www.google.com/maps/place/Dr+Poonam's+Women's+Clinic+%7C+Gynecologist/data=!4m2!3m1!1s0x0:0xd39aed6b8c64a153?sa=X&ved=1t:2428&hl=en&ictx=111",
    embedMapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.1873138883656!2d73.9392261!3d18.520412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1d9161a0bc5%3A0xd39aed6b8c64a153!2sDr%20Poonam&#39;s%20Women&#39;s%20Clinic%20%7C%20Gynecologist!5e0!3m2!1sen!2sin!4v1716912345678"
  },

  // Social handles
  socials: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    dribbble: "#"
  },

  // Google reviews
  reviews: {
    rating: "5.0",
    count: "42"
  },

  // Service Areas
  serviceAreas: {
    primary: "Keshav Nagar",
    secondary: ["Mundhwa", "Hadapsar", "Magarpatta", "Kharadi", "Pune"]
  },

  // Core services list from client image flyer
  services: [
    { title: "Normal Delivery", desc: "Expert prenatal care, labor support, and natural child birth facilitation." },
    { title: "LSCS (Caesarean Section)", desc: "Safe, sterile, and professional surgical delivery when medically indicated." },
    { title: "Infertility, IUI, IVF", desc: "Advanced fertility testing, Intrauterine Insemination, and In Vitro Fertilization support." },
    { title: "Scarless Hysterectomy (NDVH)", desc: "Non-descent vaginal hysterectomy for uterine conditions without abdominal incisions." },
    { title: "PCOD Care", desc: "Holistic management of PCOS/PCOD with lifestyle advice, medical therapy, and symptom control." },
    { title: "Cervical Cancer Vaccination and Screening", desc: "Preventative HPV vaccine administration and regular Pap smear testing." },
    { title: "Pre Conceptional Counselling", desc: "Health check-ups, lifestyle advice, and preparation plans for couples planning pregnancy." },
    { title: "MTP, D & E", desc: "Safe, legal, and confidential medical termination of pregnancy and dilation & evacuation services." },
    { title: "Tubal Ligation & Reversal", desc: "Permanent female contraception and microsurgical tubal re-canalization." },
    { title: "Laparoscopic Procedure", desc: "Minimally invasive keyhole surgeries for ovarian cysts, fibroids, and diagnostic laparoscopy." }
  ],

  // Target SEO Keywords
  keywords: [
    "gynecologist in keshav nagar",
    "gynecologist keshav nagar",
    "gynecologist in mundhwa",
    "obstetrician gynecologist in pune",
    "fertility clinic keshav nagar",
    "women's health center mundhwa",
    "pregnancy care clinic keshav nagar",
    "best gynecologist hadapsar",
    "obstetrician in kharadi",
    "PCOD treatment keshav nagar",
    "IUI specialist pune",
    "normal delivery doctor keshav nagar"
  ]
};

export type SiteConfig = typeof siteConfig;
