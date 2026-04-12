"use client";

import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const translations = {
  ar: {
    "nav-collections": "إصداراتنا",
    "nav-origin": "حكايتنا",
    "hero-title": "جوهر الشوكولاتة",
    "hero-subtitle": "فن الشوكولاتة من أندر المصادر",
    "btn-explore": "اكتشف المجموعة",
    "section-title": "إصدارات خاصة",
    "section-subtitle": "قطع مشغولة يدوياً بدقة متناهية",
    "prod-1-title": "مجموعة أوبسيديان",
    "prod-2-title": "ترافل منتصف الليل",
    "prod-3-title": "مجموعة رقائق الذهب",
    "btn-purchase": "اقتنيها الآن",
    "quote-title": "إبداع",
    "quote-text": '"نحن لا نصنع مجرد شوكولاتة.. نحن نصيغ المشاعر في قوالب فنية، مستوحاة من قلب الطبيعة."',
    "switch": "English",
    "dir": "rtl" as const,
    "font": "font-amiri"
  },
  en: {
    "nav-collections": "Collections",
    "nav-origin": "Our Story",
    "hero-title": "The Essence of Chocolate",
    "hero-subtitle": "Artisanal Mastery from Rare Origins",
    "btn-explore": "Explore Collection",
    "section-title": "Limited Editions",
    "section-subtitle": "Hand-crafted pieces made with absolute precision",
    "prod-1-title": "Obsidian Collection",
    "prod-2-title": "Midnight Truffles",
    "prod-3-title": "Gold Leaf Set",
    "btn-purchase": "Purchase Now",
    "quote-title": "The Chef's Touch",
    "quote-text": '"We do not make simple chocolate.. We mold emotions into artistic forms, inspired by the heart of nature."',
    "switch": "العربية",
    "dir": "ltr" as const,
    "font": "font-sans"
  }
};

export default function RonikaPage() {
  const [lang, setLang] = useState<'en' | 'ar'>('ar');
  const [isMounted, setIsMounted] = useState(false);
  const t = translations[lang];

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className={`${t.font} bg-[#0d0d0d] text-[#e5e5e5] min-h-screen selection:bg-[#c5a059] selection:text-[#0d0d0d]`} dir={t.dir}>
      {/* Luxury Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-5 z-50 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      {/* Navigation */}
      <nav className="absolute w-full z-[100] px-[4%] py-8 flex justify-between items-center">
        <div className="font-serif text-2xl tracking-[0.5rem] uppercase text-[#c5a059]">
          RONIKA
        </div>
        <div className="flex items-center">
          <div className="hidden md:flex gap-8 uppercase text-[0.8rem] tracking-widest">
            <a href="#" className="hover:text-[#c5a059] transition-color duration-300">{t["nav-collections"]}</a>
            <a href="#" className="hover:text-[#c5a059] transition-color duration-300">{t["nav-origin"]}</a>
          </div>
          <button 
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="ml-8 mr-8 border border-[#8e7341] text-[#c5a059] px-4 py-1 text-[0.7rem] uppercase hover:bg-[#c5a059] hover:text-[#0d0d0d] transition-all duration-300"
          >
            {t.switch}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-4 bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center">
        <h1 key={`${lang}-title`} className="font-serif italic text-5xl md:text-8xl font-light mb-4 animate-fadeInUp">
          {t["hero-title"]}
        </h1>
        <p key={`${lang}-subtitle`} className="text-[#c5a059] tracking-[0.4rem] uppercase text-sm md:text-base opacity-0 animate-fadeInUp [animation-delay:0.5s] [animation-fill-mode:forwards]">
          {t["hero-subtitle"]}
        </p>
        <a 
          href="#collections" 
          className="mt-10 border border-[#c5a059] text-[#c5a059] px-8 py-3 uppercase text-[0.7rem] tracking-[0.2rem] hover:bg-[#c5a059] hover:text-[#0d0d0d] transition-all duration-300 opacity-0 animate-fadeInUp [animation-delay:1s] [animation-fill-mode:forwards]"
        >
          {t["btn-explore"]}
        </a>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-24 px-[4%] max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl font-light mb-4">{t["section-title"]}</h2>
          <p className="text-[#8e7341] italic">{t["section-subtitle"]}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { id: "prod-1-title", price: "£85.00", img: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&q=80&w=800" },
            { id: "prod-2-title", price: "£120.00", img: "https://images.unsplash.com/photo-1526081347589-7fa3cb41b4b2?auto=format&fit=crop&q=80&w=800" },
            { id: "prod-3-title", price: "£150.00", img: "https://images.unsplash.com/photo-1553452118-621e1f860f43?auto=format&fit=crop&q=80&w=800" }
          ].map((item, index) => (
            <div key={index} className="group bg-[#1a0f0a] border border-[#c5a059]/10 p-5 text-center hover:border-[#c5a059] hover:-translate-y-2 transition-all duration-500">
              <div 
                className="w-full h-[350px] bg-cover bg-center mb-6 grayscale group-hover:grayscale-0 transition-all duration-700"
                style={{ backgroundImage: `url(${item.img})` }}
              />
              <h3 className="font-serif text-2xl mb-2">{(t as any)[item.id]}</h3>
              <p className="text-[#c5a059] tracking-widest mb-4">{item.price}</p>
              <button className="border border-[#c5a059] text-[#c5a059] px-6 py-2 uppercase text-[0.7rem] tracking-widest hover:bg-[#c5a059] hover:text-[#0d0d0d] transition-all">
                {t["btn-purchase"]}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-[#1a0f0a] py-24">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="font-serif text-4xl mb-6">{t["quote-title"]}</h2>
          <p className="font-serif italic text-xl md:text-2xl leading-relaxed text-[#e5e5e5]">
            {t["quote-text"]}
          </p>
          <div className="mt-8 h-px bg-[#c5a059] w-12 mx-auto" />
        </div>
      </section>

      <footer className="py-16 text-center border-t border-[#c5a059]/20 text-[0.7rem] tracking-[0.2rem] text-[#8e7341]">
        &copy; 2026 RONIKA CHOCOLATIER | PARIS - LONDON - EINDHOVEN - CAIRO - MUNICH
      </footer>
    </div>
  );
}