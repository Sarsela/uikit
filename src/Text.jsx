import './Text.css'

const Text = ({
    children,
    size = 'md',
    weight = 'normal',
    style = 'default',
    ellipsizeMode,
    ...props
}) => {
    const classes = `text text-${size} text-${weight} text-${style} ${ellipsizeMode ? 'text-ellipsis' : ''}`
    return (
        <span className={classes} {...props}>
            {children}
        </span> 
    )
}
export default Text