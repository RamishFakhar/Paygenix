"use client"
import styles from "@/styles/style";
import { Navbar, Footer } from "@/components";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div className="flex flex-col items-center justify-center w-full py-24">
            <h1 className="font-poppins font-semibold text-[72px] text-white text-center mb-4">
              404
            </h1>
            <h2 className="font-poppins font-semibold text-[36px] text-white text-center mb-6">
              Page Not Found
            </h2>
            <p className={`${styles.paragraph} max-w-[500px] text-center mb-12`}>
              The page you are looking for doesn't exist or has been moved. Please check the URL or navigate back to our homepage.
            </p>
            
            <Link href="/" className="py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px]">
              Back to Home
            </Link>
          </div>
          
          <Footer />
        </div>
      </div>
    </div>
  );
} 