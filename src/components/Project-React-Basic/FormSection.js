import { useEffect, useState } from "react";

export const FormSection = (props) => {
  const [user, setUser] = useState({
    email: "",
    account: "",
    fullname: "",
    department: "",
    position: "",
  });
  console.log("user", user);

  useEffect(() => {
    if (!!props.editedUser) setUser(props.editedUser);
  }, [props.editedUser]);

  return (
    <div className="form-section">
      <div className="form-section__item">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your email"
          value={user.email}
          onChange={(event) =>
            setUser({
              ...user,
              email: event.target.value,
            })
          }
        />
      </div>
      <div className="form-section__item">
        <label htmlFor="account">Account</label>
        <input
          type="account"
          name="account"
          id="account"
          placeholder="Your account"
          value={user.account}
          onChange={(event) =>
            setUser({
              ...user,
              account: event.target.value,
            })
          }
        />
      </div>
      <div className="form-section__item">
        <label htmlFor="fullname">Full Name</label>
        <input
          type="fullname"
          name="fullname"
          id="fullname"
          placeholder="Your full name"
          value={user.fullname}
          onChange={(event) =>
            setUser({
              ...user,
              fullname: event.target.value,
            })
          }
        />
      </div>
      <div className="form-section__item">
        <label htmlFor="department">Department</label>
        <select
          name="department"
          id="department"
          value={user.department}
          onChange={(event) =>
            setUser({
              ...user,
              department: event.target.value,
            })
          }
        >
          <option value="">Select your department</option>
          <option value="marketing">Marketing</option>
          <option value="sales">Sales</option>
          <option value="IT">IT</option>
        </select>
      </div>
      <div className="form-section__item">
        <label htmlFor="position">Position</label>
        <select
          name="position"
          id="position"
          value={user.position}
          onChange={(event) =>
            setUser({
              ...user,
              position: event.target.value,
            })
          }
        >
          <option value="">Select your position</option>
          <option value="dev">Developer</option>
          <option value="sale">Sale</option>
          <option value="accounter">Accounter</option>
        </select>
      </div>
      <div className="form-btn-group">
        <button
          onClick={() => {
            if (props.editedUser) {
              props.updateUser(user);
            } else {
              props.createUser(user);
            }
            setUser({
              email: "",
              account: "",
              fullname: "",
              department: "",
              position: "",
            });
          }}
        >
          {props.editedUser ? "Update user" : "Create user"}
        </button>
        <button>Reset form</button>
      </div>
    </div>
  );
};
