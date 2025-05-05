"use client"
import styles from '@/styles/style';
import { arrowUp } from '@/public/assets';
import Image from 'next/image';
import { motion } from 'framer-motion';

const GetStarted: React.FC = () => (
  <motion.div 
    whileHover={{ scale: 1.05, rotate: 5 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
  >
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <motion.div 
        initial={{ y: 5 }}
        animate={{ y: 0 }}
        transition={{ 
          repeat: Infinity, 
          repeatType: "reverse", 
          duration: 1.2 
        }}
        className={`${styles.flexStart} flex-row`}
      >
        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
          <span className='text-gray-50'>Get</span>
        </p>
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5,
            ease: "easeInOut" 
          }}
        >
          <Image src={arrowUp} alt="arrow" className='w-[23px] h-[23px] object-contain ml-2' />
        </motion.div>
      </motion.div>
      <p className='font-poppins font-medium text-[18px] leading-[23px]'>
        <span className='text-gray-50'>Started</span>
      </p>
    </div>
  </motion.div>
);

export default GetStarted;