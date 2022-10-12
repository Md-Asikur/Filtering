import React, { useState } from "react";
import AllData from "./AllData.json";
import './btn.css'
import { SRLWrapper } from "simple-react-lightbox";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function Test() {
  const [images, setImage] = useState(AllData);
//lightbox effect
    const options = {
      settings: {
      	overlayColor: 'rgb(25, 136, 124)',
      	autoplaySpeed: 1500,
      	transitionSpeed: 900
      },
      buttons: {
      	backgroundColor: 'red',
      	iconColor: 'rgba(126, 172, 139, 0.8)'
      },
      caption: {
      	captionColor: '#a6cfa5',
      	captionFontFamily: 'Raleway, sans-serif',
      	captionFontWeight: '300',
      	captionTextTransform: 'uppercase'
      },
      progressBar: {
      	height: '20px',
      	fillColor: 'blue',
      	backgroundColor: 'white'
      }
    };

  const allItem = () => {
    const finalData = AllData.filter((value) => {
      return value;
    });
    setImage(finalData);
  };

  const onlyPython = (categoryItem) => {
    const finalData = AllData.filter((value) => {
      return value.category == categoryItem;
    });

    setImage(finalData);
  };
  const onlyOffice = (categoryItem) => {
    const finalData = AllData.filter((value) => {
      return value.category == categoryItem;
    });

    setImage(finalData);
  };
  const onlyReact = (categoryItem) => {
    const finalData = AllData.filter((value) => {
      return value.category == categoryItem;
    });
    setImage(finalData);
    };
    const onlyAsik = (categoryItem) => {
      const finalData = AllData.filter((value) => {
        return value.category == categoryItem;
      });
      setImage(finalData);
    };

    return (
      <>
        <h1 style={{ fontSize: "2.7em" }}>Portfolio</h1>
        <div id="btn">
          <button className="btn btn-primary" onClick={allItem}>
            All
          </button>

          <button className="btn btn-success" onClick={() => onlyPython("Python")}>
            Python
          </button>
          <button className="btn btn-danger" onClick={() => onlyReact("React")}>
            React
          </button>
          <button className="btn btn-warning" onClick={() => onlyOffice("Office")}>
            Office
          </button>
          <button className="btn btn-outline-success" onClick={() => onlyAsik("Asik")}>
            Asik
          </button>
        </div>
        
          {images.map((value) => {
            return (
              // <img
              //     key={value.id}
              //  src={value.image}

              //   style={{ height: "300px", margin: "30px" }}
              //   alt="image"
              // />

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
                </div>
              
            );
          })}
        
      </>
    );
}
export default Test
