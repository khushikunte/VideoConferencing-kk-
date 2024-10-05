import { FaPlay } from "react-icons/fa";
import React from 'react';

const Previous = () => {
  return (
    <div className="container my-5">
      <h2>Previous Meetings</h2>
      <div class="card my-4 ">
        <div class="card-body ">
          <img style={{height:"6vh"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP2OAyxEBlsBYTxBHtsyXV4TUNgvMaGgT7CA&s' />
          <h5 class="card-title">Talk Tuesday</h5>
          <p class="card-text">Latest Trends And Tools</p>
        </div>
      </div>
      <div class="card my-4">
        <div class="card-body ">
          <img style={{height:"6vh"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP2OAyxEBlsBYTxBHtsyXV4TUNgvMaGgT7CA&s' />
          <h5 class="card-title">Devops</h5>
          <p class="card-text">Weekly Standup</p>
        </div>
      </div>
    </div>
  );
};

export default Previous;
