import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import Contact from "@/components/home/Contact";
import LatestProducts from "@/components/home/LatestProducts";
import Newsletter from "@/components/home/Newsletter";
import TopProducts from "@/components/home/TopProducts";

export default function Home() {
  return (
    <div className="space-y-4">
      <Banner/>
      <Categories/>
      <TopProducts/>
      <LatestProducts/>
      <Newsletter/>
      <Contact/>
    </div>
  );
}
