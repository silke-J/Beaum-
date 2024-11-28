import Clock from "../components/clock/Clock";
import Favortitter from "../components/favortitter/Favotitter";
import Myfav from "../components/myfav/MyFav";
import Newsletter from "../components/newletter/Newletter";
import PageHeader from "../components/pageheader/PageHeader";
import SectionHeader from "../components/sectionheader/SectionHeader";
import img from "/Headerbilleder.jpg"
const Home = () => {
  return (
    <article>
      <Clock/>

      <PageHeader
        img={img}
      />

      <SectionHeader title="Brugernes Favortitter" />
     <Favortitter/>

      <SectionHeader title="Mine Favortitter" />
      <Myfav/>
     

      <SectionHeader title="Tilmeld dig vores nyhedsbrev" />
      <Newsletter />
    </article>
  );
};
export default Home;
