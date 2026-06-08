import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import {
  Mail,
  Copy,
  Check,
  SquareArrowOutUpRightIcon,
  Award,
} from "lucide-react";

const DribbbleSvg = ({ size = 18 }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M17.25 3.53906C14.65 8.08906 9.64 10.6991 4.42 10.2291L1.25 9.9391"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.25 18.1193C6.85 13.5693 11.86 10.9593 17.08 11.4293L20.25 11.7193"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.75 20.75C16.2728 20.75 20.75 16.2728 20.75 10.75C20.75 5.22715 16.2728 0.75 10.75 0.75C5.22715 0.75 0.75 5.22715 0.75 10.75C0.75 16.2728 5.22715 20.75 10.75 20.75Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.38086 1.75L9.56086 5.7C11.6909 8.34 13.2009 11.41 14.0009 14.7L15.2109 19.69"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const LinkedInSvg = ({ size = 18 }) => (
  <svg
    width="22"
    height="23.5"
    viewBox="0 0 10 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M0.75 0.75V1.25"
      stroke="currentColor"
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M0.75 9.5V3.875M4.75 9.5V6.625M4.75 6.625V3.875M4.75 6.625C4.75 5.337 5.972 4.625 7.15 4.625C8.75 4.625 8.75 6 8.75 7.5V9.5"
      stroke="currentColor"
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const Behance = () => (
  <svg
    width="22"
    height="14"
    viewBox="0 0 22 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M0.75 6.75H7.75C9.45 6.75 10.75 8.05 10.75 9.75C10.75 11.45 9.45 12.75 7.75 12.75H1.75C1.15 12.75 0.75 12.35 0.75 11.75V1.75C0.75 1.15 1.15 0.75 1.75 0.75H6.75C8.45 0.75 9.75 2.05 9.75 3.75C9.75 5.45 8.45 6.75 6.75 6.75H0.75Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-miterlimit="10"
    />
    <path
      d="M12.75 8.75H20.75C20.75 6.55 18.95 4.75 16.75 4.75C14.55 4.75 12.75 6.55 12.75 8.75ZM12.75 8.75C12.75 10.95 14.55 12.75 16.75 12.75H18.45"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.25 2.25H15.25"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

import { info, certifications } from "../data/portfolio";

const ITEMS_PER_SLIDE = 3;

export default function Contact() {
  const [ref, inView] = useInView(0.1);
  const [copied, setCopied] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [];
  for (let i = 0; i < certifications.length; i += ITEMS_PER_SLIDE) {
    slides.push(certifications.slice(i, i + ITEMS_PER_SLIDE));
  }

  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleCopy = () => {
    navigator.clipboard.writeText(info.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="pt-16 px-6 lg:px-10 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 mb-8"
      >
        <p className="text-xs uppercase tracking-widest text-(--color-text)/50 font-bold mb-2">
          Certifications
        </p>
        <div className="relative overflow-hidden">
          <motion.div
            key={slideIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {slides[slideIndex].map((cert, i) => (
              <div
                key={i}
                className="group flex items-center justify-between gap-2 bg-(--color-surface) rounded-2xl px-6 py-5 transition-all duration-200 hover:scale-[1.02]"
              >
                <Award className="w-6 h-6 text-(--color-accent2) shrink-0" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-(--color-text) text-sm leading-tight">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-(--color-muted) mt-0.5">
                    {cert.issuer}
                  </p>
                </div>
                <a
                  href={cert.credlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SquareArrowOutUpRightIcon
                    size={16}
                    strokeWidth={1.5}
                    className="text-(--color-muted)/50 group-hover:text-(--color-accent2) group-hover:scale-150 transition duration-300"
                  />
                </a>
              </div>
            ))}
          </motion.div>

          {slides.length > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlideIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === slideIndex
                      ? "bg-(--color-accent) w-8"
                      : "bg-(--color-muted)/30 w-2"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className=""
      >
        <p className="text-xs uppercase tracking-widest text-(--color-text)/50 font-bold mb-2">
          Social Links
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              label: "Dribbble",
              href: info.social.dribbble,
              icon: <DribbbleSvg size={18} />,
            },
            {
              label: "LinkedIn",
              href: info.social.linkedin,
              icon: <LinkedInSvg size={18} />,
            },
            {
              label: "Behance",
              href: info.social.behance,
              icon: <Behance />,
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${s.label} — ${s.sub}, opens in new tab`}
              className="group flex items-center justify-between bg-(--color-surface) rounded-2xl px-6 py-5 transition-all duration-200 hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3">
                <span
                  className="text-(--color-muted) group-hover:text-(--color-accent2) transition-colors"
                  aria-hidden="true"
                >
                  {s.icon}
                </span>
                <div aria-hidden="true">
                  <p className="text-sm font-medium text-(--color-accent)">
                    {s.label}
                  </p>
                </div>
              </div>
              <SquareArrowOutUpRightIcon
                strokeWidth={1.5}
                size={16}
                aria-hidden="true"
                className="text-(--color-muted)/50 group-hover:text-(--color-accent2) group-hover:scale-150 transition duration-300"
              />
            </a>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="bg-(--color-surface)  rounded-t-3xl p-8  overflow-hidden mt-6"
      >
        <div className="flex flex-col gap-4 lg:flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold text-(--color-accent) mb-0.5">
              Get in touch
            </h2>
            <p className="text-sm text-(--color-muted)">
              Have a project in mind or just want to say hello? Send me an
              email.
            </p>
          </div>
          <div className="flex flex-col items-end gap-4">
            <button
              onClick={handleCopy}
              aria-label={
                copied
                  ? "Email address copied to clipboard"
                  : "Copy email address"
              }
              title="Copy Email"
              className="group cursor-copy inline-flex items-center gap-3 bg-(--color-accent2)/50  text-(--color-text)/70 hover:bg-(--color-accent2) hover:text-(--color-text) rounded-2xl px-6 py-3 transition-all duration-200 "
            >
              <span className="text-sm font-medium ">{info.email}</span>

              <span
                className="flex items-center gap-2 ml-1 transition-colors"
                aria-live="polite"
                aria-atomic="true"
              >
                {copied && (
                  <motion.p
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs "
                  >
                    Copied!
                  </motion.p>
                )}
                {copied ? (
                  <Check size={16} className="" aria-hidden="true" />
                ) : (
                  <Copy size={16} aria-hidden="true" />
                )}
              </span>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
