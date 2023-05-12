import { useState } from "react"
/** 
 * @param {Object} props
 * @param {Number} props.id
 * @param {String} props.thumbnail
 * @param {String} props.title
 * @param {String} props.description
 * @returns {JSX.Element}
 * @constructor
**/

export default function CardComponen(props){
    let {
        id, title, thumbnail, description
    } = props
    const [loading, setLoading] =useState(false)
    function addToCart(){
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        }, 2000)
        clearTimeout()
    }
    return (
        <section className="{'w-auto min-w-[200px] bg-white rounded-xl app-card}">
            {/* thumbnail */}
            <div className="{app-card-img}">
                <img
                    src={thumbnail}
                    alt="thumnail-card"
                    className="card-img__images"
                />
            </div>

            {/* Childrean component */}
            {props?.children}
            {/* content */}
            <div className={'p-4 w-full'}>
                <h3 className={'text-black'}>{title}</h3>
                <p className={'text-black'}>{description}</p>
                <div>
                    <button onClick={addToCart}>
                        {loading ? "Loading" :"Add to Cart"}
                        </button>
                </div>
            </div>
        </section>
    )
}

// function index(){
//     return (
//         <div>
//             <CardComponen />
//         </div>
//     )
// }