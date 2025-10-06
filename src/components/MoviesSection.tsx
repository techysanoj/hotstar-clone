type Props = {
    items: [string, string][];
};


export default function MoviesSection({items}: Props) {
    return (
        <div>
            {items.map(([title, description], index) => (
                <div key={index} style={{marginBottom: '20px'}}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            ))}
        </div>
    )
}