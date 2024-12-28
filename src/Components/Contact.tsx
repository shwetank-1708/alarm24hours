const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] gap-10 m-10">
      <h2 className="font-bold text-2xl">Contact Form</h2>
      <form className="flex flex-col gap-8 xl:w-[25%] md:w-[40%] sm:w-[60%] w-[90%]">
        <div className="flex flex-col gap-2">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter Full Name"
            className="border-2 p-2 rounded-md focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="border-2 p-2 rounded-md focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Contact Number</label>
          <input
            type="text"
            placeholder="Enter Your Contact Number"
            className="border-2 p-2 rounded-md focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Message</label>
          <textarea
            placeholder="Write Your Message Here"
            className="border-2 p-2 rounded-md focus:outline-none"
          ></textarea>
        </div>
        <button className="text-sky-400 bg-white font-bold p-4 rounded-xl shadow-custom">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
