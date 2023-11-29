import Image from 'next/image'
import MenuItem from './MenuItem'
import SectionHeaders from '../layout/SectionHeaders'
export default function Smoothies() {
    return (
        <section>
            <div className="absolute left-0 right-0 max-w-4xl mx-auto">
                <div className="absolute top-[22px] -z-10 left-0">
                    <Image src={'/orange.png'} width={140} height={140} alt="sallads" />
                </div>
                <div className="absolute top-[55px] -z-10 -right-0">
                    <Image src={'/mango.png'} width={190} height={120} alt="pizza"/>
                </div>
            </div>
            <div className="text-center pb-0">
                <SectionHeaders
                    subHeader={"Check out"}
                    mainHeader={"Our Menu"} 
                    categoryHeader={"SMOOTHIES"}
               />
            </div> 
            <div className="grid grid-cols-3 gap-4 px-10">
            <MenuItem 
                image={<Image src='/smoked-salmon.jpg' alt="breakfast" className="mx-auto" width={120} height={100}/>}
                title={'Mango Madness'}
                description={'Mango, Pineapple, Banana, Orange Juice, Yogurt Or Honey'}
                price={"Add to cart $11.49"}
            />
            <MenuItem 
                image={<Image src='/chicken-melt.jpg' alt="breakfast" className="mx-auto " width={100} height={100}/>}
                title={'Blues in a Cup'}
                description={'Blueberries, Banana, And Peachs With Apple Juice, And Organic Cane Sugar Or Honey'}
                price={"Add to cart $11.29"}
            />
            <MenuItem 
              image={<Image src='/cheese-melt.jpg' alt="breakfast" className="mx-auto" width={120} height={100}/>}
              title={'Peach Pleasure'}
              description={'Peaches, Pineapple, Mangoes With Apple Juice, And Organic Cane Sugar Or Honey'}
              price={"Add to cart $10.99"}
            />
            <MenuItem 
                image={<Image src='/smoked-salmon.jpg' alt="breakfast" className="mx-auto" width={120} height={100}/>}
                title={'Berry Blast'}
                description={'Blueberries, Raspberries, Strawberries With Apple Juice, And Organic Cane Sugar Or Honey'}
                price={"Add to cart $11.49"}
            />
            <MenuItem 
                image={<Image src='/chicken-melt.jpg' alt="breakfast" className="mx-auto " width={100} height={100}/>}
                title={'The Mean Green'}
                description={'Organic Spinach, Mango, Pineapple Or Orange Juice, And Organic Cane Sugar Or Honey'}
                price={"Add to cart $11.29"}
            />
            <MenuItem 
              image={<Image src='/cheese-melt.jpg' alt="breakfast" className="mx-auto" width={120} height={100}/>}
              title={'Sweet Tang'}
              description={'Strawberries, Mango, Banana, With Orange Lemonade, And Organic Cane Sugar Or Honey'}
              price={"Add to cart $10.99"}
            />
            
           
            </div>
        </section>
    )
}

