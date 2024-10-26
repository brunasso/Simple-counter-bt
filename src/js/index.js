//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/secondsCounter.jsx";
let incrementando = true;
let seconds = 0;
let intervaloTiempo;



//render your react application
let app = ReactDOM.createRoot(document.getElementById('app'))
app.render(<SecondsCounter counter={seconds}/>)


const renderSetIntervaloTiempo = () =>{
    incrementando ? seconds++ : seconds--;
    app.render(
    <>
        <SecondsCounter counter={seconds} />
        <div className="row w-25 d-flex justify-content-center align-items-center" style={{ position: "relative", paddingTop: "250px", margin: "auto" }}>
            <input id="setTimeIngresado" className="" onChange={ (event) => {
                seconds = event.target.value;
            }}
            placeholder="Ingresar cant. de segundos para la cuenta regresiva" type="number"/>
            <div className="btn-group row" role="group" aria-label="Basic example">
                    <button onClick={() => clearInterval(intervaloTiempo)} type="button" className="btn btn-secondary mt-2">Parar</button>
                    <button onClick={() => {
                        seconds = 0;
                        document.getElementById("setTimeIngresado").value = undefined;
                        }} type="button" className="btn btn-secondary mt-2">Reiniciar</button>
                    <button onClick={() => {
                        intervaloTiempo = setInterval(renderSetIntervaloTiempo, 1000)
                    }} type="button" className="btn btn-secondary mt-2">Resumir</button>
                    <button onClick={() => {
                        incrementando = !incrementando;
                    }} type="button" className="btn btn-secondary mt-2">Cuenta Regresiva</button>
            </div>
        </div>
    </>) 
        if(seconds == 0) {
            alert("Que paso?");
            clearInterval(intervaloTiempo);
        }
    }

intervaloTiempo = setInterval(renderSetIntervaloTiempo, 1000)