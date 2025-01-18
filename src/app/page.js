import Banner from "@/Components/Banner";
import Category from "@/Components/Category";
import ReachOut from "@/Components/ReachOut";
import { dailyBajarData } from "@/Data/DailyBajarData";
import ProductListSection from "@/shared/ProductListSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-[40px] 2xl:mx-[60px]">
      <Banner />
      <ReachOut />
      <Category />
      <ProductListSection
        data={dailyBajarData}
        title={"Daily Bazar"}
      />
    </div>
  );
}
