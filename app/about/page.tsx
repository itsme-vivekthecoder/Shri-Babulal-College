import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  AboutHeroSection,
  MissionVisionSection,
  HistoryTimelineSection,
  LeadershipTeamSection,
  AchievementsSection,
} from "@/components/home/AboutPageSections";

export const metadata: Metadata = {
  title: "About Us | Shri Babulal College",
  description: "Learn about Shri Babulal College's mission, vision, history, and leadership team.",
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutHeroSection />
      <MissionVisionSection />
      <HistoryTimelineSection />
      <AchievementsSection />
      <LeadershipTeamSection />
      <Footer />
    </main>
  );
}
