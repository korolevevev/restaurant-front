import './App.css';
import {useEffect, useReducer, useState} from 'react';
import axios from "axios";
import {Authorization} from "./components/Authorization";
import {reducer} from "./reducer";
import {Dishes} from "./components/Dishes";
import {Header} from "./components/Header";
import {Route} from "react-router-dom";
import {Info} from "./components/Info";
import {LoadRing} from "./components/LoadRing";
import {Orders} from "./components/Orders";
import {OneShowRoomPage} from "./components/OneShowRoomPage";
import {NewDish} from "./components/NewDish";
import {EditDish} from "./components/EditDish";
import {NewOrder} from "./components/NewOrder";
import Bills from "./components/Bills";

function App() {
    const [state, dispatch] = useReducer(reducer, { dishList: []});
    const [auth, setAuth] = useState(false);
    const [loader, setLoader] = useState(true)
    window.state = state;
    useEffect(() => {
        if (localStorage.getItem("login") === "admin") {
            setAuth(true)
        }
        axios.get('http://localhost:3000/api/orders/').then((response) => {
            dispatch({type: "ADD_DATA_ORDERS", payload: response.data})
        })
        axios.get('http://localhost:3000/api/dishes/').then((response) => {
            dispatch({type: "ADD_DATA_DISH", payload: response.data})
            console.log(response)
        })
        setLoader(false)
    }, [])
    if (loader) {
        return <LoadRing/>
    }
    const isAuth = (!localStorage.getItem("login") === "admin" || !auth)
    return (
        <div className="App">
            {!isAuth && <Header setAuth={setAuth}/>}
            <div className="container">
                {isAuth ? <Authorization setAuth={setAuth}/> :
                    <Route path={'/dishes'} render={() => <Dishes dispatch={dispatch} state={state.cars} />}/>}
                {!isAuth && <Route path={'/newdish'} exact
                                   render={() => <NewDish dispatch={dispatch} state={state.orders}/>}/>}
                {!isAuth && <Route path={'/showroomcreate'} exact
                                   render={() => <NewOrder dispatch={dispatch}/>}/>}
                {!isAuth && <Route path={'/carupdate'} exact
                                   render={() => <EditDish dispatch={dispatch} dataCar={state.createPage}/>}/>}
                {!isAuth && <Route path={'/carshowroom'} exact
                                   render={() => <Orders dispatch={dispatch} state={state.orders}/>}/>}
                {!isAuth &&
                <Route path={'/carshowroom/:id'}
                       render={() => <OneShowRoomPage state={state.oneShowRoom} dispatch={dispatch}/>}/>}
                {!isAuth && <Route path={'/bills'} render={() => <Bills el={state.dishList}/>}/>}
                {!isAuth && <Route path={'/info'} render={() => <Info/>}/>}
                {!isAuth &&
                <Route path={"/"} exact render={() => <div className="row justify-content-center">
                    <div className="col-6">
                        <h2 className={"text-white mt-5 text-center"}>Информационно-справочная система ресторана</h2>
                        <img width={'600px'}
                             src="./kaif.jpg" alt=""/>
                    </div>
                </div>}/>}
            </div>
        </div>
    );
}

export default App;
