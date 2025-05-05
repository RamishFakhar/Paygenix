"use client"
import { useState } from 'react';
import { close, menu } from "@/public/assets";
import { navLinks } from "@/constants";
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex py-6 justify-between items-center navbar"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link href="/" className="font-poppins font-semibold text-[28px] text-white">
          Paygenix
        </Link>
      </motion.div>
      
      <motion.ul 
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="list-none sm:flex hidden justify-end items-center flex-1"
      >
        {navLinks.map((nav, index) => (
          <motion.li
            key={nav.id}
            variants={itemVariants}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={`/${nav.id === 'home' ? '' : nav.id}`}>
              {nav.title}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
      
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <motion.div
          whileTap={{ scale: 0.9 }}
        >
          <Image src={toggle ? close : menu}
            alt="menu"
            className="object-contain"
            width={28}
            height={28}
            onClick={() => setToggle((prev) => !prev)} 
          />
        </motion.div>
        
        <AnimatePresence>
          {toggle && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar"
            >
              <motion.ul 
                variants={navVariants}
                initial="hidden"
                animate="visible"
                className="list-none flex flex-col justify-end items-center flex-1"
              >
                {navLinks.map((nav, index) => (
                  <motion.li
                    key={nav.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}
                  >
                    <Link href={`/${nav.id === 'home' ? '' : nav.id}`}>
                      {nav.title}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar