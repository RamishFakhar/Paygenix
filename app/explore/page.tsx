"use client"
import styles from "@/styles/style";
import { Navbar, Footer } from "@/components";
import Image from "next/image";
import { card } from "@/public/assets";

const Explore: React.FC = () => {
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
              Explore Paygenix
            </h1>
            <p className={`${styles.paragraph} max-w-[570px] mt-5 text-center`}>
              Discover all the features and services we offer to make your banking experience seamless and efficient.
            </p>
            
            <div className="w-full mt-16">
              <h2 className="font-poppins font-semibold text-white text-[36px] mb-10">
                Banking Services
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <ServiceCard 
                  title="Personal Banking"
                  description="Everyday banking services designed for individuals, including savings, checking accounts, and personal loans."
                  image={card}
                />
                <ServiceCard 
                  title="Business Banking"
                  description="Comprehensive financial solutions for businesses of all sizes, from startups to established enterprises."
                  image={card}
                />
                <ServiceCard 
                  title="Investment Services"
                  description="Expert investment advice and portfolio management to help you grow your wealth over time."
                  image={card}
                />
                <ServiceCard 
                  title="Loans & Mortgages"
                  description="Flexible loan options with competitive rates for personal, business, and home financing needs."
                  image={card}
                />
                <ServiceCard 
                  title="Digital Banking"
                  description="State-of-the-art online and mobile banking platforms for managing your finances anytime, anywhere."
                  image={card}
                />
                <ServiceCard 
                  title="International Banking"
                  description="Global banking services including foreign currency accounts, international transfers, and more."
                  image={card}
                />
              </div>
              
              <h2 className="font-poppins font-semibold text-white text-[36px] mb-10">
                Tools & Resources
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ToolCard 
                  title="Financial Calculator"
                  description="Calculate loans, mortgages, savings, and investment returns with our easy-to-use tools."
                />
                <ToolCard 
                  title="Budget Planner"
                  description="Plan and track your expenses, set financial goals, and manage your budget effectively."
                />
                <ToolCard 
                  title="Market Insights"
                  description="Stay updated with the latest market trends, investment opportunities, and financial news."
                />
                <ToolCard 
                  title="Educational Resources"
                  description="Access articles, videos, and guides to improve your financial literacy and make informed decisions."
                />
                <ToolCard 
                  title="Mobile App"
                  description="Download our mobile app for on-the-go banking, instant notifications, and easy account management."
                />
                <ToolCard 
                  title="Security Center"
                  description="Learn about our security measures and get tips on how to protect your financial information online."
                />
              </div>
            </div>
          </div>
          
          <Footer />
        </div>
      </div>
    </div>
  )
}

interface ServiceCardProps {
  title: string;
  description: string;
  image: any;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image }) => (
  <div className="flex flex-col rounded-[20px] overflow-hidden">
    <div className="relative w-full h-[200px]">
      <Image src={image} alt={title} fill className="object-cover" />
    </div>
    <div className="flex flex-col p-6 bg-black-gradient">
      <h3 className="font-poppins font-semibold text-white text-[20px] leading-[28px] mb-3">
        {title}
      </h3>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {description}
      </p>
      <button className="font-poppins font-medium text-secondary text-[16px] mt-4 self-start">
        Learn More →
      </button>
    </div>
  </div>
);

interface ToolCardProps {
  title: string;
  description: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ title, description }) => (
  <div className="flex flex-col p-6 rounded-[20px] bg-black-gradient">
    <h3 className="font-poppins font-semibold text-white text-[20px] leading-[28px] mb-3">
      {title}
    </h3>
    <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-4">
      {description}
    </p>
    <button className="font-poppins font-medium text-secondary text-[16px] self-start mt-auto">
      Access Tool →
    </button>
  </div>
);

export default Explore; 