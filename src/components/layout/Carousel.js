import CarouselMultipleItems from "./CarouselMultipleItems.js"

const Carousel = () => {
    return (
        <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 62, marginBottom: 60 }}>
            <CarouselMultipleItems
                show={4}
            >
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://static.footshop.com/563026-full_product/130792.jpg" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://static.footshop.com/260825-full_product/53079.jpg" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://static.footshop.com/584869-full_product/166036.jpg" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://static.footshop.com/569935-full_product/136489.jpg" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://static.footshop.com/479215/115417.jpg" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://static.footshop.com/602494/168787.jpg" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://static.footshop.com/622531-full_product/182155.jpg" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://static.footshop.com/404908-full_product/85876.jpg" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>

                <div>
                    <div style={{padding: 8}}>
                        <img src="https://static.footshop.com/550852/116098.jpg" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
            </CarouselMultipleItems>
        </div>
    )
}

export default Carousel;