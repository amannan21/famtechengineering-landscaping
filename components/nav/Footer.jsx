import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-scroll';
import { services, contact } from '../../constants';
import styles from '../../styles';

const Footer = () => {
  return (
    <footer className="relative bg-palette-1 bg-hero-pattern z-5 opacity-90">

<div className="mx-auto flex flex-col gap-8 items-center justify-between">
        <div className="flex flex-row flex-wrap justify-start md:justify-center px-8 py-[50px] lg:py-[100px] gap-[50px] max-w-full md:w-[870px] min-[1650px]:w-full">
          <div className="flex flex-row items-center pb-12 pr-[10px] space-x-5">

          <div className="flex flex-col gap-5">
            <h3 className={`${styles.footerHeading}`}>Our Services</h3>
            <div className="flex flex-col gap-5">
                {services.map(({ icon, title }) => (
                <div key={title} className="flex flex-row items-center gap-4">
                  <img
                    src={icon.img}
                    alt={icon.alt}
                    className="w-[45px] h-[45px] object-contain text-palette-3"
                  />
                  <Link
                    activeClass="active"
                    to="services"
                    spy
                    smooth
                    offset={-150}
                    duration={300}
                    key={title}
                    href="/#services"
                    className="cursor-pointer text-palette-5 text-[14px] xl:text-[16px] font-sans"
                  >
                    {title}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className={`${styles.footerHeading}`}>Get In Touch</h3>
            <div className="flex flex-col justify-center gap-4">
              {contact.map(({ name, icon, content, url }) => {
                const ContactIcon = icon;
                {if (content.length > 30) {content = "353 West 48th Street"} }

                return (
                  <a key={name} href={url} className="cursor-pointer group">
                    <div className="flex flex-row items-center gap-4">
                      <div className="border-[1px] border-palette-3 bg-palette-1 rounded-full p-2 group-hover:border-palette-3 group-hover:bg-palette-3 transition duration-300">
                        <ContactIcon size={20} className="text-palette-3 group-hover:text-palette-1 text-center w-[20px]" />
                      </div>
                      <p className="text-palette-5 text-[14px] sm:text-[16px] w-[50vw] small-mobile:w-[60vw] mobile:w-full break-words">{content}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
        

      <div className="h-[1px] w-full bg-palette-3 opacity-50" />

        <p className="text-white px-4 pb-8 text-[12px] sm:text-[14px] text-center">
          © Copyright By Famtech, PLLC | Website by
          <a href="https://www.linkedin.com/in/ajraf-mannan-b375b3202" target="_blank" className="font-bold px-1 cursor-pointer">
           Ajraf Mannan
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
