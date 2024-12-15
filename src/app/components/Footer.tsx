import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "../../../constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/images/icons-home.png"
            alt="Logo"
            width={70}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Home Design 2024 <br />
            Tüm hakları saklıdır.&copy;
          </p>
        </div>
        <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.title}
              className="flex flex-col gap-6 text-base min-w-[170px]"
            >
              <h3>{footerLink.title}</h3>
              {footerLink.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-400 hover:text-gray-900 transition duration-300 ease-in-out"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
        </div>

          <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
            <p>@2024 Home Design. Tüm Hakları Saklıdır.</p>
            <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
                <Link href="/"
                className="text-gray-500">
                    Gizlilik Politikası
                </Link>
                <Link href="/"
                className="text-gray-500">
                    Kullanım Şartları
                </Link>

            </div>
          </div>

      
    </footer>
  );
};

export default Footer;
