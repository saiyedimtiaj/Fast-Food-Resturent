import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import Highlight from "../../Components/Highlight/Highlight";
import News from "../../Components/News/News";
import TopSell from "../../Components/TopSell/TopSell";

const Home = () => {
    return (
        <>
            <Banner/>
            <TopSell/>
            <About/>
            <Highlight/>
            <News/>
        </>
    );
};

export default Home;