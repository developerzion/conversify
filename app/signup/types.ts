import * as Yup from "yup";

export type TInitialState = {
   fullName: string;
   email: string;
   username: string;
   password: string;
   confirmPassword: string;
   avatarUrl: string;
   terms: boolean;
};

export const initialValues: TInitialState = {
   fullName: "",
   email: "",
   username: "",
   password: "",
   confirmPassword: "",
   avatarUrl: "",
   terms: false,
};

export const SignUpSchema = Yup.object().shape({
   fullName: Yup.string().min(2).required("Required"),
   email: Yup.string().email("Invalid email").required("Required"),
   username: Yup.string().min(2).required("Required"),
   password: Yup.string().min(2).required("Required"),
   confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .min(2)
      .required("Required"),
});

export type TFields = {
   name: string;
   label: string;
   placeholder: string;
   val: string;
   type: string;
};

export enum TStepsEnum {
   STEP_INFO = "STEP_INFO",
   STEP_AVATAR = "STEP_AVATAR",
}

export const usersAvatars: string[] = [
   "https://res.cloudinary.com/dyfmkjtkr/image/upload/v1718236545/user-8_khbrub.jpg",
   "https://res.cloudinary.com/dyfmkjtkr/image/upload/v1718236544/user-7_i9cif5.webp",
   "https://res.cloudinary.com/dyfmkjtkr/image/upload/v1718236544/user-6_mbgys2.webp",
   "https://res.cloudinary.com/dyfmkjtkr/image/upload/v1718236544/user-1_t0yguk.jpg",
   "https://res.cloudinary.com/dyfmkjtkr/image/upload/v1718236544/user-3_lrjbh4.jpg",
   "https://res.cloudinary.com/dyfmkjtkr/image/upload/v1718236544/user-10_nd5hgv.jpg",
   "https://res.cloudinary.com/dyfmkjtkr/image/upload/v1718236544/user-5_b1sydf.jpg",
   // "https://res.cloudinary.com/dyfmkjtkr/image/upload/v1718236544/user-4_gnezrq.jpg",
   "https://res.cloudinary.com/dyfmkjtkr/image/upload/v1718236544/user-9_dq1tq9.jpg",
   "https://res.cloudinary.com/dyfmkjtkr/image/upload/v1718236543/user-2_mcdw2t.jpg",
];
