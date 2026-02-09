// import Header from "./home/Header";
// import Hero from "./home/Hero";
// import Stories from "./home/Stories";
// import Videos from "./home/Videos";
// import MotivationalQuote from "./home/MotivationalQuote";
// import LiveStream from "./home/Livestream";
// import Podcast from "./home/Podcast";
// import ContactUs from "./home/ContactUs";
// import UpcomingEvents from "./home/UpcomingEvents";
// import Footer from "./home/Footer";
// import NeedHelp from "./home/NeedHelp";

import BecomePartner from "./initiative_home/BecomeAPartner";
import Causes from "./initiative_home/Causes";
import Collaborators from "./initiative_home/Collaborators";
import Contact from "./initiative_home/Contact";
import Footer from "./initiative_home/Footer";
import Header from "./initiative_home/Header";
import Hero from "./initiative_home/Hero";
import MotivationalQuote from "./initiative_home/MotivationalQuote";
import PastEvents from "./initiative_home/PastEvents";
import Patrons from "./initiative_home/Patrons";
import Stories from "./initiative_home/Stories";
import UpcomingEvents from "./initiative_home/UpcomingEvents";

// export default function Home() {
//   return (
//     <>
//       <Header />
//       <section id="home">
//         <Hero />
//       </section>
//       <section id="quote">
//         <MotivationalQuote />
//       </section>
//       <section id="videos">
//         <Videos />
//       </section>
//       <section id="stories">
//         <Stories />
//       </section>
//       <section id="help">
//         <NeedHelp />
//       </section>
//       <section id="live">
//         <LiveStream />
//       </section>
//       <section id="events">
//         <UpcomingEvents />
//       </section>
//       <section id="podcast">
//         <Podcast />
//       </section>
//       <section id="contact">
//         <ContactUs />
//       </section>
//       <Footer />
//     </>
//   );
// }

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <MotivationalQuote />
      <Stories />
      <Patrons />
      <PastEvents />
      <Collaborators />
      <UpcomingEvents />
      <Causes />
      <BecomePartner />
      <Contact />
      <Footer />
    </>
  );
}
