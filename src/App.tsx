import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { initializeGA, initializeGTM, trackPageView } from "@/lib/analytics";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import Brands from "./pages/Brands";
import BrandDetail from "./pages/BrandDetail";
import Categories from "./pages/Categories";
import Deals from "./pages/Deals";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Partner from "./pages/Partner";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Analytics tracking component
const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize analytics on app load
    initializeGA();
    initializeGTM();
  }, []);

  useEffect(() => {
    // Track page views on route change
    trackPageView(location.pathname);
  }, [location]);

  return null;
};

// Layout wrapper
const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-background flex flex-col">
    <Header />
    <main className="flex-1">
      {children}
    </main>
    <Footer />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Analytics />
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/brands/:brandName" element={<BrandDetail />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/partner" element={<Partner />} />
            {/* Legacy route redirect */}
            <Route path="/join-us" element={<Partner />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
