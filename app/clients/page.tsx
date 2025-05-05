"use client"
import styles from "@/styles/style";
import { Navbar, Footer } from "@/components";
import Image from "next/image";
import { airbnb, binance, coinbase, dropbox } from "@/public/assets";

const Clients: React.FC = () => {
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
              Our Clients
            </h1>
            <p className={`${styles.paragraph} max-w-[570px] mt-5 text-center`}>
              We've partnered with industry leaders to provide the best financial services globally. Here are some of our esteemed clients.
            </p>
            
            <div className="flex flex-wrap justify-center items-center sm:justify-start mt-10 w-full">
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 w-full">
              <ClientTestimonial 
                name="John Smith"
                position="CEO, Airbnb"
                testimonial="Paygenix has revolutionized how we manage our financial operations. Their innovative solutions have saved us countless hours and resources."
              />
              <ClientTestimonial 
                name="Sarah Johnson"
                position="CFO, Binance"
                testimonial="Working with Paygenix has been a game-changer for our business. Their secure platform and excellent customer service exceed all expectations."
              />
              <ClientTestimonial 
                name="Michael Chen"
                position="Director, Coinbase"
                testimonial="Paygenix's financial products have the perfect balance of security, efficiency, and user-friendliness that we needed for our operations."
              />
              <ClientTestimonial 
                name="Jessica Williams"
                position="VP Finance, Dropbox"
                testimonial="The level of customization and support that Paygenix provides is unmatched in the industry. They truly understand our needs."
              />
            </div>
          </div>
          
          <Footer />
        </div>
      </div>
    </div>
  )
}

interface ClientTestimonialProps {
  name: string;
  position: string;
  testimonial: string;
}

const ClientTestimonial: React.FC<ClientTestimonialProps> = ({ name, position, testimonial }) => (
  <div className="flex flex-col p-6 rounded-[20px] bg-black-gradient">
    <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[32px] mb-6">
      "{testimonial}"
    </p>
    <div className="flex flex-col">
      <h4 className="font-poppins font-semibold text-white text-[20px] leading-[32px]">
        {name}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {position}
      </p>
    </div>
  </div>
);

export default Clients; 