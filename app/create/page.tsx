"use client"
import styles from "@/styles/style";
import { Navbar, Footer } from "@/components";

const Create: React.FC = () => {
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
              Create Your Account
            </h1>
            <p className={`${styles.paragraph} max-w-[570px] mt-5 text-center mb-10`}>
              Join millions of users who trust Paygenix for their banking needs. Get started in just a few minutes.
            </p>
            
            <div className="w-full max-w-[500px] bg-black-gradient p-8 rounded-[20px]">
              <form className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-poppins font-medium text-white text-[16px]">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter your full name"
                    className="py-4 px-6 font-poppins font-normal text-[16px] text-white bg-discount-gradient rounded-[10px] outline-none border-none"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="font-poppins font-medium text-white text-[16px]">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="py-4 px-6 font-poppins font-normal text-[16px] text-white bg-discount-gradient rounded-[10px] outline-none border-none"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="font-poppins font-medium text-white text-[16px]">
                    Password
                  </label>
                  <input 
                    type="password" 
                    placeholder="Create a strong password"
                    className="py-4 px-6 font-poppins font-normal text-[16px] text-white bg-discount-gradient rounded-[10px] outline-none border-none"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="font-poppins font-medium text-white text-[16px]">
                    Confirm Password
                  </label>
                  <input 
                    type="password" 
                    placeholder="Confirm your password"
                    className="py-4 px-6 font-poppins font-normal text-[16px] text-white bg-discount-gradient rounded-[10px] outline-none border-none"
                  />
                </div>
                
                <div className="flex items-center gap-2 mt-2">
                  <input type="checkbox" id="terms" className="w-4 h-4" />
                  <label htmlFor="terms" className="font-poppins font-normal text-dimWhite text-[14px]">
                    I agree to the <span className="text-secondary cursor-pointer">Terms & Conditions</span> and <span className="text-secondary cursor-pointer">Privacy Policy</span>
                  </label>
                </div>
                
                <button type="submit" className="mt-4 py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px]">
                  Create Account
                </button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="font-poppins font-normal text-dimWhite text-[14px]">
                  Already have an account? <span className="text-secondary cursor-pointer">Sign In</span>
                </p>
              </div>
            </div>
            
            <div className="flex flex-col mt-16 gap-6 max-w-[700px]">
              <h2 className="font-poppins font-semibold text-white text-[24px] text-center">
                Why Choose Paygenix?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FeatureItem 
                  title="Fast & Easy Setup"
                  description="Create your account in minutes with our streamlined registration process."
                />
                <FeatureItem 
                  title="Secure Banking"
                  description="Industry-leading security measures to protect your sensitive financial information."
                />
                <FeatureItem 
                  title="24/7 Support"
                  description="Access to customer support anytime you need assistance with your account."
                />
                <FeatureItem 
                  title="Low Fees"
                  description="Competitive rates and minimal fees for all your banking transactions."
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

interface FeatureItemProps {
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description }) => (
  <div className="flex flex-col p-6 rounded-[20px] bg-discount-gradient">
    <h4 className="font-poppins font-semibold text-white text-[18px] leading-[24px] mb-2">
      {title}
    </h4>
    <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
      {description}
    </p>
  </div>
);

export default Create;