import React from 'react'
import { Form, Input} from '../MainPage/styles'


const NameForm = (props) => {
  return (
    <>
    <Form>
        <label>
          Nome:
          <Input  placeholder="Nome" value={props.nome} onChange={props.verificaNome}/>
          <p>Entre 10 e 30 caracteres.</p>
        </label>
        <label>
          Idade:
          <Input  placeholder="Idade" value={props.idade} onChange={props.verificaIdade}/>
        </label>
        <label>
          E-mail:
          <Input  placeholder="usuario@usuario.com" value={props.email} onChange={props.verificaEmail}/>
        </label>
        <label>
          Confirmação de e-mail:
          <Input  placeholder="usuario@usuario.com" value={props.email} onChange={props.verificaEmail}/>
        </label>
      <button onClick={props.sendData}>Enviar dados</button>
      </Form>
        
    </>
  )
}

export default NameForm