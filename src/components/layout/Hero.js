import Image from "next/image";
import Right from "../icons/Right";
export default function Hero() {
  return (
    <section className="hero">
      <div className="py-12 pr-6">
         <h1 className="text-4xl font-semibold">Crafted <br/>meals for <br /><span className="text-primary">foodies!</span></h1>
         <p className="my-6 text-secondary-200 text-sm">
            Embark on a taste adventure at our charming cafe, offering breakfast delights, paninis, pizzas, wraps, and salads—all crafted with artisanal expertise. From the morning sun to savory bites, we infuse every dish with a burst of flavor, ensuring a brief escape to culinary paradise.{" "}
         </p>
         <div className="flex gap-4 pt-2">
            <button className="bg-primary whitespace-nowrap flex justify-center gap-2 uppercase text-white px-4 py-2 rounded-full items-center">
                Order now
                <Right />
                
                
            </button>
            <button className="flex whitespace-nowrap gap-2 py-2 border-0 text-secondary-200 items-center">
                Learn more
                <Right />
            </button>
         </div>
      </div>
      
      <div className="relative ">
         <Image src={'/breakfast.jpg'} width={600} height={500} alt={"breakfast"} className="rounded-full mt-14"/>
      </div>
      
    </section>
  );
}
