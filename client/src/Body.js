import React from "react";

const Table = (props) => {
  let i = 0;
  const items = props.products.map((item) => (
    <tr key={item._id}>
      <th scope="col">{i++}</th>
      <th scope="col">{item.name}</th>
      <th scope="col">{item.price}</th>
      <th onClick={() => props.edit(item._id)}  scope="col"><i className="fa fa-pencil" aria-hidden="true"></i></th>
      <th onClick={() => props.delete(item._id)} scope="col"><i className="fa fa-trash" aria-hidden="true"></i></th>
    </tr>
  ));
  return <tbody className="table">{items}</tbody>;
};

export default Table;
