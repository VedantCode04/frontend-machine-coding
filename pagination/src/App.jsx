// import React, { useEffect, useState } from "react";
// import "./App.css";
// const App = () => {
//   const [data, setdata] = useState(null);
//   const [page, setpage] = useState(1);
//   const url = `https://dummyjson.com/products?limit=100`;

//   const fetchData = async () => {
//     const res = await fetch(url);
//     const resData = await res.json();
//     if (resData && resData.products) {
//       setdata(resData.products);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const pageHandler = (val) => {
//     if (val >= 1 && val <= data.length/10 && val !== page) {
//       setpage(val);
//     }

//     console.log(val);
//   };

//   console.log(data);
//   return (
//     <div className="main">
//       <h1>Pagination By Vedant Patel - Machine Coding</h1>
//       <div className="data-container">
//         {data?.slice(page * 10 - 10, page * 10).map((item) => (
//           <div className="data" key={item.id}>
//             <img src={item.images[0]} alt={item.title} />
//             <h4>
//               <span>{item.id}. </span>
//               {item.title}
//             </h4>
//           </div>
//         ))}
//       </div>

//       <div className="btn-list">
//         {data?.length > 0 && (
//           <div>
//             {page === 1 ? (
//               ""
//             ) : (
//               <button className="btn" onClick={() => pageHandler(page - 1)}>
//                 Prev
//               </button>
//             )}
//             {[...Array(Math.ceil(data.length / 10))].map((_, val) => (
//               <>
//                 <button
//                   key={val}
//                   className={page === val + 1 ? "selected btn" : "btn"}
//                   onClick={() => pageHandler(val + 1)}
//                 >
//                   {val + 1}
//                 </button>
//               </>
//             ))}
//             {page === data.length/10 ? (
//               ""
//             ) : (
//               <button className="btn" onClick={() => pageHandler(page + 1)}>
//                 Next
//               </button>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const url = `https://dummyjson.com/products?limit=95`;

  const fetchData = async () => {
    const res = await fetch(url);
    const resData = await res.json();
    if (resData && resData.products) {
      setData(resData.products);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const pageHandler = (val) => {
    const totalPages = Math.ceil(data?.length / itemsPerPage);
    if (val >= 1 && val <= totalPages && val !== page) {
      setPage(val);
    }
  };

  const totalPages = Math.ceil(data?.length / itemsPerPage);

  return (
    <div className="main">
      <h1>Pagination By Vedant Patel - Machine Coding</h1>
      <div className="data-container">
        {data
          ?.slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map((item) => (
            <div className="data" key={item.id}>
              <img src={item.images[0]} alt={item.title} />
              <h4>
                <span>{item.id}. </span>
                {item.title}
              </h4>
            </div>
          ))}
      </div>

      <div className="btn-list">
        {data?.length > 0 && (
          <div>
            {page > 1 && (
              <button className="btn" onClick={() => pageHandler(page - 1)}>
                Prev
              </button>
            )}
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={page === index + 1 ? "selected btn" : "btn"}
                onClick={() => pageHandler(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            {page < totalPages && (
              <button className="btn" onClick={() => pageHandler(page + 1)}>
                Next
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

