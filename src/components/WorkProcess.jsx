import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "../hooks/useInView";
import {
  Search,
  Lightbulb,
  Layers,
  Code2,
  CheckCircle,
  Send,
  SparklesIcon,
  UserRoundPenIcon,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import TextPressure from "./TextPressure";
import WorkProcessFlow from "./WorkProcessFlow";

const phases = [
  {
    number: "01",
    name: "Discover & Define",
    tagline: "AI synthesizes. I judge.",
    icon: Search,
    description:
      "Use AI to synthesize research, spot patterns across user feedback, and draft problem statements or HMW questions. You bring the stakeholder context and judgment about what actually matters.",
    ai: "Synthesize research, spot patterns, draft HMW questions",
    you: "Stakeholder context and judgment on what matters",
  },
  {
    number: "02",
    name: "Ideate",
    tagline: "AI generates. I curate.",
    icon: Lightbulb,
    description:
      "Treat AI as a brainstorm partner with infinite patience. Describe the constraint and ask for 5 different layout directions. Pick, remix, discard — you're the curator.",
    ai: "5+ layout directions, constraint exploration",
    you: "Curation, taste, and final direction",
  },
  {
    number: "03",
    name: "Design",
    tagline: "AI structures. I feel.",
    icon: Layers,
    description:
      "Your Figma MCP workflow is already ahead of most teams. Use it to programmatically build component structures, bind tokens, and audit variable coverage. Save manual work for the nuanced decisions: hierarchy, spacing feel, emotional tone.",
    ai: "Component structures, token binding, variable audits",
    you: "Hierarchy, spacing feel, emotional tone",
  },
  {
    number: "04",
    name: "Build",
    tagline: "AI scaffolds. I review.",
    icon: Code2,
    description:
      "This is where the speed gain is biggest. AI can scaffold a component in seconds, but your value is knowing when the generated code is wrong — wrong token names, missing accessibility attributes, doesn't match your schema.",
    ai: "Component scaffolding in seconds",
    you: "System knowledge, a11y review, token validation",
  },
  {
    number: "05",
    name: "Validate",
    tagline: "AI stress-tests. I decide.",
    icon: CheckCircle,
    description:
      'Ask AI to play devil\'s advocate: "What edge cases am I missing? What accessibility failures could this have? What does this look like at 200% zoom?" A fast way to surface what\'s easy to overlook in familiar screens.',
    ai: "Edge cases, a11y failures, stress scenarios",
    you: "Final call on what ships",
  },
  {
    number: "06",
    name: "Ship + Document",
    tagline: "AI writes. I unblock.",
    icon: Send,
    description:
      "The phase designers skip most. AI can write the PR description, the design rationale, the Jira ticket update. Unblock yourself by dumping context and asking it to clean it up — then ship.",
    ai: "PR descriptions, design rationale, ticket updates",
    you: "Context dump and final approval",
  },
];

function PhaseCard({ phase, index }) {
  const Icon = phase.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex flex-col h-full relative group bg-(--color-surface) rounded-2xl p-6 overflow-hidden hover:border-(--color-accent)/30 transition-colors duration-300"
    >
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-4">
          
            <Icon className="w-8 h-8 text-(--color-text)/50" strokeWidth={1.5} />
               <div className="flex flex-col gap-1 items-start">
           <h3 className="text-(--color-text)  text-3xl">
        {phase.name}
      </h3>
        </div>
        </div>
      </div>
      <p className="text-sm text-(--color-muted) leading-relaxed mb-5">
        {phase.description}
      </p>
      <div className="flex flex-col gap-2 mt-auto">
        <span className="text-xs text-(--color-accent2) whitespace-nowrap leading-none flex items-center justify-center mb-1 mt-2">
          {phase.tagline}
        </span>
        <div className="flex items-center gap-4 relative rounded-xl p-3 bg-(--color-border)/75">
          <p className="text-[9px] uppercase tracking-[0.16em] font-bold text-(--color-muted) mb-1.5">
            <SparklesIcon className="w-4 h-4 ml-2" aria-hidden="true" strokeWidth={2} />
            <span className="sr-only">AI: </span>
          </p>
          <p className="text-xs text-(--color-text)/65 leading-snug">
            {phase.ai}
          </p>
        </div>
        <div className="flex items-center gap-4 relative rounded-xl p-3 bg-(--color-border)/75">
          <p className="text-[9px] uppercase tracking-[0.16em] font-bold text-(--color-muted) mb-1.5">
            <UserRoundPenIcon className="w-4 h-4 ml-2" aria-hidden="true" strokeWidth={2} />
            <span className="sr-only">You: </span>
          </p>
          <p className="text-xs text-(--color-text)/65 leading-snug">
            {phase.you}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function WorkProcess() {
  const [ref, inView] = useInView(0.08);
  const [expanded, setExpanded] = React.useState(false);
  const scrollRef = React.useRef(null);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section
      id="work-process"
      ref={ref}
      className="py-12 md:py-28 px-6 lg:px-10 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-14"
      >
        <p className="text-xs uppercase tracking-widest text-(--color-text)/50 font-bold mb-1">
          AI Workflow
        </p>
        <h2>
          <TextPressure
            text="Work Process"
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
        <p className="text-(--color-muted) max-w-lg mt-3 leading-relaxed">
          AI works best as a parallel collaborator, not a replacement for any
          phase. Here's how each phase plays out in practice.
        </p>
      </motion.div>

      {/* Phase cards */}
      <motion.div initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }} className="flex items-center justify-center mb-12"><WorkProcessFlow size={900} /></motion.div>
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium border border-(--color-border) text-(--color-text)/70 hover:text-(--color-text) hover:border-(--color-accent)/50 transition-all duration-200"
          >
            {expanded ? "Hide Detail" : "View Detail"}
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="inline-block"
            >
              <ChevronUp className="w-4" />
            </motion.span>
          </button>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              key="phase-cards"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className=""
            >
              <div className="relative my-8">
                <button
                  onClick={() => scroll(-1)}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-(--color-surface) border border-(--color-border) text-(--color-text)/60 hover:text-(--color-text) hover:border-(--color-accent)/50 shadow-md transition-all duration-200"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div
                  ref={scrollRef}
                  className="flex gap-5 overflow-x-auto scroll-smooth pb-4 px-1 snap-x snap-mandatory"
                  style={{ scrollbarWidth: "none" }}
                >
                  {phases.map((phase, i) => (
                    <div key={i} className="snap-start shrink-0 w-[320px]">
                      <PhaseCard phase={phase} index={i} />
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => scroll(1)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-(--color-surface) border border-(--color-border) text-(--color-text)/60 hover:text-(--color-text) hover:border-(--color-accent)/50 shadow-md transition-all duration-200"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </section>
  );
}
