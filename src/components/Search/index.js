import React, { useState } from "react"

export default function Search({ onChangeValue, onClickSearch }) {
  return (
    <React.Fragment>
      <input onChange={(e) => onChangeValue(e)} />
      <button onClick={onClickSearch}> Search </button>
    </React.Fragment>
  )
}