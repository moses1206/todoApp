import React from "react";

export default function Forms({ handleSubmit, value, setValue }) {
  console.log("Forms.js Running!!");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <form className="flex pt-2" onSubmit={handleSubmit}>
        <input
          className="w-full px-3 py-2 mr-4 text-gray-500 border shadow"
          type="text"
          name="value"
          placeholder="해야할 일 을 입력 하세요!!"
          value={value}
          onChange={handleChange}
        />
        <input
          className="p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-400"
          type="submit"
          value="입력"
        />
      </form>
    </div>
  );
}
