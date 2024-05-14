import { Product } from "@/components/product";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <main className="flex gap-3 w-full max-w-home ml-auto min-h-[656px]">
      <Carousel>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Product />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" variant={"ghost"} />
        <CarouselNext className="right-0" variant={"ghost"} />
      </Carousel>
    </main>
  );
}
