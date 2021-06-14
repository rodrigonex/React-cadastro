import React from 'react'

export default function TableHeader() {
    return (
        <thead className="thead-dark">
            <tr>
                <td>Nome</td>
                <td>Email</td>
                <td>CPF</td>
                <td>RG</td>
                <td>Telefone</td>
                <td>CEP</td>
                <td>Logadura</td>
                <td>Número</td>
                {/* <td>Complemento</td> */}
                <td>Bairro</td>
                <td>Cidade</td>
                {/* <td>Estado</td> */}
                <td>Ações</td>
            </tr>
        </thead>
    )
}
