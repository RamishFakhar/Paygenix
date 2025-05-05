"use client"
import styles from "@/styles/style";
import { Navbar, Footer } from "@/components";
import Image from "next/image";
import { airbnb, binance, coinbase, dropbox } from "@/public/assets";

const Partners: React.FC = () => {
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
              Our Partners
            </h1>
            <p className={`${styles.paragraph} max-w-[570px] mt-5 text-center`}>
              We collaborate with leading companies across various industries to bring you the best financial solutions.
            </p>
            
            <div className="flex flex-wrap justify-center items-center sm:justify-start mt-10 w-full mb-16">
              <div className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
                <Image src={airbnb} alt="airbnb" className="sm:w-[192px] w-[100px] object-contain" />
              </div>
              <div className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
                <Image src={binance} alt="binance" className="sm:w-[192px] w-[100px] object-contain" />
              </div>
              <div className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
                <Image src={coinbase} alt="coinbase" className="sm:w-[192px] w-[100px] object-contain" />
              </div>
              <div className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
                <Image src={dropbox} alt="dropbox" className="sm:w-[192px] w-[100px] object-contain" />
              </div>
            </div>
            
            <div className="w-full mt-10">
              <h2 className="font-poppins font-semibold text-white text-[36px] text-center mb-10">
                Partnership Programs
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <PartnershipCard 
                  title="Financial Institutions"
                  description="Partner with other banks and financial institutions to offer cross-platform services and expanded global reach."
                  benefits={["Access to global banking network", "Cross-platform integration", "Joint financial products"]}
                />
                <PartnershipCard 
                  title="Technology Companies"
                  description="Collaborate with tech companies to develop innovative fintech solutions and digital banking experiences."
                  benefits={["Advanced AI solutions", "Blockchain integration", "Enhanced mobile experiences"]}
                />
                <PartnershipCard 
                  title="Retail & Commerce"
                  description="Partner with retail businesses to offer special financial products and services to their customers."
                  benefits={["Co-branded credit cards", "Exclusive merchant discounts", "Integrated payment solutions"]}
                />
              </div>
              
              <div className="flex justify-center mt-16">
                <button className="py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px]">
                  Become a Partner
                </button>
              </div>
            </div>
          </div>
          
          <Footer />
        </div>
      </div>
    </div>
  )
}

interface PartnershipCardProps {
  title: string;
  description: string;
  benefits: string[];
}

const PartnershipCard: React.FC<PartnershipCardProps> = ({ title, description, benefits }) => (
  <div className="flex flex-col p-6 rounded-[20px] bg-black-gradient h-full">
    <h3 className="font-poppins font-semibold text-white text-[24px] leading-[32px] mb-4">
      {title}
    </h3>
    <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-6">
      {description}
    </p>
    <h4 className="font-poppins font-medium text-white text-[18px] leading-[27px] mb-2">
      Key Benefits:
    </h4>
    <ul className="list-disc pl-5">
      {benefits.map((benefit, index) => (
        <li key={index} className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-2">
          {benefit}
        </li>
      ))}
    </ul>
  </div>
);

export default Partners; 