"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Heart, ShoppingCart, Calendar, Eye } from "lucide-react"

const featuredBooks = [
  {
    id: 1,
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    price: 16.99,
    rentPrice: 4.99,
    originalPrice: 24.99,
    rating: 4.9,
    reviews: 2156,
    image: "/placeholder.svg?height=400&width=300",
    badge: "Bestseller",
    isRentable: true,
    discount: 32,
  },
  {
    id: 2,
    title: "Project Hail Mary",
    author: "Andy Weir",
    price: 19.99,
    rentPrice: 5.99,
    originalPrice: 28.99,
    rating: 4.8,
    reviews: 1834,
    image: "/placeholder.svg?height=400&width=300",
    badge: "Editor's Choice",
    isRentable: true,
    discount: 31,
  },
  {
    id: 3,
    title: "The Thursday Murder Club",
    author: "Richard Osman",
    price: 14.99,
    rentPrice: 3.99,
    originalPrice: 22.99,
    rating: 4.7,
    reviews: 1456,
    image: "/placeholder.svg?height=400&width=300",
    badge: "Popular",
    isRentable: true,
    discount: 35,
  },
  {
    id: 4,
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    price: 18.99,
    rentPrice: 4.99,
    originalPrice: 26.99,
    rating: 4.6,
    reviews: 987,
    image: "/placeholder.svg?height=400&width=300",
    badge: "Award Winner",
    isRentable: true,
    discount: 30,
  },
]

export function FeaturedBooks() {
  const [hoveredBook, setHoveredBook] = useState<number | null>(null)

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Books</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of amazing books, available for purchase or rent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredBooks.map((book) => (
            <Card
              key={book.id}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              onMouseEnter={() => setHoveredBook(book.id)}
              onMouseLeave={() => setHoveredBook(null)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={book.image || "/placeholder.svg"}
                    alt={book.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    <Badge className="bg-red-500 hover:bg-red-600 text-white">{book.discount}% OFF</Badge>
                    <Badge className="bg-amber-500 hover:bg-amber-600 text-white">{book.badge}</Badge>
                  </div>

                  {/* Action Buttons */}
                  <div
                    className={`absolute top-3 right-3 flex flex-col gap-2 transition-opacity duration-300 ${
                      hoveredBook === book.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Button size="icon" variant="secondary" className="rounded-full">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="rounded-full">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Quick Actions Overlay */}
                  <div
                    className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-3 transition-opacity duration-300 ${
                      hoveredBook === book.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Button className="bg-amber-600 hover:bg-amber-700">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Buy Now
                    </Button>
                    {book.isRentable && (
                      <Button variant="outline" className="bg-white/90 hover:bg-white">
                        <Calendar className="w-4 h-4 mr-2" />
                        Rent
                      </Button>
                    )}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-bold text-lg line-clamp-2 group-hover:text-amber-600 transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-muted-foreground">{book.author}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(book.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm font-medium">{book.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({book.reviews})</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-green-600">${book.price}</span>
                      <span className="text-sm text-muted-foreground line-through">${book.originalPrice}</span>
                    </div>
                    {book.isRentable && (
                      <p className="text-sm text-blue-600 font-medium">Or rent for ${book.rentPrice}/week</p>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-amber-600 hover:bg-amber-700">
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      Buy
                    </Button>
                    {book.isRentable && (
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        <Calendar className="w-4 h-4 mr-1" />
                        Rent
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8 bg-transparent">
            View All Featured Books
          </Button>
        </div>
      </div>
    </section>
  )
}
