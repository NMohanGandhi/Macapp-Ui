
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Comparison from "./components/comparision";
import TeamStructure from "./components/TeamStructure";
import HiringComparison from "./components/HiringComparison";
import Pricing from "./components/Pricing";
import IndustrySection from "./components/IndustrySection";
import FeaturesSection from "./components/FeaturesSection";
import AwardsSection from "./components/AwardsSection";
import TimelineSection from "./components/TimelineSection";
import TechStackSection from "./components/TechStackSection";
import EngagementSection from "./components/EngagementSection";
import ClientsSection from "./components/ClientsSection";
import FinalCTA from "./components/FinalCTA";
import StatsSection from "./components/StatsSection";
import BatchProgress from "./components/BatchProgress";
import TeamsSection from "./components/TeamSection";
import SlotsSection from "./components/SlotSelection";
import JourneySection from "./components/JourneySection";
import ReceiveSection from "./components/RecieveSection";
import DreamTeamSection from "./components/DreamTeamSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Features/>
      <Comparison/>
      <TeamStructure/>
      <HiringComparison/>
      <Pricing/>
      <IndustrySection/>
      <FeaturesSection/>
      <AwardsSection/>
      <TimelineSection/>
      <TechStackSection/>
      <EngagementSection/>
      <ClientsSection/>
      <FinalCTA/>
      <StatsSection/>
      <BatchProgress/>
      <TeamsSection/>
      <SlotsSection/>
      <JourneySection/>
      <ReceiveSection/>
      <DreamTeamSection/>
      <Footer/>
    </div>
  );
}