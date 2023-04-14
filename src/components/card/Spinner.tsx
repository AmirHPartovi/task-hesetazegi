import React from 'react'
import '../../styles/spinner.css'

type Props = {}

const Spinner = (props: Props) => {
  return (
    <div className="spinner-container">
      <div className="loading-spinner">
      </div>
    </div>
  )
}

export default Spinner