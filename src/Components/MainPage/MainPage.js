import React, {useState} from 'react'
import {MainContainer} from './styles'
import NameForm from '../NameForm/NameForm'
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm'

const MainPage = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [formFlow, setFormFlow] = useState(1) //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX

  const [dataNascimento, setDataNascimento] = useState("")
  const checkData = (event) => {
    setDataNascimento(event.target.value)
  }

  const [telefone, setTelefone] = useState("")
  const checkTelefone = (event) => {
    setTelefone(event.target.value)
  }

  const [curso, setCurso] = useState(false)
  const checkCurso = (event) => {
    // console.log(event.target.checked)
    setCurso(event.target.checked)
  }

  const [requisitos, setRequisitos] = useState("")
  const checkRequisitos = (event) => {
    console.log(event.target)
    setRequisitos(event.target.checked)
  }

  const onChangeName = (event) => {
    setName(event.target.value)
  }

  const onChangeAge = (event) => {
    setAge(event.target.value)
  }

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const sendData = () => {
    //aqui deve vir uma verificação para mudar de formulario apenas se todos os requisitos tiverem sido cumpridos
    if(age >= 18 && name.length >= 10 && name.length <= 30 && email.includes("@")){
      setFormFlow(2)
    } else {
      alert("Verifique se seus dados estão corretos")
    }
  }

  function checkForm () {
    if(dataNascimento === "" || dataNascimento.length !== 10){
      alert("Informe sua data de nascimento")
    } else if (telefone === ""){
      alert("Informe seu telefone")
    } else if (curso !== true){
      alert("Informe seu curso")
    }else if (requisitos !== true){
      alert("Confirme os pré-requisitos")
    }else {
      setDataNascimento("")
      setTelefone("")

      alert("Sua inscrição foi enviada!")
    }
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? <NameForm
      // insira aqui suas props
        nome={name} idade={age} email={email} 
        verificaNome={onChangeName}
        verificaIdade={onChangeAge}
        verificaEmail={onChangeEmail}
        sendData={sendData}
      /> : <ConfirmationForm 
        dataNascimento={dataNascimento}
        setDataNascimento={setDataNascimento}
        checkData={checkData}
        telefone={telefone}
        checkTelefone={checkTelefone}
        curso={curso}
        checkCurso={checkCurso}
        requisitos={requisitos}
        checkRequisitos={checkRequisitos}
        checkForm={checkForm}
      />}
    </MainContainer>
  )
}

export default MainPage