export const TableOneCarShowRoom = ({el}) => {

    return (<tr>
        <td>{el.model}</td>
        <td>{el.year}</td>
        <td>{el.color}</td>
        <td>{el.category}</td>
        <td>{el.power}</td>
        <td>{el.price}</td>
    </tr>)
}