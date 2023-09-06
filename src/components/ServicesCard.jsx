const ServicesCard = ({ imgURL, label, subtext }) => {
    return (
        <div className="w-full rounded-2xl grid gap-4
        shadow-3xl px-10 py-16">
            <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
                <img src={imgURL} alt={label} width={24} height={24} />
            </div>
            <h3 className="text-3xl font-palanquin leading-normal font-bold">{label}</h3>
            <p className="break-words font-montserrat text-lg leading-normal text-slate-gray">{subtext}</p>
        </div>
    )
}

export default ServicesCard