'use client'

import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Autoplay from "embla-carousel-autoplay"
import { ChevronRight, StickyNote, ArrowRight} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export default function LandingPage() {
  const features = [
    {
      title: "Choose a Style",
      description: "Personalize your notes with customizable themes and layouts",
      icon: "../images/features1.svg",
    },
    {
      title: "Edit and Organize",
      description: "Keep your thoughts structured and easily accessible",
      icon: "../images/features2.svg",
    },
    {
      title: "Smart Search",
      description: "Find any note instantly with powerful search capabilities",
      icon: "../images/features3.svg",
    },
  ]

  const partners = [
    { name: "Google", logo: "../images/google.webp" },
    { name: "Netflix", logo: "../images/netflix.png" },
    { name: "Uber", logo: "../images/uber.svg" },
    { name: "Zomato", logo: "../images/zomato.svg" },
    { name: "Meta", logo: "../images/meta.svg" },
    { name: "Amazon", logo: "../images/amazon.svg" },
    { name: "Atlassian", logo: "../images/atlassian.svg" },
  ]

  const howItWorks = [
    {
      title: "Create",
      description: "Start with your thoughts, no matter how messy",
    },
    {
      title: "Organize",
      description: "Structure your notes with our intuitive tools",
    },
    {
      title: "Access",
      description: "Find and use your notes anywhere, anytime",
    },
  ]

  const pricingPlans = [
    {
      name: "Basic",
      price: "$9.99",
      period: "month",
      features: [
        "Up to 100 notes",
        "Basic text formatting",
        "Mobile app access",
        "1GB storage",
      ],
    },
    {
      name: "Pro",
      price: "$19.99",
      period: "month",
      features: [
        "Unlimited notes",
        "Advanced formatting",
        "Collaboration tools",
        "10GB storage",
        "Priority support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "year",
      features: [
        "All Pro features",
        "Unlimited storage",
        "Advanced security",
        "API access",
        "Dedicated account manager",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/10 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <StickyNote className="h-8 w-8 text-cyan-400" />
              <span className="ml-2 text-xl font-bold text-white">NoteVault</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How it Works</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Turn messy thoughts into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                actionable notes
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Organize your ideas, boost your productivity, and never lose track of important information again.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
              <Link to="/login" className="flex items-center gap-2">
                Sign Up <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Carousel */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Features that make note-taking{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              effortless
            </span>
          </h2>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {features.map((feature, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4">
                    <div className="rounded-2xl bg-gradient-to-b from-white/10 to-white/5 p-6 h-full">
                      <img src={feature.icon} alt={feature.title} className="w-16 h-16 mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            How it works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="rounded-2xl bg-gradient-to-b from-white/10 to-white/5 p-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-4">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-white mb-8">Trusted by leading organizations</h2>
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="w-full py-10"
          >
            <CarouselContent className="flex gap-5 sm:gap-20 items-center">
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="basis-1/3 lg:basis-1/6">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-10 object-contain"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Choose the plan that fits your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              needs
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className={`rounded-2xl bg-gradient-to-b from-white/10 to-white/5 p-8 h-full flex flex-col ${plan.popular ? 'border-2 border-cyan-400' : ''}`}>
                  {plan.popular && (
                    <span className="text-xs font-semibold text-cyan-400 uppercase mb-4">Most Popular</span>
                  )}
                  <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">/{plan.period}</span>
                  </div>
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 border-t border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <StickyNote className="h-6 w-6 text-cyan-400" />
                <span className="ml-2 text-lg font-bold text-white">NoteVault</span>
              </div>
              <p className="text-gray-400">
                Transform your note-taking experience with our powerful tools.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} NoteVault. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

