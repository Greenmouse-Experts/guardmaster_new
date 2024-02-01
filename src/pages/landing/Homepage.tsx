import AboutSection from "../../lib/components/landing/homepage/About"
import HeroSlide from "../../lib/components/landing/homepage/HeroSlide"
import InstituteSection from "../../lib/components/landing/homepage/Institute"
import ProgramSection from "../../lib/components/landing/homepage/Program"
import StatFaqSection from "../../lib/components/landing/homepage/StatFaq"

const Homepage = () => {
  return (
    <>
        <HeroSlide/>
        <AboutSection/>
        <ProgramSection/>
        <StatFaqSection/>
        <InstituteSection/>
    </>
  )
}

export default Homepage