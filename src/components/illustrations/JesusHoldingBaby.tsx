"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface JesusHoldingBabyProps {
  className?: string;
  animated?: boolean;
}

/**
 * Imagen de Jesús sosteniendo a un bebé
 * Usa la imagen de acuarela original con animación elegante
 */
export function JesusHoldingBaby({ className = "", animated = true }: JesusHoldingBabyProps) {
  return (
    <motion.div
      className={className}
      initial={animated ? { opacity: 0, scale: 0.9, y: 20 } : false}
      animate={animated ? { opacity: 1, scale: 1, y: 0 } : false}
      transition={{ 
        duration: 1.4, 
        ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuad suave
        delay: 0.2 
      }}
    >
      <div className="relative w-full h-full">
        <Image
          src="/images/jesus-baby.jpeg"
          alt="Jesús sosteniendo a un bebé en brazos"
          fill
          className="object-contain"
          priority
          style={{
            // Filtro para integrar mejor y disimular marca de agua
            filter: "contrast(1.05) brightness(1.03) saturate(0.9)",
          }}
        />
      </div>
    </motion.div>
  );
}

export default JesusHoldingBaby;
