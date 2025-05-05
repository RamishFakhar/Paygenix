"use client"
import styles from "@/styles/style";
import { Navbar, Footer } from "@/components";

const Features: React.FC = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div className="flex flex-col items-center justify-center w-full py-16">
            <h1 className="font-poppins font-semibold text-[52px] text-white text-center">
              Our Features
            </h1>
            <p className={`${styles.paragraph} max-w-[570px] mt-5 text-center`}>
              Discover the advanced features that make Paygenix the ideal solution for your financial needs.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mt-10">
              <FeatureCard 
                title="Rewards"
                description="The best credit cards offer some tantalizing combinations of promotions and prizes"
              />
              <FeatureCard 
                title="100% Secured"
                description="We take proactive steps to ensure your information and transactions are secure"
              />
              <FeatureCard 
                title="Balance Transfer"
                description="A balance transfer credit card can save you a lot of money in interest charges"
              />
              <FeatureCard 
                title="Instant Transfers"
                description="Transfer money instantly to any account worldwide with minimal fees"
              />
            </div>
          </div>
          
          <Footer />
        </div>
      </div>
    </div>
  )
}

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => (
  <div className="flex flex-col p-6 rounded-[20px] bg-black-gradient max-w-[370px] feature-card">
    <h4 className="font-poppins font-semibold text-white text-[18px] leading-[24px] mb-3">
      {title}
    </h4>
    <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
      {description}
    </p>
  </div>
);

export default Features; 