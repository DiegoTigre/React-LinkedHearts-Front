import axios from "axios"
import { useEffect, useState } from "react"
import type { ReqResUserListResponse, User } from "../interfaces/reqres.interface";



const loadUsers = async(): Promise<User[]> => {

    try {
        
         const {data} = await axios.get<ReqResUserListResponse>('https://reqres.in/api/users')
         return data.data
       
        } catch (error) {
        console.log(error);
}

}

export const UsersPage = () => {

    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {

        loadUsers().
        then(users => setUsers(users));

        

     ///   fetch('https://reqres.in/api/users?page=2')
     ///   .then( resp => resp.json())
     ///   .then( data => console.log(data))
      
        
    }, [])
    

  return (
    <>
    <h3 >Usuarios</h3>

    <table>
        <thead>
            <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {users.map(user => (

             <tr key={user.id}>
              <td ><img src={user.avatar}></img></td>
              <td>{user.first_name}</td>
              <td>{user.email}</td>
</tr>

            ))}
         
        </tbody>
    </table>
    </>
  )
}
