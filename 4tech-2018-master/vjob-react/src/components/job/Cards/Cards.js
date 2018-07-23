import React from 'react';
import imgDesigner from '../../../assets/images/designer.png';
import imgDeveloper from '../../../assets/images/developer.png';
import imgTester from '../../../assets/images/tester.png';



const Cards = (props) => {

    let imagem = null;
    switch (props.area) {
        case 'Desenvolvimento':
            imagem = imgDeveloper;
            break;
        case 'Design':
            imagem = imgDesigner;
            break;
        case 'Teste':
            imagem = imgTester;
            break;
        default:
            imagem = null;
            break;
    }
    return (
            <div className="card" >
                <img className="card-img-top" src={imagem} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <strong>Descrição:</strong>
                    <p className="card-text">{props.description}</p>
                    <p>
                        <strong>Salário base: </strong>
                        {props.salary}
                        <br />
                        <br />
                    </p>
                    <div className="buttons">
                        <button type="button" className="btn btn-warning" onClick={props.editHandler}>
                            <i className="far fa-edit"></i>
                        </button>
                        <button type="button" className="btn btn-danger" onClick={props.removeHandler}>
                            <i className="fas fa-trash-alt"></i>
                        </button>
                    </div>

                </div>
            </div>
    )
}

export default Cards;