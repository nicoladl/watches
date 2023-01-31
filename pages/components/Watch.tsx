export const Watch = ({ id, name }) => {
    return (
        <h3>
            <a href={`/watches/${id}`}>{name}</a>
        </h3>
    )
}