import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { employFetch,employAdd } from "./useEmployeesSlice";
const App = () => {
  const { employ, error, loading } = useSelector((state) => state.employ);
  const dispatch = useDispatch();
  console.log(employ);
  useEffect(() => {
    dispatch(employFetch());
  }, [dispatch]);
  const [input, setInput] = useState({
    name: "",
    job: "",
  });
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(employAdd(input));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}> 
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={input.name}
          placeholder="name"
        />
        <input
          type="text"
          name="job"
          onChange={handleChange}
          value={input.job}
          placeholder="job"
        />
        <button type="submit">submit</button>
      </form>
      <ul>
        {employ?.data?.map((item, i, arr) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
