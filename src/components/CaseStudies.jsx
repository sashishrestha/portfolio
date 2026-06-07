import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { ExternalLinkIcon } from "lucide-react";
import { caseStudies } from "../data/portfolio";
import TextPressure from "./TextPressure";


export default function CaseStudies() {
  const [ref, inView] = useInView(0.1);

  return (
    <>
      <section
        id="case-studies"
        ref={ref}
        className="py-12 md:py-28 px-6 lg:px-10 max-w-7xl mx-auto "
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
            <p className="text-xs uppercase tracking-widest text-(--color-text)/50 font-bold">
                    Deep dives
                  </p>
                  <h2>
                    <TextPressure
                      text={"Case studies"}
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
          <p className="text-(--color-muted)  max-w-md">
            The thinking behind the work.
          </p>
        </motion.div>

        <div className="flex flex-col gap-12">
          {caseStudies.map((study, i) => (
            <a
            href={study.link}
            target="_blank"
            rel="noopener noreferrer"
              aria-label={`View ${study.title} case study`}
              className="text-left w-full block bg-(--color-surface)  p-6 rounded-4xl overflow-hidden"
            >
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group relative cursor-pointer grid md:grid-cols-2 items-center transition-all duration-300"
            >
              

              <div className="px-6" >
                <img src={study.logo} className="grayscale-dark opacity-50 group-hover:opacity-100 transition" alt={study.logo} />
                <h3 className="font-display text-3xl  text-(--color-text) mb-1 mt-8">
                  {study.title}
                </h3>
                <p className="text-sm text-(--color-muted)">
                  {study.subtitle}
                </p>
                 <a
            href={study.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex uppercase  items-center gap-2 text-xs text-(--color-accent2) transition-all duration-200 mt-6 font-medium"
          >
            View Case Study
            <ExternalLinkIcon className="w-3 h-3" />
          </a>
              
              </div>
              <div
                className="md:h-72 relative"
              >
                <img src={study.img} className="rounded-3xl grayscale-dark shadow-2xl group-hover:shadow-xl max-h-full w-full object-cover object-top mt-12 md:mt-0 md:absolute -bottom-16 -right-16 group-hover:bottom-0 group-hover:right-0  transition-all duration-500" alt="" />
              </div>
            </motion.div>
            </a>
          ))}
        </div>
      </section>

    </>
  );
}
