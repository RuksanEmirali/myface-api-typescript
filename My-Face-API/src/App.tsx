import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
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
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )


export default App
