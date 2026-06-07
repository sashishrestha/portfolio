import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { MoveRight } from "lucide-react";
import { experience } from "../data/portfolio";
import TextPressure from "./TextPressure";

function ExperienceItem({ item, index }) {
  return (
    <div className="flex flex-col items-center md:items-start md:flex-row md:gap-16">
      <motion.button
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: index * 0.08 }}
        className="flex lg:ml-6"
        aria-label={`${item.company} on role of ${item.role} from ${item.period}`}
      >
        <img
          src={item.logo}
          alt={item.company}
          className={`w-48 ${item.company.includes("Nagarjun") ? "h-22" : "h-16"} object-contain grayscale-dark md:mt-6 mt-4`}
        />
      </motion.button>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="overflow-hidden flex-1 w-full"
      >
        <div className="flex items-start gap-4 px-6 pb-4 md:pt-6 pt-4">
          <div className="flex-1 min-w-0">
            <div className="flex flex-col gap-1">
              <h3 className="text-(--color-text) font-semibold text-lg">{item.role}</h3>
              <p className="text-sm text-(--color-muted)">{item.period}</p>
            </div>
          
          </div>
        </div>

        <div className="px-6 pb-6 rounded-2xl bg-(--color-surface)  pt-4">
          <p className="text-sm text-(--color-text) leading-relaxed mb-4">
            {item.description}
          </p>
          {item.highlights.length > 0 && (
            <ul className="space-y-2">
              {item.highlights.map((h, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-(--color-muted)"
                >
                  <MoveRight className="text-(--color-accent2) w-4 h-4 shrink-0 mr-2" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  const [ref, inView] = useInView(0.1);

  return (
    <section
      id="experience"
      ref={ref}
      className="py-12 md:py-28 px-6 lg:px-10 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="text-xs uppercase tracking-widest text-(--color-text)/50 font-bold">
          Career
        </p>
        <h2>
          <TextPressure
            text={"Experience"}
            flex
            alpha={false}
            stroke={false}
            width
            weight
            italic
            textColor="#ffffff"
            strokeColor="#5227FF"
            minFontSize={36}
            className="text-5xl lg:text-6xl gradient-text"
          />
        </h2>
        <p className="text-(--color-muted) max-w-md">
          12+ years across startups, agencies, and product companies.
        </p>
      </motion.div>

      <div className="space-y-8">
        {experience.map((item, i) => (
          <ExperienceItem key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
