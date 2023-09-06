import Button from "../components/Button"

export const Subscribe = () => {
    return (
        <section className="grid gap-8 max-container lg:grid-cols-2 items-center">
            <h2 className="text-4xl font-palanquin font-bold text-center lg:text-left">Sign Up from
                <span className="text-coral-red"> Updates </span> <br />
                & Newsletter
            </h2>

            <div className="grid gap-4 lg:grid-cols-[1fr,180px] rounded-full 
            items-center lg:border-2 lg:border-gray-100 lg:gap-0">
                <input type="email" name="email" id="email" placeholder="subscribe@nike.com"
                className="border-2 border-slate-200 lg:border-none outline-none rounded-full py-3 px-6 w-full"/>
                <Button label="Sign Up" />
            </div>
        </section>
    )
}
export default Subscribe
