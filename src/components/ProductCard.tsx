import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

type ProductCardProps = {
  id: number
  name: string
  price: number
  images: string[]
}

function ProductCard({ id, name, price, images }: ProductCardProps) {
  return (
    <Link to={`/product/${id}`}>
      <Card className="flex flex-col">
        <CardContent>
          <img
            src={images[0]}
            alt={name}
            className="aspect-square w-full object-contain"
          />
          <h2 className="line-clamp-1">{name}</h2>
          <p>{price}€</p>
        </CardContent>

        <CardFooter className="mt-auto">
          <Button>Add to cart</Button>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default ProductCard
