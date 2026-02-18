"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Calendar,
  Clock,
  Navigation,
  MessageCircle,
  ChevronDown,
  Check,
  Heart,
  Shirt,
  Send,
  CalendarPlus,
  Church,
  PartyPopper,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { JesusWithBaby } from "@/components/illustrations/JesusWithBaby";
import { JesusHoldingBaby } from "@/components/illustrations/JesusHoldingBaby";
import { FloralOrnament } from "@/components/illustrations/FloralOrnament";
import { Countdown } from "@/components/Countdown";

// ═══════════════════════════════════════════════════════════════════════════
// DATOS DEL EVENTO
// ═══════════════════════════════════════════════════════════════════════════

const EVENT_DATA = {
  baby: {
    name: "Bruno",
    fullName: "Bruno Goncalvez Sevilla",
  },
  parents: {
    father: "Gregory Goncalvez",
    mother: "Lorena Sevilla",
  },
  godparents: {
    godfather: "Pablo Gómez",
    godmother: "Romina Goncalvez",
  },
  ceremony: {
    date: "Sábado 11 de Abril, 2026",
    dateShort: {
      day: "Sábado",
      number: "11",
      month: "Abril",
      year: "2026",
    },
    time: "12:00 PM",
    venue: "St. Katharine Drexel Catholic Parish",
    address: "2501 S Post Rd, Weston, FL 33327",
    mapsUrl: "https://maps.google.com/?q=St.+Katharine+Drexel+Catholic+Parish+2501+S+Post+Rd+Weston+FL",
  },
  reception: {
    venue: "Inverness at Weston",
    address: "3155 Inverness, Weston, FL",
    mapsUrl: "https://maps.google.com/?q=3155+Inverness+Weston+FL",
  },
  dressCode: "Formal",
  contact: {
    whatsapp: "+54 9 11 2758-8549",
    whatsappUrl: "https://wa.me/5491127588549",
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// COMPONENTES DE ANIMACIÓN
// ═══════════════════════════════════════════════════════════════════════════

function FadeInWhenVisible({ children, delay = 0, className = "" }: { 
  children: React.ReactNode; 
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// COMPONENTES DECORATIVOS
// ═══════════════════════════════════════════════════════════════════════════

function CrossOrnament({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 32" 
      className={`w-6 h-8 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <line x1="12" y1="2" x2="12" y2="30" />
      <line x1="4" y1="10" x2="20" y2="10" />
    </svg>
  );
}

function GoldenDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A86C]" />
      <CrossOrnament className="text-[#C9A86C]" />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A86C]" />
    </div>
  );
}

function SectionTitle({ 
  children, 
  subtitle 
}: { 
  children: React.ReactNode; 
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-10">
      <h2 className="font-serif text-3xl md:text-4xl font-light text-[#2C2C2C] mb-3">
        {children}
      </h2>
      {subtitle && (
        <p className="text-[#8B8680] font-light">{subtitle}</p>
      )}
      <GoldenDivider className="mt-6" />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// HERO SECTION - REDISEÑADO CON ILUSTRACIÓN
// ═══════════════════════════════════════════════════════════════════════════

function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Fondo blanco puro para integrar la imagen */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Patrón decorativo sutil */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(#C9A86C 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      {/* Ornamentos florales en las esquinas */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 opacity-60">
        <FloralOrnament position="top-left" />
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-60">
        <FloralOrnament position="top-right" />
      </div>
      <div className="absolute bottom-20 left-0 w-28 h-28 md:w-40 md:h-40 opacity-40">
        <FloralOrnament position="bottom-left" />
      </div>
      <div className="absolute bottom-20 right-0 w-28 h-28 md:w-40 md:h-40 opacity-40">
        <FloralOrnament position="bottom-right" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Ilustración - Jesús sosteniendo al bebé en brazos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="order-2 md:order-1 flex justify-center"
          >
            <div className="w-72 h-96 md:w-80 md:h-[450px]">
              <JesusHoldingBaby className="w-full h-full drop-shadow-sm" />
            </div>
          </motion.div>

          {/* Contenido */}
          <div className="order-1 md:order-2 text-center md:text-left">
            {/* Cruz decorativa */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6 flex justify-center md:justify-start"
            >
              <CrossOrnament className="w-6 h-9 text-[#C9A86C]" />
            </motion.div>

            {/* Texto introductorio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#8B8680] text-xs tracking-[0.25em] uppercase mb-4"
            >
              Con la bendición de Dios celebramos el
            </motion.p>

            {/* "Bautizo" en script elegante */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[#C9A86C] text-5xl md:text-6xl mb-2"
              style={{ fontFamily: "var(--font-script)" }}
            >
              Bautizo
            </motion.p>

            {/* "de nuestro hijo" */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[#8B8680] text-sm tracking-wide mb-4"
            >
              de nuestro hijo
            </motion.p>

            {/* Nombre del bebé - mismo tamaño que "Bautizo" */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-[2.7rem] md:text-[3.4rem] font-light text-[#2C2C2C] tracking-wide uppercase mb-6"
            >
              {EVENT_DATA.baby.name}
            </motion.h1>

            {/* Línea dorada */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-px w-24 bg-[#C9A86C] mx-auto md:mx-0 mb-8"
            />

            {/* Fecha estilo editorial - responsive */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap items-baseline justify-center md:justify-start gap-2 md:gap-3 mb-8"
            >
              <span className="text-[#8B8680] text-xs md:text-sm tracking-wider uppercase">
                {EVENT_DATA.ceremony.dateShort.day}
              </span>
              <span className="text-[#C9A86C] text-xs md:text-sm">│</span>
              <span className="text-[#C9A86C] text-xs md:text-sm uppercase tracking-wider">
                {EVENT_DATA.ceremony.dateShort.number}
              </span>
              <span className="text-[#C9A86C] text-xs md:text-sm">│</span>
              <span className="text-[#8B8680] text-xs md:text-sm tracking-wider uppercase whitespace-nowrap">
                {EVENT_DATA.ceremony.dateShort.month} {EVENT_DATA.ceremony.dateShort.year}
              </span>
              <span className="text-[#C9A86C] text-xs md:text-sm">│</span>
              <span className="text-[#8B8680] text-xs md:text-sm tracking-wider whitespace-nowrap">
                {EVENT_DATA.ceremony.time}
              </span>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-[#C9A86C] hover:bg-[#A68B4B] text-white px-10 py-6 text-base tracking-wide rounded-none transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <a href="#rsvp">Confirmar Asistencia</a>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Countdown */}
        <div className="mt-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-[#8B8680] text-xs uppercase tracking-widest text-center mb-4"
          >
            Faltan
          </motion.p>
          <Countdown targetDate={new Date("2026-04-11T12:00:00")} />
        </div>

        {/* Versículo debajo */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-[#8B8680] font-light italic text-center max-w-lg mx-auto mt-12 leading-relaxed text-sm"
        >
          "Dejad que los niños vengan a mí, porque de ellos es el Reino de los Cielos"
          <span className="block mt-2 text-xs not-italic">— Mateo 19:14</span>
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mt-12"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-[#C9A86C] mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// DETAILS SECTION
// ═══════════════════════════════════════════════════════════════════════════

function DetailsSection() {
  const generateCalendarUrl = () => {
    const title = encodeURIComponent(`Bautizo de ${EVENT_DATA.baby.name}`);
    const details = encodeURIComponent(`Ceremonia de Bautizo de ${EVENT_DATA.baby.fullName}\n\nCeremonia: ${EVENT_DATA.ceremony.venue}\nRecepción: ${EVENT_DATA.reception.venue}`);
    const location = encodeURIComponent(EVENT_DATA.ceremony.address);
    const date = "20260411T120000";
    const endDate = "20260411T170000";
    
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${date}/${endDate}`;
  };

  return (
    <section id="detalles" className="py-20 px-6 bg-[#FDFBF7] relative overflow-hidden">
      {/* Ornamentos sutiles */}
      <div className="absolute top-0 right-0 w-24 h-24 opacity-30">
        <FloralOrnament position="top-right" animated={false} />
      </div>
      <div className="absolute bottom-0 left-0 w-24 h-24 opacity-30">
        <FloralOrnament position="bottom-left" animated={false} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <FadeInWhenVisible>
          <SectionTitle subtitle="Acompáñanos a celebrar este día especial">
            Detalles del Evento
          </SectionTitle>
        </FadeInWhenVisible>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Fecha y Hora */}
          <FadeInWhenVisible delay={0.1} className="h-full">
            <div className="bg-[#FDFBF7] p-8 rounded-sm border border-[#E8E4DC] text-center h-full flex flex-col justify-center">
              <div className="w-14 h-14 rounded-full bg-[#C9A86C]/10 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-[#C9A86C]" />
              </div>
              <h3 className="font-serif text-xl text-[#2C2C2C] mb-4">Fecha y Hora</h3>
              
              {/* Fecha estilo editorial - una sola fila, alineada en baseline */}
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-[#8B8680] text-xs uppercase tracking-wider">
                  {EVENT_DATA.ceremony.dateShort.day}
                </span>
                <span className="text-[#C9A86C] text-xs">│</span>
                <span className="text-[#C9A86C] text-xs uppercase tracking-wider">
                  {EVENT_DATA.ceremony.dateShort.number}
                </span>
                <span className="text-[#C9A86C] text-xs">│</span>
                <span className="text-[#8B8680] text-xs uppercase tracking-wider">
                  {EVENT_DATA.ceremony.dateShort.month} {EVENT_DATA.ceremony.dateShort.year}
                </span>
                <span className="text-[#C9A86C] text-xs">│</span>
                <span className="text-[#2C2C2C] text-sm font-medium">
                  {EVENT_DATA.ceremony.time}
                </span>
              </div>
              
              <Button
                asChild
                variant="outline"
                size="sm"
                className="mt-4 border-[#C9A86C] text-[#C9A86C] hover:bg-[#C9A86C] hover:text-white rounded-none"
              >
                <a href={generateCalendarUrl()} target="_blank" rel="noopener noreferrer">
                  <CalendarPlus className="w-4 h-4 mr-2" />
                  Agregar al Calendario
                </a>
              </Button>
            </div>
          </FadeInWhenVisible>

          {/* Padrinos */}
          <FadeInWhenVisible delay={0.2} className="h-full">
            <div className="bg-[#FDFBF7] p-8 rounded-sm border border-[#E8E4DC] text-center h-full flex flex-col justify-center">
              <div className="w-14 h-14 rounded-full bg-[#C9A86C]/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-[#C9A86C]" />
              </div>
              <h3 className="text-xl text-[#2C2C2C] mb-4">Padrinos</h3>
              <p className="text-[#4A4A4A] font-medium">
                {EVENT_DATA.godparents.godmother}
              </p>
              <p className="text-[#C9A86C] text-lg leading-tight" style={{ fontFamily: "var(--font-script)" }}>&</p>
              <p className="text-[#4A4A4A] font-medium">
                {EVENT_DATA.godparents.godfather}
              </p>
            </div>
          </FadeInWhenVisible>
        </div>

        {/* Padres */}
        <FadeInWhenVisible delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-[#8B8680] mb-2">Con el amor de sus padres</p>
            <p className="font-serif text-xl text-[#2C2C2C]">
              {EVENT_DATA.parents.mother} 
              <span className="text-[#C9A86C] mx-3" style={{ fontFamily: "var(--font-script)" }}>&</span>
              {EVENT_DATA.parents.father}
            </p>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// TIMELINE SECTION
// ═══════════════════════════════════════════════════════════════════════════

function TimelineSection() {
  const events = [
    {
      time: "12:00 PM",
      title: "Ceremonia Sacramental",
      description: EVENT_DATA.ceremony.venue,
      icon: Church,
    },
    {
      time: "1:00 PM",
      title: "Recepción",
      description: EVENT_DATA.reception.venue,
      icon: PartyPopper,
    },
  ];

  return (
    <section id="agenda" className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <FadeInWhenVisible>
          <SectionTitle subtitle="Programa del día">
            Agenda
          </SectionTitle>
        </FadeInWhenVisible>

        <div className="relative mt-12">
          {/* Línea vertical */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#E8E4DC] -translate-x-1/2 hidden md:block" />

          <div className="space-y-8">
            {events.map((event, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.15}>
                <div className={`flex flex-col md:flex-row items-center gap-6 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Contenido */}
                  <div className={`flex-1 ${index % 2 === 1 ? 'md:text-left' : 'md:text-right'} text-center`}>
                    <span className="text-[#C9A86C] font-medium text-sm tracking-wider">{event.time}</span>
                    <h3 className="font-serif text-xl text-[#2C2C2C] mt-1">{event.title}</h3>
                    <p className="text-[#8B8680] mt-1">{event.description}</p>
                  </div>

                  {/* Icono central */}
                  <div className="relative z-10 w-14 h-14 rounded-full bg-white border-2 border-[#C9A86C] flex items-center justify-center shadow-sm">
                    <event.icon className="w-6 h-6 text-[#C9A86C]" />
                  </div>

                  {/* Espaciador */}
                  <div className="flex-1 hidden md:block" />
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// LOCATION SECTION
// ═══════════════════════════════════════════════════════════════════════════

function LocationSection() {
  return (
    <section id="ubicacion" className="py-20 px-6 bg-[#FDFBF7]">
      <div className="max-w-5xl mx-auto">
        <FadeInWhenVisible>
          <SectionTitle subtitle="Te esperamos en">
            Ubicación
          </SectionTitle>
        </FadeInWhenVisible>

        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          {/* Ceremonia */}
          <FadeInWhenVisible delay={0.1}>
            <div className="bg-[#FDFBF7] p-8 rounded-sm border border-[#E8E4DC]">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#C9A86C]/10 flex items-center justify-center flex-shrink-0">
                  <Church className="w-5 h-5 text-[#C9A86C]" />
                </div>
                <div>
                  <span className="text-[#C9A86C] text-sm tracking-wider uppercase">Ceremonia</span>
                  <h3 className="font-serif text-xl text-[#2C2C2C] mt-1">{EVENT_DATA.ceremony.venue}</h3>
                </div>
              </div>

              <div className="space-y-3 text-[#4A4A4A]">
                <p className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#8B8680] flex-shrink-0 mt-0.5" />
                  <span>{EVENT_DATA.ceremony.address}</span>
                </p>
                <p className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#8B8680]" />
                  <span>{EVENT_DATA.ceremony.time}</span>
                </p>
              </div>

              <Button
                asChild
                className="w-full mt-6 bg-[#C9A86C] hover:bg-[#A68B4B] text-white rounded-none"
              >
                <a href={EVENT_DATA.ceremony.mapsUrl} target="_blank" rel="noopener noreferrer">
                  <Navigation className="w-4 h-4 mr-2" />
                  Cómo Llegar
                </a>
              </Button>

              {/* Mapa embebido */}
              <div className="mt-6 aspect-video rounded-sm overflow-hidden border border-[#E8E4DC]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.0449!2d-80.4089!3d26.0851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a9!2sSt.%20Katharine%20Drexel%20Catholic%20Parish!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de la Iglesia"
                />
              </div>
            </div>
          </FadeInWhenVisible>

          {/* Recepción */}
          <FadeInWhenVisible delay={0.2}>
            <div className="bg-[#FDFBF7] p-8 rounded-sm border border-[#E8E4DC]">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#C9A86C]/10 flex items-center justify-center flex-shrink-0">
                  <PartyPopper className="w-5 h-5 text-[#C9A86C]" />
                </div>
                <div>
                  <span className="text-[#C9A86C] text-sm tracking-wider uppercase">Recepción</span>
                  <h3 className="font-serif text-xl text-[#2C2C2C] mt-1">{EVENT_DATA.reception.venue}</h3>
                </div>
              </div>

              <div className="space-y-3 text-[#4A4A4A]">
                <p className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#8B8680] flex-shrink-0 mt-0.5" />
                  <span>{EVENT_DATA.reception.address}</span>
                </p>
                <p className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#8B8680]" />
                  <span>Después de la ceremonia</span>
                </p>
              </div>

              <Button
                asChild
                className="w-full mt-6 bg-[#C9A86C] hover:bg-[#A68B4B] text-white rounded-none"
              >
                <a href={EVENT_DATA.reception.mapsUrl} target="_blank" rel="noopener noreferrer">
                  <Navigation className="w-4 h-4 mr-2" />
                  Cómo Llegar
                </a>
              </Button>

              {/* Mapa embebido */}
              <div className="mt-6 aspect-video rounded-sm overflow-hidden border border-[#E8E4DC]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585!2d-80.40!3d26.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s3155%20Inverness%20Weston%20FL!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de la Recepción"
                />
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// DRESS CODE SECTION
// ═══════════════════════════════════════════════════════════════════════════

function DressCodeSection() {
  return (
    <section id="dresscode" className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Ornamentos */}
      <div className="absolute top-0 left-0 w-20 h-20 opacity-20">
        <FloralOrnament position="top-left" animated={false} />
      </div>
      <div className="absolute bottom-0 right-0 w-20 h-20 opacity-20">
        <FloralOrnament position="bottom-right" animated={false} />
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <FadeInWhenVisible>
          <div className="w-16 h-16 rounded-full bg-[#C9A86C]/10 flex items-center justify-center mx-auto mb-6">
            <Shirt className="w-7 h-7 text-[#C9A86C]" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-[#2C2C2C] mb-4">
            Código de Vestimenta
          </h2>
          <GoldenDivider className="mb-8" />
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.1}>
          <div className="bg-white p-10 rounded-sm border border-[#E8E4DC]">
            <p 
              className="text-4xl text-[#C9A86C] mb-4"
              style={{ fontFamily: "var(--font-script)" }}
            >
              {EVENT_DATA.dressCode}
            </p>
            <p className="text-[#8B8680] leading-relaxed">
              Te invitamos a vestir de manera elegante para acompañarnos en esta celebración tan especial.
            </p>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// RSVP SECTION
// ═══════════════════════════════════════════════════════════════════════════

function RSVPSection() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    attending: 'yes',
    hasAllergies: 'no',
    allergiesDetail: '',
    message: '',
    honeypot: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.honeypot) return;
    
    setFormState('submitting');
    
    // Construir mensaje para WhatsApp (sin emojis para evitar caracteres raros)
    const attendingText = formData.attending === 'yes' ? 'Si, confirmo asistencia' : 'No puedo asistir';
    const guestsText = formData.attending === 'yes' ? `Personas: ${formData.guests}` : '';
    const allergiesText = formData.hasAllergies === 'yes' 
      ? `Alergias alimenticias: ${formData.allergiesDetail || 'No especificado'}` 
      : 'Sin alergias alimenticias';
    const messageText = formData.message ? `Mensaje: ${formData.message}` : '';
    
    const whatsappMessage = `CONFIRMACION BAUTIZO DE BRUNO
----------------------------

Nombre: ${formData.name}

${attendingText}
${guestsText}

${allergiesText}

${messageText}

----------------------------
Enviado desde la invitacion web`.trim();
    
    // Número de WhatsApp (sin + y sin espacios)
    const phoneNumber = '5491127588549';
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
    
    setFormState('success');
  };

  if (formState === 'success') {
    return (
      <section id="rsvp" className="py-20 px-6 bg-[#FDFBF7]">
        <div className="max-w-xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="font-serif text-3xl text-[#2C2C2C] mb-4">¡Gracias por confirmar!</h2>
            <p className="text-[#8B8680] mb-4">
              Se abrió WhatsApp con tu confirmación. Solo tenés que enviar el mensaje.
            </p>
            <p className="text-[#8B8680] text-sm">
              ¡Nos vemos el 11 de abril! 🕊️
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-20 px-6 bg-[#FDFBF7]">
      <div className="max-w-xl mx-auto">
        <FadeInWhenVisible>
          <SectionTitle subtitle="Confirmanos tu asistencia">
            RSVP
          </SectionTitle>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.1}>
          <form onSubmit={handleSubmit} className="bg-[#FDFBF7] p-8 md:p-10 rounded-sm border border-[#E8E4DC]">
            {/* Honeypot - hidden */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={(e) => setFormData({...formData, honeypot: e.target.value})}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="space-y-6">
              {/* Nombre */}
              <div>
                <Label htmlFor="name" className="text-[#4A4A4A] mb-2 block">
                  Nombre completo *
                </Label>
                <Input
                  id="name"
                  required
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-white border-[#E8E4DC] rounded-none focus:border-[#C9A86C] focus:ring-[#C9A86C]"
                />
              </div>

              {/* Asistencia */}
              <div>
                <Label className="text-[#4A4A4A] mb-3 block">¿Podrás asistir? *</Label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="attending"
                      value="yes"
                      checked={formData.attending === 'yes'}
                      onChange={(e) => setFormData({...formData, attending: e.target.value})}
                      className="w-4 h-4 text-[#C9A86C] border-[#E8E4DC] focus:ring-[#C9A86C]"
                    />
                    <span className="text-[#4A4A4A]">Sí, confirmo</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="attending"
                      value="no"
                      checked={formData.attending === 'no'}
                      onChange={(e) => setFormData({...formData, attending: e.target.value})}
                      className="w-4 h-4 text-[#C9A86C] border-[#E8E4DC] focus:ring-[#C9A86C]"
                    />
                    <span className="text-[#4A4A4A]">No puedo asistir</span>
                  </label>
                </div>
              </div>

              {/* Número de invitados */}
              {formData.attending === 'yes' && (
                <div>
                  <Label htmlFor="guests" className="text-[#4A4A4A] mb-2 block">
                    Número de personas
                  </Label>
                  <select
                    id="guests"
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                    className="w-full h-10 px-3 bg-white border border-[#E8E4DC] rounded-none text-[#4A4A4A] focus:border-[#C9A86C] focus:ring-1 focus:ring-[#C9A86C] focus:outline-none"
                  >
                    {[1, 2, 3, 4, 5, 6].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'persona' : 'personas'}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Alergias alimenticias */}
              {formData.attending === 'yes' && (
                <div>
                  <Label className="text-[#4A4A4A] mb-3 block">¿Alguna alergia alimenticia?</Label>
                  <div className="flex gap-4 mb-3">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="hasAllergies"
                        value="no"
                        checked={formData.hasAllergies === 'no'}
                        onChange={(e) => setFormData({...formData, hasAllergies: e.target.value, allergiesDetail: ''})}
                        className="w-4 h-4 text-[#C9A86C] border-[#E8E4DC] focus:ring-[#C9A86C]"
                      />
                      <span className="text-[#4A4A4A]">No</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="hasAllergies"
                        value="yes"
                        checked={formData.hasAllergies === 'yes'}
                        onChange={(e) => setFormData({...formData, hasAllergies: e.target.value})}
                        className="w-4 h-4 text-[#C9A86C] border-[#E8E4DC] focus:ring-[#C9A86C]"
                      />
                      <span className="text-[#4A4A4A]">Sí, tengo alergias</span>
                    </label>
                  </div>
                  
                  {formData.hasAllergies === 'yes' && (
                    <Textarea
                      placeholder="Por favor indicá las alergias (ej: maní, mariscos, gluten...)"
                      value={formData.allergiesDetail}
                      onChange={(e) => setFormData({...formData, allergiesDetail: e.target.value})}
                      className="bg-white border-[#E8E4DC] rounded-none focus:border-[#C9A86C] focus:ring-[#C9A86C] min-h-[80px] resize-none"
                    />
                  )}
                </div>
              )}

              {/* Mensaje opcional */}
              <div>
                <Label htmlFor="message" className="text-[#4A4A4A] mb-2 block">
                  Mensaje para la familia (opcional)
                </Label>
                <Textarea
                  id="message"
                  placeholder="Escribe un mensaje..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-white border-[#E8E4DC] rounded-none focus:border-[#C9A86C] focus:ring-[#C9A86C] min-h-[100px] resize-none"
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={formState === 'submitting'}
                className="w-full bg-[#C9A86C] hover:bg-[#A68B4B] text-white rounded-none py-6 text-base disabled:opacity-50"
              >
                {formState === 'submitting' ? (
                  <span className="animate-pulse">Enviando...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Confirmar Asistencia
                  </>
                )}
              </Button>

              {formState === 'error' && (
                <p className="text-red-600 text-center text-sm">
                  Hubo un error. Por favor intenta nuevamente o contáctanos por WhatsApp.
                </p>
              )}
            </div>
          </form>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// CONTACT SECTION
// ═══════════════════════════════════════════════════════════════════════════

function ContactSection() {
  return (
    <section id="contacto" className="py-20 px-6 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <FadeInWhenVisible>
          <SectionTitle subtitle="¿Tenés alguna pregunta?">
            Contacto
          </SectionTitle>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.1}>
          <p className="text-[#8B8680] mb-8">
            Si tenés alguna consulta, no dudes en escribirnos.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-6 text-base rounded-none"
          >
            <a href={EVENT_DATA.contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Escribinos por WhatsApp
            </a>
          </Button>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// FOOTER
// ═══════════════════════════════════════════════════════════════════════════

function Footer() {
  return (
    <footer className="py-16 px-6 bg-[#2C2C2C] text-white relative overflow-hidden">
      {/* Ornamentos sutiles en el footer */}
      <div className="absolute top-0 left-0 w-20 h-20 opacity-10">
        <FloralOrnament position="top-left" animated={false} />
      </div>
      <div className="absolute bottom-0 right-0 w-20 h-20 opacity-10">
        <FloralOrnament position="bottom-right" animated={false} />
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <CrossOrnament className="w-6 h-8 text-[#C9A86C] mx-auto mb-6" />
        
        <p 
          className="text-3xl mb-2 text-[#C9A86C]"
          style={{ fontFamily: "var(--font-script)" }}
        >
          {EVENT_DATA.baby.name}
        </p>
        <p className="text-[#8B8680] text-sm tracking-wider">11 de Abril, 2026</p>
        
        <Separator className="my-8 bg-[#4A4A4A]" />
        
        <p className="text-[#8B8680] text-sm leading-relaxed">
          Gracias por ser parte de este momento tan especial en nuestras vidas.
        </p>
        
        <p className="text-[#8B8680] text-sm mt-6">
          Con amor,<br />
          <span className="text-white">{EVENT_DATA.parents.mother} <span className="text-[#C9A86C]">&</span> {EVENT_DATA.parents.father}</span>
        </p>
      </div>
    </footer>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// FLOATING CTA (Mobile)
// ═══════════════════════════════════════════════════════════════════════════

function FloatingCTA() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-sm border-t border-[#E8E4DC] md:hidden z-50"
    >
      <div className="flex gap-3">
        <Button
          asChild
          className="flex-1 bg-[#C9A86C] hover:bg-[#A68B4B] text-white rounded-none"
        >
          <a href="#rsvp">Confirmar</a>
        </Button>
        <Button
          asChild
          variant="outline"
          className="flex-1 border-[#C9A86C] text-[#C9A86C] hover:bg-[#C9A86C] hover:text-white rounded-none"
        >
          <a href={EVENT_DATA.ceremony.mapsUrl} target="_blank" rel="noopener noreferrer">
            <MapPin className="w-4 h-4 mr-1" />
            Mapa
          </a>
        </Button>
        </div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════════════════

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <DetailsSection />
      <TimelineSection />
      <LocationSection />
      <DressCodeSection />
      <RSVPSection />
      <ContactSection />
      <Footer />
      <FloatingCTA />
      </main>
  );
}
