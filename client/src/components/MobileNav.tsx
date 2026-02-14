import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 hover:bg-card rounded-lg transition"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border animate-in fade-in slide-in-from-top-2">
          <nav className="container py-4 space-y-3">
            <a
              href="/services"
              onClick={closeMenu}
              className="block py-2 hover:text-accent transition"
            >
              Serviços
            </a>
            <a
              href="/portfolio"
              onClick={closeMenu}
              className="block py-2 hover:text-accent transition"
            >
              Portfólio
            </a>
            <a
              href="/blog"
              onClick={closeMenu}
              className="block py-2 hover:text-accent transition"
            >
              Blog
            </a>
            <a
              href="/about"
              onClick={closeMenu}
              className="block py-2 hover:text-accent transition"
            >
              Sobre
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="block py-2 hover:text-accent transition"
            >
              Contacto
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
