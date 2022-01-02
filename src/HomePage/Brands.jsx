import CarouselMultipleItems from "../components/CarouselMultipleItems.js"

const Brands = () => {


    return (
        
      <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 42, marginBottom: 60 }}>
          <p style={{textAlign: "center", fontSize: "35px", fontWeight: "bold", paddingBottom: "25px"}}>Shop by brands</p>
      <CarouselMultipleItems
          show={4}
      >
          <div>
              <div style={{padding: 8, cursor: "pointer"}}>
                  <img src="https://cdn.freebiesupply.com/images/thumbs/2x/calvin-klein-logo.png" alt="placeholder" style={{width: '100%'}} />
              </div>
          </div>
          <div>
              <div style={{padding: 8, cursor: "pointer"}}>
                  <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/the-north-face-1-logo.png" alt="placeholder" style={{width: '100%'}} />
              </div>
          </div>
          <div>
              <div style={{padding: 8, cursor: "pointer"}}>
                  <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/g-star-logo.png" alt="placeholder" style={{width: '100%'}} />
              </div>
          </div>
          <div>
              <div style={{padding: 8, cursor: "pointer"}}>
                  <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/boss-hugo-boss-logo.png" alt="placeholder" style={{width: '100%'}} />
              </div>
          </div>
          <div>
              <div style={{padding: 8, cursor: "pointer"}}>
                  <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/nike-3-logo.png" alt="placeholder" style={{width: '100%'}} />
              </div>
          </div>
          <div>
              <div style={{padding: 8, cursor: "pointer"}}>
                  <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/diesel-3-logo.png" alt="placeholder" style={{width: '100%'}} />
              </div>
          </div>
          <div>
              <div style={{padding: 8, cursor: "pointer"}}>
                  <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/puma-logo.png" alt="placeholder" style={{width: '100%'}} />
              </div>
          </div>
          <div>
              <div style={{padding: 8, cursor: "pointer"}}>
                  <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/zara-logo.png" alt="placeholder" style={{width: '100%'}} />
              </div>
          </div>

          <div>
              <div style={{padding: 8, cursor: "pointer"}}>
                  <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/tommy-hilfiger-logo.png" alt="placeholder" style={{width: '100%'}} />
              </div>
          </div>
          
      </CarouselMultipleItems>
      </div>

    )
}
export default Brands;



