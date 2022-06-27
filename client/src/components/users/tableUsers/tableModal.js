import React, { useRef, useState } from 'react'
import './tableModalStyle.css'

const TableModal = () => {


  const titleRef = useRef()
  const modalSaveChangesBtnRef = useRef()
  const modalBodyRef = useRef()

  return (
    <div className="modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" ref={titleRef} id="exampleModalLabel">Modal title</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body" ref={modalBodyRef}>
            ...
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-primary" ref={modalSaveChangesBtnRef}>Save changes</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TableModal