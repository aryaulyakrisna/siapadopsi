import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import KesiapanFinancialSection from "../components/KesiapanFinancialSection";
import AlasanSection from "../components/AlasanSection";
import PengetahuanSection from "../components/PengetahuanSection";
import KesiapanLingkunganSection from "../components/KesiapanLingkunganSection";
import KomitmenWaktuSection from "../components/KomitmenWaktuSection";
import CTASection from "../components/CTASection";
import TipsDanDukunganSection from "../components/TipsDanDukunganSection";
import TestSection from "../components/TestSection";
import ResultSection from "../components/ResultSection";
import Footer from "../components/ui/Footer";

const Home: React.FC = () => {
  const [showTest, setShowTest] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState<{
    totalScore: number;
    maxScore: number;
  }>({
    totalScore: 0,
    maxScore: 0,
  });

  const onBack = () => {
    setShowTest(false);
    setShowResult(false);
  };

  const onRestart = () => {
    setShowResult(false);
    setScore({totalScore: 0, maxScore: 0})
  }

  return (
    <div className="min-h-screen">
      <HeroSection />
      <KesiapanLingkunganSection />
      <KomitmenWaktuSection />
      <KesiapanFinancialSection />
      <PengetahuanSection />
      <AlasanSection />
      <TipsDanDukunganSection />
      <CTASection setShowTest={setShowTest} />
      <TestSection onBack={onBack} showTest={showTest} setScore={setScore} setShowResult={setShowResult}/>
      <ResultSection score={score.totalScore} showResult={showResult} maxScore={score.maxScore} onRestart={onRestart} onBack={onBack}/>

      <Footer />
    </div>
  );
};

export default Home;
