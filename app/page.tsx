import BannerSection from "./home/BannerSection";
import Category from "./home/Category";
import Dealsection from "./home/Dealsection";
import Shop from "./home/Shop";
import Sportswear from "./home/Sportswear";
import Hero from "./home/Hero";
import Offer from "./home/Offer";
import ShopBySport from "./home/ShopBySport";
import PromoGrid from "./home/PromoGrid";
import Sales from "./home/Sales";
import NewsLetterBanner from "./home/NewsLetterBaneer";
import BrandDiscovery from "./home/BrandDiscovery";
import ClientDiscovery from "./home/ClientDiscovery";

export default function Home() {
  return (
    <>
      <BannerSection />
      <Category />
      <Dealsection />
      <Shop />
      <Sportswear />
      {/* <BrandsSection /> */}
      <BrandDiscovery />
      <Hero />
      <Offer />
      <ShopBySport />
      <PromoGrid />
      <Sales />
      <ClientDiscovery />
      <NewsLetterBanner />


    </>
  );
}
