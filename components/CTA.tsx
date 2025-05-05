"use client"
import styles from "@/styles/style";
import Button from "./Button";
import { motion } from "framer-motion";

const CTA: React.FC = () => (
    <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
        className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
        <div className="flex-1 flex flex-col">
            <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={styles.heading2}
            >
                Let's try our service now!
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className={`${styles.paragraph} max-w-[470px] mt-5`}
            >
                Everything you need to accept card payment and grow your business on the planet.
            </motion.p>
        </div>
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}
        >
            <Button />
        </motion.div>
    </motion.section>
)

export default CTA;