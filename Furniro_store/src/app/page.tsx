import Link from 'next/link'
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { ArrowRight, Star, Play, Award, Users, Truck } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden" 
               style={{
                 backgroundImage: "url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&h=1080&fit=crop&crop=center')"
               }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        <div className="relative container mx-auto px-6 min-h-screen flex items-center">
          <div className="max-w-2xl">
            <div className="bg-secondary/95 backdrop-blur-md p-12 rounded-2xl shadow-2xl border border-white/10 transform hover:scale-105 transition-all duration-500">
              <div className="space-y-2 mb-6">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wider">
                  New Arrival
                </span>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">Rated #1 Furniture Store</span>
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
                Discover Our<br />
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  New Collection
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Transform your living space with our curated collection of premium furniture. 
                Every piece tells a story of craftsmanship, comfort, and timeless design.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  SHOP COLLECTION
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg" className="group px-8 py-4 text-lg border-2 hover:bg-primary/5">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Story
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-6 border-t border-border/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-secondary/20 to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">15+</div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">10K+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">500+</div>
              <div className="text-muted-foreground">Premium Products</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">50+</div>
              <div className="text-muted-foreground">Cities Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Browse Range Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              Our Collection
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Browse The Range</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully curated collections designed to transform every corner of your home
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Dining", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=500&fit=crop", count: "120+ Items" },
              { name: "Living", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=500&fit=crop", count: "180+ Items" },
              { name: "Bedroom", image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=500&fit=crop", count: "95+ Items" }
            ].map((category, index) => (
              <Link
                key={category.name}
                href={`/category/${category.name.toLowerCase()}`}
                className="group relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={category.image}
                    alt={category.name}
                    className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2 transform transition-transform duration-300 group-hover:translate-y-0 translate-y-2">
                    {category.name}
                  </h3>
                  <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {category.count}
                  </p>
                </div>

                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <ArrowRight className="h-6 w-6 text-white" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              Best Sellers
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Our Products</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Handpicked favorites from our latest collection, loved by thousands of customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { id: "1", name: "Syltherine", desc: "Stylish cafe chair", price: 2500000, originalPrice: 3500000, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop", discount: 30 },
              { id: "2", name: "Leviosa", desc: "Stylish cafe chair", price: 2500000, image: "https://images.unsplash.com/photo-1549497538-303791108f95?w=300&h=300&fit=crop" },
              { id: "3", name: "Lolito", desc: "Luxury big sofa", price: 7000000, originalPrice: 14000000, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop", discount: 50 },
              { id: "4", name: "Respira", desc: "Outdoor bar table", price: 500000, image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=300&h=300&fit=crop", isNew: true }
            ].map((product) => (
              <div key={product.id} className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.discount && (
                      <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        -{product.discount}%
                      </span>
                    )}
                    {product.isNew && (
                      <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        NEW
                      </span>
                    )}
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button className="transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-transparent/80">
                      View Details
                    </Button>
                  </div>
                </div>
                
                <div className="p-6 bg-gradient-to-b from-card to-muted/20">
                  <h3 className="font-bold text-foreground text-xl mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{product.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-foreground text-lg">Rp {product.price.toLocaleString()}</span>
                      {product.originalPrice && (
                        <span className="text-muted-foreground line-through text-sm">Rp {product.originalPrice.toLocaleString()}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" className="group border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-12 py-4 text-lg font-semibold">
              <Link href="/shop" className="flex items-center">
                Show More
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                  Interior Design
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                  50+ Beautiful rooms inspiration
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Our designer already made a lot of beautiful prototipe of rooms that inspire you to create your dream space
                </p>
              </div>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-muted-foreground">4.9/5 from 2,500+ reviews</span>
              </div>

              <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-lg">
                <Link href="/shop" className="flex items-center">
                  Explore More
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="flex gap-6 overflow-hidden">
                <div className="relative flex-shrink-0 w-80 group">
                  <img 
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=500&fit=crop" 
                    alt="Room inspiration"
                    className="w-full h-96 object-cover rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span>01 — Bed Room</span>
                    </div>
                    <h3 className="font-bold text-foreground text-lg">Inner Peace</h3>
                  </div>
                </div>
                <div className="flex-shrink-0 w-80 relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=500&fit=crop" 
                    alt="Room inspiration"
                    className="w-full h-96 object-cover rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              
              {/* Navigation dots */}
              <div className="flex justify-center mt-6 gap-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <div className="w-3 h-3 bg-muted rounded-full"></div>
                <div className="w-3 h-3 bg-muted rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-r from-primary/5 to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                Newsletter
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Stay in the Loop
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Be the first to know about new arrivals, exclusive offers, and design inspiration
              </p>
            </div>
            
            <div className="max-w-md mx-auto mb-8">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-lg"
                />
                <Button size="lg" className="px-8 py-4 shadow-lg">
                  Subscribe
                </Button>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Join 10,000+ furniture lovers. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Furniro.</h3>
              <p className="text-muted-foreground leading-relaxed">
                400 University Drive Suite 200 Coral Gables,<br />
                FL 33134 USA
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </div>
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </div>
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.085.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-bold text-foreground text-lg">Links</h4>
              <nav className="flex flex-col space-y-3">
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
                <Link href="/shop" className="text-muted-foreground hover:text-foreground transition-colors">Shop</Link>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
              </nav>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-bold text-foreground text-lg">Help</h4>
              <nav className="flex flex-col space-y-3">
                <Link href="/shipping" className="text-muted-foreground hover:text-foreground transition-colors">Payment Options</Link>
                <Link href="/returns" className="text-muted-foreground hover:text-foreground transition-colors">Returns</Link>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policies</Link>
              </nav>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-bold text-foreground text-lg">Newsletter</h4>
              <div className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Enter Your Email Address"
                  className="w-full border-b border-foreground bg-transparent py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <Button className="w-full">SUBSCRIBE</Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border pt-8">
            <p className="text-center text-muted-foreground">2023 Furniro. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
