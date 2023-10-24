import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import { TypingText, TitleText, QuoteCard, Picture } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion'
import Image from 'next/image'
 

const About = () => {
  const isMobile = useMediaQuery({ maxWidth: 480 })
  const isDesktop = useMediaQuery({ maxWidth: 1024 })

  return (
    <section className={`p-0 lg:p-[100px] relative z-10 min-h-[1100px] flex flex-col justify-end lg:justify-center`} id='about'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.1 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col gap-12`}
      >
        <div className='flex flex-col-reverse lg:items-center lg:flex-row gap-8 lg:gap-[100px] xl:gap-40 mt-[50px] w-fit h-fit'>
          <motion.div
            variants={isDesktop ? fadeIn('up', 'tween', 0.1, 1) : fadeIn('right', 'tween', 0.1, 1)}
            className='relative z-50 h-[600px] xl:h-[700px] 2xl:h-[800px]'
          >
            <Image
              src="/imgs/abdul.jpg"
              width={1000}
              height={1000}
              alt="Picture of the head engineer"
              className="relative w-full lg:max-w-[400px] xl:max-w-[500px] min-h-[600px] h-full object-cover object-cover z-40 lg:rounded-lg shadow-xl"
            />
            <QuoteCard
              text="Committed to crafting landscapes with precision and care, fostering connections with nature."
              styles="lg:hidden"
            />
            <div className='hidden lg:block'>
              <div className='absolute -top-[50px] -left-[50px] h-full w-full bg-palette-3 shadow-2xl z-0' />
              <div className='absolute -bottom-4 -right-4 h-full w-full bg-palette-5 z-20' />
              <div className='absolute -bottom-[50px] -right-[50px] h-full w-full border-4 border-palette-1 z-10' />
            </div>
          </motion.div>

          <motion.div
            variants={isDesktop ? fadeIn('up', 'tween', 0.1, 1) : fadeIn('left', 'tween', 0.1, 1)}
            className='px-6 sm:px-16 lg:px-0 sm:py-12 flex flex-col justify-center items-start gap-12 flex-1'
          >
            <motion.div
              variants={isMobile ? fadeIn('up', 'tween', 0.2, 1) : fadeIn('left', 'tween', 0.2, 1)}
              className='flex flex-col items-start'
            >
              <TypingText title='| About Us' textStyles='text-center' />
              <TitleText title={<>Who We Are</>} />
            </motion.div>

            <div className='flex flex-col gap-8'>
              <p className={`font-normal text-[20px] leading-7`}>
                
                Famtech Engineering is a full service construction management firm that specializes in construction management, structural rehabilitation, interior and exterior restoration, preservation, and quality assurance.
              </p>
              <p className={`font-normal text-[20px] leading-7`}>
              We are committed to delivering projects within the designated timeline, adhering to the allocated budget, and upholding unwavering integrity throughout the process. Our team consists of skilled, well-informed, and seasoned engineers, architects, inspectors, expediters, code experts, and managers. Every member shares a dedication to furnishing clients with services of the highest caliber.
</p>

              <p className={`font-normal text-[20px] leading-7`}>
                Famtech was founded by Abdul Mannan, PE with an intent to bring his Engineering and Construction Management skills together to produce superior services for his clients and the construction field. Mr. Mannan is a multi-state Professional Engineer (New York, New Jersey, and Connecticut) with over 30 years of experience as a Project Manager, Design Manager, Design Engineer, Construction Manager, and Special Inspection Technical Director. Mr. Mannan has progressive professional experience in civil/structural engineering with extensive knowledge in façade inspection, design, analysis, and construction management for all phases of development. He is a NYC DOB QEWI and recognized for his competency and performance in the facade industry.  He has developed and implemented schedules and budgets for projects and programs. 
              </p>
                

              
            </div>

            {/* <button className={`${styles.heroBtn} bg-palette-1 hover:border-palette-1`}>Learn More</button> */}

          </motion.div>
        </div>

        <motion.img
          variants={fadeIn('up', 'tween', 0.3, 1)}
          src='/icons/arrow-down.svg'
          alt='arrow-down'
          className='hidden lg:flex w-[18px] h-[28px] object-contain mt-[50px]'
        />
      </motion.div>
    </section>
  );
};

export default About;
