export const Button = ({label, iconUrl, backgroundColor, textColor, borderColor, fullWidth}) => {
    return (
        <button className={`flex items-center justify-center rounded-full gap-2 px-7 py-4 border font-montserrat
        text-lg leading-none hover:bg-red-600 duration-300 ease-in-out hover:text-white shadow-lg
        ${backgroundColor ? 
            `${backgroundColor} ${textColor} ${borderColor}` 
            : "bg-coral-red text-white border-coral-red"
        } rounded-full ${fullWidth && 'w-full'}`}
        >
            {label}
            {iconUrl && <img src={iconUrl} alt="arrow Icon"  className="ml-2 rounded-full w-5 h-5"/>}
        </button>
    )
}

export default Button