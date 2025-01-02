import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    contactNum: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    console.log("Name:", values.name);
    console.log("Email:", values.email);
    console.log("ContactNum:", values.contactNum);
    console.log("Message:", values.message);

    await axios
      .post("http://localhost:5000/api/v1/post", values)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-10 m-10 text-[#434343] font-bold">
      <h2 className="font-bold text-2xl">Contact Form</h2>
      <form
        className="flex flex-col gap-8 xl:w-[25%] md:w-[40%] sm:w-[60%] w-[90%]"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <label>Full Name</label>
          <input
            required
            name="name"
            value={values.name}
            onChange={handleChange}
            type="text"
            placeholder="Enter Full Name"
            className="border-2 p-2 rounded-md focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Email Address</label>
          <input
            required
            name="email"
            value={values.email}
            onChange={handleChange}
            type="email"
            placeholder="Enter Your Email Address"
            className="border-2 p-2 rounded-md focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Contact Number</label>
          <input
            name="contactNum"
            value={values.contactNum}
            onChange={handleChange}
            type="number"
            placeholder="Enter Your Contact Number"
            className="border-2 p-2 rounded-md focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Message</label>
          <textarea
            name="message"
            value={values.message}
            onChange={handleChange}
            placeholder="Write Your Message Here"
            className="border-2 p-2 rounded-md focus:outline-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-sky-400 bg-white font-bold p-4 rounded-xl shadow-custom"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
