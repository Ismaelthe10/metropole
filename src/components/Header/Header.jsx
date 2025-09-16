import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks, socialLinks } from "../../constants/site.jsx";
import logo from "../../assets/logo.svg";
import { HashLink as NavLink } from "react-router-hash-link";
// Filtra apenas os ícones que queremos no Header
const headerSocials = socialLinks.filter(
  (link) =>
    link.label.includes("WhatsApp") ||
    link.label.includes("Ligue") ||
    link.label.includes("Instagram")
);
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="shadow-md bg-blue-950 text-white relative ">
      {" "}
      <div className="base-container flex items-center justify-between p-2">
        <div className="flex-shrink-0 hover:scale-105 transition-transform duration-300">
          <a href="/" aria-label="Voltar para a página inicial">
            <img src={logo} className="w-28" alt="Logo da Metrópole Serviços" />
          </a>
        </div>

        {/* Navegação para Desktop (escondida em mobile) */}
        <nav className="hidden md:flex items-center gap-8 font-bold text-lg tracking-wider">
          {navLinks.map(({ name, href }) => (
            <NavLink
              key={name}
              to={href}
              className="transition-all duration-300 hover:text-yellow-300 hover:scale-105"
            >
              {name}
            </NavLink>
          ))}
        </nav>

        {/* Ícones Sociais para Desktop (escondidos em mobile) */}
        <div className="hidden md:flex items-center gap-6 text-2xl">
          {headerSocials.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="transition-transform duration-300 hover:text-yellow-300 hover:scale-110"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Botão do Menu Hambúrguer  */}
        <div className="md:hidden text-2xl">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      {/* Painel do Menu Mobile */}
      {
        <div
          className={`
          md:hidden absolute top-full left-0 w-full bg-blue-950 shadow-lg 
          flex flex-col items-center gap-6 py-8 
          transform transition-transform duration-300 ease-in-out 
          ${isMenuOpen ? "translate-y-0" : "-translate-y-[200%]"}`}
          aria-hidden={!isMenuOpen}
        >
          <nav className="flex flex-col items-center gap-6 font-bold text-lg tracking-wider">
            {navLinks.map(({ name, href }) => (
              <NavLink
                key={name}
                to={href}
                onClick={handleLinkClick}
                className="transition-colors duration-300 hover:text-yellow-300"
              >
                {name}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-6 text-2xl mt-4">
            {headerSocials.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-yellow-300 transition-transform hover:scale-110"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      }
    </header>
  );
}
