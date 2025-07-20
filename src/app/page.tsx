import ChatWidget from "./components/ChatWidget";
import CompanyGuarantees from "./components/CompanyGuarantes";
import CompanyStats from "./components/CompanyStats";
import DachkeramikBox from "./components/DachkeramikBox";
import DachkeramikText from "./components/DachkreamikText";
import FAQS from "./components/FAQ";
import Footer from "./components/Footer";
import HeroVideoSequence from "./components/HeroVideoSequence";
import Opinie from "./components/Opinie";
import Productteaser from "./components/ProductsTeaserSeection";
import SectionDivider from "./components/SectionDivider";
import WarumWir from "./components/WarumWir";

export default function Home() {
  return (
    <>
      <HeroVideoSequence />

      <SectionDivider />

      <Productteaser />

      <SectionDivider />

      <WarumWir />

      <SectionDivider />

      <CompanyStats />

      <SectionDivider />

      <Opinie />

      <SectionDivider />

      <CompanyGuarantees />

      <SectionDivider />

      <FAQS />

      <SectionDivider />

      <Footer />

      <ChatWidget /> {/* ← mini FAQ czat w prawym dolnym rogu */}
    </>
  );
}
