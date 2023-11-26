
export default function MenuItem({title, description, price, image}) {
    return (         
        <div className="bg-gray-200 p-3 rounded-lg text-center hover:bg-white hover:shadow-lg hover:shadow-black/25 transition-all">
            <div className="text-center">
                {image}
            </div> 
            <h4 className="font-semibold text-md my-2">{title}</h4>
            <p className="text-secondary-200 text-sm">{description}</p>
              <button className="mt-4 mb-0 bg-primary text-white rounded-full px-6 py-1">{price}</button>       
        </div>
    )
}
