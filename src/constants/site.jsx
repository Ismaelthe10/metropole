import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";

export const navLinks = [
  { name: "Início", href: "/" },
  { name: "Serviços", href: "/#servicos" },
  { name: "Contato", href: "/#contato" },
  { name: "Sobre", href: "sobre" },
];

const emailSubject = "Contato pelo Site - Orçamento";
const emailBody =
  "Olá, encontrei a Metrópole Serviços através do site e gostaria de mais informações. Meu telefone para contato é: [Seu Telefone Aqui]";

const mailtoHref = `mailto:metropoleservicos.pr@gmail.com?subject=${encodeURIComponent(
  emailSubject
)}&body=${encodeURIComponent(emailBody)}`;

const whatsappMessage =
  "Olá, encontrei a Metrópole Serviços através do site e gostaria de mais informações sobre seus serviços.";
const whatsappHref = `https://wa.me/5541987937115?text=${encodeURIComponent(
  whatsappMessage
)}`;

export const socialLinks = [
  {
    icon: <FaWhatsapp />,
    href: whatsappHref,
    label: "Fale conosco pelo WhatsApp",
  },
  {
    icon: <LuPhone />, // Ícone de telefone apenas no Header
    href: "tel:+5541987937115",
    label: "Ligue para nós",
  },
  {
    icon: <FaInstagram />,
    href: "https://instagram.com/metropoleserv",
    label: "Siga-nos no Instagram",
  },
  {
    icon: <FaEnvelope />, // Ícone de e-mail apenas no Footer
    href: mailtoHref,
    label: "Envie-nos um e-mail",
  },
];

export const companyInfo = {
  name: "Metrópole Serviços",
  legalName: "METRÓPOLE SERVIÇOS TERCEIRIZADOS LTDA.",
  cnpj: "49.573.913/0001-96",
  phone: "+5541987937115",
  email: "metropoleservicos.pr@gmail.com",
  siteUrl: "https://www.seusite.com.br", // Atualize com seu domínio real
};
