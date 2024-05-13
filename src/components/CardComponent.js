import React from "react";

const CardComponent = () => {
  return (
    <div className="card">
      <h1 className="card__heading">Học lập trình web có đơn giản không?</h1>
      <div className="card__img__wrapper">
        <img
          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200114192751/How-to-Learn-Programming.png"
          alt="learing"
        />
      </div>
      <h3 className="card__subheading">Đây là tiêu đề của bài viết</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <div className="card__btn__group">
        <button className="card__btn">Đọc thêm...</button>
      </div>
    </div>
  );
};

export default CardComponent;
