"use client";

import { useState } from "react";
import { services } from "@/data/services";

const emptyForm = {
  firstName: "",
  lastName: "",
  phone: "",
  service: "",
  area: "",
  notes: "",
};

export function QuoteForm() {
  const [formData, setFormData] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData(emptyForm);
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center text-center gap-6 min-h-[400px]">
        <div className="w-16 h-16 rounded-full bg-pink-pale flex items-center justify-center text-3xl">
          🌸
        </div>
        <div>
          <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-purple mb-3">
            Thank you, {formData.firstName}!
          </h3>
          <p className="text-text-muted text-base leading-relaxed max-w-sm">
            Irene will review your request and get back to you shortly. We look
            forward to taking care of your home.
          </p>
        </div>
        <button
          onClick={handleReset}
          className="text-sm text-pink underline underline-offset-4 hover:text-purple transition-colors"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 space-y-6"
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

      <button type="submit" className="w-full btn-primary text-center font-semibold">
        Send quote request →
      </button>
    </form>
  );
}
