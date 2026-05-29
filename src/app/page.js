"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Explore from "@/components/Explore";
import ContactModal from "@/components/Modals/ContactModal";
import CertificatesSkillsModal from "@/components/Modals/CertificatesSkillsModal";
import LinksModal from "@/components/Modals/LinksModal";

export default function Home() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (type, opener = null) => {
    setActiveModal({ type, opener });
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <>
      <Navbar onOpenContact={(opener) => openModal("contact", opener)} />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Explore onOpenModal={openModal} />
      </main>

      {activeModal?.type === "contact" && (
        <ContactModal onClose={closeModal} returnFocusTo={activeModal.opener} />
      )}

      {activeModal?.type === "certificatesSkills" && (
        <CertificatesSkillsModal onClose={closeModal} returnFocusTo={activeModal.opener} />
      )}

      {activeModal?.type === "links" && (
        <LinksModal onClose={closeModal} returnFocusTo={activeModal.opener} />
      )}
    </>
  );
}
