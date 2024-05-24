import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getUserByID } from "../../stores/userDetailSlice";

const UserDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const userDetail = useSelector((store) => store.userDetail.userDetail);

  useEffect(() => {
    dispatch(getUserByID(params.id));
  }, [params?.id]);

  return (
    <div>
      <ul>
        <li>ID: {userDetail?.id}</li>
        <li>email: {userDetail?.email}</li>
        <li>first_name: {userDetail?.first_name}</li>
        <li>last_name: {userDetail?.last_name}</li>
        <li>avatar: {userDetail?.avatar}</li>
      </ul>
      <Link to="/user-list">Back to user list</Link>
    </div>
  );
};

export default UserDetail;

/**
 *
 * 1. lấy được ID của user tương ứng (done)
 * 2. gọi api theo id
 * 3. hiển thị thông tin của user
 * 
 * {
        "id": "2"
    }
 */

/**
 *
 * 1. scss - style module scss (done)
 * 2. js -> jsx (done)
 * 3. axios
 * 4. react bootstrap, bootstrap
 */

/**
 *
 * 1. *.jsx (done)
 * 2. style module scss (done)
 * 3. axios
 * 4. redux, react redux, redux toolkit, redux dev tools
 * 5. create react app
 * 6. react bootstrap, bootstrap / antd design, tailwincss / MUI
 * 7. react router
 * 8. Formik, yup, pure process
 * 9. local storage
 * 10. json-server
 * 11. npm, yarn, nvm
 * 12. cách dùng các đơn vị phổ biến trong css
 */
