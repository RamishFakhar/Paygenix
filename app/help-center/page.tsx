"use client"
import styles from "@/styles/style";
import { Navbar, Footer } from "@/components";

const HelpCenter: React.FC = () => {
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
              Help Center
            </h1>
            <p className={`${styles.paragraph} max-w-[570px] mt-5 text-center`}>
              Get assistance with any questions or issues you might have with our banking services.
            </p>
            
            <div className="w-full mt-10">
              <div className="flex flex-col gap-6 mb-10">
                <h2 className="font-poppins font-semibold text-white text-[24px]">
                  Frequently Asked Questions
                </h2>
                
                <FaqItem 
                  question="How do I create a new account?"
                  answer="Creating a new account is simple. Click on the 'Sign Up' button on the top right corner of our website, fill in your personal details, verify your email, and you're all set."
                />
                <FaqItem 
                  question="What documents do I need for verification?"
                  answer="For verification, you'll need a valid government-issued ID (passport, driver's license), proof of address (utility bill, bank statement), and in some cases, additional documents depending on the account type."
                />
                <FaqItem 
                  question="How can I reset my password?"
                  answer="To reset your password, click on the 'Forgot Password' link on the login page, enter your registered email, and follow the instructions sent to your email to create a new password."
                />
                <FaqItem 
                  question="Is my financial data secure?"
                  answer="Yes, we employ the latest encryption and security technologies to ensure your data is secure. We also use multi-factor authentication and regular security audits to protect your information."
                />
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 mt-16">
                <ContactCard 
                  title="Customer Support"
                  description="Our team is available 24/7 to assist you with any queries or issues."
                  contact="support@paygenix.com"
                  phone="+1 (800) 123-4567"
                />
                <ContactCard 
                  title="Technical Support"
                  description="Experiencing technical difficulties? Our tech team is here to help."
                  contact="tech@paygenix.com"
                  phone="+1 (800) 765-4321"
                />
                <ContactCard 
                  title="Billing Inquiries"
                  description="Questions about your bills or payments? Contact our billing department."
                  contact="billing@paygenix.com"
                  phone="+1 (800) 987-6543"
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

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => (
  <div className="flex flex-col p-6 rounded-[20px] bg-black-gradient">
    <h4 className="font-poppins font-semibold text-white text-[18px] leading-[24px] mb-3">
      {question}
    </h4>
    <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
      {answer}
    </p>
  </div>
);

interface ContactCardProps {
  title: string;
  description: string;
  contact: string;
  phone: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ title, description, contact, phone }) => (
  <div className="flex flex-col p-6 rounded-[20px] bg-black-gradient flex-1">
    <h4 className="font-poppins font-semibold text-white text-[18px] leading-[24px] mb-3">
      {title}
    </h4>
    <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-4">
      {description}
    </p>
    <div className="flex flex-col mt-auto">
      <p className="font-poppins font-normal text-white text-[16px] leading-[24px]">
        Email: {contact}
      </p>
      <p className="font-poppins font-normal text-white text-[16px] leading-[24px]">
        Phone: {phone}
      </p>
    </div>
  </div>
);

export default HelpCenter; 