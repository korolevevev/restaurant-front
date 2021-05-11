import {useHistory} from "react-router";
export const OrderTable = ({el,dispatch}) => {
    let history = useHistory();
    const onOrder = () => {
        history.push(`/bills`)
        dispatch({type: 'ADD_DATA_TO_BILLS', payload: el});
    }
    console.log(el);
    return (<tr onClick={onOrder}>
        <td>{el.table_id}</td>
        <td>{el.waiter_name}</td>
        <td>{el.customer_name}</td>
        <td>{el.total}</td>
    </tr>)
}