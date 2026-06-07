import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { info, stats } from "../data/portfolio";
import TextPressure from "./TextPressure";
import Avatar from "./Avatar";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

function CountUp({ value, delay = 0 }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const [count, setCount] = useState(0);
  const prevRef = useRef(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const duration = 1400;
      const startTime = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);

        if (current !== prevRef.current) {
          prevRef.current = current;
          setCount(current);
        }

        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [target, delay]);

  return (
    <>
      {count}
      <span className="text-3xl text-(--color-muted)/50">{suffix}</span>
    </>
  );
}

export default function Hero() {
  return (
    <section id="hero" aria-label="Introduction" className="relative min-h-[calc(100vh-64px)]  group/hero flex flex-col justify-center px-6 lg:px-10 pt-24 pb-16 max-w-7xl mx-auto overflow-hidden mt-16">
      {/* Background grid */}
      

      {/* Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-(--color-accent2)/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 grid md:grid-cols-2">
         <div className="flex items-end sn:justify-center mb-6 sm:mb-0">
          <div className="profile-img-container mt-8 md:mt-0 cursor-pointer overflow-hidden " onClick={() =>
          document
            .querySelector("#about")
            ?.scrollIntoView({ behavior: "smooth" })
        }>
          <motion.div initial={{ opacity: 0, translateY:"100%", scale:0.2 }}
        animate={{ opacity: 1,  translateY:"0", scale:1  }}
        transition={{ duration: 0.6 }} className="rounded-t-4xl z-10 relative pt-4 h-full">
          <Avatar className={"w-44 md:w-96"} />
          </motion.div>
          </div>
        </div>
        <div className="flex flex-col justify-center pb-12">
          {/* Headline */}
          <motion.h1
            {...fadeUp(0.2)}
            className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[1.05] mb-6"
          >
            <div className="flex flex-col items-start gap-2">
              <span className="text-(--color-accent2) text-sm tracking-wide uppercase font-medium px-4 py-2 bg-(--color-accent2)/15 rounded-full">Senior UI/UX Designer</span>  
            <TextPressure
              text={"Sashi\nShrestha"}
              flex
              alpha={false}
              stroke={false}
              width
              weight
              italic
              textColor="#ffffff"
              strokeColor="#5227FF"
              minFontSize={36}
              className="gradient-text font-extralight"
            />
            
                        </div>

          </motion.h1>

          {/* Bio */}
          <motion.p
            {...fadeUp(0.35)}
            className="text-(--color-muted) font-light text-lg lg:text-xl max-w-xl leading-relaxed"
          >
            {info.bio}
          </motion.p>
        </div>
       
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-12 border-t border-(--color-border) mt-12 sm:mt-0"
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + i * 0.1 }}
            aria-label={`${s.value} ${s.label}`}
          >
            <p className="text-6xl font-extralight text-(--color-text)/70" aria-hidden="true">
              <CountUp value={s.value} delay={0.7 + i * 0.1} />
            </p>
            <p className="text-[10px] tracking-widest uppercase text-(--color-muted)/70 mt-0.5" aria-hidden="true">
              {s.label}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll cue */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        onClick={() =>
          document
            .querySelector("#about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        aria-label="Scroll to About section"
        className="absolute bottom-8 right-10 hidden lg:flex flex-col items-center gap-2 text-(--color-muted) hover:text-(--color-text) transition-colors"
      >
        <span className="text-[10px] uppercase tracking-widest rotate-90 mb-2">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
