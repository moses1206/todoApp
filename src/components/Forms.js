import React from "react";

export default function Forms({ handleSubmit, value, setValue }) {
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <form className='' onSubmit={handleSubmit}>
        <input
          type='text'
          name='value'
          style={{ flex: "10", padding: "5px" }}
          placeholder='해야할 일 을 입력 하세요!!'
          value={value}
          onChange={handleChange}
        />
        <input
          type='submit'
          value='입력'
          className='btn'
          style={{ flex: "1" }}
        />
      </form>
    </div>
  );
}
