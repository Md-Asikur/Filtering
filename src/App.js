import React, { useState } from "react";
import Test from "./Test";
import './App.css'
import Filter from "./Filter Method 2/Filter";
import Filter3 from "./Filtermethod3/Filter";
// import AllData from "./AllData";
 function App() {
//   const [images, setImage] = useState(AllData);

//   const allItem = () => {
//     const finalData = AllData.filter((value) => {
//       return value;
//     });
//     setImage(finalData);
//   };

//   const onlyPython = (categoryItem) => {
//     const finalData = AllData.filter((value) => {
//       return value.category == categoryItem;
//     });

//     setImage(finalData);
//   };
//   const onlyOffice = (categoryItem) => {
//     const finalData = AllData.filter((value) => {
//       return value.category == categoryItem;
//     });

//     setImage(finalData);
//   };
//   const onlyReact = (categoryItem) => {
//     const finalData = AllData.filter((value) => {
//       return value.category == categoryItem;
//     });
//     setImage(finalData);
//   };

  return (
    <>
      {/* <div className="container my-3">
        <div className="row">
          <div className="col-3">
            <button className="btn btn-primary" onClick={allItem}>
              All
            </button>
          </div>
          <div className="col-3">
            <button className="btn btn-primary" onClick={() => onlyPython("Python")}>
              Python
            </button>
          </div>
          <div className="col-3">
            <button className="btn btn-primary" onClick={() => onlyOffice("Office")}>
              Office
            </button>
          </div>
          <div className="col-3">
            <button className="btn btn-primary" onClick={() => onlyReact("React")}>
              React
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          {images.map((value) => {
            return (
              <div className="col mt-3">
                <img src={value.image} className="img-fluid" alt="image" />
              </div>
            );
          })}
        </div>
      </div> */}
      {/* <Test/> */}
      {/* <Filter/> */}
      <Filter3/>
    </>
  );
}

export default App;
