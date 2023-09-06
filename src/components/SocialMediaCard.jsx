
export const SocialMediaCard = ( {src, alt} ) => {
    return (
        <div className="bg-white rounded-full p-3 mt-4 hover:bg-red-600 cursor-pointer
            duration-300 ease-in-out">
            <img src={src} alt={alt} className="" />
        </div>
    )
}

export default SocialMediaCard