import React, { useState, useEffect } from "react";

export function ApiConexion() {

    const [data, setData] = useState();
    const [busqueda, setBusqueda] = useState();

    const fetchData = async (value) => {
        const res = await fetch(`https://mindicador.cl/api/${value}`)
        const apiData = await res.json()
        console.log(apiData);
        setData(apiData);
    }

    useEffect(() => {
        if (busqueda == null || busqueda == '') {
            let value = "libra_cobre";
            fetchData(value)
        } else {
            let value = busqueda;
            fetchData(value)
        }
    }, [busqueda])

    const handleSearch = e => {
        setBusqueda(e.target.value)
    }

    return (
        <div className="container m-auto" >
            Obtener datos de: <select type='text' placeholder="ingrese" onChange={handleSearch} >
                <option value="libra_cobre">Libra de Cobre</option>
                <option value="tasa_desempleo">Tasa de Desempleo</option>
                <option value="imacec">IMACEC</option>
                <option value="euro">Euro / CLP</option>
                <option value="dolar">Dólar observado / CLP</option>
                <option value="dolar_intercambio">Dólar acuerdo / CLP</option>
                <option value="uf">Unidad de Fomento UF / CLP</option>
                <option value="utm">Unidad Tributaria Mensual UTM / CLP</option>
                <option value="bitcoin">Bitcoin / CLP</option>
            </select>
            {!data ? 'Cargando...' :
                <div className="card">
                    <p><strong>Codigo:</strong> {data.codigo}</p>
                    <p><strong>Nombre:</strong>{data.nombre}</p>
                    <p><strong>Unidad Medida:</strong> {data.unidad_medida}</p>
                    <p><strong>Fecha:</strong> {data.serie[0].fecha.substr(0,10)}</p>
                    <p><strong>Valor</strong> {data.serie[0].valor}</p>
                </div>
            }
        </div>
    );
}
