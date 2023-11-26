export default function SectionHeaders({subHeader, mainHeader,categoryHeader, pickupOrder}) {
    return (
    <>  
        <h2 className="text-secondary-200 font-extrabold underline text-2xl pb-12" >
            {pickupOrder}
        </h2>
        <h3 className="uppercase text-secondary-200 font-semibold leading-4">
            {subHeader}
        </h3>
        <h2 className="text-primary font-bold text-4xl italic">
            {mainHeader}
        </h2>
        <h2 className="text-secondary-200 font-extrabold underline text-2xl pb-12" >
            {categoryHeader}
        </h2>
    </>
    )
}