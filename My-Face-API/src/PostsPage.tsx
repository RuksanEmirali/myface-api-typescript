import { useState, useEffect, Key } from 'react'


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
          <>
              {myData.map((k) => (
                  <div>
                      <span>{k.postedBy.username}</span>
                      <span>{k.id}</span>
                      <span>{k.message}</span>
                      <img src={k.imageUrl}/>
                  </div>
              ))}
            
          </>
      );
}