"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import clsx from "clsx"

export function HeroSection() {
  const images = ["p1.jpg", "p2.jpg", "p3.jpg", "p4.jpg"]
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images.length])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      position: "absolute" as const,
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative" as const,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      position: "absolute" as const,
    }),
  }

  const handleDotClick = (idx: number) => {
    if (idx === current) return
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
  }

  return (
    <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-950 dark:via-orange-950 dark:to-yellow-950 text-amber-900 dark:text-amber-100 overflow-hidden">
      <div className="container mx-auto px-4 py-12 lg:py-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-12 items-center">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl lg:text-6xl font-bold leading-tight text-amber-900 dark:text-amber-100"
              >
                Artisan Haven
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg lg:text-xl text-amber-700 dark:text-amber-200 max-w-md"
              >
                Discover unique, handcrafted treasures made with love and care. Each piece tells a story of tradition and creativity.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="bg-amber-600 dark:bg-amber-700 text-white hover:bg-amber-700 dark:hover:bg-amber-800 border-2 border-amber-600 dark:border-amber-700">
                <Link href="/products">
                  Explore Crafts
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-amber-600 dark:border-amber-400 text-amber-600 dark:text-amber-400 hover:bg-amber-600 dark:hover:bg-amber-400 hover:text-white dark:hover:text-amber-950 bg-transparent"
              >
                <Link href="/categories">Browse Categories</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex items-center space-x-8 text-sm"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-600 dark:bg-amber-400 rounded-full"></div>
                <span className="text-amber-700 dark:text-amber-200">Handmade Quality</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-600 dark:bg-amber-400 rounded-full"></div>
                <span className="text-amber-700 dark:text-amber-200">Artisan Stories</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-600 dark:bg-amber-400 rounded-full"></div>
                <span className="text-amber-700 dark:text-amber-200">Worldwide Shipping</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section - Enhanced Image Carousel */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="relative w-full flex flex-col items-center"
          >
            <div className="relative w-full aspect-square max-w-[500px] overflow-hidden rounded-3xl shadow-2xl border-4 border-amber-200 dark:border-amber-800">
              <AnimatePresence custom={direction} mode="popLayout">
                <motion.div
                  key={images[current]}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <div className="relative w-full h-full overflow-hidden rounded-3xl">
                    <img
                      src={images[current]}
                      alt={`Handcrafted Product ${current + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 dark:from-amber-950/40 to-transparent pointer-events-none" />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Carousel Navigation Arrows */}
              <button
                onClick={() => handleDotClick((current - 1 + images.length) % images.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-amber-900/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white dark:hover:bg-amber-900 transition-all duration-300 group"
              >
                <svg className="w-6 h-6 text-amber-600 dark:text-amber-300 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => handleDotClick((current + 1) % images.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-amber-900/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white dark:hover:bg-amber-900 transition-all duration-300 group"
              >
                <svg className="w-6 h-6 text-amber-600 dark:text-amber-300 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Enhanced Dot Indicators */}
            <div className="flex mt-6 space-x-3 bg-white/50 dark:bg-amber-900/50 px-4 py-2 rounded-full backdrop-blur-sm">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={clsx(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    current === idx
                      ? "bg-amber-600 dark:bg-amber-400 scale-125 shadow-lg"
                      : "bg-amber-300 dark:bg-amber-700 hover:scale-110"
                  )}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
