"use client";

import Link from "next/link";
import { useEffect } from "react";

export function SiteHeader() {
  useEffect(() => {
    const hdr = document.getElementById("hdr");
    if (!hdr) return;
    const onScroll = () =>
      hdr.classList.toggle("scrolled", window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header id="hdr">
      <Link href="/" className="logo">
        Ксения <span>Кошка</span>
      </Link>
      <nav>
        <a href="#services">Услуги</a>
        <a href="#galerie">Галерея</a>
        <a href="#contact">Контакт</a>
      </nav>
    </header>
  );
}
