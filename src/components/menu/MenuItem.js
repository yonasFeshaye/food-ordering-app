import Image from "next/image"
export default function MenuItem() {
    return (         
        <div className="bg-gray-200 p-3 rounded-lg text-center hover:bg-white hover:shadow-lg hover:shadow-black/25 transition-all">
            <div className="text-center">
                <img src='/smoked-salmon.jpg' alt="breakfast" className="max-h-auto max-h-24 block mx-auto"/>
            </div> 
            <h4 className="font-semibold text-md my-2">Smoked Salmon Melt</h4>
            <p className="text-secondary-200 text-sm">Wild Smoked Salmon, Spinach, Pesto*, Capers, Onion, Tomatoes, Havarti, Cheese & On Croissant.</p>
            <button className="mt-4 bg-primary text-white rounded-full px-6 py-1">Add to cart $11</button>
        </div>
    )
}