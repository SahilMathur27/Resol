import About from "@/components/About";
import Capability from "@/components/Capability";
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
   
<Scroll/>
    {/* <About/>
   {/* <WhyChooseUs/> */} 
   <ProductsSection/>
    <Cta/>
   <Industry/>
   <Capability/>
  
   <Testimonials/>
   <Faq/>
   <Smooth/>
   <Footer/>
   </>
  );
}
