import Banner from "../components/Layouts/LandPage/Banner";
import SectionAndBanner from "../components/Layouts/LandPage/SectionAndBanner";
import SectionInformation from "../components/Layouts/LandPage/SectionInformation";
import SectionProduct from "../components/Layouts/LandPage/SectionProduct";
import Spacer from "../components/Layouts/Spacer";

const LandPage = () => {
  return (
    <>
    <Spacer />
    <SectionAndBanner />
    <Spacer />
    <SectionInformation />
    <Spacer />
    <Banner />
    <Spacer />
    <SectionProduct />
    <Spacer />
    <SectionAndBanner />
    <Spacer />
    </>
  );
};

export default LandPage;
