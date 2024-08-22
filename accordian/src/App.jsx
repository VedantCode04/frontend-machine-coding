import React , {useState, useEffect} from 'react'
import { accordionData } from './data.js'
import "./App.css"
const App = () => {
  const [data, setdata] = useState(accordionData)

  useEffect(() => {
    console.log(data);
  }, [data])
  
  const handleClick = (e, id) => {
    const updated = data.map((data) =>
      data.id === id ? { ...data, isOpen: !data.isOpen } : data
    );
    setdata(updated)
    console.log(data);
  }
  return (
    <div className="main">
      <h1 className='header'>Accordian by Vedant : Machine Coding</h1>
      <div className="wrapper">
        {data.map((data) => (
          <>
            <div key={data.id} className="data">
              <div className="heading">
                <span>{data.title}</span>
                <button onClick={(e) => handleClick(e, data.id)}>
                  {data.isOpen ? '-' : '+'}
                </button>
              </div>
              <div className={data.isOpen ? "open" : "hide"}>
                {data.content}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default App