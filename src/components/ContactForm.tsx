"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const subjectOptions = [
  { value: "general", label: "General Inquiry" },
  { value: "catering", label: "Catering Services" },
  { value: "events", label: "Private Events" },
  { value: "feedback", label: "Feedback" },
  { value: "partnership", label: "Partnership Opportunity" },
  { value: "other", label: "Other" }
]

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      // Reset form after success message
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        })
      }, 3000)
    }, 1000)
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">✓</span>
        </div>
        <h3 className="font-playfair text-xl font-semibold text-brown-800 mb-2">
          Message Sent Successfully!
        </h3>
        <p className="text-brown-600">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-brown-800 font-medium">
            Full Name *
          </Label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            required
            className="border-beige-300 focus:border-sage-500 focus:ring-sage-500"
            placeholder="Your full name"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email" className="text-brown-800 font-medium">
            Email Address *
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            required
            className="border-beige-300 focus:border-sage-500 focus:ring-sage-500"
            placeholder="your.email@example.com"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-brown-800 font-medium">
            Phone Number
          </Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className="border-beige-300 focus:border-sage-500 focus:ring-sage-500"
            placeholder="(555) 123-4567"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="subject" className="text-brown-800 font-medium">
            Subject *
          </Label>
          <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
            <SelectTrigger className="border-beige-300 focus:border-sage-500 focus:ring-sage-500">
              <SelectValue placeholder="Select a subject" />
            </SelectTrigger>
            <SelectContent>
              {subjectOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message" className="text-brown-800 font-medium">
          Message *
        </Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          required
          rows={5}
          className="border-beige-300 focus:border-sage-500 focus:ring-sage-500 resize-none"
          placeholder="Tell us how we can help you or share your feedback..."
        />
      </div>
      
      <div className="flex items-start space-x-2">
        <input 
          type="checkbox" 
          id="newsletter" 
          className="mt-1 rounded border-beige-300 text-sage-600 focus:ring-sage-500"
        />
        <Label htmlFor="newsletter" className="text-brown-600 text-sm leading-relaxed">
          I'd like to receive updates about special offers, events, and new menu items
        </Label>
      </div>
      
      <Button 
        type="submit" 
        disabled={isSubmitting || !formData.name || !formData.email || !formData.subject || !formData.message}
        className="w-full bg-sage-600 hover:bg-sage-700 text-white py-3 rounded-full font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Sending Message...
          </span>
        ) : (
          "Send Message"
        )}
      </Button>
      
      <p className="text-brown-500 text-sm text-center">
        * Required fields. We respect your privacy and won't share your information.
      </p>
    </form>
  )
}