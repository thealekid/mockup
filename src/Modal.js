import React from 'react';
import Popup from 'reactjs-popup';

const Modal = () => (
    <div>
  <Popup
    trigger={<button className="button">+</button>}
    modal
    nested
  >
     
    {close => (
      <div className="modal">
        <div className="header">Add Activity
        <button className="close" onClick={close}>
          &times;
        </button>
        </div>
        <br/>
        <div className="content">
        <select>
            <option>Add Enquiry</option>
            <option>Viewings</option>
        </select>
        <br/>
        <input placeholder="Add property URL (optional)"></input>
        <br/>
        <textarea placeholder="Add Notes..."></textarea>
        </div>
        <div className="actions">
          <button
            className="button"
            onClick={() => {
              close();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    )}
  </Popup>
    <p>Add New Activity</p>
</div>
);

export default Modal;