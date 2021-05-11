import {useState} from 'react';

export const Authorization = ({setAuth}) => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false);
    const onAuth = (e) => {
        if (login === "admin" && password === "kaifprovenance") {
            setAuth(true)
            localStorage.setItem("login", "admin")
        } else {
            setError(true)
        }
    }
    return (<div className={'auth'}>
        <div className="row justify-content-center">
            <div className="col-4">
                <div className="form-group mb-3">
                    <input value={login} onChange={(e) => {
                        setLogin(e.target.value)
                    }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Логин"/>
                </div>
                <div className="form-group">
                    <input value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }} type="password" className="form-control" id="exampleInputPassword1" placeholder="Пароль"/>
                </div>
                <button onClick={() => {onAuth()
                }} type="button" className="btn btn-light btn-lg mt-3 col-4">Войти
                </button>
                {error && <div className={"text-danger mt-2"}>Неверный пароль или логин</div>}
            </div>
        </div>
    </div>)
}