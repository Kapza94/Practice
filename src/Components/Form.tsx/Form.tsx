import React, { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(formState.errors);

  // const [person, setPerson] = useState({
  //   name: "",
  //   age: "",
  // });

  // const handlesubmit = (event: FormEvent) => {
  //   event.preventDefault();
  //   console.log(person);
  // };

  const onSubmit = (data: FieldValues) => console.log("data");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          // onChange={(e) => setPerson({ ...person, name: e.target.value })}
          {...register("name", { required: true, minLength: 3 })}
          // value={person.name} //Now this input field ALWAYS relies on the value from our state variable.Now we are reffering to this field as a controlled component.As its entirely controlled by react.
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && <p>The name field is required </p>}{" "}
        {errors.name?.type === "minLength" && <p>The minimum length name is 3</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          // onChange={(e) => setPerson({ ...person, age: parseInt(e.target.value) })}
          // value={person.age}
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
