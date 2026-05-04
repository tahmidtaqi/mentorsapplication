import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Courses from "@/components/site/Courses";
import Experience from "@/components/site/Experience";
import Videos from "@/components/site/Videos";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <About />
      <Courses />
      <Experience />
      <Videos />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
