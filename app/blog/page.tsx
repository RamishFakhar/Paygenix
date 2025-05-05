"use client"
import styles from "@/styles/style";
import { Navbar, Footer } from "@/components";
import Image from "next/image";
import { card } from "@/public/assets";

const Blog: React.FC = () => {
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
              Our Blog
            </h1>
            <p className={`${styles.paragraph} max-w-[570px] mt-5 text-center`}>
              Stay updated with the latest news, insights, and trends in the world of banking and finance.
            </p>
            
            <div className="flex flex-col w-full mt-10 gap-10">
              <FeaturedPost 
                title="The Future of Digital Banking: Trends to Watch in 2023"
                summary="Explore the emerging trends shaping the future of digital banking and how they will impact the financial industry in the coming years."
                date="June 15, 2023"
                author="Michael Brown"
                readTime="5 min read"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                <BlogPost 
                  title="Understanding Cryptocurrency: A Beginner's Guide"
                  summary="Learn the basics of cryptocurrency, how it works, and why it matters in today's financial landscape."
                  date="May 28, 2023"
                  author="Sarah Johnson"
                  readTime="4 min read"
                />
                <BlogPost 
                  title="How to Build an Emergency Fund in 6 Months"
                  summary="Practical tips and strategies to help you establish a solid emergency fund to protect your financial future."
                  date="May 20, 2023"
                  author="David Chen"
                  readTime="3 min read"
                />
                <BlogPost 
                  title="Investing 101: Where to Start as a Beginner"
                  summary="A comprehensive guide for beginners looking to enter the world of investments and build long-term wealth."
                  date="May 15, 2023"
                  author="Lisa Rodriguez"
                  readTime="6 min read"
                />
                <BlogPost 
                  title="The Impact of AI on Financial Services"
                  summary="How artificial intelligence is revolutionizing banking, wealth management, and customer service in finance."
                  date="May 10, 2023"
                  author="James Wilson"
                  readTime="5 min read"
                />
                <BlogPost 
                  title="Sustainable Banking: How Financial Institutions Are Going Green"
                  summary="Discover how banks are adopting sustainable practices and offering green financial products to consumers."
                  date="May 5, 2023"
                  author="Emma Taylor"
                  readTime="4 min read"
                />
                <BlogPost 
                  title="Managing Personal Finances During Economic Uncertainty"
                  summary="Expert advice on how to navigate your finances during times of economic turbulence and market volatility."
                  date="April 28, 2023"
                  author="Robert Lee"
                  readTime="7 min read"
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

interface FeaturedPostProps {
  title: string;
  summary: string;
  date: string;
  author: string;
  readTime: string;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ title, summary, date, author, readTime }) => (
  <div className="flex flex-col md:flex-row p-6 rounded-[20px] bg-black-gradient gap-8">
    <div className="flex-1 md:max-w-[300px]">
      <Image src={card} alt="featured post" className="w-full h-[200px] object-cover rounded-[10px]" />
    </div>
    <div className="flex-1 flex flex-col">
      <h2 className="font-poppins font-semibold text-white text-[24px] leading-[32px] mb-3">
        {title}
      </h2>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-4">
        {summary}
      </p>
      <div className="flex items-center mt-auto">
        <p className="font-poppins font-normal text-dimWhite text-[14px]">
          {date} • {author} • {readTime}
        </p>
        <button className="font-poppins font-medium text-secondary text-[16px] ml-auto">
          Read More →
        </button>
      </div>
    </div>
  </div>
);

interface BlogPostProps {
  title: string;
  summary: string;
  date: string;
  author: string;
  readTime: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, summary, date, author, readTime }) => (
  <div className="flex flex-col p-6 rounded-[20px] bg-black-gradient h-full">
    <h3 className="font-poppins font-semibold text-white text-[20px] leading-[28px] mb-3">
      {title}
    </h3>
    <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-4 flex-grow">
      {summary}
    </p>
    <div className="flex items-center mt-auto">
      <p className="font-poppins font-normal text-dimWhite text-[14px]">
        {date} • {readTime}
      </p>
      <button className="font-poppins font-medium text-secondary text-[16px] ml-auto">
        Read →
      </button>
    </div>
  </div>
);

export default Blog; 