"use client";

import React from "react";
import { Card, Spacer, Button, Input, Checkbox, Link } from "@nextui-org/react";
import formik, { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";

const initialValues = {
  email: "",
  password: "",
  passwordConfirm: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required").min(6),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Password confirm is required"),
});

export default function Login() {
  const onSubmit = (values: typeof initialValues) => {
    console.log(values);
  };

  const registerForm = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div>
      <form
        onSubmit={registerForm.handleSubmit}
        className="flex items-center justify-center "
      >
        <Card className="p-6 w-full max-w-sm">
          <h3 className="text-center font-bold text-2xl"> Register</h3>
          <Spacer y={6} />
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            value={registerForm.values.email}
            onChange={registerForm.handleChange}
            className={clsx(
              "w-full p-2 border rounded-md focus:outline-none",
              registerForm.errors.email && "border-red-500"
            )}
          />
          {registerForm.errors.email && (
            <span className="text-red-500 text-xs ml-2 mt-1">
              {registerForm.errors.email}
            </span>
          )}
          <Spacer y={3} />
          <input
            name="password"
            type="password"
            required
            placeholder="Password"
            value={registerForm.values.password}
            onChange={registerForm.handleChange}
            className={clsx(
              "w-full p-2 border rounded-md focus:outline-none",
              registerForm.errors.password && "border-red-500"
            )}
          />
          {registerForm.errors.password && (
            <span className="text-red-500 text-xs ml-2 mt-1">
              {registerForm.errors.password}
            </span>
          )}
          <Spacer y={3} />

          <input
            name="passwordConfirm"
            type="password"
            required
            placeholder="Password Confirm"
            value={registerForm.values.passwordConfirm}
            onChange={registerForm.handleChange}
            className={clsx(
              "w-full p-2 border rounded-md focus:outline-none",
              registerForm.errors.passwordConfirm && "border-red-500"
            )}
          />
          {registerForm.errors.passwordConfirm && (
            <span className="text-red-500 text-xs ml-2 mt-1">
              {registerForm.errors.passwordConfirm}
            </span>
          )}
          <Spacer y={4} />
          <div className="flex flex-col justify-between  gap-2 text-sm">
            <div className="flex flex-col gap-1">
              <Link className="text-xs" href="/login">
                Login
              </Link>
            </div>
          </div>
          <Spacer y={6} />
          <Button color="primary" type="submit">
            Register
          </Button>
        </Card>
      </form>
    </div>
  );
}
