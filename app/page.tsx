import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import { features, testimonials } from "@/constant";
import Link from "next/link";


export default function Home() {
  return (
    <MaxWidthWrapper>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
    </MaxWidthWrapper>
  );
}


function HeroSection() {
  return (
    <div className="py-20 md:py-28 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
        Create Engaging Lesson Plans In Seconds
      </h1>
      <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
        Empower your teaching with AI-generated lesson plans tailored to your needs, Save time inspire yourself and your students with creative, engaging content.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/"
          className={buttonVariants()}
        >
          Get Started For Free{" "}
        </Link>
        <Link href="/pricing"
          className={buttonVariants({
            variant: "secondary",
          })}>
          Pricing
          </Link>
      </div>
    </div>
  )
}

function FeaturesSection() {
  return (
  <div className="py-20">
    <h2 className="text-3xl font-bold text-center mb-12">
      Why choose our lesson planer?
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {
        features.map((feature, index) => (
          <Card key={index} className="text-center">
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{feature.description}</p>
            </CardContent>
         </Card>
        ))
      }
    </div>
  </div>
)}


function TestimonialsSection() {
  return (
    <div className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        What are educators saying?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {
          testimonials.map((testimonial, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <CardTitle>{testimonial.name}</CardTitle>
                <CardDescription>{testimonial.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))
        }
      </div>
    </div>
  )
}