"use client"

import type React from "react"

import Image from "next/image"
import { MapPin, Users, Bed, Bath, Home, Mail, Phone, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface Room {
  id: string
  name: string
  description: string
  images: string[]
}

const roomData: Record<string, Room> = {
  "living-room": {
    id: "living-room",
    name: "Living Room",
    description: "Cozy seating area with character details",
    images: ["/images/living-room.png", "/images/fireplace-room.png"],
  },
  "dining-room": {
    id: "dining-room",
    name: "Dining Room",
    description: "Large dining table for family meals",
    images: ["/images/dining-room.png","/images/IMG_0141.jpg"],
  },
  kitchen: {
    id: "kitchen",
    name: "Kitchen",
    description: "Fully equipped with all appliances",
    images: ["/images/kitchen.png", "/images/bedroom.png"],
  },
  "bedroom-1": {
    id: "bedroom-1",
    name: "Bedroom 1 with Ensuite",
    description: "Queen bed with private bathroom",
    images: ["/images/masterbed.png","/images/masbath.png"],
  },
  "bedroom-2": {
    id: "bedroom-2",
    name: "Bedroom 2",
    description: "Double bed",
    images: ["/images/5d9826e0-36ff-4167-a50e-66056e4ae1f9.jpeg"],
  },
  "bathroom-2": {
    id: "bathroom-2",
    name: "Bathroom 2",
    description: "Full bathroom",
    images: ["/images/IMG_0153.jpg"],
  },
  "bedroom-3": {
    id: "bedroom-3",
    name: "Bedroom 3",
    description: "Double bed",
    images: ["/images/7b1b071d_original.jpg"],
  },
  "bedroom-4": {
    id: "bedroom-4",
    name: "Bedroom 4",
    description: "Double bed",
    images: ["/images/6d5975de-5659-467c-ac01-a123d3e76eae.jpg"],
  },
  "bedroom-5": {
    id: "bedroom-5",
    name: "Bedroom 5 with Balcony",
    description: "Queen bed with private balcony",
    images: ["/images/f4ecc2be-32b0-4217-98dc-bd7b112627db.jpg","/images/balcony.png"],
  },
  "bathroom-3": {
    id: "bathroom-3",
    name: "Bathroom 3",
    description: "Full bathroom",
    images: ["/images/PHOTO-2025-08-02-09-13-44.jpg"],
  },
  "front-yard": {
    id: "front-yard",
    name: "Front Yard",
    description: "Craftsman character home with original details",
    images: ["/images/bb94dd99-f8e1-4d09-9f62-867b97158051.jpeg","/images/IMG_2489.jpeg", "/images/IMG_2559.jpeg","/images/IMG_6952.jpeg"],
  },
  "back-yard": {
    id: "back-yard",
    name: "Back Yard",
    description: "Play area for kids and outdoor space",
    images: ["/images/IMG_6976.jpeg","/images/IMG_6971.jpeg"],
  },
  "driveway": {
    id: "driveway",
    name: "Parking",
    description: "Driveway for 1-2 vehicles plus street parking",
    images: ["/image.png"],
  },
}

export default function SitePreview({ siteName, siteDescription }: { siteName: string, siteDescription: string }) {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openCarousel = (roomId: string) => {
    const room = roomData[roomId as keyof typeof roomData]
    if (room) {
      setSelectedRoom(room)
      setCurrentImageIndex(0)
    }
  }

  const closeCarousel = () => {
    setSelectedRoom(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedRoom && selectedRoom.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedRoom.images.length)
    }
  }

  const prevImage = () => {
    if (selectedRoom && selectedRoom.images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedRoom.images.length) % selectedRoom.images.length)
    }
  }

  const RoomCard = ({
    roomId,
    title,
    description,
    mainImage,
    icon,
  }: {
    roomId: string
    title: string
    description: string
    mainImage?: string
    icon: React.ReactNode
  }) => {
    const room = roomData[roomId as keyof typeof roomData]
    const hasImages = room && room.images.length > 0

    return (
      <Card className="shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105"> 
        <CardContent className="p-0"> 
          {mainImage ? (
            <Image
              src={mainImage || "/placeholder.svg"}
              alt={title}
              width={400}
              height={200}
              className="w-full h-48 object-cover rounded-t-xl mb-4" 
            />
          ) : (
            <div className="w-full h-48 bg-gray-200 rounded-t-xl flex items-center justify-center mb-4"> 
              <div className="text-center text-gray-500">
                {icon}
                <p className="text-sm mt-2">{title}</p>
              </div>
            </div>
          )}
          <div className="p-6"> 
            <h4 className="font-semibold text-gray-900 mb-2 text-lg">{title}</h4> 
            <p className="text-gray-600 text-sm mb-4">{description}</p>
            {hasImages && (
              <Button variant="outline" size="sm" onClick={() => openCarousel(roomId)} className="w-full">
                See More ({room.images.length} photos)
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Home className="h-6 w-6 text-blue-600" />
              <span className="text-lg font-semibold text-gray-900">{siteName}</span>
            </div>
            <div className="flex space-x-8">
              {/* Link to the Contact section within the page */}
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </a>
              {/* Link to the Availability section within the page */}
              <a href="#availability" className="text-gray-700 hover:text-blue-600 transition-colors">
                Availability
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Carousel Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full">
            <button onClick={closeCarousel} className="absolute top-4 right-4 text-white hover:text-gray-300 z-10">
              <X className="h-8 w-8" />
            </button>

            <div className="relative">
              <Image
                src={selectedRoom.images[currentImageIndex] || "/placeholder.svg"}
                alt={`${selectedRoom.name} - Image ${currentImageIndex + 1}`}
                width={800}
                height={600}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />

              {selectedRoom.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
                  >
                    <ChevronRight className="h-8 w-8" />
                  </button>
                </>
              )}
            </div>

            <div className="text-center mt-4 text-white">
              <h3 className="text-xl font-semibold">{selectedRoom.name}</h3>
              <p className="text-gray-300">{selectedRoom.description}</p>
              {selectedRoom.images.length > 1 && (
                <p className="text-sm text-gray-400 mt-2">
                  {currentImageIndex + 1} of {selectedRoom.images.length}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-24 md:pb-20 bg-gray-50"> {/* Added padding and background for visual separation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Increased max-width for more space */}
          {/* Hero Image */}
          <div className="mb-10 rounded-xl overflow-hidden shadow-xl"> {/* Increased margin-bottom, added rounded-xl, overflow-hidden, and shadow-xl */}
            <img
              src="/images/IMG_2559.jpeg"
              alt="Hero Photo - Exterior View"
              className="w-full h-[500px] object-cover" {/* Changed height to a fixed value for consistency */}
            />
          </div>
          {/* Title and Info */}
          <div className="text-center mb-16"> {/* Increased margin-bottom */}
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">{siteName}</h1> {/* Increased font size, weight, and line height */}
            <div className="flex items-center justify-center mb-6 text-gray-700"> {/* Adjusted margin-bottom and text color */}
              <MapPin className="h-6 w-6 text-blue-600 mr-2" /> {/* Increased icon size and changed color */}
              <span className="text-xl md:text-2xl font-medium">{siteDescription}</span> {/* Increased font size and weight */}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-gray-600 text-lg"> {/* Added flex-wrap and gap for better responsiveness */}
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-blue-500" /> {/* Added text color to icons */}
                <span>10 guests</span>
              </div>
              <div className="flex items-center">
                <Bed className="h-5 w-5 mr-2 text-blue-500" />
                <span>5 bedrooms</span>
              </div>
              <div className="flex items-center">
                <Bath className="h-5 w-5 mr-2 text-blue-500" />
                <span>3 bathrooms</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exterior Section */}
      <section className="py-16 md:py-24 bg-gray-50"> {/* Increased vertical padding for better visual separation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Adjusted max-width for consistency */}
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16">Exterior</h2> {/* Enhanced title styling */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Increased gap between cards */}
            <RoomCard
              roomId="front-yard"
              title="Front Yard"
              description="Craftsman character home with original details"
              mainImage="/images/bb94dd99-f8e1-4d09-9f62-867b97158051.jpeg"
              icon={<Home className="h-8 w-8" />}
            />
            <RoomCard
              roomId="back-yard"
              title="Back Yard"
              description="Play area for kids and outdoor space"
              mainImage="/images/IMG_6971.jpeg"
              icon={<Home className="h-8 w-8" />}
            />
            <RoomCard
              roomId="driveway"
              title="Parking"
              description="Driveway for 1-2 vehicles plus street parking"
              mainImage="/image.png"
              icon={<Home className="h-8 w-8" />}
            />
          </div>
        </div>
      </section>

      {/* Interior Section */}
      <section className="py-16 md:py-24"> {/* Increased vertical padding for better visual separation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Adjusted max-width for consistency */}
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16">Interior</h2> {/* Enhanced title styling */}

          {/* Floor 1 */}
          <div className="mb-16"> {/* Consistent margin-bottom */}
            <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">Floor 1</h3> {/* Enhanced subtitle styling */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Increased gap between cards */}
              <RoomCard
                roomId="living-room"
                title="Living Room"
                description="Cozy seating area with character details"
                mainImage="/images/living-room.png"
                icon={<Home className="h-8 w-8" />}
              />

              <RoomCard
                roomId="dining-room"
                title="Dining Room"
                description="Large dining table for family meals"
                mainImage="/images/dining-room.png"
                icon={<Home className="h-8 w-8" />}
              />

              <RoomCard
                roomId="kitchen"
                title="Kitchen"
                description="Fully equipped with all appliances"
                mainImage="/images/kitchen.png"
                icon={<Home className="h-8 w-8" />}
              />

              <RoomCard
                roomId="bedroom-1"
                title="Bedroom 1 with Ensuite"
                description="Queen bed with private bathroom"
                mainImage="/images/masterbed.png"
                icon={<Bed className="h-8 w-8" />}
              />

              <RoomCard
                roomId="bedroom-2"
                title="Bedroom 2"
                description="Double bed"
                mainImage="/images/5d9826e0-36ff-4167-a50e-66056e4ae1f9.jpeg"
                icon={<Bed className="h-8 w-8" />}
              />

              <RoomCard
                roomId="bathroom-2"
                title="Bathroom 2"
                description="Full bathroom"
                mainImage="/images/IMG_0153.jpg"
                icon={<Bath className="h-8 w-8" />}
              />
            </div>
          </div>

          {/* Floor 2 */}
          <div className="mt-16"> {/* Added margin-top for visual separation from Floor 1 */}
            <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">Floor 2</h3> {/* Enhanced subtitle styling */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Increased gap between cards */}
              <RoomCard
                roomId="bedroom-3"
                title="Bedroom 3"
                description="Queen bed"
                mainImage="/images/7b1b071d_original.jpg"
                icon={<Bed className="h-8 w-8" />}
              />

              <RoomCard
                roomId="bedroom-4"
                title="Bedroom 4"
                description="Queen bed"
                mainImage="/images/6d5975de-5659-467c-ac01-a123d3e76eae.jpg"
                icon={<Bed className="h-8 w-8" />}
              />

              <RoomCard
                roomId="bedroom-5"
                title="Bedroom 5 with Balcony"
                description="Queen bed with private balcony"
                mainImage="/images/f4ecc2be-32b0-4217-98dc-bd7b112627db.jpg"
                icon={<Bed className="h-8 w-8" />}
              />

              <RoomCard
                roomId="bathroom-3"
                title="Bathroom 3"
                description="Full bathroom"
                mainImage="/images/PHOTO-2025-08-02-09-13-44.jpg"
                icon={<Bath className="h-8 w-8" />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-16 md:py-24"> {/* Increased vertical padding */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Adjusted max-width */}
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16">Contact Us</h2> {/* Enhanced title styling */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Increased gap between cards */}
            <Card className="shadow-lg rounded-xl"> {/* Added shadow and rounded corners */}
              <CardContent className="p-8 text-center"> {/* Consistent padding */}
                <Mail className="h-16 w-16 text-blue-600 mx-auto mb-6" /> {/* Increased icon size and margin-bottom */}
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Email</h3> {/* Increased font size and margin-bottom */}
                <p className="text-gray-700 text-lg">drewatupper@gmail.com</p> {/* Adjusted text color and size */}
                <p className="text-sm text-gray-500 mt-3">We typically respond within 24 hours</p> {/* Adjusted margin-top */}
              </CardContent>
            </Card>

            <Card className="shadow-lg rounded-xl"> {/* Added shadow and rounded corners */}
              <CardContent className="p-8 text-center"> {/* Consistent padding */}
                <Phone className="h-16 w-16 text-blue-600 mx-auto mb-6" /> {/* Increased icon size and margin-bottom */}
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Phone</h3> {/* Increased font size and margin-bottom */}
                <p className="text-gray-700 text-lg">(778) 676-8166</p> {/* Adjusted text color and size */}
                <p className="text-sm text-gray-500 mt-3">Call or text anytime</p> {/* Adjusted margin-top */}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Host Section */}
            <section className="py-16 md:py-24 bg-white"> {/* Increased vertical padding */}
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Adjusted max-width */}
                <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16">About Your Host</h2> {/* Enhanced title styling */}
                <div className="flex flex-col md:flex-row items-center gap-12"> {/* Increased gap between elements */}
                  <div className="md:w-1/3 text-center">
                    <Image
                      src="/images/df7d5b28-53ca-44a1-bc64-3e532d198b42(1).jpg"
                      alt="Host Photo"
                      width={200}
                      height={200}
                      className="rounded-full mx-auto"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-3xl font-semibold text-gray-900 mb-4">Drew Tupper</h3> {/* Increased font size */}
                    <p className="text-gray-700 mb-6 leading-relaxed"> {/* Adjusted text color, margin-bottom, and line height */}
                      I am an executive coach, husband, dad, enjoyer of pickleball, gardening, rock climbing and travelling. I love personal growth, good food, and beautiful places. I live on Vancouver Island. The best place in Canada. We have an old home in Victoria which I have lovingly restored. Check out the photos. I have lived and worked in Japan, Italy and the Caribbean (Grenada). I look forward to meeting you. Drew 
                    </p>
                    <Button variant="outline" asChild className="px-8 py-3 text-lg"> {/* Added padding and increased font size for button */}
                      {/* External link to Drew's personal website */}
                      <a href="https://drewtupper.com" target="_blank" rel="noopener noreferrer">Drew's Website</a>
                    </Button>
                  </div>
                </div>
              </div>
            </section>

      {/* Availability Section */}
      <section id="availability" className="py-16 md:py-24 bg-gray-50"> {/* Increased vertical padding and added background */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Adjusted max-width */}
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16">Check Availability</h2> {/* Enhanced title styling */}
          <p className="text-center text-gray-700 mb-12 text-xl"> {/* Adjusted text color, margin-bottom, and font size */}
            View our live availability calendar below. Contact us directly to book your stay.
          </p>
          <div className="flex justify-center">
            <div className="w-full max-w-5xl"> {/* Increased max-width for iframe container */}
              <iframe
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FVancouver&showPrint=0&src=MjBiY2FmYmQ0NDU5YmFkZDMwOWZiZWQxNWVlZGEyZGRjNDYwZGM1OWMwZGM4ZmQzMjNiZTBlMTdjYjBkYzRhYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23f6bf26"
                style={{ border: "solid 1px #777" }}
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
                className="rounded-lg shadow-xl" {/* Added shadow */}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Registration Details */}
      <section className="bg-gray-100 py-12 md:py-16"> {/* Increased vertical padding */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Adjusted max-width */}
          <div className="text-center text-base text-gray-700 space-y-2"> {/* Adjusted font size and text color */}
            <p>
              <strong>STR Licence #:</strong> 00040814
            </p>
            <p>
              <strong>Municipal Registration:</strong> 40814
            </p>
            <p>
              <strong>Provincial Registration:</strong> H413738379
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 md:py-20"> {/* Increased vertical padding */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> {/* Adjusted max-width */}
          <div className="flex items-center justify-center space-x-3 mb-6"> {/* Increased space-x and margin-bottom */}
            <Home className="h-8 w-8 text-blue-400" /> {/* Increased icon size and changed color */}
            <span className="text-2xl font-bold">Cook St Village Craftsman Home</span> {/* Increased font size */}
          </div>
          <p className="text-gray-400 mb-6 text-lg">Your perfect family getaway in Victoria's best neighbourhood</p> {/* Adjusted font size and margin-bottom */}
          <div className="text-gray-400 space-y-2 text-base"> {/* Adjusted font size and space-y */}
            <p>Cook St Village, Victoria, BC</p>
            <p>Email: drewatupper@gmail.com | Phone: (778) 676-8166</p>
          </div>
          <div className="border-t border-gray-700 mt-10 pt-10 text-gray-500 text-sm"> {/* Adjusted border color, margin-top, padding-top, and text color */}
            <p>&copy; 2025 Cook St Village Craftsman Home. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
    
  )
}
    