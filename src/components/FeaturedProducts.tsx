import ProductCard from "@/components/ProductCard"
import products from "@/data/products.json"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function FeaturedProducts() {
  const shuffledProducts = [...products]
    .sort(() => Math.random() - 0.5)
    .slice(0, 8)

  return (
    <Carousel className="mt-3 mb-4 w-full">
      <CarouselContent>
        {shuffledProducts.map((product) => (
          <CarouselItem key={product.id} className="basis-70">
            <ProductCard
              id={product.id}
              images={product.images}
              name={product.title}
              price={product.price}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
      {/* the left 2 and right 2 move the arrows on top of the carousel */}
    </Carousel>
  )
}
export default FeaturedProducts
