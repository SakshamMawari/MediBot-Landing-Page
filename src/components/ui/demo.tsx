import { HeroSection } from "./hero-section-dark"

function HeroSectionDemo() {
  return (
    <HeroSection
      title="Bringing Healthcare to Rural Communities"
      subtitle={{
        regular: "AI-Powered Medical Assistant for",
        gradient: "Rural India",
      }}
      description="Medibot provides instant medical guidance, symptom analysis, and healthcare support to rural communities with limited access to doctors. Get 24/7 medical assistance in your local language with offline capabilities."
      ctaText="Start Your Health Journey"
      ctaHref="/signup"
      bottomVideo={{
        light: "https://mem0-project.b-cdn.net/Hero%20Vid%20(1).mp4",
        dark: "https://mem0-project.b-cdn.net/Hero%20Vid%20(1).mp4",
      }}
      gridOptions={{
        angle: 65,
        opacity: 0.4,
        cellSize: 50,
        lightLineColor: "#4a4a4a",
        darkLineColor: "#2a2a2a",
      }}
    />
  )
}
export { HeroSectionDemo }
