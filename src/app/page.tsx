"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Check, 
  Menu, 
  X, 
  Star, 
  Calendar, 
  Scissors, 
  Clock, 
  Heart,
  MessageCircle,
  ExternalLink,
  ChevronRight
} from "lucide-react";

// Image URLs for Gallery and Services (Curated, high-quality public domain/Unsplash images)
const IMAGES = {
  hennaTraditional: "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&w=600&q=80",
  hennaBridal: "https://images.unsplash.com/photo-1590156546746-c2370ae25d75?auto=format&fit=crop&w=600&q=80",
  hairStyling: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80",
  hairBraid: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
  makeupArtistry: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80",
  makeupLook: "https://images.unsplash.com/photo-1522337060762-d41222a27fec?auto=format&fit=crop&w=600&q=80",
  hennaGulf: "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?auto=format&fit=crop&w=600&q=80"
};

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  // Booking Builder State
  const [clientName, setClientName] = useState("");
  const [kuwaitArea, setKuwaitArea] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [selectedServices, setSelectedServices] = useState({
    henna: false,
    hair: false,
    makeup: false,
  });

  const galleryItems = [
    { id: 1, category: "henna", title: "Traditional Indian Bridal Mehendi", image: IMAGES.hennaBridal },
    { id: 2, category: "hair", title: "Elegant Party Updo", image: IMAGES.hairStyling },
    { id: 3, category: "makeup", title: "Glam Bridal Makeup", image: IMAGES.makeupLook },
    { id: 4, category: "henna", title: "Intricate Arabic Henna Design", image: IMAGES.hennaTraditional },
    { id: 5, category: "hair", title: "Soft Waves & Braids", image: IMAGES.hairBraid },
    { id: 6, category: "makeup", title: "Natural Soft-Glam Look", image: IMAGES.makeupArtistry },
  ];

  const filteredGallery = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  // Generate WhatsApp booking link dynamically
  const generateWhatsAppLink = () => {
    const servicesList = [];
    if (selectedServices.henna) servicesList.push("Henna/Mehendi");
    if (selectedServices.hair) servicesList.push("Hair Styling");
    if (selectedServices.makeup) servicesList.push("Makeup Artistry");

    const nameStr = clientName ? `Name: ${clientName}` : "";
    const areaStr = kuwaitArea ? `Area in Kuwait: ${kuwaitArea}` : "";
    const dateStr = bookingDate ? `Preferred Date: ${bookingDate}` : "";
    const servicesStr = servicesList.length > 0 ? `Services Required: ${servicesList.join(", ")}` : "Services Inquiry";

    const text = `Hi Hena! I would like to book a Home Service session.\n\n${nameStr}\n${areaStr}\n${dateStr}\n${servicesStr}\n\nPlease confirm your availability.`;
    const encodedText = encodeURIComponent(text);
    return `https://wa.me/96598747507?text=${encodedText}`;
  };

  const toggleService = (service: "henna" | "hair" | "makeup") => {
    setSelectedServices(prev => ({
      ...prev,
      [service]: !prev[service]
    }));
  };

  return (
    <div className="min-h-screen bg-cream-light mandala-pattern flex flex-col font-sans">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-maroon-dark/95 backdrop-blur-md border-b border-gold-primary/30 shadow-lg transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center space-x-2">
              <div className="relative w-10 h-10 rounded-full border-2 border-gold-primary flex items-center justify-center bg-maroon-primary">
                <span className="font-serif font-bold text-gold-primary text-lg">H</span>
              </div>
              <div>
                <span className="font-serif font-bold text-xl sm:text-2xl text-gold-primary tracking-wider">Hena.q8</span>
                <p className="text-[10px] text-cream-primary tracking-widest uppercase">Home Service Beauty</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-cream-primary/80 hover:text-gold-primary font-medium tracking-wide transition-colors">Services</a>
              <a href="#about" className="text-cream-primary/80 hover:text-gold-primary font-medium tracking-wide transition-colors">About Me</a>
              <a href="#trust" className="text-cream-primary/80 hover:text-gold-primary font-medium tracking-wide transition-colors">Why Choose Me</a>
              <a href="#gallery" className="text-cream-primary/80 hover:text-gold-primary font-medium tracking-wide transition-colors">Gallery</a>
              <a href="#contact" className="text-cream-primary/80 hover:text-gold-primary font-medium tracking-wide transition-colors">Contact</a>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <a 
                href="#book-now" 
                className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide bg-gold-primary hover:bg-gold-dark text-maroon-dark border border-gold-light/40 transition-all duration-300 shadow-md hover:shadow-gold-primary/20"
              >
                Book Home Service
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-cream-primary hover:text-gold-primary hover:bg-maroon-primary/50 focus:outline-none transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-maroon-dark border-b border-gold-primary/20 animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
              <a 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-cream-primary hover:text-gold-primary hover:bg-maroon-primary/40 transition-colors"
              >
                Services
              </a>
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-cream-primary hover:text-gold-primary hover:bg-maroon-primary/40 transition-colors"
              >
                About Me
              </a>
              <a 
                href="#trust" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-cream-primary hover:text-gold-primary hover:bg-maroon-primary/40 transition-colors"
              >
                Why Choose Me
              </a>
              <a 
                href="#gallery" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-cream-primary hover:text-gold-primary hover:bg-maroon-primary/40 transition-colors"
              >
                Gallery
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-cream-primary hover:text-gold-primary hover:bg-maroon-primary/40 transition-colors"
              >
                Contact
              </a>
              <div className="pt-4 pb-2 px-4">
                <a
                  href="#book-now"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full py-3 rounded-full text-center text-sm font-semibold bg-gold-primary text-maroon-dark shadow-md"
                >
                  Book Home Service
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-maroon-dark text-cream-primary py-24 sm:py-32 flex items-center">
        {/* Background Mandala overlay (Opacity controlled) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        {/* Decorative Arabesque SVG Element */}
        <div className="absolute -right-24 -top-24 w-96 h-96 opacity-10 rounded-full border-[8px] border-gold-primary border-dashed animate-subtle-zoom pointer-events-none"></div>
        <div className="absolute -left-24 -bottom-24 w-96 h-96 opacity-10 rounded-full border-[8px] border-gold-primary border-dashed animate-subtle-zoom pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Copy */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-maroon-primary border border-gold-primary/30 text-gold-light text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-gold-primary animate-pulse" />
                <span>100% Home Service Across Kuwait</span>
              </div>
              
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
                Elegant Henna Artistry, <br />
                <span className="gold-text-gradient">Hair & Makeup</span> <br />
                at Your Doorstep.
              </h1>
              
              <p className="text-base sm:text-lg text-cream-primary/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Indulge in a premium beauty experience without leaving home. Blending rich Indian traditions with contemporary Arabic aesthetics, Hena offers bespoke henna designs, red-carpet hair styling, and flawless makeup tailored just for you.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a 
                  href="#book-now" 
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-full text-base font-bold bg-gold-primary hover:bg-gold-dark text-maroon-dark shadow-xl hover:shadow-gold-primary/30 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Book Home Service
                </a>
                <a 
                  href="https://instagram.com/hena.q8" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold border-2 border-cream-primary/35 hover:border-gold-primary hover:text-gold-primary text-cream-primary transition-all duration-300"
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  Instagram @hena.q8
                </a>
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-cream-primary/10 max-w-lg mx-auto lg:mx-0">
                <div>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-gold-primary">Kuwait</h3>
                  <p className="text-xs text-cream-primary/60 uppercase tracking-widest mt-1">Home Service</p>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-gold-primary">3-in-1</h3>
                  <p className="text-xs text-cream-primary/60 uppercase tracking-widest mt-1">Multi-Expertise</p>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-gold-primary">Organic</h3>
                  <p className="text-xs text-cream-primary/60 uppercase tracking-widest mt-1">Safe Henna</p>
                </div>
              </div>
            </div>

            {/* Quick Interactive Booking Widget (Hero Right) */}
            <div id="book-now" className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-gold-primary/20 text-charcoal relative animate-slide-up">
              <div className="absolute -top-3 right-6 bg-gold-primary text-maroon-dark text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-gold-light/50">
                Quick Request
              </div>
              <h3 className="font-serif text-2xl font-bold text-maroon-primary mb-2">Book Your Session</h3>
              <p className="text-xs text-gray-500 mb-6">Select your services and location, and message Hena instantly.</p>
              
              <div className="space-y-4">
                {/* Name Input */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Fatima Al-Sabah" 
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-primary/20 focus:border-maroon-primary bg-cream-light/35 transition-all text-sm"
                  />
                </div>

                {/* Area Input */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">Area in Kuwait</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Salmiya, Hawally" 
                    value={kuwaitArea}
                    onChange={(e) => setKuwaitArea(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-primary/20 focus:border-maroon-primary bg-cream-light/35 transition-all text-sm"
                  />
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">Preferred Date</label>
                  <input 
                    type="date" 
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-primary/20 focus:border-maroon-primary bg-cream-light/35 transition-all text-sm text-gray-600"
                  />
                </div>

                {/* Services Checkboxes */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">Select Services</label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => toggleService("henna")}
                      className={`py-2 px-3 rounded-lg border text-xs font-semibold text-center transition-all ${
                        selectedServices.henna 
                          ? "bg-maroon-primary border-maroon-primary text-white shadow-md" 
                          : "border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      Henna
                    </button>
                    <button
                      onClick={() => toggleService("hair")}
                      className={`py-2 px-3 rounded-lg border text-xs font-semibold text-center transition-all ${
                        selectedServices.hair 
                          ? "bg-maroon-primary border-maroon-primary text-white shadow-md" 
                          : "border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      Hair
                    </button>
                    <button
                      onClick={() => toggleService("makeup")}
                      className={`py-2 px-3 rounded-lg border text-xs font-semibold text-center transition-all ${
                        selectedServices.makeup 
                          ? "bg-maroon-primary border-maroon-primary text-white shadow-md" 
                          : "border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      Makeup
                    </button>
                  </div>
                </div>

                {/* Submit to WhatsApp */}
                <a 
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-6 inline-flex items-center justify-center py-3.5 px-4 rounded-xl font-bold bg-green-600 hover:bg-green-700 text-white shadow-lg transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Send Inquiry on WhatsApp
                </a>

                <p className="text-[10px] text-center text-gray-400 mt-2">
                  No payment required now. WhatsApp will open automatically with your request details.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest text-gold-primary font-bold">Services Menu</h2>
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon-primary">
            Curated Beauty Services
          </h3>
          <div className="h-1 w-20 bg-gold-primary mx-auto my-4 rounded-full"></div>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            All services are provided in the comfort and privacy of your own home anywhere in Kuwait. We arrive fully equipped to pamper you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Card 1: Henna */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-cream-beige group hover:shadow-xl hover:border-gold-primary/50 transition-all duration-300 flex flex-col">
            <div className="h-64 overflow-hidden relative">
              <img 
                src={IMAGES.hennaTraditional} 
                alt="Henna Artistry" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-4 left-4 bg-maroon-primary text-gold-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-gold-primary/30">
                Popular
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h4 className="font-serif text-2xl font-bold text-maroon-primary flex items-center justify-between">
                  Henna & Mehendi Artistry
                </h4>
                <p className="text-xs text-gold-primary font-semibold tracking-wider">Arabic, Gulf, & Traditional Indian Designs</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Bespoke, hand-crafted henna patterns ranging from intricate traditional Indian bridal layouts to modern, geometric Arabic strip designs. We use 100% organic, skin-safe, rich-staining henna paste.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-gray-600 font-medium">
                <li className="flex items-center"><Check className="w-4 h-4 text-gold-primary mr-2" /> Full Bridal & Groom Henna Packages</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-gold-primary mr-2" /> Guest/Sangeet Henna & Party Bookings</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-gold-primary mr-2" /> Contemporary Minimalist Arabic Motifs</li>
              </ul>
            </div>
          </div>

          {/* Service Card 2: Hair Styling */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-cream-beige group hover:shadow-xl hover:border-gold-primary/50 transition-all duration-300 flex flex-col">
            <div className="h-64 overflow-hidden relative">
              <img 
                src={IMAGES.hairStyling} 
                alt="Hair Styling" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-4 left-4 bg-maroon-primary text-gold-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-gold-primary/30">
                Red Carpet
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h4 className="font-serif text-2xl font-bold text-maroon-primary">
                  Professional Hair Styling
                </h4>
                <p className="text-xs text-gold-primary font-semibold tracking-wider">Elegant Updos, Braids & Voluminous Curls</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Tailored hair designs to complement your face shape, outfit, and occasion. From sleek, modern buns to complex traditional braids and soft voluminous Hollywood waves, styled to stay flawless all night.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-gray-600 font-medium">
                <li className="flex items-center"><Check className="w-4 h-4 text-gold-primary mr-2" /> Elegant Bridal Buns & Updos</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-gold-primary mr-2" /> Glamorous Hollywood Waves & Curls</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-gold-primary mr-2" /> Cultural Braids with Hair Accessories</li>
              </ul>
            </div>
          </div>

          {/* Service Card 3: Makeup */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-cream-beige group hover:shadow-xl hover:border-gold-primary/50 transition-all duration-300 flex flex-col">
            <div className="h-64 overflow-hidden relative">
              <img 
                src={IMAGES.makeupLook} 
                alt="Makeup Artistry" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-4 left-4 bg-maroon-primary text-gold-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-gold-primary/30">
                Bespoke
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h4 className="font-serif text-2xl font-bold text-maroon-primary">
                  Flawless Makeup Artistry
                </h4>
                <p className="text-xs text-gold-primary font-semibold tracking-wider">Bridal, Glam & Special Occasions</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Create a breathtaking, radiant look with premium cosmetic products. Experienced in matching varying skin tones, lighting conditions, and camera requirements. Perfect for brides and wedding guests.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-gray-600 font-medium">
                <li className="flex items-center"><Check className="w-4 h-4 text-gold-primary mr-2" /> Premium Bridal Makeup (Airbrush/HD)</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-gold-primary mr-2" /> High-Glam Party & Reception Looks</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-gold-primary mr-2" /> Fresh Soft-Glam & Natural Dewy Styles</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Home Service Only Banner */}
        <div className="mt-16 bg-gradient-to-r from-maroon-dark to-maroon-primary text-cream-primary p-8 rounded-2xl shadow-xl border border-gold-primary/30 text-center space-y-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <MapPin className="w-10 h-10 text-gold-primary mx-auto animate-bounce" />
          <h4 className="font-serif text-2xl font-bold">100% Home Service Convenience</h4>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-cream-primary/80 font-light">
            Skip the stress of traffic and crowded salons. We travel directly to your home, hotel room, or venue anywhere in Kuwait. Sit back, relax, and let the beauty services come to you.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-maroon-dark text-cream-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* About Image Collage/Presentation */}
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 w-full rounded-2xl overflow-hidden border-2 border-gold-primary aspect-[4/5] shadow-2xl">
                <img 
                  src={IMAGES.hennaBridal} 
                  alt="Hena at Work" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-serif text-lg font-bold text-gold-primary">Hena</p>
                  <p className="text-xs text-cream-primary/80 uppercase tracking-wider">Founder & Lead Artist</p>
                </div>
              </div>
              
              {/* Offset border accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold-primary/45 rounded-2xl pointer-events-none -z-0"></div>
            </div>

            {/* About Copy */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-xs uppercase tracking-widest text-gold-primary font-bold">Meet The Artist</h2>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold">
                Bespoke Beauty Crafted <br />
                With Passion
              </h3>
              <div className="h-1 w-20 bg-gold-primary my-4 rounded-full"></div>
              
              <div className="space-y-4 text-sm sm:text-base text-cream-primary/80 font-light leading-relaxed">
                <p>
                  Welcome to <span className="font-semibold text-gold-light">Hena.q8</span>! I am an Indian-based professional henna artist, hair stylist, and makeup artist offering personalized, high-quality home services across all areas of Kuwait.
                </p>
                <p>
                  With years of dedication to cultural beauty rituals, my expertise lies in blending the deep intricacies of traditional Indian mehendi patterns with the elegant, bold lines of contemporary Arabic and Gulf henna styles. 
                </p>
                <p>
                  Realizing that clients value comfort and unified beauty services, I expanded my expertise to professional hair styling and flawless makeup artistry. This allows me to provide complete, coordinated beauty packages for brides, families, and party guests in one single session—right at your doorstep.
                </p>
              </div>

              {/* Stats/Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-cream-primary/10">
                <div className="space-y-1">
                  <p className="text-gold-primary font-bold text-3xl">100%</p>
                  <p className="text-xs text-cream-primary/60 uppercase tracking-widest">Home Service</p>
                </div>
                <div className="space-y-1">
                  <p className="text-gold-primary font-bold text-3xl">Organic</p>
                  <p className="text-xs text-cream-primary/60 uppercase tracking-widest">Natural Stain</p>
                </div>
                <div className="space-y-1">
                  <p className="text-gold-primary font-bold text-3xl">Multi</p>
                  <p className="text-xs text-cream-primary/60 uppercase tracking-widest">Service Expert</p>
                </div>
                <div className="space-y-1">
                  <p className="text-gold-primary font-bold text-3xl">965+</p>
                  <p className="text-xs text-cream-primary/60 uppercase tracking-widest">Happy Clients</p>
                </div>
              </div>

              <div className="pt-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center space-x-2 text-gold-primary hover:text-gold-light text-sm font-semibold tracking-wide transition-colors"
                >
                  <span>Get in touch today for booking options</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section id="trust" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest text-gold-primary font-bold">Why Book Hena.q8</h2>
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon-primary">
            A Luxury Beauty Experience
          </h3>
          <div className="h-1 w-20 bg-gold-primary mx-auto my-4 rounded-full"></div>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            We are committed to providing the highest standards of safety, convenience, and professional skill.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Signal 1: Convenience */}
          <div className="bg-white p-8 rounded-2xl border border-cream-beige shadow-sm hover:shadow-md transition-all text-center space-y-4">
            <div className="w-12 h-12 bg-cream-primary rounded-full flex items-center justify-center text-maroon-primary mx-auto">
              <MapPin className="w-6 h-6 text-maroon-primary" />
            </div>
            <h4 className="font-serif text-lg font-bold text-maroon-primary">Doorstep Convenience</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              We travel directly to your location anywhere in Kuwait. No driving, parking, or waiting times. Completely hassle-free.
            </p>
          </div>

          {/* Signal 2: Premium Products */}
          <div className="bg-white p-8 rounded-2xl border border-cream-beige shadow-sm hover:shadow-md transition-all text-center space-y-4">
            <div className="w-12 h-12 bg-cream-primary rounded-full flex items-center justify-center text-maroon-primary mx-auto">
              <Heart className="w-6 h-6 text-maroon-primary animate-pulse" />
            </div>
            <h4 className="font-serif text-lg font-bold text-maroon-primary">100% Organic Henna</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Our mehendi paste is hand-mixed using premium, natural organic henna leaves, essential oils, and lemon water. Completely chemical-free.
            </p>
          </div>

          {/* Signal 3: Multi-Service */}
          <div className="bg-white p-8 rounded-2xl border border-cream-beige shadow-sm hover:shadow-md transition-all text-center space-y-4">
            <div className="w-12 h-12 bg-cream-primary rounded-full flex items-center justify-center text-maroon-primary mx-auto">
              <Scissors className="w-6 h-6 text-maroon-primary" />
            </div>
            <h4 className="font-serif text-lg font-bold text-maroon-primary">Coordinated Looks</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Ensure your hair, makeup, and henna flow harmoniously. Book a single artist to coordinate your entire look, saving time and money.
            </p>
          </div>

          {/* Signal 4: Quality & Safety */}
          <div className="bg-white p-8 rounded-2xl border border-cream-beige shadow-sm hover:shadow-md transition-all text-center space-y-4">
            <div className="w-12 h-12 bg-cream-primary rounded-full flex items-center justify-center text-maroon-primary mx-auto">
              <Star className="w-6 h-6 text-maroon-primary" />
            </div>
            <h4 className="font-serif text-lg font-bold text-maroon-primary">Bespoke Customization</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Every design is drawn freehand on the spot to match your aesthetic, dress, and occasion requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-cream-beige/50 border-y border-cream-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-4">
              <h2 className="text-xs uppercase tracking-widest text-gold-primary font-bold">Artist Portfolio</h2>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-maroon-primary">Exquisite Creations</h3>
              <div className="h-1 w-20 bg-gold-primary rounded-full"></div>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {["all", "henna", "hair", "makeup"].map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    activeFilter === filter 
                      ? "bg-maroon-primary text-cream-primary shadow-md" 
                      : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map(item => (
              <div 
                key={item.id} 
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-cream-beige transition-all duration-300 aspect-square"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/90 via-maroon-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[10px] text-gold-primary font-bold uppercase tracking-widest mb-1">{item.category}</span>
                  <h4 className="font-serif text-lg font-bold text-white">{item.title}</h4>
                  <a 
                    href="https://instagram.com/hena.q8" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mt-3 inline-flex items-center text-xs text-cream-primary hover:text-gold-primary font-medium"
                  >
                    <span>View details on Instagram</span>
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Instagram CTA Banner */}
          <div className="mt-16 text-center bg-white border border-gold-primary/20 rounded-2xl p-8 max-w-2xl mx-auto shadow-md">
            <Instagram className="w-10 h-10 text-maroon-primary mx-auto mb-4 animate-pulse" />
            <h4 className="font-serif text-xl font-bold text-maroon-primary mb-2">See More of My Daily Work</h4>
            <p className="text-xs text-gray-500 mb-6">
              I post video transformations, henna staining processes, and guest reviews daily on my Instagram.
            </p>
            <a 
              href="https://instagram.com/hena.q8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-maroon-primary hover:bg-maroon-light text-gold-light border border-gold-primary/30 transition-all shadow-md"
            >
              See more on Instagram @hena.q8
            </a>
          </div>

        </div>
      </section>

      {/* Contact & Footer Section */}
      <section id="contact" className="bg-maroon-dark text-cream-primary pt-24 pb-12 relative overflow-hidden mt-auto">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-cream-primary/10">
            
            {/* Contact Brand Block */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <div className="w-8 h-8 rounded-full border border-gold-primary flex items-center justify-center bg-maroon-primary">
                  <span className="font-serif font-bold text-gold-primary text-sm">H</span>
                </div>
                <span className="font-serif font-bold text-xl text-gold-primary tracking-wider">Hena.q8</span>
              </div>
              
              <h3 className="font-serif text-3xl sm:text-4xl font-bold">
                Let's Make Your Next <br />
                Event Spectacular
              </h3>
              
              <p className="text-sm text-cream-primary/70 leading-relaxed font-light max-w-md mx-auto lg:mx-0">
                Have a wedding, Eid celebration, family gathering, or just want to pamper yourself? Send a message to discuss your design preferences, requirements, and secure your booking date.
              </p>

              <div className="space-y-4 pt-4 text-sm max-w-sm mx-auto lg:mx-0 text-left">
                <div className="flex items-center space-x-3 text-cream-primary/80">
                  <MapPin className="w-5 h-5 text-gold-primary shrink-0" />
                  <span>Kuwait (Home service across all areas)</span>
                </div>
                <div className="flex items-center space-x-3 text-cream-primary/80">
                  <Clock className="w-5 h-5 text-gold-primary shrink-0" />
                  <span>Flexible Hours (Booking required)</span>
                </div>
                <div className="flex items-center space-x-3 text-cream-primary/80">
                  <Mail className="w-5 h-5 text-gold-primary shrink-0" />
                  <a href="mailto:Hena.q8@gmail.com" className="hover:text-gold-primary transition-colors">Hena.q8@gmail.com</a>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons (Hero/Contact Right) */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-4 max-w-md mx-auto w-full">
              
              <h4 className="font-serif text-lg font-bold text-gold-primary text-center lg:text-left mb-2">Connect Directly</h4>

              {/* WhatsApp Button */}
              <a 
                href="https://wa.me/96598747507"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold transition-all shadow-md"
              >
                <div className="flex items-center">
                  <MessageCircle className="w-6 h-6 mr-3" />
                  <span>Chat on WhatsApp</span>
                </div>
                <div className="text-xs bg-white/20 px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold">
                  +965 9874 7507
                </div>
              </a>

              {/* Instagram DM Button */}
              <a 
                href="https://instagram.com/hena.q8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-pink-600 via-red-500 to-yellow-500 hover:opacity-90 text-white font-bold transition-all shadow-md"
              >
                <div className="flex items-center">
                  <Instagram className="w-6 h-6 mr-3" />
                  <span>Message on Instagram</span>
                </div>
                <div className="text-xs bg-white/20 px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold">
                  @hena.q8
                </div>
              </a>

              {/* Email Button */}
              <a 
                href="mailto:Hena.q8@gmail.com"
                className="flex items-center justify-between p-4 rounded-xl bg-maroon-primary hover:bg-maroon-light border border-gold-primary/30 text-gold-light font-bold transition-all shadow-md"
              >
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-3 text-gold-primary" />
                  <span>Email for Inquiries</span>
                </div>
                <span className="text-xs text-cream-primary/60 font-medium">Hena.q8@gmail.com</span>
              </a>

              {/* Normal Phone Call */}
              <a 
                href="tel:+96598747507"
                className="flex items-center justify-between p-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-cream-primary font-bold transition-all"
              >
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-3 text-gold-primary" />
                  <span>Direct Phone Call</span>
                </div>
                <span className="text-xs font-semibold">+965 9874 7507</span>
              </a>

            </div>

          </div>

          {/* Footer Details */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream-primary/45 text-center md:text-left">
            <div>
              <p>&copy; {new Date().getFullYear()} Hena.q8. All Rights Reserved.</p>
              <p className="mt-1">Home Service Only &bull; Kuwait-wide Coverage.</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#services" className="hover:text-gold-primary transition-colors">Services</a>
              <a href="#about" className="hover:text-gold-primary transition-colors">About</a>
              <a href="#gallery" className="hover:text-gold-primary transition-colors">Gallery</a>
              <a href="#contact" className="hover:text-gold-primary transition-colors">Contact</a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
