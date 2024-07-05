import * as Yup from "yup";

export type TInitialState = {
   fullName: string;
   email: string;
   username: string;
};

export type TPassword = {
   password: string;
   confirmPassword: string;
};

export type TFields = {
   name: string;
   label: string;
   placeholder: string;
   type: string;
   show?: boolean;
   val?: string;
   disabled?: boolean;
};

export const UpdateSchema = Yup.object().shape({
   fullName: Yup.string().min(2).required("Full name is required"),
   email: Yup.string().email("Invalid email").required("Email is required"),
   username: Yup.string().min(2).required("Username is required"),
});

export const PasswordSchema = Yup.object().shape({
   password: Yup.string().min(2).required("Password is required"),
   confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .min(2)
      .required("Password is required"),
});
