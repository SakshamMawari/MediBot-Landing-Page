import { Heading, PricingWrapper, Price, Paragraph } from "./aniamted-pricing-cards";

export function AnimatedPricingCardsDemo() {
  return (
    <div className={'h-[600px] w-full flex items-center justify-center px-4'}>
      <PricingWrapper 
        imageUrl="/image-2.jpeg"
        imageAlt="Your custom image"
      >
        <div className="text-white/90 text-4xl md:text-5xl lg:text-6xl font-geist font-light tracking-tight">
          Memory retention
        </div>
      </PricingWrapper>
    </div>
  );
}
