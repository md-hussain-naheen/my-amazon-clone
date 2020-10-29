import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
             <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
             />
             <div className="home__row">
              <Product 
                id="1430722001"
                title='Razer DeathAdder v2 Gaming Mouse 
                | 20K DPI Optical Sensor - Fastest Gaming Mouse Switch - Chroma RGB Lighting - 8 Programmable Buttons - Rubberized Side Grips - Classic Black' 
                price={69.99} 
                image="data:image/webp;base64,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"
                rating={5}
              />
              <Product
                id="1430622072"
                title="Razer Kraken Gaming Headset 
                | Lightweight Aluminum Frame, Retractable Noise Isolating Microphone"
                price={64.99}
                image="https://images-na.ssl-images-amazon.com/images/I/71APetaWkpL._AC_SL1500_.jpg"
                rating={5}
              />
             </div>

             <div className="home__row">
              <Product
                id="1440623103"
                title="Acer Predator Helios 300 Gaming Laptop 
                | Intel i7-10750H, NVIDIA GeForce RTX 2060 6GB, 15.6 inch Full HD"
                price={1137.99}
                image="https://images-na.ssl-images-amazon.com/images/I/71k45hZkLmL._AC_SL1500_.jpg"
                rating={5}
              />
              <Product
                id="1440623119"
                title="Acer Nitro 5 Gaming Laptop 
                | 9th Gen Intel Core i5-9300H, NVIDIA GeForce GTX 1650, 15.6 inch Full HD IPS Display, 8GB DDR4, 256GB NVMe SSD"
                price={728.0}
                image="https://images-na.ssl-images-amazon.com/images/I/71s1LRpaprL._AC_SL1500_.jpg"
                rating={5} 
              />
              <Product
                id="14406253007"
                title="Dragon Touch Y88X Pro 7 inch Kids Tablets 
                | 2GB RAM 16GB ROM, Android 9.0 Tablet, Kidoz Pre Installed with Disney Contents (More Than $80 Value), Pink"
                price={72.99}
                image="https://images-na.ssl-images-amazon.com/images/I/61Rse3-7g3L._AC_SL1001_.jpg"
                rating={4}
              />
             </div>

             <div className="home__row">
             <Product
               id="14236269138"
               title="AMD Ryzen 7 3700X 8-Core 
               | 16-Thread Unlocked Desktop Processor with Wraith Prism LED Cooler"
               price={294.99}
               image="https://images-na.ssl-images-amazon.com/images/I/717Di3DGIbL._AC_SL1092_.jpg"
               rating={4}
             
             />
             </div>
            </div>
        </div>
    )
}

export default Home
