import { Button } from "@/components/ui/button"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import NavigationBar from "@/components/NavigationBar"
import Footer from "@/components/Footer"
import FeaturedProducts from "@/components/FeaturedProducts"
import kiaban from "@/assets/kiaban.png"
import madoban from "@/assets/madoban.png"
import obeban from "@/assets/obeban.png"

export function Home() {
  return (
    <div className="text-center">
      <div>
        <div>
          <NavigationBar />

          <Carousel
            className="mr-auto ml-auto flex size-1/3"
            plugins={[
              Autoplay({
                delay: 3500,
              }),
            ]}
          >
            <CarouselContent>
              <CarouselItem className="basis-[85%]">
                <div className="relative">
                  <img
                    src={kiaban}
                    alt="Hoyoverse sale"
                    className="max-h-90 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-5xl text-pink-400 text-shadow-pink-800 text-shadow-xs">
                    <h2>NEW HOYOVERSE EXCLUSIVES</h2>
                  </div>
                </div>
              </CarouselItem>

              <CarouselItem className="basis-[85%]">
                <div className="relative">
                  <img
                    src={madoban}
                    alt="New Madoka Magica figures"
                    className="max-h-90 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h2>Walpurgisnacht: Rising Coming Soon! Get Merch Now!</h2>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-[85%]">
                <div className="relative">
                  <img
                    src={obeban}
                    alt="Oberon sale"
                    className="max-h-90 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h2>Subscrive and get 25% off!</h2>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            {/* tw class basis-[90%] makes the carousel pictures peek through */}
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <h1 className="">Welcome to my store!</h1>
          <p>Feel free to browse this beautiful collection.</p>
          <Button className="mt-2">Browse all</Button>
          <FeaturedProducts />
        </div>
        {/* <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div> */}
      </div>
      <Footer />
    </div>
  )
}

export default Home
