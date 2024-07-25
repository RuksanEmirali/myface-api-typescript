import { BrowserRouter as Router,Routes, Route, Link, useParams, useRouter } from 'react-router-dom';
import { useState, useEffect, Key } from 'react'


{/* <Router> 
    <Routes>
        <Route path=`/${userId}`>
        element = {}
        </Route>
    </Routes>
</Router> */}

// [userId, setUserId] = useState(1)

// export function Ids () {
//     const { id} = useParams()
//     return <{id}/>
// }

export function UserDetailPage() : JSX.Element {
   const { query } = useRouter();
  
  // 👇 Get id value from dynamic route
  const { id } = query;


    const [myData, setMyData] = useState(null)
   
    useEffect(() => {
        fetch( "http://localhost:3001/users/1" )
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