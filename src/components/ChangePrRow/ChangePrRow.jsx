import './changepr.css'

export default function ChangePrRow({setPrRow}) {
    const handlePrRow = (value) => {
        setPrRow(value)
    }
    return (
        <span className="row">
            {[5, 4, 3, 2, 1].map((value) => (
                <ul
                    className="dots-container"
                    key={value}
                    onClick={()=> handlePrRow(value)}>
                    {[...Array(value)].map((_, index) => (
                        <li key={index} className="dot"></li>
                    ))}
                </ul>
            ))}
        </span>
    )
}