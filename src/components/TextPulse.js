import { motion } from "framer-motion";

export default function TextPulse({ displayedText = "Pulsing Color" }) {
  return (
    <motion.span
      animate={{
        color: [
          "var(--name-colour)",
          "#04B1DB",
          "#0464F6",
          "#0464F6",
          "#04B1DB",
          "var(--name-colour)",
        ],
      }}
      transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
    >
      {displayedText}
    </motion.span>
  );
}
