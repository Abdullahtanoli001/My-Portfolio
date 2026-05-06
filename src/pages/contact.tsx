import { useState } from "react";
import { NextSeo } from "next-seo";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  LinkedinIcon,
  GithubIcon,
  BrainCircuitIcon,
  SendIcon,
} from "lucide-react";
import { AnimatePresence, motion as _motion } from "framer-motion";
const motion = _motion as any;

import { siteMetadata } from "@/data/siteMetaData.mjs";
import ContactMailToast, {
  type MailSentToastState,
} from "@/components/contact-form/contact-mail-toast";
import { type FormiKInputFieldProps } from "@/utility/types";

/* ─── Validation schema ─────────────────────────────────────── */
const contactSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().optional(),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
  website: Yup.string().max(0), // honeypot
});

type ContactValues = Yup.InferType<typeof contactSchema>;

const initialValues: ContactValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  website: "",
};

/* ─── Contact info items ─────────────────────────────────────── */
const INFO_ITEMS = [
  {
    id: "location",
    icon: MapPinIcon,
    label: "Location",
    value: "Pakistan",
    href: null,
    iconColor: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
  },
  {
    id: "email",
    icon: MailIcon,
    label: "Email",
    value: siteMetadata.email,
    href: `mailto:${siteMetadata.email}`,
    iconColor: "text-violet-400",
    bgColor: "bg-violet-400/10",
  },
  {
    id: "linkedin",
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/abdullah-khan",
    href: siteMetadata.linkedin,
    iconColor: "text-sky-400",
    bgColor: "bg-sky-400/10",
  },
  {
    id: "github",
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/Abdullahtanoli001",
    href: siteMetadata.github,
    iconColor: "text-zinc-300",
    bgColor: "bg-zinc-300/10",
  },
  {
    id: "focus",
    icon: BrainCircuitIcon,
    label: "Primary Focus",
    value: "AI/ML Engineering · LLM Systems · Automation",
    href: null,
    iconColor: "text-accent",
    bgColor: "bg-accent/10",
  },
];

