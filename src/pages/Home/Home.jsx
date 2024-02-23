import Explore from "../../components/HomeSections/Explore";
import ExploreOther from "../../components/HomeSections/ExploreOther";
import BgSlider from "../../components/Slider/BgSlider";
import BlogPosts from "../../components/Slider/BlogPosts";
import Sponsor from "../../components/Slider/Sponsor";

function Home() {
    return (
        <>
            <BgSlider />
            <Explore />
            <ExploreOther />
            <BlogPosts />
            <Sponsor />
        </>
    )
}
export default Home;