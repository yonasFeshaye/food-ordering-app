export default function SectionHeaders(subHeader, mainHeader,categoryHeader) {
    <>  
        <h3 className="uppercase text-secondary-200 font-semibold leading-4">
                    {subHeader}
                </h3>
                <h2 className="text-primary font-bold text-4xl italic">
                    {mainHeader}
                </h2>
                <h2 className="text-secondary-200 font-semibold text-2xl" >
                    {categoryHeader}
                </h2>
    </>
}