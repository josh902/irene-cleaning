/**
 * ============================================
 * components/Contact/ContactSection.tsx
 * ============================================
 * 
 * Complete contact section with contact info + quote form
 * 
 * LAYOUT:
 * - Left: Contact methods (phone, email, Facebook, address)
 * - Right: Quote request form
 * - Dark purple background
 * - Responsive: Stacks on mobile
 * 
 * ============================================
 */

import { SectionHeader } from "../ui/SectionHeader";
import { ContactWay } from "./ContactWay";
import { QuoteForm } from "./QuoteForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-purple py-20 md:py-24 px-6 md:px-12"
    >
      <div className="container mx-auto">
        {/* Section header (white text) */}
        <div className="mb-12">
          <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-pink-mid mb-2">
            Get in touch
          </p>
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-white mb-4">
            Ready for a cleaner home?
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-md leading-relaxed">
            Call, email, or fill out the form — Irene will get back to you promptly.
          </p>
        </div>

        {/* Contact grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12">
          {/* Left: Contact ways */}
          <div className="space-y-4">
            <ContactWay
              icon="📞"
              label="Call or text"
              value="(902) 221-7139"
              href="tel:9022217139"
            />
            <ContactWay
              icon="✉️"
              label="Email"
              value="aligynirene44@gmail.com"
              href="mailto:aligynirene44@gmail.com"
            />
            <ContactWay
              icon="📘"
              label="Facebook"
              value="Jophrey Cleaning Services"
              href="https://www.facebook.com/profile.php?id=61588232784929"
              external
            />
            <ContactWay
              icon="📍"
              label="Based in"
              value="101 Cutter Dr, Halifax, NS"
              isAddress
            />
          </div>

          {/* Right: Quote form */}
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}


/**
 * ============================================
 * components/Contact/ContactWay.tsx
 * ============================================
 * 
 * Individual contact method item
 * 
 * PROPS:
 * - icon: Emoji
 * - label: Contact type (Call, Email, etc)
 * - value: Contact value
 * - href: Link (optional)
 * - external: Open in new tab (optional)
 * - isAddress: Disable link functionality (optional)
 * 
 * STYLING:
 * - Semi-transparent white background
 * - Hover effect on clickable items
 * 
 * ============================================
 */

interface ContactWayProps {
  icon: string;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  isAddress?: boolean;
}

export function ContactWay({
  icon,
  label,
  value,
  href,
  external = false,
  isAddress = false,
}: ContactWayProps) {
  const content = (
    <div className="flex items-center gap-4">
      {/* Icon */}
      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white/12 flex items-center justify-center text-xl">
        {icon}
      </div>

      {/* Text */}
      <div>
        <p className="text-xs text-white/50 uppercase tracking-wide font-medium">
          {label}
        </p>
        <p className="text-base text-white font-medium">{value}</p>
      </div>
    </div>
  );

  if (isAddress) {
    return (
      <div className="flex items-center gap-4 bg-white/7 rounded-2xl p-5 border border-white/12">
        {content}
      </div>
    );
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center gap-4 bg-white/7 rounded-2xl p-5 border border-white/12 transition-all hover:bg-white/13 active:scale-95"
    >
      {content}
    </a>
  );
}


/**
 * ============================================
 * components/Contact/QuoteForm.tsx
 * ============================================
 * 
 * Quote request form component
 * 
 * FEATURES:
 * - Client-side form (state management)
 * - Form fields: name, phone, service, area, notes
 * - Submit handling (can connect to backend later)
 * - Responsive layout
 * 
 * KEY CONCEPT: "use client"
 * Forms need interactivity (state, events), so they're client components
 * This allows React hooks like useState
 * 
 * ============================================
 */

"use client";

import { useState } from "react";
import { services } from "@/data/services";

export function QuoteForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    service: "",
    area: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Show confirmation (you can add email functionality here later)
    alert(
      `Thanks for reaching out! Irene will be in touch soon 🌸\n\nWe received your request for: ${formData.service || "custom service"}`
    );

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      service: "",
      area: "",
      notes: "",
    });

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-10 space-y-6"
    >
      <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-purple mb-8">
        Request a free quote
      </h3>

      {/* Two-column row: First name + Last name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="form-group">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Jane"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Smith"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {/* Phone number */}
      <div className="form-group">
        <label htmlFor="phone">Phone number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="(902) 555-0000"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      {/* Service selection */}
      <div className="form-group">
        <label htmlFor="service">Service needed</label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="">Select a service...</option>
          {services.map((service) => (
            <option key={service.id} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      {/* Area */}
      <div className="form-group">
        <label htmlFor="area">Your area</label>
        <input
          type="text"
          id="area"
          name="area"
          placeholder="e.g. Bedford, Dartmouth..."
          value={formData.area}
          onChange={handleChange}
          required
        />
      </div>

      {/* Notes */}
      <div className="form-group">
        <label htmlFor="notes">Anything else? (optional)</label>
        <textarea
          id="notes"
          name="notes"
          placeholder="Home size, special requests, preferred days..."
          value={formData.notes}
          onChange={handleChange}
        />
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="w-full btn-primary text-center font-semibold"
      >
        Send quote request →
      </button>

      {submitted && (
        <p className="text-sm text-green-600 text-center">
          ✓ Thank you! We'll be in touch soon.
        </p>
      )}
    </form>
  );
}
