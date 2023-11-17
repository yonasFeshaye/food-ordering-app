import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

export default function HomeMenu() {
    return (
        <section className="">
            <div className="absolute left-0 right-0 w-full justify-start">
                <div className="absolute left-0 -top-[60px] text-left -z-10">
                    <Image src={'/salladL.png'} width={100} height={100} alt="sallads" />
                </div>
                <div className="absolute -top-[60px] right-0 -z-10">
                    <Image src={'/salladR.png'} width={100} height={100} alt="sallads"/>
                </div>
            </div>
            <div className="text-center mb-4">
                <SectionHeaders
                    subHeader={"Check out"}
                    mainHeader={"Our Menu"} 
                    categoryHeader={".Order Online or Call to Order Pickup (202)588-7061 "}
               />
            </div>  
            <div className="grid grid-cols-4 gap-4 px-10">
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            </div> 
        </section>
    )
}