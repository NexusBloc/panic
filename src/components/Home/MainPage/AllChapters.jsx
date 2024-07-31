import React from 'react';
import './AllChapters.css'; // Import the CSS file
import Img from './Assets/pch1.png'
import Img1 from './Assets/pch2.png'
import Img2 from './Assets/pch3.png'
import Img3 from './Assets/pch4.png'
import Img4 from './Assets/pch5.png'
import Img5 from './Assets/pch6.png'
import Fcol from './Assets/fcol.png'
import Fscol from './Assets/fscol.png'

const ChapterOne = () => {
  const items = [
    { id: 1, imgSrc: '', title: 'Surv!vor' },
    { id: 2, imgSrc: '', title: 'Surv!vor' },
    { id: 3, imgSrc: '', title: '???' },
    { id: 4, imgSrc: '', title: '???' },
  ];

  return (
   <div className='container'>
     <div className="row-container">
    <h2>Chapter 1</h2>
    <h3>?an!c</h3>
      <div className="see-more ch1">
        <a href="#">Read the story</a>
      </div>
      <div className="items">
        {/* {items.map(item => ( */}
          <div className="item" >
            <img src={Fcol} alt='Surv!vor' />
            <h2>Surv!vor</h2>
          </div>
          <div className="item" >
            <img src={Fscol} alt='Surv!vor' />
            <h2>Surv!vor</h2>
          </div>
          <div className="item" >
            <img src={Img} alt='Surv!vor' />
            <h2>???</h2>
          </div>
          <div className="item" >
            <img src={Img} alt='Surv!vor' />
            <h2>???</h2>
          </div>
        {/* ))} */}
      </div>
    </div>
     <div className="row-container">
    <h2>Chapter 2</h2>
    <h3>?????????</h3>
      <div className="see-more ch2">
        <a href="#">Read the story</a>
      </div>
      <div className="items">
        {items.map(item => (
          <div className="item" key={item.id}>
            <img src={Img1} alt={item.title} />
            <h2>???</h2>
          </div>
        ))}
      </div>
    </div>
     <div className="row-container">
    <h2>Chapter 3</h2>
    <h3>?????????</h3>
      <div className="see-more ch3">
        <a href="#">Read the story</a>
      </div>
      <div className="items">
        {items.map(item => (
          <div className="item" key={item.id}>
            <img src={Img2} alt={item.title} />
            <h2>???</h2>
          </div>
        ))}
      </div>
    </div>
     <div className="row-container">
    <h2>Chapter 4</h2>
    <h3>?????????</h3>
      <div className="see-more ch4">
        <a href="#">Read the story</a>
      </div>
      <div className="items">
        {items.map(item => (
          <div className="item" key={item.id}>
            <img src={Img3} alt={item.title} />
            <h2>???</h2>
          </div>
        ))}
      </div>
    </div>
     <div className="row-container">
    <h2>Chapter 5</h2>
    <h3>?????????</h3>
      <div className="see-more ch5">
        <a href="#">Read the story</a>
      </div>
      <div className="items">
        {items.map(item => (
          <div className="item" key={item.id}>
            <img src={Img4} alt={item.title} />
            <h2>???</h2>
          </div>
        ))}
      </div>
    </div>
     <div className="row-container">
    <h2>Chapter 6</h2>
    <h3>?????????</h3>
      <div className="see-more ch6">
        <a href="#">Read the story</a>
      </div>
      <div className="items">
        {items.map(item => (
          <div className="item" key={item.id}>
            <img src={Img5} alt={item.title} />
            <h2>???</h2>
          </div>
        ))}
      </div>
    </div>
   </div>
  );
};

export default ChapterOne;
