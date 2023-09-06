import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import {Button} from "../components/Button";

export const SpecialOffer = () => {
    return (
        <section className="grid gap-10 lg:grid-cols-2 max-container">
            {/* CONTENEDOR IMG */}
            <div className="">
                <img src={offer} alt="" width={773} height={687}
                className="object-contain w-full drop-shadow-md" />
            </div>
            {/* CONTENDOR INFO */}
            <div className="grid self-center gap-6 text-center lg:text-left">
                <h2 className="font-palanquin text-4xl 
                capitalize font-bold lg:max-w-lg">
                    <span className="text-coral-red"> Special </span> 
                    Offer
                </h2>
                <p className="lg:max-w-md info-text">
                    Embark on a shopping journey that redefines your experience with
                    unbeatable deals. From premier slections to incredible savings, we 
                    offer unparalleled value that sets us apart.
                </p>
                <p className="lg:max-w-lg info-text">
                    Navigate a realm of possibilities designed to fulgill your unique desires,
                    surpassing the loftiest expectations. Your journey with us is nothing short of exceptional
                </p>
                <div className="flex flex-col justify-center lg:justify-start
                md:flex-row gap-4 md:gap-8 mt-6">
                    <Button label="Shop now" iconUrl={arrowRight}/>
                    <Button label="Learn more" backgroundColor='bg-white'
                    borderColor='border-slate-gray' textColor='text-slate-gray'/>
                </div>
            </div>
        </section>
    )
}

export default SpecialOffer

