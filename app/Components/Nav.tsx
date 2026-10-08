"use client"; // Next.js App Router mein useState use karne ke liye ye zaroori hai

import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      {/* 1. Desktop Links (Badi screen par dikhenge) */}
      <div className="desktop-links">
        <a href="#services" className="navLink">Services</a>
        <a href="#work" className="navLink">Our Work</a>
        <a href="#company" className="navLink">Company</a>
        <a href="#contact" className="navLink">Contact</a>
        <a href="#consulting" className="ctaButton">Free Consulting</a>
      </div>

      {/* 2. Hamburger Button (Har screen par dikhega) */}
      <button 
        type="button" 
        aria-label="Toggle menu" 
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)} // Click par state toggle hogi
      >
        <span className="hamburgerLine"></span>
        <span className="hamburgerLine"></span>
        <span className="hamburgerLine"></span>
      </button>

      {/* 3. Dropdown Menu (Click karne par open hoga) */}
      {isOpen && (
        <div className="dropdownMenu">
          <a href="#services" className="dropdownLink" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#work" className="dropdownLink" onClick={() => setIsOpen(false)}>Our Work</a>
          <a href="#company" className="dropdownLink" onClick={() => setIsOpen(false)}>Company</a>
          <a href="#contact" className="dropdownLink" onClick={() => setIsOpen(false)}>Contact</a>
          <a href="#consulting" className="dropdownCta" onClick={() => setIsOpen(false)}>Free Consulting</a>
        </div>
      )}
    </nav>
  );
}