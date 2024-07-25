import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { MailingList } from "./components/mailining-list";
import { Testimonials } from "./components/testimonials";
import { Button } from "@/components/ui/button";

export default function Landing() {
  const heroProps = {
    title: (
      <>
        Learning like <span className="text-blue-600">Mr. Beast</span>
      </>
    ),
    subTitle: <>Build your skills anywhere on mobile.</>,
    CTA: (
      <Button size="lg" className="rounded-lg">
        <strong>Get Started</strong>
      </Button>
    ),
    splashUrl: `bg-[url('/images/level6.png')]`,
  };

  return (
    <div className="space-y-20">
      <Hero {...heroProps} />
      <Testimonials />
      {/* <MailingList /> */}
      <Footer />
    </div>
  );
}
