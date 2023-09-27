"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TyTitle = { title: string };

export default function PageTitle({ title }: TyTitle) {
  const titleRef = useRef<null | HTMLHeadingElement>(null);

  const [isVisible, setIsVisible] = useState(false);

  const checkVisibility = () => {
    if (!titleRef.current) return;
    const rect = titleRef.current.getBoundingClientRect();

    setIsVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
  };
  useEffect(() => {
    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
  }, []);

  return (
    <AnimatePresence>
      <motion.h2
        ref={titleRef}
        initial={{ opacity: 0, scale: 0 }}
        transition={{ ease: "easeInOut" }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
        className="font-bold text-center text-7xl font-mooli py-14"
      >
        {title}
      </motion.h2>
    </AnimatePresence>
  );
}
