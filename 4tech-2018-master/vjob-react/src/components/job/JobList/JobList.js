import React, { Component } from 'react';
import Cards from '../Cards/Cards.js';
import vagas from '../../../assets/vagas';

class JobList extends Component {
    state = {
        jobs: [],
    }

    constructor() {
        super();
    }

    componentDidMount() {
        this.setState({ jobs: vagas });
    }

    jobRemoveHandler = (id, nome) => {
        if (window.confirm(`Deseja realmente excluir esta vaga "${nome}"?`)) {
            window.alert("Vaga excluída");
        }
    }

    jobEditHandler = (id, nome) => {
        window.alert(`A vaga "${nome}" foi atualizada`);
    }

    render() {

        let vagasEncontradas =
            this.state.jobs.map(vaga => {
                return (
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <Cards
                            name={vaga.name}
                            description={vaga.description}
                            salary={vaga.salary}
                            area={vaga.area}
                            editHandler={() => this.jobEditHandler(vaga.id, vaga.name)}
                            removeHandler={() => this.jobRemoveHandler(vaga.id, vaga.name)}
                        />
                    </div>
                )
            });

        return (
            <div className="row">
                {vagasEncontradas}
            </div>
        );
    }
}

export default JobList;