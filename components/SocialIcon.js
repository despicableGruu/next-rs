// import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { popUp } from "../content/FramerMotionVariants";
import { useEffect } from "react";

export default function SocialIcon({ Icon, title, url }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView]);

  return (
    <motion.a
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={popUp}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="icon" title={title} />
    </motion.a>
  );
}
