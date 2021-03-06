import React, { Fragment, useState } from "react";
import { ApiConexion } from './components/ApiConexion';

function App() {

    return (
        <Fragment>
            <section className="m-auto">
                <div>
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
