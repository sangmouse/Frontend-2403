export const UserList = (props) => {
  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>Account</th>
          <th>Full Name</th>
          <th>Department</th>
          <th>Position</th>
          <th colSpan={2}>Action</th>
        </tr>
        {props?.userList?.map((user) => {
          return (
            <tr>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.account}</td>
              <td>{user.fullname}</td>
              <td>{user.department}</td>
              <td>{user.position}</td>
              <td>
                <button onClick={() => props.handleEdit(user)}>Edit</button>
              </td>
              <td>
                <button onClick={() => props.deleteUser(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
