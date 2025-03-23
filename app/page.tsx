"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronDown, Instagram, Facebook, Twitter, Heart, Sparkles, Cake, X } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { toast, useToast } from "@/hooks/use-toast"

export default function Home() {
  // Refs for scroll animations
  const featuredRef = useRef(null)
  const chocolatesRef = useRef(null)
  const cakesRef = useRef(null)
  const pastriesRef = useRef(null)
  
  // Add state for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Simple parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const parallaxElements = document.querySelectorAll(".parallax")

      parallaxElements.forEach((element) => {
        const speed = element.getAttribute("data-speed") || 0.2
        element.style.transform = `translateY(${scrollY * speed}px)`
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMobileMenuOpen])

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      {/* Floating decorative elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(15)].map((_, i) => {
          // Pre-generated values for consistent rendering
          const decorativeElements = [
            { width: 80, height: 82, top: 34, left: 26, duration: 15, delay: 2 },
            { width: 80, height: 90, top: 34, left: 52, duration: 19, delay: 1.7 },
            { width: 68, height: 107, top: 48, left: 15, duration: 15, delay: 0.1 },
            { width: 127, height: 90, top: 37, left: 54, duration: 18, delay: 2.5 },
            { width: 110, height: 89, top: 67, left: 79, duration: 13, delay: 3.6 },
            { width: 70, height: 65, top: 48, left: 94, duration: 16, delay: 4.3 },
            { width: 86, height: 133, top: 83, left: 42, duration: 19, delay: 4.2 },
            { width: 73, height: 133, top: 70, left: 63, duration: 11, delay: 1 },
            { width: 70, height: 145, top: 83, left: 71, duration: 16, delay: 1.5 },
            { width: 98, height: 146, top: 93, left: 43, duration: 17, delay: 4 },
            { width: 98, height: 89, top: 79, left: 54, duration: 18, delay: 3.9 },
            { width: 92, height: 60, top: 74, left: 12, duration: 14, delay: 0.8 },
            { width: 109, height: 73, top: 27, left: 18, duration: 17, delay: 3.1 },
            { width: 141, height: 119, top: 36, left: 39, duration: 13, delay: 3.7 },
            { width: 79, height: 142, top: 80, left: 44, duration: 19, delay: 3.5 }
          ];

          const element = decorativeElements[i];
          return (
            <div
              key={i}
              className="absolute rounded-full bg-pink-200/30 dark:bg-pink-500/10 animate-pulse"
              style={{
                width: `${element.width}px`,
                height: `${element.height}px`,
                top: `${element.top}%`,
                left: `${element.left}%`,
                animationDuration: `${element.duration}s`,
                animationDelay: `${element.delay}s`,
              }}
            />
          );
        })}
      </div>

      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-pink-200 dark:border-pink-800">
        <div className="container flex h-16 items-center justify-between relative mobile-menu-container">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center overflow-hidden">
              <Image src="/logo.jpeg" alt="Choco Heaven" width={100} height={100} className="rounded-full" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
              Choco Heaven
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#featured" className="text-sm font-medium transition-colors hover:text-pink-500 relative group">
              Featured
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="#chocolates"
              className="text-sm font-medium transition-colors hover:text-pink-500 relative group"
            >
              Chocolates
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#cakes" className="text-sm font-medium transition-colors hover:text-pink-500 relative group">
              Cakes
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#pastries" className="text-sm font-medium transition-colors hover:text-pink-500 relative group">
              Pastries
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-pink-500 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 transition-all group-hover:w-full"></span>
            </Link>
          </nav>
          <Button className="hidden md:flex bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition-opacity">
            <Link className="flex items-center" href="/#contact">Order Now <Sparkles className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 p-4 bg-white/90 dark:bg-black/90 backdrop-blur-md border border-pink-200 dark:border-pink-800 rounded-lg shadow-lg md:hidden"
            >
              <nav className="flex flex-col gap-4">
                <Link 
                  href="#featured" 
                  className="text-sm font-medium transition-colors hover:text-pink-500 px-4 py-2 rounded-md hover:bg-pink-50 dark:hover:bg-pink-950/30"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Featured
                </Link>
                <Link 
                  href="#chocolates" 
                  className="text-sm font-medium transition-colors hover:text-pink-500 px-4 py-2 rounded-md hover:bg-pink-50 dark:hover:bg-pink-950/30"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Chocolates
                </Link>
                <Link 
                  href="#cakes" 
                  className="text-sm font-medium transition-colors hover:text-pink-500 px-4 py-2 rounded-md hover:bg-pink-50 dark:hover:bg-pink-950/30"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Cakes
                </Link>
                <Link 
                  href="#pastries" 
                  className="text-sm font-medium transition-colors hover:text-pink-500 px-4 py-2 rounded-md hover:bg-pink-50 dark:hover:bg-pink-950/30"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pastries
                </Link>
                <Link 
                  href="#contact" 
                  className="text-sm font-medium transition-colors hover:text-pink-500 px-4 py-2 rounded-md hover:bg-pink-50 dark:hover:bg-pink-950/30"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition-opacity mt-2">
                  <Link 
                    className="flex items-center justify-center w-full" 
                    href="/#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Order Now <Sparkles className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </nav>
            </motion.div>
          )}
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-pink-200 via-purple-100 to-blue-200">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              }}
            ></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container relative z-10 px-4 md:px-6"
          >
            <div className="flex flex-col items-center gap-4 text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-block"
              >
                <span className="inline-block bg-white dark:bg-black px-4 py-1 rounded-full text-sm font-medium text-pink-600 dark:text-pink-400 shadow-md">
                  <Sparkles className="inline-block mr-1 h-3 w-3" /> Handcrafted with Love
                </span>
              </motion.div>
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-display"
              >
                <span className="block bg-gradient-to-r from-pink-600 via-purple-500 to-indigo-400 text-transparent bg-clip-text">
                  Indulge in Sweet
                </span>
                <span className="block bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600 text-transparent bg-clip-text">
                  Perfection
                </span>
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                className="max-w-[700px] text-lg text-gray-700 dark:text-gray-300 md:text-xl"
              >
                Discover our handcrafted chocolates, cakes, and pastries made with the finest ingredients and passion.
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.7 }}
                className="flex flex-col gap-2 min-[400px]:flex-row"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition-opacity shadow-lg shadow-pink-500/20"
                
                >
                  <Link href="/#featured">Explore Our Collection</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-pink-300 dark:border-pink-700 hover:bg-pink-50 dark:hover:bg-pink-950/30"
                >
                  <Link className="flex items-center" href="/#contact">Order Custom Desserts <Heart className="ml-2 h-4 w-4" /></Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Decorative wave divider */}
          <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-auto">
              <path
                fill="#fff"
                fillOpacity="1"
                d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        </section>

        <section id="featured" ref={featuredRef} className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-white dark:bg-black"></div>
          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center justify-center gap-4 text-center"
            >
              <div className="space-y-2">
                <span className="inline-block bg-pink-100 dark:bg-pink-900/30 px-3 py-1 rounded-full text-sm font-medium text-pink-600 dark:text-pink-400">
                  <Cake className="inline-block mr-1 h-3 w-3" /> Featured Delights
                </span>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text font-display">
                  Our Most Popular Treats
                </h2>
                <p className="max-w-[700px] text-gray-600 dark:text-gray-400 md:text-xl/relaxed">
                  Our most popular and seasonal creations that will satisfy your sweet cravings.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-6xl">
                {featuredItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                    className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-950 shadow-xl shadow-pink-200/20 dark:shadow-pink-900/10"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="aspect-square overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={400}
                        height={400}
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4 flex flex-col h-[200px]">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 flex-1 overflow-y-auto">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-pink-600 dark:text-pink-400">{item.price}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="gap-1 text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 hover:bg-pink-50 dark:hover:bg-pink-950/30"
                        >
                          Order <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section
          id="chocolates"
          ref={chocolatesRef}
          className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden"
        >
          {/* Tilted background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-950/40 dark:to-pink-950/40 -skew-y-3 transform origin-top-right"></div>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23a855f7' fillOpacity='0.1' fillRule='evenodd'/%3E%3C/svg%3E\")",
            }}
          ></div>

          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2 space-y-4"
              >
                <span className="inline-block bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full text-sm font-medium text-purple-600 dark:text-purple-400">
                  Choco Heaven
                </span>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text font-display">
                  Brownies
                </h2>
                <p className="text-gray-600 dark:text-gray-400 md:text-xl/relaxed">
                  Indulge in our decadent brownies - rich, fudgy dessert bars crafted with premium chocolate, creamy butter, and the finest ingredients. Each bite delivers an intense chocolate experience, with a perfectly crisp top and an irresistibly gooey center. Choose from our luxurious selection including classic dark chocolate, velvety Nutella swirl, caramelized Biscoff, creamy white chocolate chunks, salted caramel, and double chocolate chip. Our brownies are baked fresh daily to ensure the ultimate chocolate lover's experience.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/20">
                    <Link href="/#contact">View Collection</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-purple-300 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-950/30"
                  >
                    <Link href="/#contact">Learn About Our Process</Link>
                  </Button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2 grid grid-cols-2 gap-4"
              >
                {[1, 2, 3, 4].map((_, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="overflow-hidden rounded-2xl shadow-xl"
                  >
                    <Image
                      src={brownies[index].image}
                      alt={`Chocolate variety ${index + 1}`}
                      width={400}
                      height={400}
                      className="rounded-2xl object-cover aspect-square"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section id="cakes" ref={cakesRef} className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          {/* Curved background */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-950/40 dark:to-purple-950/40"></div>
          <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="absolute top-0 w-full h-auto rotate-180"
            >
              <path
                fill="#fff"
                fillOpacity="1"
                d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center justify-center gap-4 text-center"
            >
              <div className="space-y-2">
                <span className="inline-block bg-pink-100 dark:bg-pink-900/30 px-3 py-1 rounded-full text-sm font-medium text-pink-600 dark:text-pink-400">
                  Sweet Celebrations
                </span>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text font-display">
                  Decadent Cakes
                </h2>
                <p className="max-w-[700px] text-gray-600 dark:text-gray-400 md:text-xl/relaxed">
                  From classic cheesecakes to rich fudge cakes, our creations are perfect for any celebration.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 w-full max-w-5xl">
                {cakeItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    whileHover={{ y: -10 }}
                    className="group flex flex-col items-center"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-purple-300 dark:from-pink-600 dark:to-purple-600 rounded-full blur-xl opacity-30 group-hover:opacity-70 transition-opacity duration-300 scale-90"></div>
                      <div className="overflow-hidden rounded-full border-4 border-white dark:border-gray-950 shadow-xl relative z-10">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={300}
                          height={300}
                          className="aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 300, delay: 0.3 + index * 0.2 }}
                        className="absolute -top-4 -right-4 bg-white dark:bg-gray-950 rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-20"
                      >
                        <Heart className="h-6 w-6 text-pink-500" />
                      </motion.div>
                    </div>
                    <div className="mt-6 text-center">
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                      <Button className="mt-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition-opacity">
                        Order Now
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="pastries" ref={pastriesRef} className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          {/* Tilted background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-500 -skew-y-3 transform origin-bottom-right"></div>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          ></div>

          <div className="container relative z-10 px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center gap-4 text-center text-white"
            >
              <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                Daily Freshness
              </span>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-display">
                Exquisite Pastries
              </h2>
              <p className="max-w-[700px] text-white/90 md:text-xl/relaxed">
                Delicate, flaky, and bursting with flavor. Our pastries are made fresh daily.
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-6xl mt-8">
                {pastryItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 0.9, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    className="flex flex-col h-full bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white hover:bg-white/20 transition-colors border border-white/20 shadow-xl"
                  >
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                      <p className="text-sm text-white/80">{item.description}</p>
                    </div>
                    <span className="block text-lg font-medium mt-4">{item.price}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white to-pink-50 dark:from-gray-950 dark:to-pink-950/20"></div>
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d946ef' fillOpacity='0.2' fillRule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
            }}
          ></div>

          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <div className="inline-block rounded-lg bg-pink-100 dark:bg-pink-900/30 px-3 py-1 text-sm font-medium text-pink-600 dark:text-pink-400">
                  Contact Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text font-display">
                  Let&apos;s Create Something Sweet
                </h2>
                <p className="max-w-[600px] text-gray-600 dark:text-gray-400 md:text-xl/relaxed">
                  Whether you&apos;re planning a special event or just craving something delicious, we&apos;re here to
                  help.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition-opacity shadow-lg shadow-pink-500/20"
                  >
                    Order Online
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-pink-300 dark:border-pink-700 hover:bg-pink-50 dark:hover:bg-pink-950/30"
                  >
                    <Link  href="https://maps.app.goo.gl/kp3Ajmn9CNQAmu2dA" target="_blank">
                    Visit Our Store
                    </Link>
                  </Button>
                </div>
                <div className="flex gap-4 mt-6">
                  <Link
                    href="https://www.instagram.com/chocoheaven00/"
                    target="_blank"
                    className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                  >
                    <Facebook className="h-6 w-6" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                  >
                    <Twitter className="h-6 w-6" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-4 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-pink-100 dark:border-pink-900/20"
              >
                <div className="grid gap-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center overflow-hidden">
                    <Image src="/logo.jpeg" alt="Choco Heaven" width={100} height={100} className="rounded-full" />
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition-opacity"
                    onClick={(e) => {
                      navigator.clipboard.writeText('9991411410');
                      const button = e.currentTarget;
                      button.textContent = "Number Copied!";
                      setTimeout(() => {
                        button.innerHTML = 'Call Us: 9991411410 <svg class="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v3m0 12v3M3 12h3m12 0h3m-3.5-8.5 1.5 1.5m-12 12 1.5 1.5m9-13.5 1.5-1.5m-12 12 1.5-1.5"/></svg>';
                      }, 2000);
                    }}
                  >
                    Call Us Now: 9991411410 <Sparkles className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-pink-200 dark:border-pink-800/20 py-6 md:py-0 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-gray-950 dark:to-gray-950">
        <div className="container flex flex-col gap-4 md:h-24 md:flex-row md:items-center md:justify-between md:gap-0">
          <p className="text-center text-sm leading-loose text-gray-600 dark:text-gray-400 md:text-left">
            © This Website is Developed under 30 minutes, get yours now <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText('9588343993');
                const link = e.currentTarget;
                link.textContent = "Number Copied!";
                setTimeout(() => {
                  link.textContent = "contact developer";
                }, 2000);
              }}
              className="text-pink-500 hover:text-pink-600"
            >contact developer</a>
          </p>
          <nav className="flex items-center justify-center gap-4 md:justify-end">
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 dark:text-gray-400 underline-offset-4 hover:text-pink-500 dark:hover:text-pink-400 hover:underline"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 dark:text-gray-400 underline-offset-4 hover:text-pink-500 dark:hover:text-pink-400 hover:underline"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 dark:text-gray-400 underline-offset-4 hover:text-pink-500 dark:hover:text-pink-400 hover:underline"
            >
              Cookies
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

const featuredItems = [
  {
    name: "Chocolate Truffle Cake",
    description: "This indulgent treat combines the perfect balance of sweet,bitter and creamy textures,making it a beloved dessert for chocolate lovers",
    price: "450/-",
    image: "https://cdn.dotpe.in/longtail/store-items/5879759/mLCpXasG.jpeg",
  },
  {
    name: "Classic Cheesecake",
    description: "Creamy New York style cheesecake with cracker crust",
    price: "199/-",
    image: "https://thescranline.com/wp-content/uploads/2023/05/NEW-YORK-STYLE-CHEESECAKE-S-01.jpg",
  },
  {
    name: "Bomboloni Box",
    description: "Italian filled donuts with biscoff,nutella,oreo,vanilla custard fillings",
    price: "899/-",
    image: "https://hellocupcakescompany.com/wp-content/uploads/2019/02/Artboard-12.jpg",
  },
  {
    name: "Bento brownie fudge ",
    description: "Rich, dense texture of a brownie with the smooth, melt in your mouth goodness of fudge It is sserved in bento box which makes it easy to enjoy as a treat or gift",
    price: "389/-",
    image: "https://i.pinimg.com/736x/31/35/2c/31352c1ee4d0e1e6ccf029a4a6b60bae.jpg",
  },
]

const cakeItems = [
  {
    name: "Triple Chocolate Cake",
    description: "Three layers of chocolate perfection consists of dark,milk,and white",
    image: "https://sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4.jpg",
  },
  {
    name: "Strawberry Cheesecake",
    description: "Creamy cheesecake with fresh strawberry topping ",
    image: "https://drivemehungry.com/wp-content/uploads/2022/07/strawberry-cheesecake-11-500x500.jpg",
  },
  {
    name: "Tiramisu Cake",
    description: "Coffee-soaked layers with mascarpone cream",
    image: "https://bonnibakery.com/wp-content/uploads/2021/02/Tiramisu-Cake2303-1.jpg",
  },
]

const pastryItems = [
  {
    name: "Mini cake",
    description: "Perfect for 1-2 persons these little cakes come in a variety of flavours like strawberry, pineapple,mango,chocolate",
    price: "119/-",
  },
  {
    name: "Cupcakes",
    description: "Cupcakes come in a variety of flavors from classic vanilla and chocolate to more adventurous combinations like red velvet or mawa",
    price: "89/-",
  },
  {
    name: "Jar cake",
    description: "It is a trendy and visually appealing served in a jar,layering moist cake with rich frosting.",
    price: "149/-",
  },
  {
    name: "Cheesecake shots",
    description: "Comes in various flavors like lotus biscoff,oreo nutella,blueberry",
    price: "129/-",
  },
]

const brownies = [
  {
    image: "https://www.sweetishhousemafia.com/cdn/shop/files/LOTUS_BISCOFF_BROWNIE_2_1200x.jpg?v=1732185374",
  },
  {
    image: "https://www.piesandtacos.com/wp-content/uploads/2017/12/Nutella-brownies-17.jpg",
  },
  {
    image: "https://i0.wp.com/bryonysbakes.com/wp-content/uploads/2021/07/D2E892A5-3FDD-448E-A056-D5DA66C8090D.jpg?ssl=1",
  },
  {
    image: "https://soomfoods.com/cdn/shop/articles/Soom_ChocolateTahiniBrownies_gsvysh_1600x.jpg?v=1685115924",
  },
]
  

