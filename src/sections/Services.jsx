import ServicesCard from "../components/ServicesCard"
import { services } from "../constants"

const Services = () => {
    return (
        <section className="max-container grid lg:grid-cols-3 gap-4">
            {services.map((service) => (
                <ServicesCard key={service.label} {...service} />
            ))}
        </section>
    )
}

export default Services