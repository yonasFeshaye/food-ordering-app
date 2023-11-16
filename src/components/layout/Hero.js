import Image from "next/image";
import Right from "../icons/Right";
export default function Hero() {
  return (
    <section className="grid grid-cols-2">
      <div>
         <h1 className="text-4xl font-semibold">Crafted meals for foodies.</h1>
         <p className="mt-4">
            Embark on a taste adventure at our charming cafe, offering     breakfast delights, paninis, pizzas, wraps, and salads—all crafted     with artisanal expertise. From the morning sun to savory bites, we     infuse every dish with a burst of flavor, ensuring a brief escape     to culinary paradise.{" "}
         </p>
         <div className="flex gap-4">
            <button className="bg-primary flex gap-2 text-white px-4 py-2 rounded-full">
                Order now
                <Right />
                
            </button>
            <button>Learn more</button>
         </div>
      </div>
      
      <div className="w-16 h-16 relative">
         <Image src={'/breakfast.jpg'} layout="fill" objectFit="contain"    alt={"breakfast"}/>
      </div>
      
    </section>
  );
}
