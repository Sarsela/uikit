import './Button.css'

const Button = ({children, option = 'primary', size = 'medium', ...props}) => {
    const classes = `btn btn-${option} btn-${size}`

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    )
}
export default Button