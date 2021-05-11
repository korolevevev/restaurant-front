import {OrderTable} from "./OrderTable";
import {NavLink} from "react-router-dom";

export const Orders = ({state, dispatch}) => {

    return (<div className={'text-white'}>
        <NavLink to={'/neworder'}>
            <button type="button" className="btn btn-light my-5">Добавить заказ</button>
        </NavLink>
        <table className="table table-hover table-dark">
            <thead>
            <tr>
                <th scope="col">Номер стола</th>
                <th scope="col">Посетитель</th>
                <th scope="col">Официант</th>
                <th scope="col">Общая сумма заказа</th>

            </tr>
            </thead>
            <tbody>
            {state && state.map(el => <OrderTable dispatch={dispatch} key={el.id} el={el}/>)}
            </tbody>
        </table>
    </div>)
}