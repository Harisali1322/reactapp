import React , {useEffect , useState} from 'react'
import { Link } from 'react-router-dom'

const Userget = () => {

    const [data , setData] = useState([])

    useEffect(() => {
      const fetchdata = async()=>{
        try {
            let resposne = await fetch('http://localhost:8083/getuser')
            const data = await resposne.json()

            setData(data)


            console.log(data , "data_____")
        } catch (error) {
            console.log(error)
        }
      }
      fetchdata()
    }, [])

    const deleteuser = async(id) => {
      let response = await fetch(`http://localhost:8083/deleteuser/${id}` , {
        method:"DELETE"
      })

      const data  = await response.json()

      console.log(data.Message)
    }
  return (
    <>
    <table className=' w-full border border-black text-center'>
    <thead className=' text-center'>
    <tr>
    <th>#</th>
    <th>NAME</th>
    <th>EMAIL</th>
    <th>PASSWORD</th>
    <th>DELETE</th>
    <th>EDIT</th>
    </tr>



    </thead>
        
    <tbody className=' text-center'>
        
  
    {
        data.map((item , index)=>{
            return (
                <>
                <tr key={item._id}>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>
                <button onClick={()=>deleteuser(item._id)}>Delete</button>
                </td>
                <td>
                <Link to={`/edituser/${item._id}`}>
                <button>Edit</button>
                </Link>
                </td>
                </tr>
                </>
            )
        })
    }
    </tbody>
    </table>
    </>
  )
}

export default Userget