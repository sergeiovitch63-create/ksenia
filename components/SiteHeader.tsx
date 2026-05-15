"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/#services", label: "Услуги" },
  { href: "/#galerie", label: "Галерея" },
  { href: "/#avis", label: "Отзывы" },
  { href: "/#contact", label: "Контакт" },
];
// La page "Оставить отзыв" (/laisser-un-avis) reste accessible mais
// n'est pas exposée dans la navigation — Ксения envoie le lien personnellement.

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hdr = document.getElementById("hdr");
    if (!hdr) return;
    const onScroll = () =>
      hdr.classList.toggle("scrolled", window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header id="hdr">
        <Link href="/" className="logo">
          <span className="logo-main">
            Ксения <span>Кошка</span>
          </span>
          <span className="logo-sub">Фотограф · Калининград</span>
        </Link>
        <nav className="nav-desktop">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>
        <button
          className={`burger ${open ? "burger--open" : ""}`}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </header>

      <div
        className={`menu-overlay ${open ? "menu-overlay--open" : ""}`}
        aria-hidden={!open}
      >
        <nav className="menu-nav">
          {NAV.map((n, i) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${0.15 + i * 0.07}s` }}
            >
              <span className="menu-index">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="menu-label">{n.label}</span>
            </a>
          ))}
        </nav>
        <div className="menu-footer">
          <a href="https://instagram.com/k0shka_art" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="tel:+79506718074">Телефон</a>
          <a href="https://vk.ru/fool_999" target="_blank" rel="noreferrer">
            ВКонтакте
          </a>
          <span>Калининград</span>
        </div>
      </div>
    </>
  );
}
