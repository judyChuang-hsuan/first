import React,{useState} from 'react'

const People = ({id,name}) => {
    const [check,setCheck]=useState(false);
    const [temp,setTemp]=useState(36.5);
    const [edit,setEdit]=useState(false);
    const [success,setSuccess]=useState(false);
    const clickHandler=()=>{
        setCheck(true);
      }
    const changeHandler=(e)=>{
        setTemp(e.target.value);
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        setSuccess(true);
        
    }
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{check?<form className={success?"check":""} onSubmit={submitHandler}><input value={temp} onChange={changeHandler}/></form>:""}{success?<p>{temp}</p>:""}</td>
      <td>{success?<p>V</p>:<button onClick={clickHandler} className="check-in">簽到</button>}</td>
    </tr>
  )
}

export default People