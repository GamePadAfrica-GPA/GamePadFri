import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";


const Subscribe = () => {
  const [values, setValues] = useState({
    email: "",
  });
  console.log(values);

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_4hsdihp", "template_zz2vi4o", values, "s6cjnkBh74jI1oWOD")
      .then(
        (response) => {
          console.log("Success", response);
          setValues({
            email: "",
          });
          setStatus("Success");
          toast.success("Booked Successfull");
        },
        (error) => {
          toast.error("Failed...", error);
        }
      );
  };

  const renderAlert = () => (
    <div className="px-4 py-3 mb-5 text-center text-green-400 bg-white rounded leadin-normal">
      <p>Booked Successfull</p>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-background to-backgroundTwo  mt-8 rounded-3xl border-spacing-1 border border-backgroundOne ">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-blue">
            Subscribe to the GPA DAO for latest blockchain jobs.
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <form onSubmit={handleSubmit}>
              <input
                value={values.email}
                onChange={handleChange}
                label="E-Mail"
                name="email"
                type="email"
                placeholder="john@example.com"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white/80 px-5 py-3 text-base font-medium text-black outline-none"
              />
              <div className="ml-3 inline-flex rounded-md shadow">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-lightPink px-5 py-3 text-base font-medium text-black hover:bg-indigo-50"
                >
                  JOIN NOW
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
