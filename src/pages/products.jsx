import React from 'react'
import FilterButton from '../components/FilterButton'
import Card from '../components/card.jsx'
import HeaderMain from '../components/header.jsx'
import FooterMain from '../components/footer.jsx'



export default function Products() {
    const products = [
        { img: '/products/p-1.jpeg', title: 'AirStride Cushioned Sneakers', price: '$38.00' },
        { img: '/products/p-2.jpg', title: 'Play Long Sleeve', price: '$38.00' },
        { img: '/products/p-3.jpg', title: 'Golf Bag', price: '$38.00' },
        { img: '/products/p-4.jpg', title: 'Active Sports Cap', price: '$38.00' },
    ]


    return (
        <section className="container mx-auto ">
            <div>
                <HeaderMain
                textColorButton='text-black'
                buttonUlP='underline'
                />
            </div>
            <div className='my-12 p-4'>
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold">Explore Our Exclusive<br />Golf Product</h2>
                </div>


                <div className="mt-6 flex items-center justify-between">
                    <div className="flex gap-3">
                        <FilterButton active>See all</FilterButton>
                        <FilterButton>Golf Balls</FilterButton>
                        <FilterButton>Gloves</FilterButton>
                        <FilterButton>Accessories</FilterButton>
                    </div>
                    <div>
                        <button className="px-4 py-2 bg-primary text-white rounded-full">Explore Categories</button>
                    </div>
                </div>


                <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="grid grid-cols-1 gap-6">
                        <Card img={products[0].img} title={products[0].title} price={products[0].price} heightCard='h-120' />
                        <div className="grid grid-cols-2 gap-6">
                            <Card img={products[2].img} title={products[2].title} price={products[2].price} heightCard='h-80' />
                            <Card img={products[3].img} title={products[3].title} price={products[3].price} />
                        </div>
                    </div>


                    <div className="grid grid-cols-1 gap-6">
                        <Card img={products[1].img} title={products[1].title} price={products[1].price} />
                    </div>
                </div>
            </div>
            <div>
                <FooterMain/>
            </div>
        </section>
    )
}