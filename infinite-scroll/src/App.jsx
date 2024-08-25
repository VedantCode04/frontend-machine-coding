import React, { useState, useEffect, useRef, useCallback } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const loaderRef = useRef();
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    if (loading) return
    setLoading(true);
    console.log("FETCHING DATA...");
    console.log("Page in fetchData = ", page)
    try {
      setTimeout(async () => {
        const response = await fetch(
          `https://dummyjson.com/quotes?limit=30&skip=${page}`
        );
        const responseData = await response?.json();
        setData((prevData) => [...prevData, ...responseData?.quotes]);
        setPage((prev) => prev + 30);
      }, 2000);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
    setLoading(false);
    console.log("DATA FETCHED...");
  }, [page, loading]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting && !loading) {
        console.log("is intersecting");
        fetchData();
      }
    });

    const currentLoaderRef = loaderRef.current;
    if (currentLoaderRef) {
      observer.observe(currentLoaderRef);
    }

    return () => {
      if (currentLoaderRef) {
        observer.unobserve(currentLoaderRef);
      }
      observer.disconnect();
    };
  }, [fetchData, loading]);

  useEffect(() => {
    console.log("useEffect data = ", data);
    console.log("useEffect page = ", page);
  }, [data, page]);

  return (
    <div className="main">
      <h1>Infinite Scrolling by Vedant - Machine Coding</h1>
      <h3>
        Api Used:{" "}
        <a href="https://dummyjson.com/quotes?limit=30&skip=0">
          https://dummyjson.com/quotes?limit=30&skip=0
        </a>{" "}
      </h3>
      {data?.map((item, index) => (
        <div className="item" key={index}>
          <span>{item.id}.. </span> <span>{item.quote}</span>
        </div>
      ))}
      <div className="loader" ref={loaderRef}></div>
    </div>
  );
};

export default App;
