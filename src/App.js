import React, { useState } from 'react'

import Table from './Componets/Table'
import Form from './Componets/Form';

export default function App() {

  const [ contas, setContas ] = useState([]);
  const [ filtered, setFiltered ] = useState();
  const [ indexFilter, setIndexFilter ] = useState();

  function onForm(result, isAtualizar) {
    
    if(isAtualizar === true) {

      const atualiza = contas.map((row, i) => {

        if(i === indexFilter){
          return result; 
        }else{
          return row;
        }

      });

      setContas(atualiza);
      console.log(atualiza);
    }else{

      const validacao = contas.filter((r, i) => {
        return result.email === r.email || result.usuario === r.usuario;
      })

      console.log(validacao)
      if(validacao.length > 0 || validacao === undefined){
        alert("Email ou Usuário já cadastrado.");
      }else{
        setContas([...contas, result ]);
      }
    }

  }

  function deleteContas (event) {
    const deleteContas = contas.filter((row, index) => {
      return index !== event;
    })

    setContas(deleteContas);
  }

  function alterConta (event) {
    const filter = contas.filter((f, i) => {
      // eslint-disable-next-line eqeqeq
      return i == event;
    })

    setFiltered(...filter)
    setIndexFilter(event)
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <Form onForm={onForm} filtered={filtered} />
        </div>
        <div className="col-md-2"></div>
      </div>
      
      <div className="row">

          <Table contas={contas} deleteConta={deleteContas} alterConta={alterConta} />

      </div>
        
    </div>
  )
}
