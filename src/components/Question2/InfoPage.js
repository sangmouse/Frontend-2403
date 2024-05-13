import React, { useState } from "react";
import FormComponent from "./FormComponent";
import ResultComponent from "./ResultComponent";

const InfoPage = () => {
  const [data, setData] = useState("");
  const onClick = (inputValue) => {
    setData(inputValue);
  };

  return (
    <div>
      <FormComponent handleClick={onClick} />
      <ResultComponent data={data} />
    </div>
  );
};

export default InfoPage;

/**
 * B1: LẤY ĐƯỢC VALUE TRONG Ô INPUT CỦA USER - DONE
 * B2: ĐEM CÁI INPUT VALUE TRUYỀN NGƯỢC LÊN THẰNG CHA - INFO PAGE - DONE
 * B3: ĐEM CÁI INPUT VALUE MÀ THẰNG CHA VỪA NHẬN ĐƯỢC TRUYỀN XUỐNG THẰNG CON LÀ RESULT COMPONENENT - DONE
 * B4: ĐEM DATA HIỂN THỊ TRONG RESULT COMPONENENT
 *
 *
 */
