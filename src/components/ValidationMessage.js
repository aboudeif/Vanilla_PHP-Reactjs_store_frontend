import React from 'react'

const ValidationMessage = ({ message }) => {
  return (
    <small className="col-8 mb-4 text-start form-text text-muted">
      {message}
    </small>
  )
}

export default ValidationMessage