// import { star } from "../assets/icons"
import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
    return (
        <section className="max-container">
            <div className="text-center grid gap-5">
                <h3 className="text-4xl font-palanquin font-bold">
                    What Our
                    <span className="text-coral-red"> Customers </span>
                    Say?
                </h3>
                <p className="text-slate-gray info-text mx-auto lg:max-w-lg">
                    Hear genuine stories from our satisfied customers about their exceptional experiences with us.
                </p>
            </div>

            {/* USERS CONTAINER */}

            <div className="grid gap-6 lg:grid-cols-2">
                {reviews.map((review) => (
                    <ReviewCard key={review.id} {...review}/>
                ))}
            </div>
        </section>
    )
}

export default CustomerReviews