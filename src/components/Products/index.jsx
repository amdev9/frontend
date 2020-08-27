
import React, { useState } from 'react'
import axios from 'axios'
import WidgetLayout from '../WidgetLayout'
import UserTable from './ProductsTable'
import AddUserForm from "./AddUserForm";
import EditUserForm from "./EditUserForm";


Products.title = 'Products';

const userList = [
  {
    id: 1,
    name: 'Frank',
    username: 'Frank Degrassi'
  },
  {
    id: 2,
    name: 'Birgit',
    username: 'Birgit Boswald'
  }
];


function Products() {

  // const createData = async () => {
  //   const result = await axios({
  //     method: 'POST',
  //     url: 'http://localhost:3000/createUser',
  //     // data: { postId }
  //   })

  //   const resItems = result.data; //.map(item => ({id: item.item_id, txt: item.text }))

  //   console.log(resItems)

  //   // setItems(resItems)
  // };

  const initialUser = { id: null, name: "", username: "" };

  const [users, setUsers] = useState(userList);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialUser);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
    // createData()

  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editUser = (id, user) => {
    setEditing(true);
    setCurrentUser(user);
  };

  const updateUser = (newUser) => {
    setUsers(
      users.map((user) => (user.id === currentUser.id ? newUser : user))
    );
    setCurrentUser(initialUser);
    setEditing(false);
  };

  return (
    <WidgetLayout name={Products.title} id="Products">
      {/* customHeader={ this.getCustomHeader() } */}
      <div className="row">
        <div className="five columns">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                currentUser={currentUser}
                setEditing={setEditing}
                updateUser={updateUser}
              />
            </div>
          ) : (
              <div>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser} />
              </div>
            )}
        </div>
        <div className="seven columns">
          <h2>View users</h2>
          <UserTable
            users={users}
            deleteUser={deleteUser}
            editUser={editUser}
          />
        </div>
      </div>

    </WidgetLayout>
  )
}

export default Products