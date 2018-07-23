import React from 'react';


const JobForms = (props) => {
    return (

        <div className="container p-2">
            <button type="button" className="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
                aria-controls="collapseExample">Nova vaga</button>
            <div className="collapse p-2" id="collapseExample">
                <div className="card card-body">
                    <form>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Nome</label>
                        <input className="form-control" id="exampleFormControlInput1" />
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Descrição</label>
                        <textarea className="form-control" id="exampleFormControlInput2" rows="5"></textarea>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col">
                                <label for="exampleFormControlInput1">Habilidades necessárias</label>
                                <textarea className="form-control" id="exampleFormControlInput2" rows="3"></textarea>
                            </div>
                            <div className="col">
                                <label for="exampleFormControlInput1">Diferenciais</label>
                                <textarea className="form-control" id="exampleFormControlInput2" rows="3"></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="row">
                            <div className="col">
                                <label for="exampleFormControlInput1">Salário base</label>
                                <input className="form-control" id="exampleFormControlInput2" />
                            </div>
                            <div className="col">
                                <label for="exampleFormControlInput1">Área</label>
                                <select className="form-control" id="exampleFormControlSelect1">
                                    <option>Desenvolvimento</option>
                                    <option>Design</option>
                                    <option>Teste</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" for="gridCheck">Vaga pra PCD</label>
                        </div>
                    </div>
                    <button type="button" className="btn btn-success float-right">Criar vaga</button>

                    </form>
            </div>
        </div>
        </div>

    )
};

export default JobForms;