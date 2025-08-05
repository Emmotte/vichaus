"use client"

import Image from "next/image"

export function HeroImages() {
  return (
    <div className="relative w-full h-full">
      <Image
        src="/images/herosite.png"
        width="550"
        height="550"
        alt="Hero"
        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square animate-float"
      />
      <Image
        src="/images/roomshowcase.png"
        width="550"
        height="550"
        alt="Hero"
        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square animate-float-delay-1"
      />
      <Image
        src="/images/contact&about-hoost.png"
        width="550"
        height="550"
        alt="Hero"
        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square animate-float-delay-2"
      />
    </div>
  )
}
