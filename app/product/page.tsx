"use client"
import styles from "@/styles/style";
import { Navbar, Footer } from "@/components";
import Image from "next/image";
import { card } from "@/public/assets";

const Product: React.FC = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div className="flex flex-col md:flex-row w-full py-16">
            <div className="flex-1 flex flex-col justify-center items-start">
              <h1 className="font-poppins font-semibold text-[52px] text-white leading-[75px]">
                Our <span className="text-gradient">Products</span> <br className="sm:block hidden" /> Suite
              </h1>
              <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Explore our comprehensive suite of financial products designed to meet all your banking needs. From credit cards to loans, we've got you covered.
              </p>
              
              <div className="flex flex-col gap-6 mt-10">
                <ProductCard
                  title="Credit Card"
                  description="Our premium credit card offers cashback, travel rewards, and exclusive benefits tailored to your lifestyle."
                />
                <ProductCard
                  title="Savings Account"
                  description="High-yield savings accounts that help your money grow with competitive interest rates and zero fees."
                />
                <ProductCard
                  title="Loans & Mortgages"
                  description="Flexible loan options with competitive rates for personal, business, and home financing needs."
                />
                <ProductCard
                  title="Investment Solutions"
                  description="Diversify your portfolio with our range of investment products managed by financial experts."
                />
              </div>
            </div>
            
            <div className="flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative">
              <Image src={card} alt="product" className="w-[100%] h-[100%]" />
            </div>
          </div>
          
          <Footer />
        </div>
      </div>
    </div>
  )
}

interface ProductCardProps {
  title: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description }) => (
  <div className="flex flex-row p-6 rounded-[20px] bg-black-gradient feature-card">
    <div className="flex-1">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[24px] mb-2">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {description}
      </p>
    </div>
  </div>
);

export default Product; 