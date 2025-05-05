"use client"
import styles, { layout } from "@/styles/style";
import { features } from "@/constants";
import Button from "./Button";
import Image from "next/image";
import { FeatredCardProps } from "@types";
import { motion } from "framer-motion";

const FeaturesCard: React.FC<FeatredCardProps> = ({ icon, title, content, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full bg-dimBlue ${styles.flexCenter}`}
    >
      <Image src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[24px]">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </motion.div>
);

const Business: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      } 
    }
  };

  return (
    <section id="features" className={`${layout.section}`}>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className={layout.sectionInfo}
      >
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={styles.heading2}
        >
          You do the business, <br className="sm:block hidden" />
          We'll handle the money.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`${styles.paragraph} max-w-[470px] mt-5`}
        >
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds of
          credits cards on the market.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button styles="mt-10" />
        </motion.div>
      </motion.div>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`${layout.sectionImg} flex-col`}
      >
        {features.map((feature, index) => (
          <FeaturesCard key={feature.id} {...feature} index={index} />
        ))}
      </motion.div>
    </section>
  );
};

export default Business;
