import React from "react";

const Form = (props) => {

  return (
    <form onSubmit={(e) => props.handleSubmit(e)}>
      <div className="form-group">
        <label htmlFor="Name">Name</label>
        <input type="hidden" value={ (props._id === 0) ? 0 : props._id } />
        <input
          type="text"
          className="form-control"
          id="Name"
          placeholder="Enter Name"
          name="name"
          value={props.name}
          onChange={(e) => props.handleChange(e)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="Price">Price</label>
        <input
          type="text"
          className="form-control"
          id="Price"
          placeholder="Enter Price"
          name="price"
          value={props.price}
          onChange={(e) => props.handleChange(e)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
