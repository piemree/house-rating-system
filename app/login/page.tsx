"use client";

import React from "react";
import { Card, Spacer, Button, Input, Checkbox, Link } from "@nextui-org/react";
import formik, { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";

const initialValues = {
  email: "",
  password: "",
  rememberMe: false,
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required").min(6),
  rememberMe: Yup.boolean(),
});

export default function Login() {
  const onSubmit = (values: typeof initialValues) => {
    console.log(values);
  };

  const loginForm = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div>
      <form
        onSubmit={loginForm.handleSubmit}
        className="flex items-center justify-center "
      >
        <Card className="p-6 w-full max-w-sm">
          <h3 className="text-center font-bold text-2xl"> Login</h3>
          <Spacer y={6} />
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            value={loginForm.values.email}
            onChange={loginForm.handleChange}
            className={clsx(
              "w-full p-2 border rounded-md focus:outline-none",
              loginForm.errors.email && "border-red-500"
            )}
          />
          {loginForm.errors.email && (
            <span className="text-red-500 text-xs ml-2 mt-1">
              {loginForm.errors.email}
            </span>
          )}
          <Spacer y={3} />
          <input
            name="password"
            type="password"
            autoComplete="current-password"
            required
            placeholder="Password"
            value={loginForm.values.password}
            onChange={loginForm.handleChange}
            className={clsx(
              "w-full p-2 border rounded-md focus:outline-none",
              loginForm.errors.password && "border-red-500"
            )}
          />
          {loginForm.errors.password && (
            <span className="text-red-500 text-xs ml-2 mt-1">
              {loginForm.errors.password}
            </span>
          )}
          <Spacer y={4} />
          <div className="flex flex-col justify-between  gap-2 text-sm">
            <Checkbox
              name="rememberMe"
              checked={loginForm.values.rememberMe}
              onChange={loginForm.handleChange}
            >
              <span>Remember me</span>
            </Checkbox>
            <div className="flex flex-col gap-1">
              <Link className="text-xs" href="/forgot-password">
                Forgot password?
              </Link>
              <Link className="text-xs" href="/register">
                Register
              </Link>
            </div>
          </div>
          <Spacer y={6} />
          <Button color="primary" type="submit">
            Sign in
          </Button>
        </Card>
      </form>
    </div>
  );
}
