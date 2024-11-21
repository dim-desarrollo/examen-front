import { useEffect, useState } from "react";
import "./Tabla.css"

function Tabla() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("./Tabla.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error al cargar el archivo JSON");
                }
                return response.json();
            })
            .then((jsonData) => setData(jsonData))
            .catch((error) => console.error("Error:", error));

    }, [])

    return (
        <>
            <table className="table-container">
                <thead>
                    <tr>
                        <th>Opciones</th>
                        <th>Número</th>
                        <th>Tipo</th>
                        <th>Nro. Expediente</th>
                        <th>Fecha Generación</th>
                        <th>Fecha Presentación</th>
                        <th>Fecha Fin</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>
                                <button>{item.Opcion1 === "ver" ? "📄" : ""}</button>
                                <button>{item.Opcion2 === "impresion" ? "🖨️" : ""}</button>
                            </td>
                            <td>{item.Numero}</td>
                            <td>{item.Tipo}</td>
                            <td>{item.Nro_Expediente}</td>
                            <td>{item.Fecha_Generacion}</td>
                            <td>{item.Fecha_Presentacion}</td>
                            <td>{item.Fecha_Fin || "Sin finalizar"}</td>
                            <td
                                style={{
                                    color: item.Estado === "EN CURSO" ? "red" : "green",
                                    fontWeight: "bold",
                                }}
                            >
                                {item.Estado}
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </>
    )
}

export default Tabla;