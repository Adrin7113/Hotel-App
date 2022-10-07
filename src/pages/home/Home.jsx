import "./home.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import Header from "../../components/header/Header.jsx";
import Featured from "../../components/featured/Featured.jsx";
import PropertyList from "../../components/propertyList/PropertyList.jsx";
import Loved from "../../components/loved/Loved.jsx";
import MailList from "../../components/mailList/MailList.jsx";
import Footer from "../../components/footer/Footer.jsx";

const home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes our Guests Love!</h1>
        <Loved />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default home;
