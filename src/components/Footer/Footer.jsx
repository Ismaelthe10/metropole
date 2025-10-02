import { NavLink } from "react-router-dom";
import { navLinks, socialLinks, companyInfo } from "../../constants/site.jsx";

const footerSocials = socialLinks.filter(
  (link) =>
    link.label.includes("WhatsApp") ||
    link.label.includes("Instagram") ||
    link.label.includes("e-mail")
);

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center p-8 bg-blue-950 text-center tracking-wider text-white">
      {/* Navegação no Rodapé */}
      <nav className="mb-6">
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-bold">
          {navLinks.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                className="hover:text-yellow-300 transition-colors"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Ícones Sociais */}
      <div className="flex gap-6 pb-6 text-2xl">
        {footerSocials.map(({ icon, href, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto:") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            aria-label={label}
            className="transition-transform duration-300 hover:scale-110 hover:text-yellow-300"
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Informações da Empresa com Microdados */}
      <div
        className="text-blue-200 font-bold flex flex-col"
        itemScope
        itemType="http://schema.org/Organization"
      >
        <link itemProp="url" href={companyInfo.siteUrl} />
        <a
          href={`tel:${companyInfo.phone}`}
          itemProp="telephone"
          className="hover:text-yellow-300"
        >
          TELEFONE: {companyInfo.phone}
        </a>
        <p className="">
          © {new Date().getFullYear()}{" "}
          <span itemProp="name">{companyInfo.name}</span> · Todos os direitos
          reservados.
        </p>
      </div>

      {/* Informações Legais */}
      <div
        className="text-yellow-500 text-sm p-4"
        itemScope
        itemType="http://schema.org/Corporation"
      >
        <meta itemProp="name" content={companyInfo.name} />
        <p>
          RAZÃO SOCIAL:{" "}
          <span itemProp="legalName">{companyInfo.legalName}</span>
        </p>
        <p>
          CNPJ: <span itemProp="taxID">{companyInfo.cnpj}</span>
        </p>
        <p>
          <a
            className="text-gray-500 text-sm"
            href="https://wa.me/5541995928363"
            target="_blank"
            rel="noopener noreferrer"
          >
            Desenvolvido por: Ismael Monteiro
          </a>
        </p>
      </div>
      {/* Links para Políticas de Privacidade e Termos de Uso */}
      <div className="text-sm mt-8">
        <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2">
          <li>
            <NavLink
              to="/politica-de-privacidade"
              className="hover:text-yellow-300"
            >
              Política de Privacidade
            </NavLink>
          </li>
          <li>
            <NavLink to="/termos-de-uso" className="hover:text-yellow-300">
              Termos de Uso
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}
