import About from "@/components/About";
import Capability from "@/components/Capability";
import Categories from "@/components/Categories";
import Counter from "@/components/Counter";
import CounterSection from "@/components/Counter";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Industry from "@/components/Industry";
import ScrollExpand from "@/components/Main";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import ProductsSection from "@/components/Products";
import Scroll from "@/components/Scroll";
import Smooth from "@/components/Smooth";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
   <>
   <Main/>  
     {/* <Cta/> */}
      <Scroll/>
    {/* <About/>
   {/* <WhyChooseUs/> */} 
   <Categories/>
   <Counter/>
   <ProductsSection/>
   <Industry/>
   <Capability/>
  
   <Testimonials/>
   <Faq/>
   <Smooth/>
   <Footer/>
   </>
  );
}
