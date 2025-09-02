import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedBrands from "@/components/FeaturedBrands";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedBrands />
      </main>
    </div>
  );
};

export default Index;
