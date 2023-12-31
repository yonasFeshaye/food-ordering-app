import MenuItem from './MenuItem'
import SectionHeaders from '../layout/SectionHeaders'
import Image from 'next/image'
export default function WrapsSalad() {
return (
    <section>
    <div className="absolute left-0 right-0 max-w-4xl mx-auto">
        <div className="absolute top-[52px] -z-10 left-8">
            <Image src={'/salad.png'} width={180} height={100} alt="sallads" />
        </div>
        <div className="absolute top-[55px] right-10 -z-10">
            <Image src={'/wraps.png'} width={130} height={20} alt="pizza"/>
        </div>
    </div>
    <div className="text-center pb-0">
        <SectionHeaders
            subHeader={"Check out"}
            mainHeader={"Our Menu"} 
            categoryHeader={"WRAPS & SALADS"}
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
    
   
    </div>
</section>
)
}