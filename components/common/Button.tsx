

const Button: React.FC = ({label, className}) => {
    return (
        <button className={className}>
            {label}
        </button>
    )
}


export default Button;