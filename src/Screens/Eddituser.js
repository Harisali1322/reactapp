import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Eddituser = () => {

 const navigate = useNavigate()
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  const {id} = useParams();

    useEffect(()=>{
        const fetchdata= async() =>{
            try {
                let response = await fetch(`http://localhost:8083/userget/${id}`)
                const data = await response.json()
                setName(data.name)
                setEmail(data.email)
                setPassword(data.password)
            } catch (error) {
                console.log(error)
            }
        }
        fetchdata()
    },[])

    const updatedata = async(e) => {
      e.preventDefault()

      try {

        let updateddata = {
          name: name,
          email: email,
          password: password,
        }

        let response  = await fetch(`http://localhost:8083/edituser/${id}`, {
          method: "PUT",
          body: JSON.stringify(updateddata),
          headers:{
            "Content-Type" : "application/json"
          }
        })
         
        const data = await response.json()
        alert(data.Message)
        navigate('/usersget')
        
      } catch (error) {
        
      }
    }

    
  return (
   <>
   <input onChange={(e)=>setName(e.target.value)} value={name}/>
   <input onChange={(e)=>setEmail(e.target.value)} value={email}/>
   <input onChange={(e)=>setPassword(e.target.value)} value={password}/>
   <button onClick={updatedata}>Update Data</button>
   </>
  )
}

export default Eddituser
