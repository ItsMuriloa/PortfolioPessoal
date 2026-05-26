"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Explore from "@/components/Explore";
import ContactModal from "@/components/Modals/ContactModal";
import AchievementsModal from "@/components/Modals/AchievementsModal";
import LinksModal from "@/components/Modals/LinksModal";

export default function Home() {
  const [activeModal, setActiveModal] = useState(null); // 'contact' | 'achievements' | 'links' | null

  return (
    <>
      {/* 1. NAVEGAÇÃO EDITORIAL (BARRA SUPERIOR PREMIUM COM HAMBURGUER) */}
      <Navbar onOpenContact={() => setActiveModal("contact")} />

      {/* 2. CONTEÚDO PRINCIPAL DO PORTFÓLIO */}
      <main>
        {/* HERO SECTION */}
        <Hero />

        {/* SOBRE MIM (BENTO GRID) */}
        <About />

        {/* TRABALHOS SELECIONADOS (FRAMER MOTION SCROLL STACK) */}
        <Projects />

        {/* SKILLS SECTION (ORBIT MARQUEES) */}
        <Skills />

        {/* RECURSOS E CONEXÕES (GRID EXTRA) */}
        <Explore onOpenModal={setActiveModal} />
      </main>

      {/* 3. SISTEMA DE MODAIS INTERATIVOS */}
      {activeModal === "contact" && (
        <ContactModal onClose={() => setActiveModal(null)} />
      )}

      {activeModal === "achievements" && (
        <AchievementsModal onClose={() => setActiveModal(null)} />
      )}

      {activeModal === "links" && (
        <LinksModal onClose={() => setActiveModal(null)} />
      )}
    </>
  );
}
