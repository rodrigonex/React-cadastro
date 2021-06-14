import React, { useEffect, useState } from 'react'
import '../index.css'

const initialize = {
    cpf: '',
    email: '',
    numero: '',
    rg: '',
    complemento: '',
    telefone: '',
    usuario: '',
    index: '',
    result: {
        logradouro: '',
        bairro: '',
        localidade: '',
        uf: '',
    }
}

export default function Form(props) {

    const [ resultForm, setResultForm ] = useState(initialize);
    const [ cep, setcep ] = useState(''); 
    const [ isAtualz, setIsAtualz ] = useState(false);  

    useEffect(() =>{

        if(cep.length > 6){
            response()   
        }

        async function response(){
            const link = `https://viacep.com.br/ws/${cep}/json/`;
    
            const response = await fetch(link);
            const data = await response.json();

            let result = {
                cep: data.cep,
                logradouro: data.logradouro,
                localidade: data.localidade,
                bairro: data.bairro,
                uf: data.uf,
            }

            setResultForm({...resultForm, result})
          }
          
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[cep]);
    

    useEffect( () => {
        if(props.filtered !== undefined){
            let filter = props.filtered;
            
            setcep(props.filtered.result.cep);
            setResultForm(filter);
            setIsAtualz(true);  
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.filtered])
  
    function onChange(event) {
        const { name, value } = event.target;
        
        setResultForm(
            {
                ...resultForm,
                [name]: value,
            }
        )
    }

    function onChangeCep(event){
        const {value } = event.target;

        setcep( value);
    }
    
    function envioForm(){  

            if(isAtualz === true) {
                props.onForm(resultForm, true); 
            }else{
                props.onForm(resultForm, false);   
            } 

            setResultForm(initialize);
            setIsAtualz(false);

            setcep('')
  
            document.getElementById('cpf').border = 'none';  
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <form className="mt-3 border p-4" onSubmit={handleSubmit}>
            <h3 className="text-md-center ">Formularo de Cadastro</h3>
            <div className="form-group mt-3">
                <label >Usuário</label>
                <input className="form-control" type="text" id="usuario" name="usuario" value={resultForm.usuario} placeholder="Digite seu usuário" required onChange={onChange} />
            </div>
            <div className="form-group">
                <label >Email</label>
                <input className="form-control" type="text" id="email" name="email" placeholder="Digite seu email" value={resultForm.email} onChange={onChange} required />
            </div>
            <div className="form-group form-inline">
                <label className="mr-4" >CPF</label>
                <input className="form-control " type="text" id="cpf" name="cpf" placeholder="Digite seu CPF" value={resultForm.cpf} onChange={onChange} required />
                <label className="mr-4 ml-4" >RG</label>
                <input className="form-control form-block" type="text" id="rg" name="rg" placeholder="Digite seu RG" value={resultForm.rg} onChange={onChange} required />
            </div>

            <div className="form-group form-inline">
                <label className="mr-2">Telefone</label>
                <input className="form-control" type="text" id="telefone" name="telefone" placeholder="Digite seu Telefone" value={resultForm.telefone} onChange={onChange} required />

                <label className="mr-2 ml-3">Cep</label>
                <input className="form-control" type="text" id="cep" name="cep" placeholder="Digite seu CEP" value={cep} onChange={onChangeCep} required />
            </div>

            <div className="form-group form-inline">
                <label className="mr-2">Logadura</label>
                <input className="form-control" type="text" id="logadura" name="logadura" value={resultForm.result.logradouro} onChange={onChange} required />

                <label className="mr-2 ml-3 mt-3">Numero</label>
                <input className="form-control mt-3" type="text" id="numero" name="numero" value={resultForm.numero} onChange={onChange} required />
            </div>
            <div className="form-group form-inline">
                <label className=" mr-1">Complemento</label>
                <input className="form-control" type="text" id="complemento" name="complemento" value={resultForm.complemento} onChange={onChange}  required />

                <label className="mr-2 ml-2" >Bairro</label>
                <input className="form-control" type="text" id="bairro" name="bairro" value={resultForm.result.bairro} onChange={onChange} required  />
            </div>
            <div className="form-group form-inline">
                <label className="mr-2 ml-2">Estado</label>
                <input className="form-control mr-2 ml-2" type="text" id="estado" name="estado" value={resultForm.result.uf} onChange={onChange} required />

                <label className="mr-2 ml-4" >Cidade</label>
                <input className="form-control" type="text" id="cidade" name="cidade" value={resultForm.result.localidade} onChange={onChange} required  />
            </div>

            <div className="form-group mt-5">
            <input className="btn btn-info btn-block" type="submit" value="Cadastrar" onClick={envioForm} />
            </div>
        </form>
    )
}
