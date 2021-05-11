import React from 'react';
import {useHistory} from "react-router";
function Bills({el}) {
    let history = useHistory();
    if(!el.dishList){
        history.push('/carshowroom')
        alert("Заказ пуст")
        return null
    }
    return (
        <div className={"text-white mt-5"}>
            <h3>Чек по заказу {el.id}</h3>
            {el.dishList.map(el1 => <div className={'row'}>
                <div className={'col-2'}>{el1.dish}</div><div className={'col-2'}>{el1.price} руб.</div>
            </div>)}
            <div className={'row'}><div className={'col'}>Номер стола: {el.table_id}</div></div>
            <div className={'row'}><div className={'col'}>Оплачен: {el.paid ? 'Да' : 'Нет'}</div></div>
            <div className={'row'}><div className={'col'}>Сумма заказа: {el.total}</div></div>
        </div>
    );
}

export default Bills;