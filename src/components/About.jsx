import Contact from "./Contact";
import AboutMe from "./AboutCard/AboutMe";
import AboutSkills from "./AboutCard/AboutSkills";
import AboutEducation from "./AboutCard/AboutEducation";
import AboutLang from "./AboutCard/AboutLang";
import MotionSection from "./Animation/MotionSection";

export default function About() {
  return (
    <section className="pb-20 pt-20 bg-transparent">
      <div className="container mx-auto px-4 mb-20">
        
        <h2 className="text-3xl font-mono text-[#f1f5f9] mb-10 mt-10">
          <span className="text-[#6366f1]">&gt;</span> about
        </h2>

        <div className="space-y-20">
          
          <MotionSection motionClass="motion-preset-slide-right"><AboutMe /></MotionSection>
          <MotionSection><AboutSkills /></MotionSection>
          <MotionSection motionClass="motion-preset-slide-right"><AboutEducation /></MotionSection>
          <MotionSection><AboutLang /></MotionSection>

        </div>
      </div>

      <Contact />
    </section>
  );
}