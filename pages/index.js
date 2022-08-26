import Header from "./components/Header";
import Banner from "./components/Banner";
import VideoBanner from "./components/VideoBanner";
import Articles from "./components/Articles";
import Gallery from "./components/Gallery";
import Body from "./components/Body";
import ContactUs from "./components/ContactUs";
import News from "./components/News";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <div className="">
        <Header />
        <Banner />
        <VideoBanner />
        <Body />
        <Gallery />
        <Articles />
        <ContactUs />
        <News />
      </div>
      <Footer />
    </div>
  );
}
