import React from 'react';

const collapse = (props) => (
    <div className="container p-2">
        <button type="button" className="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
            aria-controls="collapseExample">{props.innerText}</button>

        <div className="collapse p-2" id="collapseExample">
            <div className="card card-body">
                {props.children}
            </div>
        </div>
    </div>
)

export default collapse;