"use client"
import './globals.css'
import type React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MountainIcon } from "@/components/ui/mountain-icon"
import dynamic from 'next/dynamic'


const HeroImages = dynamic(() => import('@/components/ui/hero-images').then((mod) => mod.HeroImages), { ssr: false })

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="/" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">open-bnb</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Pricing
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
          <Link href="/login" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Sign In
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Create a stunning vacation rental website in minutes.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    open-bnb is the easiest way to build a professional website for your vacation rental. No coding
                    required.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/dashboard"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-purple-600 px-8 text-sm font-medium text-purple-50 shadow transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-500 disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                  <Link
                    href="#features"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="relative w-full h-full"> {/* Container for animated hero images */}
                {/* First animated hero image */}
                <Image
                  src="/images/IMG_6971.jpeg"
                  width="550"
                  height="550"
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square animate-float"
                />
                {/* Second animated hero image with a delay */}
                <Image
                  src="/images/IMG_6976.jpeg"
                  width="550"
                  height="550"
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square animate-float-delay-1"
                />
                {/* Third animated hero image with a longer delay */}
                <Image
                  src="/images/IMG_2489.jpeg"
                  width="550"
                  height="550"
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square animate-float-delay-2"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Features Section: Enhanced styling for better visual appeal and readability. */}
        <section id="features" className="w-full py-16 md:py-24 lg:py-32 bg-purple-100"> {/* Increased vertical padding and added background color */}
          <div className="container px-4 md:px-6"> {/* Consistent container padding */}
            <div className="flex flex-col items-center justify-center space-y-6 text-center"> {/* Increased space-y for better element separation */}
              <div className="space-y-4"> {/* Adjusted space-y */}
                <div className="inline-block rounded-lg bg-purple-500 px-4 py-1 text-sm font-semibold text-white"> {/* Styled as a primary badge */}
                  Key Features
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-gray-900"> {/* Enhanced title styling */}
                  Everything you need to manage your rental.
                </h2>
                <p className="max-w-[900px] text-lg text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"> {/* Adjusted font size and text color */}
                  From stunning photo galleries to seamless booking and payment processing, open-bnb has you covered.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16"> {/* Increased gap and vertical padding */}
              <Image
                src="/images/image.png"
                width="550"
                height="310"
                                alt="Feature"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last shadow-lg" /* Added shadow and rounded corners */
              />
              <div className="flex flex-col justify-center space-y-6"> {/* Increased space-y */}
                <ul className="grid gap-8"> {/* Increased gap between list items */}
                  <li>
                    <div className="grid gap-2"> {/* Adjusted space-y */}
                      <h3 className="text-xl font-bold text-gray-900">Beautiful Templates</h3> {/* Adjusted font color */}
                      <p className="text-muted-foreground text-base"> {/* Adjusted font size */}
                        Choose from a variety of professionally designed templates to showcase your property.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-2"> {/* Adjusted space-y */}
                      <h3 className="text-xl font-bold text-gray-900">Easy Content Management</h3> {/* Adjusted font color */}
                      <p className="text-muted-foreground text-base"> {/* Adjusted font size */}
                        Update your photos, descriptions, and availability with our intuitive dashboard.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-2"> {/* Adjusted space-y */}
                      <h3 className="text-xl font-bold text-gray-900">Seamless Booking</h3> {/* Adjusted font color */}
                      <p className="text-muted-foreground text-base"> {/* Adjusted font size */}
                        Accept online bookings and payments with our secure and reliable system.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Pricing Section: Enhanced styling for a clearer and more engaging presentation of pricing plans. */}
        <section id="pricing" className="w-full py-16 md:py-24 lg:py-32 bg-white"> {/* Increased vertical padding and set background to white */}
          <div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6"> {/* Increased gap between elements */}
            <div className="space-y-4"> {/* Adjusted space-y */}
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-gray-900"> {/* Enhanced title styling */}
                Affordable pricing for every host.
              </h2>
              <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"> {/* Adjusted max-width, font size, and text color */}
                Choose the plan that's right for you. Get started for free, and upgrade when you're ready.
              </p>
            </div>
            <div className="mx-auto w-full max-w-2xl space-y-6"> {/* Increased max-width and space-y */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Changed to 1 column on mobile, 2 on medium screens, increased gap */}
                <div className="flex flex-col items-center justify-center rounded-lg border p-8 shadow-lg transition-transform duration-300 hover:scale-105"> {/* Added shadow, increased padding, and hover effect */}
                  <div className="space-y-3 text-center"> {/* Adjusted space-y */}
                    <h3 className="text-3xl font-bold text-gray-900">Hobby</h3> {/* Increased font size and color */}
                    <p className="text-muted-foreground text-base">For personal projects and small teams.</p> {/* Adjusted font size */}
                  </div>
                  <div className="my-8"> {/* Increased vertical margin */}
                    <span className="text-5xl font-bold text-gray-900">$19</span> {/* Increased font size and color */}
                    <span className="text-muted-foreground text-xl">/mo</span> {/* Increased font size */}
                  </div>
                  <Button size="lg" className="w-full py-3 text-lg bg-purple-600 hover:bg-purple-700 text-white">Get Started</Button> {/* Increased button size and font size */}
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg border p-8 shadow-lg transition-transform duration-300 hover:scale-105"> {/* Added shadow, increased padding, and hover effect */}
                  <div className="space-y-3 text-center"> {/* Adjusted space-y */}
                    <h3 className="text-3xl font-bold text-gray-900">Pro</h3> {/* Increased font size and color */}
                    <p className="text-muted-foreground text-base">For growing businesses and professional hosts.</p> {/* Adjusted font size */}
                  </div>
                  <div className="my-8"> {/* Increased vertical margin */}
                    <span className="text-5xl font-bold text-gray-900">$49</span> {/* Increased font size and color */}
                    <span className="text-muted-foreground text-xl">/mo</span> {/* Increased font size */}
                  </div>
                  <Button size="lg" className="w-full py-3 text-lg bg-purple-600 hover:bg-purple-700 text-white">Get Started</Button> {/* Increased button size and font size */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section: Improved styling for the contact form and information. */}
        <section id="contact" className="w-full py-16 md:py-24 lg:py-32 border-t bg-gray-50"> {/* Increased vertical padding and added background color */}
          <div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6"> {/* Increased gap between elements */}
            <div className="space-y-4"> {/* Adjusted space-y */}
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-gray-900">Get in touch.</h2> {/* Enhanced title styling */}
              <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"> {/* Adjusted max-width, font size, and text color */}
                Have a question or want to learn more? We'd love to hear from you.
              </p>
            </div>
            <div className="mx-auto w-full max-w-md space-y-6"> {/* Increased max-width and space-y */}
              <form className="flex flex-col sm:flex-row gap-4"> {/* Changed to flex-col on mobile, flex-row on sm screens, increased gap */}
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-lg flex-1 px-5 py-3 rounded-md border border-input focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <Button type="submit" className="px-8 py-3 text-lg bg-purple-600 hover:bg-purple-700 text-white">Sign Up</Button> {/* Increased button size and font size */}
              </form>
              <p className="text-sm text-muted-foreground"> {/* Adjusted font size */}
                Sign up to get notified when we launch.
                {/* Link to the Terms of Service page. */}
                <Link href="/terms-of-service" className="underline underline-offset-2 ml-1" prefetch={false}> {/* Added margin-left */}
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      {/* Footer: Enhanced styling for a more prominent and informative footer. */}
      <footer className="flex flex-col gap-4 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-900 text-white"> {/* Increased vertical padding, added background color, and text color */}
        <p className="text-sm text-gray-400">&copy; 2024 open-bnb. All rights reserved.</p> {/* Adjusted font size and text color */}
        <nav className="sm:ml-auto flex gap-6 sm:gap-8"> {/* Increased gap between navigation items */}
          {/* Link to the Terms of Service page. */}
          <Link href="/terms-of-service" className="text-sm hover:underline underline-offset-4 text-gray-400" prefetch={false}> {/* Adjusted font size and text color */}
            Terms of Service
          </Link>
          {/* Link to the Privacy Policy page. */}
          <Link href="/privacy" className="text-sm hover:underline underline-offset-4 text-gray-400" prefetch={false}> {/* Adjusted font size and text color */}
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}


