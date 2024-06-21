import React from "react";
import { BsFillPhoneFill } from "react-icons/bs";
import {
  FaEnvelope,
  FaFax,
  FaInstagram,
  FaLine,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa6";

interface FooterItemProps {
  children?: string;
  href?: string;
  icon?: JSX.Element;
}

interface FooterSectionProps {
  title: string;
  items: FooterItemProps[];
  children?: React.ReactNode;
}

interface SocialMediaProps {
  items: FooterItemProps[];
}

function ContactItem({ children, href, icon }: FooterItemProps) {
  return (
    <div className="mb-1 flex items-center text-white opacity-30 font-fredoka font-normal text-center md:text-start">
      {icon && <span className="mr-2">{icon}</span>}
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-primary-2"
        >
          {children}
        </a>
      ) : (
        <span>{children}</span>
      )}
    </div>
  );
}

function MapsItem() {
  return (
    <div className="mb-2 flex items-center">
      <iframe
        className="w-full h-64 mt-2 rounded-2xl"
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.6123347985545!2d112.7964306!3d-7.284872199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa6d308b7b91%3A0xfa255422237d84eb!2sComputer%20Engineering%20Department%20ITS!5e0!3m2!1sen!2sid!4v1717044951533!5m2!1sen!2sid"
        allowFullScreen={false}
        loading="lazy"
      ></iframe>
    </div>
  );
}

function MenuItem({ children, href, icon }: FooterItemProps) {
  return (
    <div className="mb-2 flex items-center justify-center md:justify-start text-white opacity-30 font-fredoka font-normal">
      {icon && <span className="mr-2">{icon}</span>}
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-primary-2"
        >
          {children}
        </a>
      ) : (
        <span>{children}</span>
      )}
    </div>
  );
}

function MenuSection({ title, items, children }: FooterSectionProps) {
  return (
    <div className="mb-4 w-fit text-center md:text-start">
      <h4 className="text-lg font-bold mb-2 text-white">{title}</h4>
      <div>
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
      {children}
    </div>
  );
}

function SocialMediaSection({ title, items, children }: FooterSectionProps) {
  return (
    <div className="mb-4 w-fit flex flex-col items-center md:items-start">
      <h4 className="text-lg font-bold mb-2 text-white">{title}</h4>
      <div>
        {items.map((item, index) => (
          <SocialMediaItem key={index} {...item} />
        ))}
      </div>
      {children}
    </div>
  );
}

function SocialMediaItem({ href, icon }: FooterItemProps) {
  return (
    <div className="mb-2 flex items-center text-white opacity-30 ">
      {icon && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-primary-2"
        >
          {icon}
        </a>
      )}
    </div>
  );
}

function MapsSection({ title, items, children }: FooterSectionProps) {
  return (
    <div className="mb-4 w-full h-full">
      <h4 className="text-lg font-bold mb-2 text-white text-center md:text-start">
        {title}
      </h4>
      <div>
        {items.map((item, index) => (
          <MapsItem key={index} {...item} />
        ))}
      </div>
      {children}
    </div>
  );
}

function ContactsSection({ title, items, children }: FooterSectionProps) {
  return (
    <div className="mb-4 w-full h-full">
      <h4 className="text-lg font-bold mb-1 text-white text-center md:text-start">
        {title}
      </h4>
      <div className="flex flex-col items-center md:items-start">
        {items.map((item, index) => (
          <ContactItem key={index} {...item} />
        ))}
      </div>
      {children}
    </div>
  );
}

function SocialMedia({ items }: SocialMediaProps) {
  return (
    <div className="flex space-x-4">
      {items.map((item, index) => (
        <SocialMediaItem key={index} {...item} />
      ))}
    </div>
  );
}

function Maps() {
  const mapItems: FooterItemProps[] = [
    { children: "Google Maps", href: "https://maps.google.com" },
  ];

  return <MapsSection title="MAPS" items={mapItems} />;
}

function Contacts() {
  const contactItems: FooterItemProps[] = [
    { children: "Sekretariat MAGE (Multimedia and Game Event) X" },
    { children: "Departemen Teknik Komputer" },
    { children: "Fakultas Teknologi Elektro dan Informatika Cerdas" },
    { children: "Tower 2 ITS Lt. 2 Kampus ITS Sukolilo, Surabaya 60111" },
  ];

  return (
    <ContactsSection title="CONTACTS" items={contactItems}>
      <div className="mt-4 flex flex-row gap-2 font-fredoka font-no">
        <button className="hover:bg-dark w-full flex flex-col items-center gap-2 text-white py-[20px] px-[30px] border-2 border-white border-opacity-10 rounded-[20px]">
          <span className="flex flex-row justify-center items-center gap-2">
            <FaFax size={20} />
            <span>Fax/Telp</span>
          </span>
          <span>+62 31 5922 936</span>
        </button>
        <button className="hover:bg-dark w-full flex flex-col items-center gap-2 text-white py-[20px] px-[30px] border-2 border-white border-opacity-10 rounded-[20px]">
          <span className="flex flex-row justify-center items-center gap-2">
            <BsFillPhoneFill size={20} />
            <span>Phone: +62 813-5499-9315</span>
          </span>
          <span className="font-medium">(Rezky Dwisantika Pujiastuti)</span>
        </button>
      </div>
    </ContactsSection>
  );
}

function Footer() {
  const menuItems: FooterItemProps[] = [
    { children: "Home", href: "/" },
    { children: "Competition", href: "/competition" },
    { children: "Workshop", href: "/workshop" },
  ];

  const socialMediaItems: FooterItemProps[] = [
    { href: "mailto:example@example.com", icon: <FaEnvelope size={25} /> },
    { href: "https://www.instagram.com", icon: <FaInstagram size={25} /> },
    { href: "https://www.tiktok.com", icon: <FaTiktok size={25} /> },
    { href: "https://line.me", icon: <FaLine size={25} /> },
    { href: "https://www.linkedin.com", icon: <FaLinkedin size={25} /> },
  ];

  return (
    <div className={`bg-[#141414]`}>
      <div className="px-6 md:px-[51px] w-full flex flex-col gap-[30px] py-8">
        <div className="flex flex-col items-center md:flex-row md:items-end gap-[18px] md:gap-[80px]">
          <hr className="border-white border-2 border-opacity-20 w-full rounded-full hidden md:block" />
          <span className="w-fit">
            <h1 className=" w-full bg-vertical-gta bg-clip-text text-transparent text-nowrap font-airstrike font-normal text-5xl sm:text-7xl text-center">
              MAGE X
            </h1>
            <span className="flex flex-col items-center text-xs sm:text-xl text-white text-opacity-60 text-nowrap font-fredoka font-normal text-center">
              <p>A Journey in Encouraging Social</p>
              <p>Inclusion Towards Society 5.0</p>
            </span>
          </span>
          <hr className="border-white border-2 border-opacity-20 w-full rounded-full" />
        </div>
        <div className=" flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between gap-8">
          <div className="flex flex-col items-center md:items-start">
            <MenuSection title="MENU" items={menuItems} />
            <SocialMediaSection title="SOCIAL MEDIA" items={[]}>
              <SocialMedia items={socialMediaItems} />
            </SocialMediaSection>
          </div>
          <div className="flex flex-row  justify-center items-start w-full">
            <Maps />
          </div>
          <div className="flex flex-row justify-center items-start w-full">
            <Contacts />
          </div>
        </div>
      </div>
      <div className="bg-[#080808] text-center text-white opacity-30 font-fredoka font-medium py-[20px]">
        <p>©2024 MAGE. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
