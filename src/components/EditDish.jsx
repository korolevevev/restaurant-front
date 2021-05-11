import {useEffect, useState} from "react";
import {LoadRing} from "./LoadRing";
import axios from "axios";
import {useHistory} from "react-router-dom";

export const EditDish = ({state, dataCar, dispatch}) => {
    let history = useHistory();
    const [formState, setFormState] = useState({
        dish: "",
        category: "",
        description: "",
        calories: "",
        weight: "",
        price: "",
        allergic: false
    });
    useEffect(() => {
        if (dataCar) {
            setFormState(dataCar)
        } else {
            history.push("/dishes")
        }
    }, [dataCar, history])
    const onUpdate = () => {
        axios.put("http://localhost:3000/api/dishes/update", formState).then(response => {
            console.log(formState)
            dispatch({type: "ADD_DATA_DISH", payload: response.data})
        });
        alert("Данные о блюде обновлены!")
        history.push("/dishes")
    }
    if (!dataCar) {
        return <LoadRing/>
    }
    const validate = formState.model && formState.color && formState.category && formState.power &&
        formState.price && formState.year &&
        formState.year > 1900 && formState.year <= 2021 && formState.power > 0 && formState.power <= 3000
    return (<div className={"row justify-content-center mt-5"}>
            <h2 className="row text-white justify-content-center">Редактировать блюдо</h2>
            <div className="row justify-content-center">
                <div className=" col-4 form-group">
                    <label htmlFor="model">Блюдо</label>
                    <input type="text" className="form-control mt-1" id="model" placeholder="Борщ"
                           onChange={e => {
                               setFormState({...formState, dish: e.target.value})
                           }} value={formState.dish}/>
                </div>
            </div>
            <div className="row mt-2 justify-content-center">
                <div className=" col-4 form-group">
                    <label htmlFor="color">Категория</label>
                    <input type="text" className="form-control mt-1" id="color" placeholder="Суп"
                           value={formState.category}
                           onChange={e => {
                               setFormState({...formState, category: e.target.value})
                           }}
                    />
                </div>
            </div>
            <div className="row mt-2 justify-content-center">
                <div className=" col-4 form-group">
                    <label htmlFor="color">Описание</label>
                    <input type="text" className="form-control mt-1" id="color" placeholder="красный борщ"
                           value={formState.description}
                           onChange={e => {
                               setFormState({...formState, description: e.target.value})
                           }}
                    />
                </div>
            </div>
            <div className="row mt-2 justify-content-center">
                <div className=" col-4 form-group">
                    <label>Цена, руб</label>
                    <input type="number" className="form-control mt-1" placeholder="1000"
                           value={formState.price}
                           onChange={e => {
                               setFormState({...formState, price: e.target.value})
                           }}
                    />
                    {!(formState.price > 0 && formState.price <= 3000) &&
                    <div style={{color: "grey", fontSize: "10px"}}>Не более 3000</div>}
                </div>
            </div>
            <div className="row mt-2 justify-content-center">
                <div className=" col-4 form-group">
                    <label>Вес, г</label>
                    <input type="number" className="form-control mt-1" placeholder="700"
                           value={formState.weight}
                           onChange={e => {
                               setFormState({...formState, weight: e.target.value})
                           }}
                    />
                </div>
            </div>
            <div className="row mt-2 justify-content-center">
                <div className=" col-4 form-group">
                    <label>Калорийность, ккал</label>
                    <input type={"number"} className="form-control mt-1" placeholder="202"
                           value={formState.calories}
                           onChange={e => {
                               setFormState({...formState, calories: e.target.value})
                           }}
                    />
                    {!(formState.calories > 0 && formState.calories <= 10000) &&
                    <div style={{color: "grey", fontSize: "10px"}}> Неверный формат данных</div>}
                </div>
            </div>
            <div className="row mt-3 justify-content-center">
                <div className=" col-4 form-group">
                    <input type="checkbox" className="form-check-input" checked={formState.allergic} onChange={e => {
                        setFormState({...formState, allergic: e.target.checked})
                    }} id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Содержание аллергенов</label>
                </div>
            </div>

            <div className="row mt-5 justify-content-center">
                <button onClick={onUpdate} type="button"
                        className="btn btn-light col-3 btn-sm">Обновить
                </button>
            </div>
        </div>
    );
}