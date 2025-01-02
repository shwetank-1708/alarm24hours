import { NavLink } from "react-router-dom";
import { FormEvent, useState } from "react";

const SingUp = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(values.name);
    console.log(values.email);
    console.log(values.password);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-[80vh] gap-4">
        <h1 className="text-5xl p-4 font-bold text-center">
          New to Alarm-24-Hours?
        </h1>
        <h3 className="text-4xl p-4 font-bold">Sing Up Here</h3>
        <form onSubmit={handleSubmit}>
          <div className="border-2 xl:w-[30%] lg:w-[50%] sm:w-[60%] w-[80%] rounded-xl">
            <input
              name="name"
              value={values.name}
              onChange={handleChange}
              type="text"
              placeholder="Enter Your Full Name"
              className="p-4 w-[100%] focus:outline-none rounded-xl text-xl"
            ></input>
          </div>
          <div className="border-2 xl:w-[30%] lg:w-[50%] sm:w-[60%] w-[80%] rounded-xl">
            <input
              name="email"
              value={values.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter Your Email Id"
              className="p-4 w-[100%] focus:outline-none rounded-xl text-xl"
            ></input>
          </div>
          <div className="border-2 xl:w-[30%] lg:w-[50%] sm:w-[60%] w-[80%] rounded-xl">
            <input
              name="password"
              value={values.password}
              onChange={handleChange}
              type="password"
              placeholder="Enter Your Password"
              className="p-4 w-[100%] focus:outline-none rounded-xl text-xl"
            ></input>
          </div>
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-full text-xl"
          >
            Sign Up
          </button>
        </form>

        <NavLink to="/login" className="text-center">
          Already have an account? Login here.
        </NavLink>
      </div>
    </div>
  );
};

export default SingUp;
