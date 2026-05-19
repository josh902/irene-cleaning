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
    alert(
      `Thanks for reaching out! Irene will be in touch soon 🌸\n\nWe received your request for: ${formData.service || "custom service"}`
    );

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
