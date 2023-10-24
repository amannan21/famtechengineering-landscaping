import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, textVariant } from '../utils/motion'
import Image from 'next/image'
import { Link } from 'react-scroll';
import { heroBtns } from '../constants';

const Hero = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <section className={`relative sm:pl-16 pl-6 w-full bg-palette-5`} id='home'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className="2xl:max-w-[1450px] w-full h-screen min-h-[600px] mx-auto flex flex-col justify-end short:justify-center"
      >
        <div className='absolute inset-0 w-full h-screen min-h-[600px]'>
          <Image
          src="/imgs/mowing-man.jpg"
          alt="Hero cover"
          className="object-cover w-full h-full brightness-75"
          width ={2300}
          height ={1600}

          />
       

        </div>

        <div className='flex flex-col items-left justify-end gap-10 pb-[200px] relative z-10 short:gap-6 short:pb-0'>
          <div>
            <motion.h1 variants={textVariant(0.1)} className={styles.heroHeading}>
              Famtech
            </motion.h1>
            <motion.h1 variants={textVariant(0.4)} className={styles.heroHeading}>
              Engineering, PLLC
            </motion.h1>
          </div>
          <motion.p variants={textVariant(0.7)} className={styles.heroText} >
            353 West 48th Street, Suite 337, New York, NY 10036 
          </motion.p>
          <motion.div variants={textVariant(1)} className='flex flex-col small-mobile:flex-row gap-2 mobile:gap-6'>
            {heroBtns.map(({name, path}, i) => (
              <Link
                activeClass='active'
                to={path}
                spy={true}
                smooth={true}
                offset={path === 'contact' && !isDesktop ? 600 : isDesktop ? 0 : -90}
                duration={300}
                key={name}
                href={`/#${path}`}
              >
                <button className={styles.heroBtn}>{name}</button>
              </Link>
            ))}
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
};

export default Hero;
