"use client";

import { motion } from "framer-motion";

interface FloralOrnamentProps {
  className?: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  animated?: boolean;
}

/**
 * Ornamento floral/pampas sutil
 * Inspirado en el estilo boho elegante de la invitación de referencia
 */
export function FloralOrnament({ 
  className = "", 
  position = "top-left",
  animated = true 
}: FloralOrnamentProps) {
  
  // Determinar rotación según posición
  const rotations: Record<string, number> = {
    "top-left": 0,
    "top-right": 90,
    "bottom-right": 180,
    "bottom-left": 270,
  };

  const Wrapper = animated ? motion.div : "div";
  const wrapperProps = animated
    ? {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 1, delay: 0.5, ease: "easeOut" },
      }
    : {};

  return (
    <Wrapper {...wrapperProps} className={className}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ transform: `rotate(${rotations[position]}deg)` }}
        aria-hidden="true"
      >
        <defs>
          {/* Gradiente dorado suave */}
          <linearGradient id={`pampasGold-${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4BC8E" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#C9A86C" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#A68B4B" stopOpacity="0.3" />
          </linearGradient>

          {/* Gradiente beige para hojas */}
          <linearGradient id={`leafBeige-${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8DFD0" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#D4C9B8" stopOpacity="0.3" />
          </linearGradient>

          <filter id={`softBlur-${position}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" />
          </filter>
        </defs>

        {/* Rama principal curvada */}
        <path
          d="M10 190
             Q30 150, 50 120
             Q70 90, 100 60
             Q130 30, 170 10"
          stroke={`url(#pampasGold-${position})`}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          filter={`url(#softBlur-${position})`}
        />

        {/* Rama secundaria */}
        <path
          d="M20 180
             Q45 140, 70 110
             Q95 80, 130 55"
          stroke={`url(#leafBeige-${position})`}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          filter={`url(#softBlur-${position})`}
        />

        {/* Hojas/plumas de pampas - estilo delicado */}
        
        {/* Hoja 1 */}
        <path
          d="M50 120
             Q35 110, 25 95
             Q35 105, 50 120"
          fill={`url(#pampasGold-${position})`}
          filter={`url(#softBlur-${position})`}
        />

        {/* Hoja 2 */}
        <path
          d="M70 95
             Q55 80, 50 60
             Q60 75, 70 95"
          fill={`url(#leafBeige-${position})`}
          filter={`url(#softBlur-${position})`}
        />

        {/* Hoja 3 */}
        <path
          d="M100 60
             Q80 45, 75 25
             Q85 40, 100 60"
          fill={`url(#pampasGold-${position})`}
          filter={`url(#softBlur-${position})`}
        />

        {/* Hoja 4 - hacia arriba-derecha */}
        <path
          d="M100 60
             Q115 45, 130 35
             Q115 50, 100 60"
          fill={`url(#leafBeige-${position})`}
          filter={`url(#softBlur-${position})`}
        />

        {/* Hoja 5 */}
        <path
          d="M130 40
             Q145 25, 165 15
             Q150 30, 130 40"
          fill={`url(#pampasGold-${position})`}
          filter={`url(#softBlur-${position})`}
        />

        {/* Plumas de pampas grass sutiles */}
        <path
          d="M160 20
             Q175 5, 190 0"
          stroke={`url(#pampasGold-${position})`}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />

        <path
          d="M165 25
             Q180 15, 195 10"
          stroke={`url(#leafBeige-${position})`}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.4"
        />

        {/* Puntos decorativos sutiles */}
        <circle cx="40" cy="130" r="2" fill="#C9A86C" opacity="0.3" />
        <circle cx="85" cy="75" r="1.5" fill="#C9A86C" opacity="0.25" />
        <circle cx="145" cy="30" r="2" fill="#C9A86C" opacity="0.3" />
      </svg>
    </Wrapper>
  );
}

export default FloralOrnament;
