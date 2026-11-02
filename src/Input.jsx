
const Input = ({
    type = 'text',
    size = 'medium',
    ...props
}) => {
    const classes = `input input-${size}`

     return (
        <input 
            type={type} 
            className={classes} 
            {...props} 
        />
     )   
}
export default Input