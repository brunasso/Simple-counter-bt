import React from 'react';

const Card = (props) => {
    return(
        <div className="card text-bg-dark mb-3 mx-5" style={{maxWidth: "18rem", transform: "scale(2.5)"}}>
            <div className="card-body">
                <h5 className="card-title">{props.digito}</h5>
                <p className="card-text"></p>
            </div>
        </div>
    )
}

const SecondsCounter = (props) => {
    return (
     <div className="d-flex justify-content-center align-items-start" style={{ position: "absolute", top: 75, width: "100%", padding: "5px 0" }}>
        <div className="card text-bg-dark mb-3 mx-5" style={{ maxWidth: "18rem", transform: "scale(2.5)", textAlign: "center", width: "45px" }}>
            <div className='card-body d-flex justify-content-center align-items-center' style={{ height: "100%" }}>
                <i className="far fa-clock fa-2x" />
            </div>
        </div>
        <Card digito={Math.floor(props.counter / 100000 % 10)} style={{ marginRight: "5px" }} />
        <Card digito={Math.floor(props.counter / 10000 % 10)} style={{ marginRight: "5px" }} />
        <Card digito={Math.floor(props.counter / 1000 % 10)} style={{ marginRight: "5px" }} />
        <Card digito={Math.floor(props.counter / 100 % 10)} style={{ marginRight: "5px" }} />
        <Card digito={Math.floor(props.counter / 10 % 10)} style={{ marginRight: "5px" }} />
        <Card digito={props.counter % 10} />
    </div>

    );
};



export default SecondsCounter;