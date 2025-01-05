interface buttonProps{
    variant:"primary"|"secondary",
    size :"sm"|"md"|"lg",
    text:string

}

const variantStyles={
    primary:" bg-white text-black text-medium rounded-lg hover:opacity-70 transition-all ease-in-out ",
    secondary:"bg-black text-white text-medium rounded-lg hover:opacity-70 transition-all ease-in-out duration-200 "
}

const sizeStyles = {
    sm:" px-2 py-2",
    md:" px-6 py-4",
    lg:" px-6 py-6"
}
export const Button = (props:buttonProps)=>{
    return(
        <button className={`${variantStyles[props.variant]}  ${sizeStyles[props.size]}`}>
            {props.text}
        </button>
    )
}