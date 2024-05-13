import { createContext } from "react";

export const ThemeContext = createContext("light");
export const ThemeContext2 = createContext({
  value: "light",
  firstName: "đào tuấn",
  lastName: "anh",
  age: 23,
  address: "",
});

/**
 *
 * B1: vào folder context khai báo ThemeContext
 * B2: vào component Home, khai báo useState
 * B3: khai báo ThemeContext.Provider và truyền vào value
 * B4: khai báo các element HTML tương ứng
 * B5: vào component Message gọi useContext để lấy giá trị tương ứng
 */
