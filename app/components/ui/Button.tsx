interface buttonProps{
    variant:"primary"|"secondary"|"delete",
    size :"sm"|"md"|"lg",
    text:string,
    onClick?:()=>void,

}

const variantStyles={
    primary:" bg-white text-black text-medium rounded-lg hover:opacity-70 transition-all ease-in-out ",
    secondary:"bg-black text-white text-medium rounded-lg hover:opacity-70 transition-all ease-in-out duration-200 ",
    delete:"bg-red-500 text-white text-medium rounded-lg hover:opacity-70 transition-all ease-in-out duration-200 "
}

const sizeStyles = {
    sm:" px-4 text-xs py-1  ",
    md:" px-6 py-4",
    lg:" px-6 py-4"
}
export const Button = (props:buttonProps)=>{
    return(
        <button onClick={props.onClick} className={`${variantStyles[props.variant]}  ${sizeStyles[props.size]}`}>
            {props.text}
        </button>
    )
}