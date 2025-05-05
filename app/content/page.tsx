"use client"
import styles from "@/styles/style";
import { Navbar, Footer } from "@/components";

const Content: React.FC = () => {
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
              Content
            </h1>
            <p className={`${styles.paragraph} max-w-[570px] mt-5 text-center`}>
              Explore our rich library of financial content designed to help you make informed decisions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 w-full">
              <ContentCard 
                title="Financial Guides"
                description="In-depth guides on various financial topics, from savings to investments."
              />
              <ContentCard 
                title="Market Research"
                description="Analysis and insights on current market trends and investment opportunities."
              />
              <ContentCard 
                title="Personal Finance"
                description="Tips and strategies for managing your personal finances effectively."
              />
              <ContentCard 
                title="Business Banking"
                description="Resources for businesses of all sizes to optimize their financial operations."
              />
              <ContentCard 
                title="Educational Videos"
                description="Video tutorials explaining complex financial concepts in simple terms."
              />
              <ContentCard 
                title="Case Studies"
                description="Real-world examples of successful financial planning and management."
              />
            </div>
          </div>
          
          <Footer />
        </div>
      </div>
    </div>
  )
}

interface ContentCardProps {
  title: string;
  description: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ title, description }) => (
  <div className="flex flex-col p-6 rounded-[20px] bg-black-gradient">
    <h4 className="font-poppins font-semibold text-white text-[18px] leading-[24px] mb-3">
      {title}
    </h4>
    <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
      {description}
    </p>
  </div>
);

export default Content; 