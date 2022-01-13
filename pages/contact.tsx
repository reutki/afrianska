import { ContactPage } from "../components/Contact";
import { Banner } from "../components/Banner";
import { Navbar } from "../components/navbar/Navbar";
import { StyledContacts } from "../components/Contact/styled";
import MyMap from "../components/Map";
import { Footer } from "../components/Footer";

function Contact() {
  return (
    <StyledContacts>
      <Navbar />
      <div id="body">
        <Banner
          title="Contact Us"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ContactPage />
        <MyMap />
        <Footer />
      </div>
    </StyledContacts>
  );
}

export default Contact;
