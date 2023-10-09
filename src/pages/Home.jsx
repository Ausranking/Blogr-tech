import BlogSection from "../sections/BlogSection";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import Main from "../sections/Main";
import SmartPhoneSection from "../sections/SmartPhoneSection";
const Home = () => {
  return (
    <>
      <section>
        <Header />
      </section>
      <section>
        <Main />
      </section>
      <section>
        <SmartPhoneSection />
      </section>
      <section>
        <BlogSection />
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
};

export default Home;
