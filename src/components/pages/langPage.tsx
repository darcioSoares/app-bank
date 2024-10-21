import Banner from "../Layouts/Banner";
import SectionAndBanner from "../Layouts/SectionAndBanner";
import SectionInformation from "../Layouts/SectionInformation";
import SectionProduct from "../Layouts/SectionProduct";
import Spacer from "../Layouts/Spacer";

const LandPage = () => {
  return (
    <>
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
