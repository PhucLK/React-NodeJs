import React from "react";
import Body from './Body';

const Table = (props) =>{
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <Body delete={props.delete} edit={props.edit} products={props.products}></Body>
      </table>
    );
  
}

export default Table;
