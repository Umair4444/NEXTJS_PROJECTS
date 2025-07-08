"use client"

import { useState, useMemo } from "react"
import { Search, Filter, SlidersHorizontal, Star, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Card, CardContent } from "@/components/ui/card"
import { BrandCard } from "@/components/(products)/brand-card"
import { brands, getFeaturedBrands, getBrandCategories } from "@/lib/brands"

export default function BrandsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("name")
  const [showPremiumOnly, setShowPremiumOnly] = useState(false)

  const featuredBrands = getFeaturedBrands()
  const categories = getBrandCategories()
  const priceRanges = ["Budget", "Mid-Range", "Premium", "Luxury"]

  const filteredBrands = useMemo(() => {
    const filtered = brands.filter((brand) => {
      const matchesSearch =
        brand.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        brand.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(brand.category)
      const matchesPriceRange = selectedPriceRanges.length === 0 || selectedPriceRanges.includes(brand.priceRange)
      const matchesPremium = !showPremiumOnly || brand.premium

      return matchesSearch && matchesCategory && matchesPriceRange && matchesPremium
    })

    // Sort brands
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "products":
          return b.productCount - a.productCount
        case "founded":
          return Number.parseInt(a.founded) - Number.parseInt(b.founded)
        case "country":
          return a.country.localeCompare(b.country)
        default:
          return a.name.localeCompare(b.name)
      }
    })

    return filtered
  }, [searchQuery, selectedCategories, selectedPriceRanges, sortBy, showPremiumOnly])

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category])
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    }
  }

  const handlePriceRangeChange = (priceRange: string, checked: boolean) => {
    if (checked) {
      setSelectedPriceRanges([...selectedPriceRanges, priceRange])
    } else {
      setSelectedPriceRanges(selectedPriceRanges.filter((p) => p !== priceRange))
    }
  }

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={selectedCategories.includes(category)}
                onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
              />
              <Label htmlFor={category}>{category}</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Price Range</h3>
        <div className="space-y-2">
          {priceRanges.map((priceRange) => (
            <div key={priceRange} className="flex items-center space-x-2">
              <Checkbox
                id={priceRange}
                checked={selectedPriceRanges.includes(priceRange)}
                onCheckedChange={(checked) => handlePriceRangeChange(priceRange, checked as boolean)}
              />
              <Label htmlFor={priceRange}>{priceRange}</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="premium"
            checked={showPremiumOnly}
            onCheckedChange={(checked) => setShowPremiumOnly(checked as boolean)}
          />
          <Label htmlFor="premium">Premium Brands Only</Label>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Brands</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover premium fashion brands from around the world. From luxury designers to contemporary labels, find
            your perfect style with our curated collection of international brands.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">{brands.length}+</div>
              <div className="text-gray-400">Total Brands</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">{featuredBrands.length}</div>
              <div className="text-gray-400">Featured Brands</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">{categories.length}</div>
              <div className="text-gray-400">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-gray-400">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Brands</h2>
            <p className="text-xl text-gray-600">Our most popular and premium brand partners</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredBrands.map((brand) => (
              <BrandCard key={brand.id} brand={brand} variant="featured" />
            ))}
          </div>
        </div>
      </section>

      {/* All Brands */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Desktop Filters */}
            <div className="hidden lg:block w-64 shrink-0">
              <Card className="border-none shadow-lg sticky top-4">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <Filter className="w-5 h-5" />
                    <h2 className="font-semibold">Filters</h2>
                  </div>
                  <FilterContent />
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">All Brands</h2>
                  <p className="text-gray-600">
                    Showing {filteredBrands.length} of {brands.length} brands
                  </p>
                </div>

                <div className="flex items-center gap-4 w-full sm:w-auto">
                  {/* Mobile Filter */}
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" className="lg:hidden bg-transparent">
                        <SlidersHorizontal className="w-4 h-4 mr-2" />
                        Filters
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                      <SheetHeader>
                        <SheetTitle>Filters</SheetTitle>
                        <SheetDescription>Filter brands by category, price range, and more</SheetDescription>
                      </SheetHeader>
                      <div className="mt-6">
                        <FilterContent />
                      </div>
                    </SheetContent>
                  </Sheet>

                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="name">Name</SelectItem>
                      <SelectItem value="products">Product Count</SelectItem>
                      <SelectItem value="founded">Founded Year</SelectItem>
                      <SelectItem value="country">Country</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Search */}
              <div className="mb-8">
                <div className="relative max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Search brands..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Brands Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 h-[60rem]">
                {filteredBrands.map((brand) => (
                  <BrandCard key={brand.id} brand={brand} />
                ))}
              </div>

              {filteredBrands.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No brands found matching your criteria.</p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery("")
                      setSelectedCategories([])
                      setSelectedPriceRanges([])
                      setShowPremiumOnly(false)
                    }}
                    className="mt-4"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
            <p className="text-xl text-gray-600">Explore brands by their specialization</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="h-16 bg-transparent hover:bg-black hover:text-white transition-colors"
                onClick={() => setSelectedCategories([category])}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover Your Next Favorite Brand</h2>
          <p className="text-xl text-gray-300 mb-8">
            From emerging designers to established luxury houses, find the perfect brand that matches your style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 rounded-full px-8">
              <Star className="w-5 h-5 mr-2" />
              Shop Featured Brands
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 bg-transparent"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Explore by Country
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
