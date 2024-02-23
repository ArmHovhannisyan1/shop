import AboutFirst from "../../components/AboutSections/AboutFirst";
import Experience from "../../components/AboutSections/Experience";
import Gallery from "../../components/AboutSections/Gallery";
import History from "../../components/AboutSections/History";
import Shipping from "../../components/AboutSections/Shipping";
import Team from "../../components/AboutSections/Team";
import Quot from "../../components/Slider/Quot";
import Sponsor from "../../components/Slider/Sponsor";

export default function About() {
    return(
        <>
            <AboutFirst/>
            <History/>
            <Gallery/>
            <Experience/>
            <Shipping/>
            <Team/>
            <Quot/>
            <Sponsor/>
        </>
    )
}