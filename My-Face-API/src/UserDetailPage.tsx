import { BrowserRouter as Router,Routes, Route, Link, useParams } from 'react-router-dom';
import { useState, useEffect, Key } from 'react'


export function UserDetailPage() : JSX.Element {
    const { id } = useParams();

    const [myData, setMyData] = useState(null)
   
    useEffect(() => {
        fetch( `http://localhost:3001/users/${id}` )
        .then(response => response.json())
        .then(data => setMyData(data))
        }, []);
      
        if (!myData) {
          return <div>Waiting for data!</div>
        } 
    
        return (
         <>
            <div className='name'> {myData.name} </div>
            <div className='email'> {myData.email} </div>
            <div className='username'> {myData.username} </div>
            <img className='cover-img' src={myData.coverImageUrl}/>
            <img className= 'profile-img' src={myData.profileImageUrl}/>
         </>
      );
}