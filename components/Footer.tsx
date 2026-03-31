import Image from "next/image";
import Link from "next/link";
import styles from "@/lib/styles";
import { footerLinks, socialMedia } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <Link href="/" className="flex items-center mb-2 flex-shrink-0">
            <div className="w-[130px] h-[58px] sm:w-[150px] sm:h-[65px] bg-white rounded-xl flex items-center justify-center p-2">
              <Image
                src="/logo.jpeg"
                alt="World Pass Immigration"
                width={150}
                height={65}
                className="w-full h-full object-contain"
              />
            </div>
          </Link>
          <p className="font-poppins font-normal text-gray-400 text-[17px] leading-[30px] mt-4 max-w-[320px]">
            We provide trusted immigration guidance for students, workers, and
            families. Our team helps you plan, apply, and move forward with
            confidence.
          </p>

          <div className="mt-6 text-gray-400 text-[15px] leading-[24px]">
            <p className="mb-2">
              📍 Office: Hamirpur Road, Opp. ICICI Bank, Una, HP 174303
            </p>
            <p className="mb-2">
              Call / WhatsApp:{" "}
              <a
                href="tel:+918278776068"
                className="hover:text-secondary cursor-pointer"
              >
                +91 82787 76068
              </a>
            </p>
            <p>
              📧 Email:{" "}
              <a
                href="mailto:worldpassimmigrationservices@gmail.com"
                className="hover:text-secondary cursor-pointer"
              >
                worldpassimmigrationservices@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((link) => (
            <nav
              key={link.title}
              aria-label={link.title}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {link.title}
              </h4>
              <ul className="list-none mt-4">
                {link.links.map((item, index) => (
                  <li
                    key={item.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-gray-400 hover:text-secondary cursor-pointer ${
                      index !== link.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    <Link href={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-gray-700">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-gray-400">
          &copy; {new Date().getFullYear()} World Pass Immigration. All rights
          reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${social.platform}`}
              className={`text-2xl ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
