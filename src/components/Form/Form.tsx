import { useState } from 'react';
import {StyledForm,StyledInput, StyledButton} from './FormStyles'

type FormProps = {
  searchTerm:string
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
  apiCallOnSubmit:any
}
const Form = ({searchTerm,setSearchTerm,apiCallOnSubmit}:FormProps) => {
    // const [state, setState] = useState(searchTerm)
    const [country, setCountry] = useState('')
    // const [isSubmitted, setIsSubmitted] = useState(false)

   const handleSubmit = (e:any) => {
    e.preventDefault()
    // setSearchTerm(state)
    // setState('')
    apiCallOnSubmit()
    // console.log(state,country)
    // setState('')
    // setCountry('')
}
  return (
    <>
         <StyledForm onSubmit={handleSubmit}>
           <StyledInput type="text" autoFocus onChange={(e) => setSearchTerm(e.target.value)} />
           <StyledInput type="text" onChange={(e) => setCountry(e.target.value)} />
           <StyledButton type="submit">Submit</StyledButton>
        </StyledForm>
    </>
  )
}

export default Form