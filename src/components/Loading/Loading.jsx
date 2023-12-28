import React, { useEffect } from "react";
import './loadingAnimation.css'

export const Loading = () => {
    return (
      <div className="loading" style={{ width: '130px', height: '130px' }}>
        <h3>...loading</h3>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" />
        </svg>
      </div>
    )
  }