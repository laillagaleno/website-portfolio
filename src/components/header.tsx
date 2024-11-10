"use client";

import { useTheme } from "@/context/theme-provider";
import { Moon, Sun } from "lucide-react";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className="flex justify-between items-center h-16 border-b-[1px] px-8
    sticky top-0 backdrop-blur-sm opacity-1 bg-background opacity-95 z-50 border-gray-border"
    >
      <a href="/" className="font-sans font-medium text-lg whitespace-nowrap 
      before:content-[''] before:w-8 before:h-[2px] before:block flex items-center gap-3 before:bg-foreground before:opacity-70">
        Lailla Galeno
      </a>

      <div className="flex gap-4 items-center">
        <nav className="space-x-4 text-gray-subtitle font-normal text-sm">
          {[
            ["Sobre", "#about"],
            ["Cases", "#cases"],
            ["Serviços", "#tools"],
            ["Contato", "#contact"],
          ].map(([title, url]) => (
            <a
              key={title}
              className="hover:text-gray-subtitle-hover transition-colors duration-300 ease-in-out will-change-transform"
              href={url}
            >
              {title}
            </a>
          ))}
        </nav>
        <button
          onClick={toggleTheme}
          title="Tema"
          className="flex items-center justify-center border-[1px] rounded-full w-8 h-8 text-gray-subtitle 
          hover:text-gray-subtitle-hover
         border-gray-border hover:border-gray-border-hover
         transition-colors duration-300 ease-in-out will-change-transform"
        >
          {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
        </button>
      </div>
    </header>
  );
}
