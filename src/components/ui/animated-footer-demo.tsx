import Footer from "./animated-footer";

const AnimatedFooterDemo = () => {
  return (
    <Footer
      leftLinks={[
        { href: "/terms", label: "Terms & policies" },
        { href: "/privacy-policy", label: "Privacy policy" },
      ]}
      rightLinks={[
        { href: "/careers", label: "Careers" },
        { href: "/about", label: "About" },
        { href: "/help-center", label: "Help Center" },
      ]}
      copyrightText="MemSub0 2025. All Rights Reserved"
      barCount={23}
    />
  );
};

export { AnimatedFooterDemo };

