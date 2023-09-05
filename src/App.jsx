import BlogSection from "./sections/BlogSection";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Main from "./sections/Main";
import SmartPhoneSection from "./sections/SmartPhoneSection";

function App() {
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
        <Footer />
      </section>
      <section>
        <BlogSection />
      </section>
    </>
  );
}

export default App;
