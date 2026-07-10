import React, { useEffect, useState } from "react";
import Link from "next/link";
import Wrapper from "../ComponentWrapper/Wrapper";

export default function CallToAction() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const onScroll = () => setVisible(window.scrollY > window.innerHeight); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  if (!visible) return null;
  return <aside className="fixed inset-x-0 bottom-0 z-40 border-t border-white/15 bg-brand-navy/95 text-white-main shadow-2xl backdrop-blur" aria-label="Course finder"><Wrapper styles="py-3"><div className="flex items-center justify-between gap-4"><div><p className="font-poppins text-[15px] font-semibold sm:text-[17px]">Find an online course for your state</p><p className="hidden text-[12px] text-white/60 sm:block">Sponsored provider links are clearly disclosed.</p></div><Link href="/#find-course" className="btn-primary shrink-0">Choose state</Link></div></Wrapper></aside>;
}
