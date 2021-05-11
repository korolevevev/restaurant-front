import axios from "axios";
import {useHistory} from "react-router-dom";

export const DishTable = ({el, dispatch}) => {
    const history = useHistory();
    const onDelete = () => {
        return axios.delete(`api/dishes/${el.id}`).then(() => axios.get('api/dishes/').then((response) => {
            dispatch({type: "ADD_DATA_DISH", payload: response.data})
        }))
    }
    const onCreate = () => {
        dispatch({type: "ADD_DATA_TO_CREATE_PAGE", payload: {...el}})
        history.push('/newdish')
    }
    return (<tr>
        <td>{el.dish}</td>
        <td>{el.category}</td>
        <td>{el.description}</td>
        <td>{el.calories}</td>
        <td>{el.weight}</td>
        <td>{el.price}</td>
        <td>{el.allergic ? "Да" : "Нет"}</td>
        <td className={"mx-auto"}>
            <svg onClick={onDelete} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-x"
                 viewBox="0 0 16 16">
                <path
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </td>
        <td className={"mx-auto"}>
            <svg onClick={onCreate} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil"
                 viewBox="0 0 16 16">
                <path
                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
            </svg>
        </td>
    </tr>)
}