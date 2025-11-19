'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const galleryItems = [
  {
    id: 1,
    before: '/images/before-after/1-before.jpg',
    after: '/images/before-after/1-after.jpg',
    title: 'Reparație caroserie',
  },
  {
    id: 2,
    before: '/images/before-after/2-before.jpg',
    after: '/images/before-after/2-after.jpg',
    title: 'Restaurare faruri',
  },
  {
    id: 3,
    before: '/images/before-after/3-before.jpg',
    after: '/images/before-after/3-after.jpg',
    title: 'Reparație motor',
  },
]

export default function BeforeAfterGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const currentItem = galleryItems[currentIndex]

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value))
  }

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length)
    setSliderPosition(50)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
    setSliderPosition(50)
  }

  return (
    <section className="py-20 bg-dark">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
            Înainte și după
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Vezi rezultatele lucrărilor noastre
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-light/5 rounded-lg overflow-hidden border border-secondary/20">
            {/* Before/After Slider */}
            <div className="relative aspect-video">
              {/* After Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${currentItem.after})`,
                }}
              ></div>

              {/* Before Image with Clip */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${currentItem.before})`,
                  clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                }}
              ></div>

              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-accent cursor-ew-resize z-10"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>

              {/* Slider Input (hidden but functional) */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
              />
            </div>

            {/* Navigation */}
            <div className="p-4 bg-light/5 flex items-center justify-between">
              <button
                onClick={prevSlide}
                className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
                aria-label="Imaginea anterioară"
              >
                <ChevronLeft className="text-accent" size={24} />
              </button>

              <div className="text-center">
                <h3 className="text-light font-semibold">{currentItem.title}</h3>
                <p className="text-secondary text-sm">
                  {currentIndex + 1} / {galleryItems.length}
                </p>
              </div>

              <button
                onClick={nextSlide}
                className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
                aria-label="Imaginea următoare"
              >
                <ChevronRight className="text-accent" size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

