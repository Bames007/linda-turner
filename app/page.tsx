import Header from "./home/Header";
import Hero from "./home/Hero";
import Stories from "./home/Stories";
import Videos from "./home/Videos";
import MotivationalQuote from "./home/MotivationalQuote";
import LiveStream from "./home/Livestream";
import Podcast from "./home/Podcast";
import ContactUs from "./home/ContactUs";
import UpcomingEvents from "./home/UpcomingEvents";
import Footer from "./home/Footer";
import NeedHelp from "./home/NeedHelp";

export default function Home() {
  return (
    <>
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="quote">
        <MotivationalQuote />
      </section>
      <section id="videos">
        <Videos />
      </section>
      <section id="stories">
        <Stories />
      </section>
      <section id="help">
        <NeedHelp />
      </section>
      <section id="live">
        <LiveStream />
      </section>
      <section id="events">
        <UpcomingEvents />
      </section>
      <section id="podcast">
        <Podcast />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
      <Footer />
    </>
  );
}
