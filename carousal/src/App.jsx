import React, { useState, useEffect } from "react";
import "./App.css";
const App = () => {
    const [image, setimage] = useState(0);
    useEffect(() => {
        console.log("image = ", image);
    }, [image])
    const imageList = [
        {
            id: 1,
            title: "Sunset Over the Mountains",
            url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        },
        {
            id: 2,
            title: "Forest Pathway",
            url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
        },
        {
            id: 3,
            title: "Ocean Waves",
            url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        },
        {
            id: 4,
            title: "City Skyline",
            url: "https://images.unsplash.com/photo-1494390248081-4e521a5940db",
        },
        {
            id: 5,
            title: "Desert Dunes",
            url: "https://images.unsplash.com/photo-1724010930544-59b11726a226?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];

    const prevImage = () => {
        
        if(image - 1 < 0){
            setimage(imageList.length - 1)
        } else {
            setimage(image-1)
        }
    };

    const nextImage = () => {
        if (imageList.length - 1 === image) {
            setimage(0)
        } else {
            setimage(image + 1);
        }
    };

    return (
      <div>
        <h1> Custom Carousal by Vedant - Machine Coding</h1>
        <div className="wrapper">
          <img src={imageList[image].url} alt={imageList[image].title} loading="lazy"/>
          <div className="btn-list">
            {[...Array(imageList.length)].map((_, item) => {
              return (
                <>
                  <button className={item === image ? 'large-btn' : ''} onClick={()=> setimage(item)}></button>
                </>
              );
            })}
          </div>
          <div>
            <button onClick={prevImage}> prev </button>

            <button onClick={nextImage}> next </button>
          </div>
        </div>
      </div>
    );
};

export default App;
