import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"
import Button from "../components/Button"

export const SuperQuiality = () => {
    return (
        <section id="about-us" className="grid lg:grid-cols-2 gap-8 items-center max-container">

            <div className="grid gap-6 self-center text-center lg:text-left">

                <h2 className="font-palanquin text-4xl 
                capitalize font-bold lg:max-w-lg">
                    We provide You
                    <span className="text-coral-red"> Super</span> 
                    <span className="text-coral-red"> Quality </span> 
                    Shoes
                </h2>

                <p className="lg:max-w-lg info-text">
                    Ensuring premium comfort and style, our meticulously crafted
                    footwear is designed to elevate your experience, providing you with
                    with unmatched quality, innovation, and a touch of elegances
                </p>

                <p className="lg:max-w-lg info-text">
                    Our dedication to detail and excellence ensure your satisfaction
                </p>

                <div className="mx-auto lg:mx-0 mt-5">
                    <Button label="Show now" iconUrl={arrowRight}/>
                </div>

            </div>

            <div className="">
                <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain mx-auto drop-shadow-md" />
            </div>
        </section>
    )
}

export default SuperQuiality
