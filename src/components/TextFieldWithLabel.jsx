import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const TextFieldWithLabel = ({ name, formik, label, type = "text" }) => {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        id={name}
        name={name}
        onChange={formik.handleChange}
        values={formik.values[name]}
        onBlur={formik.handleBlur}
      />
      {formik.touched[name] && formik.errors[name] ? (
        <div className="text-red-400">{formik.errors[name]}</div>
      ) : null}
    </div>
  );
};

export default TextFieldWithLabel;
