import Image from 'next/image'
import MenuItemDrinks from './MenuItemDrinks'
import SectionHeaders from '../layout/SectionHeaders'
export default function Drinks() {
    return (
        <section>
            <div className="absolute left-0 right-0 max-w-4xl mx-auto">
                <div className="absolute top-[26px] -z-10 left-2">
                    <Image src={'/coffee.png'} width={200} height={70} alt="sallads" />
                </div>
                <div className="absolute top-[30px] -z-10 right-3">
                    <Image src={'/macchiatto.png'} width={220} height={120} alt="pizza"/>
                </div>
            </div>
            <div className="text-center pb-0">
                <SectionHeaders
                    subHeader={"Check out"}
                    mainHeader={"Our Menu"} 
                    categoryHeader={"DRINKS"}
            />
            </div> 
        <div className="grid grid-cols-4 gap-4">
            <MenuItemDrinks 
                title={'Esspresso'}
                price={"Add to cart $2.89"}/>   
            <MenuItemDrinks 
                title={'Double Esspresso'}
                price={"Add to cart $2.89"}/> 
            <MenuItemDrinks 
                title={'Esspresso macchiato'}
                price={"Add to cart $2.89"}/> 
                <MenuItemDrinks 
                title={'Esspresso'}
                price={"Add to cart $2.89"}/>   
            <MenuItemDrinks 
                title={'Double Esspresso'}
                price={"Add to cart $2.89"}/> 
            <MenuItemDrinks 
                title={'Esspresso macchiato'}
                price={"Add to cart $2.89"}/>
            <MenuItemDrinks 
                title={'Esspresso'}
                price={"Add to cart $2.89"}/>   
            <MenuItemDrinks 
                title={'Double Esspresso'}
                price={"Add to cart $2.89"}/> 
            <MenuItemDrinks 
                title={'Esspresso macchiato'}
                price={"Add to cart $2.89"}/>
            <MenuItemDrinks 
                title={'Esspresso'}
                price={"Add to cart $2.89"}/>   
            <MenuItemDrinks 
                title={'Double Esspresso'}
                price={"Add to cart $2.89"}/> 
            <MenuItemDrinks 
                title={'Esspresso macchiato'}
                price={"Add to cart $2.89"}/>   
            <MenuItemDrinks 
                title={'Double Esspresso'}
                price={"Add to cart $2.89"}/> 
            <MenuItemDrinks 
                title={'Esspresso macchiato'}
                price={"Add to cart $2.89"}/>
            <MenuItemDrinks 
                title={'Esspresso'}
                price={"Add to cart $2.89"}/>   
            <MenuItemDrinks 
                title={'Double Esspresso'}
                price={"Add to cart $2.89"}/> 
            <MenuItemDrinks 
                title={'Esspresso macchiato'}
                price={"Add to cart $2.89"}/>
            <MenuItemDrinks 
                title={'Esspresso'}
                price={"Add to cart $2.89"}/>   
            <MenuItemDrinks 
                title={'Double Esspresso'}
                price={"Add to cart $2.89"}/> 
            <MenuItemDrinks 
                title={'Esspresso macchiato'}
                price={"Add to cart $2.89"}/>   
        </div>     
        </section>
    )
}