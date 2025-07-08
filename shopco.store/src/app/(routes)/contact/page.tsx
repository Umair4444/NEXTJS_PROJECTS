"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock, MessageCircle, Headphones, Package, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      category: "",
      message: "",
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "Send us an email anytime",
      contact: "support@shop.co",
      action: "mailto:support@shop.co",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      description: "Mon-Fri from 8am to 5pm",
      contact: "+1 (555) 123-4567",
      action: "tel:+15551234567",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      description: "Chat with our support team",
      contact: "Available 24/7",
      action: "#",
    },
  ]

  const supportCategories = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "Order Support",
      description: "Track orders, returns, exchanges",
      email: "orders@shop.co",
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Payment Issues",
      description: "Billing, refunds, payment methods",
      email: "billing@shop.co",
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "General Support",
      description: "Product questions, account help",
      email: "support@shop.co",
    },
  ]

  const faqs = [
    {
      question: "What are your shipping options?",
      answer:
        "We offer standard (5-7 business days) and express (2-3 business days) shipping. Free standard shipping on orders over $100.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We accept returns within 30 days of purchase. Items must be unworn with tags attached. Return shipping is free for exchanges.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order ships, you'll receive a tracking number via email. You can also track orders in your account dashboard.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to over 50 countries worldwide. International shipping rates and delivery times vary by location.",
    },
    {
      question: "How do I find my size?",
      answer:
        "Each product page includes a detailed size guide. You can also contact our support team for personalized sizing help.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, Apple Pay, Google Pay, and other secure payment methods at checkout.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a question or need help? We're here to assist you. Reach out to us through any of the methods below.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <a href={method.action} className="text-black font-semibold hover:text-gray-600 transition-colors">
                    {method.contact}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="order">Order Support</SelectItem>
                          <SelectItem value="product">Product Question</SelectItem>
                          <SelectItem value="payment">Payment Issue</SelectItem>
                          <SelectItem value="return">Return/Exchange</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        placeholder="Brief description of your inquiry"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Please provide details about your inquiry..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full rounded-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information & Support */}
            <div className="space-y-8">
              {/* Office Information */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Our Office
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-1">SHOP.CO Headquarters</h4>
                    <p className="text-gray-600">
                      123 Fashion Avenue
                      <br />
                      New York, NY 10001
                      <br />
                      United States
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>Monday - Friday: 9:00 AM - 6:00 PM EST</span>
                  </div>
                </CardContent>
              </Card>

              {/* Support Categories */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Specialized Support</CardTitle>
                  <CardDescription>Get help from our specialized teams</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {supportCategories.map((category, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                        {category.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{category.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                        <a
                          href={`mailto:${category.email}`}
                          className="text-sm text-black font-medium hover:text-gray-600 transition-colors"
                        >
                          {category.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="border-none shadow-lg bg-red-50 border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-800">Urgent Issues</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-red-700 mb-4">
                    For urgent order issues or payment problems that need immediate attention:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-red-600" />
                      <a href="tel:+15551234567" className="text-red-800 font-semibold hover:text-red-600">
                        +1 (555) 123-4567
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-red-600" />
                      <a href="mailto:urgent@shop.co" className="text-red-800 font-semibold hover:text-red-600">
                        urgent@shop.co
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>

          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="orders">Orders & Shipping</TabsTrigger>
              <TabsTrigger value="returns">Returns & Exchanges</TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="mt-8">
              <div className="space-y-6">
                {faqs.slice(0, 3).map((faq, index) => (
                  <Card key={index} className="border-none shadow-sm">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="orders" className="mt-8">
              <div className="space-y-6">
                {faqs.slice(0, 2).map((faq, index) => (
                  <Card key={index} className="border-none shadow-sm">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
                <Card className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">How can I track my order?</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Once your order ships, you'll receive a tracking number via email. You can also track orders in
                      your account dashboard.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="returns" className="mt-8">
              <div className="space-y-6">
                <Card className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">What is your return policy?</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We accept returns within 30 days of purchase. Items must be unworn with tags attached. Return
                      shipping is free for exchanges.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">How do I start a return?</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Log into your account, go to order history, and click "Return Items" next to your order. Follow
                      the prompts to print a return label.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">When will I receive my refund?</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Refunds are processed within 5-7 business days after we receive your returned items. You'll
                      receive an email confirmation when processed.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our customer support team is standing by to help you with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 rounded-full px-8">
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Live Chat
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 bg-transparent"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
