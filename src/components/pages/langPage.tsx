import Banner from "../Layouts/LandPage/Banner";
import SectionAndBanner from "../Layouts/LandPage/SectionAndBanner";
import SectionInformation from "../Layouts/LandPage/SectionInformation";
import SectionProduct from "../Layouts/LandPage/SectionProduct";
import Spacer from "../Layouts/Spacer";

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
