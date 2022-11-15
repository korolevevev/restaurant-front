import React from 'react';
import {useHistory} from "react-router";
import {HorizontalGridLines, LineSeries, VerticalGridLines, XAxis, XYPlot, YAxis} from "react-vis";
function Bills({el}) {
    let history = useHistory();
    if(!el.dishList){
        history.push('/bill')
        alert("Заказ пуст")
        return null
    }
    let data = []
    if (el.dishList) {
        data = el.dishList.map((el1) => {return {x: el1.dish, y: (el1.price)}})
        console.log(data)
    }else{
        history.push("/carshowroom")
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
            <div style={{ backgroundColor: "black", borderRadius: "10px"}}>
                <XYPlot
                    xType="ordinal"
                    width={1000}
                    height={500}>
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis title="Название блюда" style={{stroke: "#fafafa"}}/>
                    <YAxis title="Цена, руб"  style={{stroke: "#fafafa"}}/>
                    <LineSeries
                        data={data}
                        style={{stroke: 'violet', strokeWidth: 1}}/>
                </XYPlot>
            </div>
        </div>
    );
}

export default Bills;