import React, { useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import Avatar from "@material-ui/core/Avatar";
import "./DisplayUser.css";

function DisplayUser() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);

  const handleChange = (e, value) => {
    setPage(value);
  };

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then((response) => response.json())
      .then((result) => {
        setUsers(result.data);
      });
  });


  return (
    <div className='container'>
      <h1>Users list</h1>
        <ul className='users-list'>
          
        {users.map((user) => {
            return (
              <li className='item'>
                <Avatar alt={user.first_name} src={user.avatar} />
                <span>{`${user.first_name}  ${user.last_name}`}</span>
              </li>
            );
          })}
        </ul>
      <div className='pagination'>
        <Pagination
          count={2}
          page={page}
          color='secondary'
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default DisplayUser;
