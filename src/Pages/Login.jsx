import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useFormik } from "formik";
import * as yup from "yup";
import TextFieldWithLabel from "@/components/TextFieldWithLabel";
import { SubmitBtn } from "@/components/SubmitBtn";
import { useEffect } from "react";

export function Login() {
  useEffect(() => {
    document.title = "Login";
  }, []);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
    }),
    onSubmit: (data, { setSubmitting }) => {
      setTimeout(() => setSubmitting(false), 2000);
    },
  });

  return (
    <div className="flex justify-center mt-3">
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={formik.handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <TextFieldWithLabel
                  name="email"
                  formik={formik}
                  label="Email"
                  type="text"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <TextFieldWithLabel
                  name="password"
                  formik={formik}
                  label="Password"
                  type="password"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <SubmitBtn
            formik={formik}
            label="Login"
            icon="fa-solid fa-right-to-bracket"
          />
        </CardFooter>
      </Card>
    </div>
  );
}
