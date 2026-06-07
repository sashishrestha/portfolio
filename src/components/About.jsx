import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import TextPressure from "./TextPressure";

export default function About() {
  const [ref, inView] = useInView(0.15);

  return (
    <section
      id="about"
      ref={ref}
      className="py-12 md:py-28 px-6 lg:px-10 max-w-7xl mx-auto flex flex-col justify-center min-h-screen"
    >
      <div className="grid lg:grid-cols-2 sm:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2>
            <TextPressure
              text={"Design is \nproblem solving, \nnot just aesthetics."}
              flex
              alpha={false}
              stroke={false}
              width
              weight
              italic
              textColor="#ffffff"
              strokeColor="#5227FF"
              minFontSize={36}
              className="text-5xl lg:text-6xl gradient-text leading-[120%]"
            />
          </h2>
        </motion.div>
          <div className="space-y-4 text-(--color-muted) leading-relaxed">
            <p>
              I've spent the last 10+ years obsessing over how people interact
              with digital products. Starting as a self-taught designer, I grew
              into a senior role owning everything from user research and
              information architecture to high-fidelity prototyping and
              front-end implementation.
            </p>
            <p>
              My background spanning both design and front-end development means
              I design with code in mind — reducing friction at every handoff
              and shipping products that match the vision.
            </p>
            <p>
              Today I focus on enterprise SaaS, fintech, and identity-security
              products at BeyondID, where I lead design for the BeyondID
              platform and work closely with engineering and product teams.
            </p>
          </div>
      </div>
      <ul className="sr-only" aria-label="Skills and tools">
        {["Figma","Adobe XD","Photoshop","Illustrator","VSCode","HTML5","CSS3 / SCSS","React","Angular","Bootstrap","Ionic","WordPress","Wix","User Research","Design Systems","Enterprise App","Fintech","SaaS","Google UX Design","Okta Professional","Okta Administrator","Okta Developer","Auth0 Specialist","Okta for AI Agents"].map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <div aria-hidden="true" className="mt-16 overflow-hidden relative flex gap-4 flex-col justify-center">
        <div className="absolute left-0 top-0 w-24 h-full bg-linear-to-r from-(--color-bg) to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-24 h-full bg-linear-to-l from-(--color-bg) to-transparent z-10 pointer-events-none" />
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="flex gap-2 whitespace-nowrap w-max"
        >
          {[...Array(2)].map((_, rep) =>
            [
              "Figma",
              "Adobe XD",
              "Photoshop",
              "Illustrator",
              "VSCode",
              "HTML5",
              "CSS3 | SCSS",
              "React",
              "Angular",
              "Bootstrap",
              "Ionic",
              "WordPress",
              "Wix",
               "User Research",
              "Design Systems",
              "Enterpise App",
              "Fintech",
              "Saas",
               "Google UX Design",
              "Okta Professional",
              "Okta Administrator Okta",
              "Okta Developer",
              "Auth0 Specialist",
              "Okta for AI Agents",
              
            ].map((s) => (
              <span
                key={`${rep}-${s}`}
                className="text-(--color-text)/50 text-2xl tracking-wide uppercase font-extralight px-8 py-4 bg-(--color-accent2)/15 rounded-full"
              >
                {s}
              </span>
            )),
          )}
        </motion.div>
      </div>
    </section>
  );
}
