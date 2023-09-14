import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ImagePageUltimate({ photo }) {
  const imageRef = useRef(null);
  const [isVisibility, setIsVisible] = useState(false);

  const checkVisibility = () => {
    if (!imageRef.current) return;

    const displayClient = imageRef.current.getBoundingClientRect();

    setIsVisible(
      displayClient.top <= window.innerHeight && displayClient.bottom >= 0
    );
  };
  useEffect(() => {
    const handleScrollVisibility = () => {
      checkVisibility();
    };
    window.addEventListener("scroll", handleScrollVisibility);
    checkVisibility();

    return () => {
      window.removeEventListener("scroll", handleScrollVisibility);
    };
  }, []);
  return (
    <motion.img
      ref={imageRef}
      src={photo.src}
      alt="Imagen"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: isVisibility ? 1 : 0, scale: isVisibility ? 1 : 0.5 }}
      transition={{ ease: "easeInOut" }}
      exit={{ opacity: 0, scale: 0.5 }}
      className="h-full w-full object-cover object-center cursor-pointer scale-100 hover:scale-105 transition-transform px-8 lg:p-0"
    />
  );
}
