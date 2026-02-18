"use client";

import { motion } from "framer-motion";

interface JesusWithBabyProps {
  className?: string;
  animated?: boolean;
}

/**
 * Ilustración original de Jesús sosteniendo a un bebé
 * Estilo: Minimalista con toques de acuarela (gradientes suaves)
 * Inspirada en arte devocional moderno
 */
export function JesusWithBaby({ className = "", animated = true }: JesusWithBabyProps) {
  const svgContent = (
    <svg
        viewBox="0 0 400 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-label="Ilustración de Jesús sosteniendo a un bebé"
      >
        {/* Definiciones de gradientes para efecto acuarela */}
        <defs>
          {/* Gradiente para el cabello */}
          <linearGradient id="hairGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C4A574" />
            <stop offset="50%" stopColor="#A68B5B" />
            <stop offset="100%" stopColor="#8B7355" />
          </linearGradient>

          {/* Gradiente para la piel - tonos cálidos suaves */}
          <linearGradient id="skinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5E6D3" />
            <stop offset="50%" stopColor="#E8D4C4" />
            <stop offset="100%" stopColor="#DEC9B8" />
          </linearGradient>

          {/* Gradiente para la túnica - blanco con sombras suaves */}
          <linearGradient id="robeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#F8F6F3" />
            <stop offset="70%" stopColor="#EDE9E3" />
            <stop offset="100%" stopColor="#E5E0D8" />
          </linearGradient>

          {/* Gradiente para sombras de la túnica */}
          <linearGradient id="robeShadow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8E4DC" />
            <stop offset="100%" stopColor="#D4CFC6" />
          </linearGradient>

          {/* Gradiente dorado para el halo sutil */}
          <radialGradient id="haloGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C9A86C" stopOpacity="0.15" />
            <stop offset="70%" stopColor="#C9A86C" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#C9A86C" stopOpacity="0" />
          </radialGradient>

          {/* Gradiente para el bebé */}
          <linearGradient id="babySkinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDF5ED" />
            <stop offset="100%" stopColor="#F0E4D8" />
          </linearGradient>

          {/* Filtro de suavizado para efecto acuarela */}
          <filter id="watercolor" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
          </filter>

          {/* Filtro más suave para el halo */}
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
          </filter>
        </defs>

        {/* Halo sutil detrás de la cabeza */}
        <ellipse
          cx="200"
          cy="95"
          rx="80"
          ry="80"
          fill="url(#haloGradient)"
          filter="url(#softGlow)"
        />

        {/* === CABELLO largo cayendo === */}
        <path
          d="M155 80
             C145 90, 140 120, 142 160
             C144 200, 148 240, 155 280
             C158 300, 162 320, 165 340
             Q168 360, 170 370
             
             M245 80
             C255 90, 260 120, 258 160
             C256 200, 252 240, 245 280
             C242 300, 238 320, 235 340
             Q232 360, 230 370"
          stroke="url(#hairGradient)"
          strokeWidth="35"
          strokeLinecap="round"
          fill="none"
          filter="url(#watercolor)"
          opacity="0.9"
        />

        {/* Cabello - capa trasera más oscura */}
        <path
          d="M160 75
             C150 85, 145 110, 147 150
             C149 190, 153 230, 158 270
             C161 295, 165 320, 168 345
             
             M240 75
             C250 85, 255 110, 253 150
             C251 190, 247 230, 242 270
             C239 295, 235 320, 232 345"
          stroke="#8B7355"
          strokeWidth="25"
          strokeLinecap="round"
          fill="none"
          filter="url(#watercolor)"
          opacity="0.5"
        />

        {/* === ROSTRO (sin rasgos, estilo minimalista) === */}
        <ellipse
          cx="200"
          cy="100"
          rx="42"
          ry="50"
          fill="url(#skinGradient)"
          filter="url(#watercolor)"
        />

        {/* Cabello sobre la frente */}
        <path
          d="M158 70
             Q175 55, 200 52
             Q225 55, 242 70
             Q235 75, 200 72
             Q165 75, 158 70"
          fill="url(#hairGradient)"
          filter="url(#watercolor)"
        />

        {/* === CUELLO === */}
        <path
          d="M185 145 
             Q185 160, 183 175
             M215 145
             Q215 160, 217 175"
          stroke="url(#skinGradient)"
          strokeWidth="18"
          strokeLinecap="round"
          fill="none"
        />

        {/* === TÚNICA - Cuerpo principal === */}
        <path
          d="M140 175
             Q130 200, 125 250
             Q120 300, 118 350
             Q115 400, 112 450
             L112 500
             L288 500
             L288 450
             Q285 400, 282 350
             Q280 300, 275 250
             Q270 200, 260 175
             Q230 165, 200 165
             Q170 165, 140 175"
          fill="url(#robeGradient)"
          filter="url(#watercolor)"
        />

        {/* Pliegues de la túnica - izquierda */}
        <path
          d="M145 200
             Q140 250, 138 300
             Q136 350, 135 400
             
             M160 190
             Q155 240, 152 290
             Q150 340, 148 400"
          stroke="url(#robeShadow)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0.4"
        />

        {/* Pliegues de la túnica - derecha */}
        <path
          d="M255 200
             Q260 250, 262 300
             Q264 350, 265 400
             
             M240 190
             Q245 240, 248 290
             Q250 340, 252 400"
          stroke="url(#robeShadow)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0.4"
        />

        {/* === BRAZOS sosteniendo al bebé === */}
        
        {/* Brazo izquierdo (debajo del bebé) */}
        <path
          d="M145 185
             Q130 200, 125 220
             Q120 240, 130 255
             Q145 270, 165 275
             Q180 278, 195 275"
          fill="url(#robeGradient)"
          stroke="url(#robeShadow)"
          strokeWidth="2"
          filter="url(#watercolor)"
        />

        {/* Mano izquierda */}
        <ellipse
          cx="175"
          cy="268"
          rx="22"
          ry="15"
          fill="url(#skinGradient)"
          filter="url(#watercolor)"
          transform="rotate(-15, 175, 268)"
        />

        {/* Brazo derecho (sobre el bebé) */}
        <path
          d="M255 185
             Q270 195, 275 210
             Q278 225, 270 240
             Q260 255, 245 265
             Q230 272, 215 270"
          fill="url(#robeGradient)"
          stroke="url(#robeShadow)"
          strokeWidth="2"
          filter="url(#watercolor)"
        />

        {/* Mano derecha */}
        <ellipse
          cx="235"
          cy="258"
          rx="20"
          ry="14"
          fill="url(#skinGradient)"
          filter="url(#watercolor)"
          transform="rotate(20, 235, 258)"
        />

        {/* === BEBÉ === */}
        
        {/* Mantita del bebé */}
        <path
          d="M165 245
             Q175 235, 200 232
             Q225 235, 240 245
             Q245 265, 240 285
             Q225 300, 200 305
             Q175 300, 165 285
             Q160 265, 165 245"
          fill="#FFFFFF"
          stroke="#E8E4DC"
          strokeWidth="1"
          filter="url(#watercolor)"
        />

        {/* Cuerpito del bebé */}
        <ellipse
          cx="202"
          cy="270"
          rx="28"
          ry="25"
          fill="url(#babySkinGradient)"
          filter="url(#watercolor)"
        />

        {/* Cabecita del bebé */}
        <ellipse
          cx="200"
          cy="242"
          rx="18"
          ry="20"
          fill="url(#babySkinGradient)"
          filter="url(#watercolor)"
        />

        {/* Pelito del bebé (sutil) */}
        <path
          d="M188 228
             Q195 222, 200 223
             Q205 222, 212 228"
          stroke="#C4A574"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0.4"
        />

        {/* Pliegue de la mantita */}
        <path
          d="M175 250
             Q185 255, 195 252
             
             M210 252
             Q220 255, 230 250"
          stroke="#E8E4DC"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />

        {/* === Detalles sutiles de luz === */}
        
        {/* Reflejo de luz en el cabello */}
        <path
          d="M180 100
             Q185 150, 182 200"
          stroke="#D4BC8E"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          opacity="0.3"
        />

        <path
          d="M220 100
             Q215 150, 218 200"
          stroke="#D4BC8E"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          opacity="0.25"
        />
      </svg>
  );

  if (animated) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className={className}
      >
        {svgContent}
      </motion.div>
    );
  }

  return (
    <div className={className}>
      {svgContent}
    </div>
  );
}

export default JesusWithBaby;
