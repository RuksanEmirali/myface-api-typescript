import { useState, useEffect, Key } from 'react'


export function CreateUserPage() {
    const [username, setUsername] = useState("")

    const [email, setEmail] = useState("")

    return(
        <form onSubmit={}
    )
}

// export function CreateUserPage() {
//     const [inputs, setInputs] = useState({})
    
//     const handleChange = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setInputs(values => ({...values, [name]: value}))
//       }
    
//       const handleSubmit = (event) => {
//         event.preventDefault();
//         alert(inputs);
//       }
    
//       return (
//         <form onSubmit={handleSubmit}>
//           <label>Enter your name:
//           <input 
//             type="text" 
//             name="name" 
//             value={inputs.name || ""} 
//             onChange={handleChange}
//           />
//           </label>
//           <label>Enter your username:
//             <input 
//               type="text" 
//               name="username" 
//               value={inputs.username || ""} 
//               onChange={handleChange}
//             />
//             </label>
//             <input type="submit" />
//         </form>
//       )
//     }
    
   


{/* <form method="post" action="/users/create">
<label>
    Name:
    <input type="text" name="name"/>
</label>
<label>
    Username:
    <input type="text" name="username"/>
</label>
<label>
    Email:
    <input required type="email" name="email"/>
</label>
<label>
    ProfileImageUrl:
    <input type="text" name="profileImageUrl"/>
</label>
<label>
    CoverImageUrl:
    <input type="text" name="coverImageUrl"/>
</label>
<button type="submit">Submit</button>
</form> */}