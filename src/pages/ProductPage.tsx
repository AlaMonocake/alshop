import { useParams, Link } from "react-router-dom"
import Navbar from "@/components/NavigationBar"
import Footer from "@/components/Footer"
import products from "@/data/products.json"

function ProductPage() {
  const { productId } = useParams()

  const product = products.find((product) => product.id === Number(productId))
  if (!product) {
    return <p>Sorry, the requested product could not be found.</p>
  }

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-6 py-10">
        <Link
          to="/"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          ← Back to shop
        </Link>

        <h1>{product.title}</h1>
        <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <img
              src={product.images[0]}
              alt={product.title}
              className="aspect-square w-full rounded-xl object-contain"
            />
          </div>

          <div>
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold">{product.title}</h2>

              <p className="text-2xl font-semibold">{product.price}€</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ProductPage
