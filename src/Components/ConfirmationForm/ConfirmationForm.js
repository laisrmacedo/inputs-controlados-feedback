import React from 'react'
import { Form, Input} from '../MainPage/styles'
import {Div} from './style'


const ConfirmationForm = (props) => {

  // function checkForm () {
  //   // console.log(props.requisitos)

  //   if(props.dataNascimento === "" || props.dataNascimento.length !== 10){
  //     alert("Informe sua data de nascimento")
  //   } else if (props.telefone === ""){
  //     alert("Informe seu telefone")
  //   } else if (props.curso !== true){
  //     alert("Informe seu curso")
  //   }else if (props.requisitos !== true){
  //     alert("Confirme os pré-requisitos")
  //   }else {
  //     alert("Sua inscrição foi enviada!")
  //   }
  // }

  return (
    <Form>
      <label>
        *Data de Nascimento:
        <Input  type="date" onChange={props.checkData} placeholder="Data de nascimento" value={props.dataNascimento}/>
      </label>
      <label>
        *Telefone:
        <Input type="number" onChange={props.checkTelefone} placeholder="(DDD) xxxx - xxxx" value={props.telefone}/>
      </label>
      <label>
        Gênero:
        <Input  type="text" list="genero" placeholder="Informe seu gênero"/>
        <datalist id="genero">
          <option value="Homem cisgênero"/>
          <option value="Mulher cisgênero"/>
          <option value="Homem trans"/>
          <option value="Mulher trans"/>
          <option value="Pessoa não binária"/>
          <option value="Prefiro não informar"/>
        </datalist>
      </label>
      <label>
        Etnia Autodeclarada:
        <Input  type="text" list="etnia" placeholder="Como você se autodeclara?"/>
        <datalist id="etnia">
          <option value="Negro"/>
          <option value="Branco"/>
          <option value="Pardo"/>
          <option value="Amarelo"/>
          <option value="Indígena"/>
          <option value="Prefiro não informar"/>
        </datalist>
      </label>
      <label>
        *Qual seu curso?
        <Div>
          <input type="radio" onChange={props.checkCurso} value={props.curso} name="curso" id="integral"/>
          <label htmlFor="curso">Curso Integral Web Fullstack</label>
        </Div>
        <Div>
          <input type="radio" onChange={props.checkCurso} value={props.curso} name="curso" id="noturno"/>
          <label htmlFor="curso">Curso Noturno Web Fullstack</label>
        </Div>
      </label>
      <label>
        *Você confirma estes pré-requisitos?
        <Div>
          <input type="checkbox" onChange={props.checkRequisitos} value={props.requisitos} name="verficacao1"/>
          <label htmlFor="verficacao1">Tenho ensino médio completo e tenho disponibilidade para participar das atividades.</label>
        </Div>
        {/* <Div>
          <input type="checkbox" onChange={props.checkRequisitos} value={props.requisitos} name="verficacao2"/>
          <label htmlFor="verficacao2">Tenho disponibilidade para participar das atividades.</label>
        </Div> */}
      </label>

      <button onClick={props.checkForm}>Enviar dados</button>
    </Form>
  )
}

export default ConfirmationForm