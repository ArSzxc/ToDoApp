import {useState} from 'react'


const ToDoForm = ({addTask}) => {
    const [useInput, setUseInput] = useState('')

    const handleChange = (e) => {
setUseInput(e.currentTarget.value)
    }

    const handleSubmit  = (e) => {
        e.preventDefault()
        addTask(useInput)
        setUseInput('')
        
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter"){
            handleSubmit(e)
        }

    }

return (
<div>
 <form onSubmit = {handleSubmit}>
     <input
     value ={useInput}
     type = "text"
     onChange = {handleChange}
     onKeyDown ={handleKeyPress}
     placeholder = "Введите значение..."
     >
     </input>
     <button>Сохранить</button>
 </form>
 </div>
)
}
export default ToDoForm