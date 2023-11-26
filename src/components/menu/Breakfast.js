import Image from 'next/image'
import MenuItem from './MenuItem'
import SectionHeaders from '../layout/SectionHeaders'
export default function Breakfast() {
    return (
        <section className="">
            <div className="absolute left-0 right-0 max-w-4xl mx-auto">
                <div className="absolute -top-[60px] -z-10">
                    <Image src={'/salladL.png'} width={100} height={100} alt="sallads" />
                </div>
                <div className="absolute -top-[60px] right-0 -z-10">
                    <Image src={'/salladR.png'} width={100} height={100} alt="sallads"/>
                </div>
            </div>
            <div className="text-center mb-4">
                <SectionHeaders
                    pickupOrder={"Order Online or Call to Order Pickup (202)588-7061 "}
                    subHeader={"Check out"}
                    mainHeader={"Our Menu"} 
                    categoryHeader={"BREAKFAST"}
               />
            </div>  
            <div className="grid grid-cols-3 gap-4 px-10">
            <MenuItem 
                image={<Image src='/smoked-salmon.jpg' alt="breakfast" className="mx-auto" width={120} height={100}/>}
                title={'Smoked Salmon Melt'}
                description={'Wild Smoked Salmon, Spinach, Pesto*, Capers, Onion, Tomatoes, Havarti, Cheese & On Croissant.'}
                price={"Add to cart $11.49"}
            />
            <MenuItem 
                image={<Image src='/chicken-melt.jpg' alt="breakfast" className="mx-auto " width={100} height={100}/>}
                title={'Chicken Melt'}
                description={'baked organic chicken, Spinach, Pesto*, Capers, Onion, Tomatoes, Havarti, Cheese & On Croissant.'}
                price={"Add to cart $11.29"}
            />
            <MenuItem 
              image={<Image src='/cheese-melt.jpg' alt="breakfast" className="mx-auto" width={120} height={100}/>}
              title={'Cheese Melt'}
              description={'Spinach, Onion, Tomatoes, House Dressing**, Three Cheese Combination of Havarti, Provolone, And Mozzarela On Croissant.'}
              price={"Add to cart $10.99"}
            />
            <MenuItem 
              image={<Image src='/tofu.jpg' alt="breakfast" className="mx-auto" width={100} height={10}/>}
              title={'Spicy Tofu Melt'}
              description={'Wild Smoked Salmon, Spinach, Pesto*, Capers, Onion, Tomatoes, Havarti, Cheese & On Croissant.'}
              price={"Add to cart $10.99"}
            />
            
            <MenuItem 
              image={<Image src='/almond-banana.jpg' alt="breakfast" className="mx-auto" width={100} height={20}/>}
              title={'Almond Butter Or Nutella And Banana'}
              description={'Wild Smoked Salmon, Spinach, Pesto*, Capers, Onion, Tomatoes, Havarti, Cheese & On Croissant.'}
              price={"Add to cart $11"}
            />
            <MenuItem 
              image={<Image src='/smoked-salmon.jpg' alt="breakfast" className="mx-auto" width={100} height={20}/>}
              title={'Almond Butter Or Nutella And Jelly'}
              description={'Wild Smoked Salmon, Spinach, Pesto*, Capers, Onion, Tomatoes, Havarti, Cheese & On Croissant.'}
              price={"Add to cart $11"}
            />
            <MenuItem 
              image={<Image src='/smoked-salmon.jpg' alt="breakfast" className="mx-auto" width={100} height={20}/>}
              title={'Scrambled Eggs'}
              description={'Wild Smoked Salmon, Spinach, Pesto*, Capers, Onion, Tomatoes, Havarti, Cheese & On Croissant.'}
              price={"Add to cart $11"}
            />
            <MenuItem 
              image={<Image src='/smoked-salmon.jpg' alt="breakfast" className="mx-auto" width={100} height={20}/>}
              title={'Scrambled Tofu'}
              description={'Wild Smoked Salmon, Spinach, Pesto*, Capers, Onion, Tomatoes, Havarti, Cheese & On Croissant.'}
              price={"Add to cart $11"}
            />
            {/* <div className="absolute left-0 right-0 max-w-4xl mx-auto">
                <div className="absolute top-[700px] -z-10">
                    <Image src={'/avocado.png'} width={60} height={60} alt="sallads" />
                </div>
                <div className="absolute top-[700px] -right-4 -z-10">
                    <Image src={'/carrot.webp'} width={100} height={100} alt="sallads"/>
                </div>
            </div> */}
            <MenuItem 
              image={<Image src='/smoked-salmon.jpg' alt="breakfast" className="mx-auto" width={100} height={20}/>}
              title={'Smoked Salmon Melt'}
              description={'Wild Smoked Salmon, Spinach, Pesto*, Capers, Onion, Tomatoes, Havarti, Cheese & On Croissant.'}
              price={"Add to cart $11"}
            />
          
            </div> 
            
        </section>
    )
}