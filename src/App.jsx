import React, { Fragment, useState } from "react";
import { ApiConexion } from './components/ApiConexion';

function App() {

    const [reglamento, setReglamento] = useState(false);

    function changeButton(changeButton) {
        setReglamento(changeButton);
    }

    return (
        <Fragment>
            <section className="m-auto">
                <div className="icons icon-list">
                    <h4>Rodrigo Antonio Rivera Beltrán</h4>
                    <a href="https://rhospace.github.io/">Mi Github</a>
                </div>
                <div>
                    <p>
                       Valores recogidos de la Api mindicador.cl. 
                    </p>
                </div>
            </section>
            <ApiConexion/>
        </Fragment>
    );
}

export default App;
