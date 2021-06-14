import React from 'react'

export default function TableBody(props) {
    const row = props.contas.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.usuario}</td>
                <td>{row.email}</td>
                <td>{row.cpf}</td>
                <td>{row.rg}</td>
                <td>{row.telefone}</td>
                <td>{row.result.cep}</td>
                <td>{row.result.logradouro}</td>
                <td>{row.numero}</td>
                {/* <td>{row.complemento}</td> */}
                <td>{row.result.bairro}</td>
                <td>{row.result.localidade}</td>
                {/* <td>{row.result.uf}</td> */}
                <td>
                    <input className="btn btn-info" type="button" value="Editar" onClick={ () => props.alterConta(index)} /> 
                    <input className="btn btn-danger mt-2" type="button" value="Deletar" onClick={ () => props.deleteConta(index)}/>     
                </td>
            </tr>
        )
    })
    return (
        <tbody>{row}</tbody>
    )
}
