import About from "@/components/OurTeam";
import Capability from "@/components/Capability";
import Categories from "@/components/Categories";
import Counter from "@/components/Counter";
import CounterSection from "@/components/Counter";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Industry from "@/components/Industry";
import ScrollExpand from "@/components/Main";
import Main from "@/components/Main";
import Scroll from "@/components/Scroll";
import Smooth from "@/components/Smooth";
import Testimonials from "@/components/Testimonials";
import OurBrands from "@/components/OurBrands";
import BlendCursor from "@/components/Curser";
import AboutUs from "@/components/About";
import ProductsSection from "@/components/Products";
import OurTeam from "@/components/OurTeam";
import HomeCta from "@/components/HomeCta";


export default function Home() {
  return (
   <>
   <Main/> 
   <AboutUs/> 
   <Scroll/>
   <Categories/>
   <Cta/> 
   <Counter/>
   <ProductsSection/>
<OurTeam/>
   <Industry/>
   <Capability/>
  <OurBrands/>
  <HomeCta/>
   <Testimonials/>
   <Faq/>
   <Smooth/>
  
   </>
  );
}
