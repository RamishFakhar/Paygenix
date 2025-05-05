"use client"
import styles from "@/styles/style";
import { Navbar, Footer } from "@/components";

const HowItWorks: React.FC = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div className="flex flex-col items-center w-full py-16">
            <h1 className="font-poppins font-semibold text-[52px] text-white text-center">
              How It Works
            </h1>
            <p className={`${styles.paragraph} max-w-[570px] mt-5 text-center`}>
              Discover the simple process of using Paygenix services to manage your finances efficiently.
            </p>
            
            <div className="flex flex-col items-center w-full mt-10">
              <StepCard 
                number="01"
                title="Create an Account"
                description="Sign up in minutes with our simple registration process. All you need is your basic information and identification documents."
              />
              <div className="h-[50px] w-[2px] bg-dimWhite my-2" />
              
              <StepCard 
                number="02"
                title="Connect Your Accounts"
                description="Securely link your existing bank accounts and financial services to get a comprehensive view of your finances."
              />
              <div className="h-[50px] w-[2px] bg-dimWhite my-2" />
              
              <StepCard 
                number="03"
                title="Set Your Goals"
                description="Define your financial goals and preferences to receive personalized recommendations and services."
              />
              <div className="h-[50px] w-[2px] bg-dimWhite my-2" />
              
              <StepCard 
                number="04"
                title="Manage & Monitor"
                description="Easily manage your accounts, track your spending, and monitor your financial health through our intuitive dashboard."
              />
              <div className="h-[50px] w-[2px] bg-dimWhite my-2" />
              
              <StepCard 
                number="05"
                title="Grow Your Wealth"
                description="Take advantage of our investment options and financial tools to grow your wealth and secure your future."
              />
            </div>
          </div>
          
          <Footer />
        </div>
      </div>
    </div>
  )
}

interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description }) => (
  <div className="flex flex-row p-6 rounded-[20px] bg-black-gradient w-full max-w-[700px]">
    <div className="flex items-center justify-center w-[70px] h-[70px] rounded-full bg-dimBlue mr-6">
      <p className="font-poppins font-semibold text-white text-[20px]">
        {number}
      </p>
    </div>
    <div className="flex-1">
      <h4 className="font-poppins font-semibold text-white text-[20px] leading-[24px] mb-3">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {description}
      </p>
    </div>
  </div>
);

export default HowItWorks; 