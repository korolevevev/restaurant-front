import {useState,useEffect} from 'react';
import {LoadRing} from "./LoadRing";
import {TableOneCarShowRoom} from "./TableOneShowRoom";
import {NavLink, useHistory, useParams} from "react-router-dom";
import axios from "axios";
import {HorizontalGridLines, LineSeries, VerticalGridLines, XAxis, XYPlot, YAxis} from "react-vis";

export const OneShowRoomPage = ({state, dispatch}) => {
    const [loader, setLoader] = useState(true)
    let { id } = useParams();
    const history = useHistory()
    useEffect(()=> {
        axios.get(`http://localhost:3000/api/carshowroom/${id}`).then((response) => {
            dispatch({type: "ADD_DATA_ONE_SHOWROOM", payload: response.data})
        })
    }, []);
    let data = []
    if (state) {
        data = state.map((el) => {return {x: el.model, y: (el.price / 1000000)}})
        console.log(data);
        setTimeout(() => {
            setLoader(false)
        }, 500)
    }else{
        history.push("/carshowroom")
    }
    if (loader) {
        return <LoadRing/>
    }
    return (<div className={'text-white'}>
        <NavLink to={'/carshowroom'}>
            <button type="button" className="btn btn-light">Назад</button></NavLink>
        <table className="table table-hover table-dark mt-2">
            <thead>
            <tr>
                <th scope="col">Модель</th>
                <th scope="col">Год выпуска</th>
                <th scope="col">Цвет</th>
                <th scope="col">Категория</th>
                <th scope="col">Мощность</th>
                <th scope="col">Цена</th>
            </tr>
            </thead>
            <tbody>
            {state.map(el => <TableOneCarShowRoom dispatch={dispatch} key={el.id} el={el}/>)}
            </tbody>
        </table>
        <div style={{ backgroundColor: "black", borderRadius: "10px"}}>
            <XYPlot
                xType="ordinal"
                width={1000}
                height={500}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis title="Модель авто" style={{stroke: "#fafafa"}}/>
                <YAxis title="Стоимость млн рублей"  style={{stroke: "#fafafa"}}/>
                <LineSeries
                    data={data}
                    style={{stroke: 'violet', strokeWidth: 1}}/>
            </XYPlot>
        </div>
    </div>)
}