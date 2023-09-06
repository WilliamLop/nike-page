import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import { useState } from "react";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";

export const Hero = () => {

    const [bigShoeImage, setBigShoeImage] = useState(bigShoe1)
    return (
        <section id="home" className="w-full flex xl:flex-row flex-col justify-center
        gap-10 max-container min-h-screen text-center lg:text-left">
            <div className="relative xl:w-2/5 w-full grid justify-items-center lg:justify-items-start
            max-xl:padding-x pt-28">
                <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
                <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[62px] max-sm:leading-[70px] font-bold">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 lg:pr-10
                    rounded-se-xl rounded-ee-xl"
                    >The New Arrival</span>
                    <br />
                    <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
                </h1>
                <p className="text-slate-gray font-montserrat text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
                    Discover stylish Nike arrivals, quality comfort,
                    and innovation for your active life.
                </p>
                <div className="">
                    <Button label="Show now" iconUrl={arrowRight}/>
                </div>
                
                <div className="flex justify-between lg:justify-start lg:gap-16 items-center w-full mt-20 box-border">
                    {statistics.map((stat, index) =>(
                        <div key={index}>
                            <p className="text-[2.1em] lg:text-[2.5em] font-palanquin font-bold text-coral-red">{stat.value}</p>
                            <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
                <img src={bigShoeImage} alt="shoe collection" width={600} height={500} 
                className="object-contain relative z-10 justify-center items-center" />

                <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%]
                    lg:-bottom-[10%] sm:left-[10%] max-sm:px-6 left-0 right-0 mx-auto justify-center">
                    {shoes.map((shoe) => (
                        <div key={shoe} className="">
                            <ShoeCard 
                                imgUrl={shoe}
                                changeBigShoeImage = {(shoe) => setBigShoeImage(shoe)}
                                bigShoeImage = {bigShoeImage}
                            />
                        </div>
                    ))}
                </div>
            </div>            
        </section>
    )
}
export default Hero
