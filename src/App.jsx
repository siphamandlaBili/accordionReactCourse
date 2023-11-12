import { useState } from "react";
import reviews from "./data";

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
const App = () => {
  let [index,setIndex] = useState(0);

  let {id,name,job,image,text} = reviews[index];

  const barrier = (number)=>{
    if (number > reviews.length - 1) {
      return 0
    }
    
    if (number < 0) {
      return reviews.length - 1
    }

    return number
  }

  const nextPerson =()=>{
    setIndex((current)=>{
      let newI = current + 1;
      return barrier(newI) 
    });
  }
  
  const prevPerson =()=>{
    setIndex((current)=>{
      let newI = current - 1;
      return barrier(newI)
    })
     
  }

  if(id)
  return <main>
    <article className="review">
      <div className="img-container">
        <img src={image} alt="name" className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight/>
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="btn-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft/>
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight/>
        </button>
      </div>
    </article>
  </main>
};
export default App;
