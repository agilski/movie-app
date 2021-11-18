import React, { useState } from "react"
import './style.css'

export default function List({ movieData }) {
  let listItem = movieData.map((data) => {
    return (
      <div className='list-item'>
        <span>Title: {data.Title}</span>
        <span>Year: {data.Year}</span>
        <span>Type: {data.Type}</span>
        <img src={data.Poster} alt='no image'/>
      </div>
    )
  })

  return (
    <React.Fragment>
      <div className="main-list">
        {listItem}
      </div>
    </React.Fragment>
  )
}