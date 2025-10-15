"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function ConditionalHeader() {
  const pathname = usePathname();
  
  // Ne pas afficher le Header sur la page d'accueil
  if (pathname === "/") {
    return null;
  }
  
  return <Header />;
}
