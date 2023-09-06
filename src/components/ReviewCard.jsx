import { star } from "../assets/icons"

export const ReviewCard = ( {imgURL, customerName, rating, feedback} ) => {
    return (
        <div className="text-center grid gap-6 mt-12 lg:md-10 lg:py-8 rounded-lg">
            <img src={imgURL} alt="img-user" title={customerName} width={120} height={120} 
                className="rounded-full mx-auto border-2 border-coral-red drop-shadow-lg"/>
            <p className="info-text max-w-sm mx-auto">{feedback}</p>
            <div className="flex gap-4 justify-center items-center">
                <img src={star} alt="img-start" title="Star" />
                <p className="font-montserrat text-xl text-slate-gray">({rating})</p>
            </div>
            <p className="font-palanquin text-3xl font-bold">{customerName}</p>
        </div>
    )
}

export default ReviewCard