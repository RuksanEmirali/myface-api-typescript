import { useState, useEffect, Key } from 'react'
import './PostsPage.scss'


export function PostsPage() {
    const [myData, setMyData] = useState(null)
    useEffect(() => {
        fetch("http://localhost:3001/posts")
        .then(response => response.json())
        .then(data => setMyData(data.results))
        }, []);
      
        if (!myData) {
          return <div>Waiting for data!</div>
        } 
    
        return (
            <div className='posts'>
              {myData.map((k) => (
                  <div className='onePost'>
                      <p className="message">{k.message}</p>
                      <img src={k.imageUrl}/>
                      <p className="username">{k.postedBy.username}</p>
                      <p className="createdAt">Created at : {k.createdAt}</p>
                  </div>
              ))}
            </div>  

      );
}