/* ─── Reusable field wrapper ──────────────────────────────────── */
function FieldWrapper({
  name,
  label,
  children,
}: {
  name: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="text-xs font-semibold uppercase tracking-widest text-zinc-400"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

/* ─── Styled input ────────────────────────────────────────────── */
const inputClass =
  "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 outline-none ring-0 transition-all duration-200 focus:border-accent/60 focus:bg-white/8 focus:ring-1 focus:ring-accent/40";

/* ─── Main page ───────────────────────────────────────────────── */
export default function ContactPage() {
  const [isSending, setIsSending] = useState(false);
  const [toastState, setToastState] = useState<MailSentToastState>({
    type: null,
    value: false,
  });

  const handleSubmit = async (
    values: ContactValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    setIsSending(true);
    try {
      const response = await fetch("/api/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: `${values.phone ? `Phone: ${values.phone}\n\n` : ""}${values.message}`,
          website: values.website,
        }),
      });

      if (response.ok) {
        setToastState({ type: "PASS", value: true });
        resetForm();
      } else {
        setToastState({
          type: response.status === 429 ? "RATE_LIMIT" : "FAIL",
          value: true,
        });
      }
    } catch {
      setToastState({ type: "FAIL", value: true });
    }
    setIsSending(false);
  };

  return (
    <>
      <NextSeo
        title="Contact Abdullah Khan - AI/ML Engineer"
        description="Get in touch with Abdullah Khan for AI/ML, automation, and LLM project collaborations or opportunities."
        canonical={`${siteMetadata.siteUrl}/contact`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/contact`,
          title: "Contact Abdullah Khan - AI/ML Engineer",
          description:
            "Reach out to Abdullah Khan for AI/ML projects, freelance work, or career opportunities.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.image}`,
              alt: "Abdullah Khan - AI/ML Engineer Portfolio",
            },
          ],
          siteName: siteMetadata.siteName,
        }}
      />

      <section className="relative min-h-screen px-6 py-16 sm:px-14 md:px-20 lg:py-24">
        {/* Background glow blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
            {/* ── LEFT: contact info ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col"
            >
              {/* Heading */}
              <div className="mb-6">
                <h1 className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-5xl font-bold text-transparent sm:text-6xl">
                  Contact
                </h1>
                <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-accent to-accent-light" />
              </div>

              <p className="mb-10 text-base leading-relaxed text-zinc-400 sm:text-lg">
                Available for AI/ML freelance projects, internships,
                apprenticeships, and full-time opportunities.
              </p>

              {/* Info cards */}
              <div className="flex flex-col gap-5">
                {INFO_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 + i * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/3 p-4 backdrop-blur-sm transition-all duration-200 hover:border-accent/30 hover:bg-white/6"
                      >
                        <InfoIcon item={item} />
                        <InfoText item={item} linked />
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/3 p-4 backdrop-blur-sm">
                        <InfoIcon item={item} />
                        <InfoText item={item} linked={false} />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── RIGHT: form ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="rounded-2xl border border-white/8 bg-white/4 p-8 shadow-2xl backdrop-blur-md sm:p-10">
                <Formik
                  initialValues={initialValues}
                  validationSchema={contactSchema}
                  onSubmit={handleSubmit}
                  validateOnChange
                >
                  {({ isValid, getFieldProps, errors, touched }) => (
                    <Form className="flex flex-col gap-5">
                      {/* Honeypot */}
                      <div className="hidden" aria-hidden="true">
                        <Field id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                      </div>

                      {/* Name */}
                      <FieldWrapper name="name" label="Your Name">
                        <input
                          id="name"
                          type="text"
                          placeholder="Abdullah Khan"
                          className={inputClass}
                          {...getFieldProps("name")}
                        />
                        {touched.name && errors.name && (
                          <span className="text-xs text-red-400">{errors.name}</span>
                        )}
                      </FieldWrapper>

                      {/* Email */}
                      <FieldWrapper name="email" label="Your Email">
                        <input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          className={inputClass}
                          {...getFieldProps("email")}
                        />
                        {touched.email && errors.email && (
                          <span className="text-xs text-red-400">{errors.email}</span>
                        )}
                      </FieldWrapper>

                      {/* Phone */}
                      <FieldWrapper name="phone" label="Phone Number (Optional)">
                        <input
                          id="phone"
                          type="tel"
                          placeholder="+92 300 0000000"
                          className={inputClass}
                          {...getFieldProps("phone")}
                        />
                      </FieldWrapper>

                      {/* Subject */}
                      <FieldWrapper name="subject" label="Subject">
                        <input
                          id="subject"
                          type="text"
                          placeholder="What's this about?"
                          className={inputClass}
                          {...getFieldProps("subject")}
                        />
                        {touched.subject && errors.subject && (
                          <span className="text-xs text-red-400">{errors.subject}</span>
                        )}
                      </FieldWrapper>

                      {/* Message */}
                      <FieldWrapper name="message" label="Your Message">
                        <textarea
                          id="message"
                          rows={5}
                          placeholder="Tell me about your project or opportunity..."
                          className={`${inputClass} resize-none`}
                          {...getFieldProps("message")}
                        />
                        {touched.message && errors.message && (
                          <span className="text-xs text-red-400">{errors.message}</span>
                        )}
                      </FieldWrapper>

                      {/* Submit */}
                      <button
                        id="contact-send-btn"
                        type="submit"
                        disabled={!isValid || isSending}
                        className="group relative mt-2 flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-accent to-accent-light py-4 text-base font-semibold text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-accent/40 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
                      >
                        {isSending ? (
                          <>
                            <svg
                              className="h-4 w-4 animate-spin"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                              />
                            </svg>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <SendIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                          </>
                        )}
                        {/* Shimmer overlay */}
                        <motion.div
                          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          animate={{ translateX: ["−100%", "200%"] }}
                          transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
                        />
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactMailToast toastState={toastState} showToast={setToastState} />
    </>
  );
}

/* ─── Sub-components ──────────────────────────────────────────── */
function InfoIcon({ item }: { item: (typeof INFO_ITEMS)[0] }) {
  const Icon = item.icon;
  return (
    <div
      className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg ${item.bgColor}`}
    >
      <Icon className={`h-5 w-5 ${item.iconColor}`} />
    </div>
  );
}

function InfoText({
  item,
  linked,
}: {
  item: (typeof INFO_ITEMS)[0];
  linked: boolean;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
        {item.label}
      </p>
      <p
        className={`mt-0.5 text-sm font-medium ${
          linked
            ? "text-zinc-200 transition-colors duration-200 group-hover:text-accent"
            : "text-zinc-200"
        }`}
      >
        {item.value}
      </p>
    </div>
  );
}
