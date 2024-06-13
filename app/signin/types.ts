import * as Yup from "yup";

export type TInitialState = {
   email: string;
   password: string;
};

export const initialValues: TInitialState = {
   email: "",
   password: "",
};

export const SignInSchema = Yup.object().shape({
   email: Yup.string().email("Invalid email").required("Required"),
   password: Yup.string().min(2).required("Required"),
});

export type TFields = {
   name: string;
   label: string;
   placeholder: string;
   val: string;
   type: string;
};
