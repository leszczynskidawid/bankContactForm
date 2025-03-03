import React from "react";

import CustomButton from "../CustomButton";
import TextField from "../TextField";
import { Loader } from "../Loader/Loader";
import { TextArea } from "../TextArea";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Imię musi mieć co najmniej 2 znaki")
    .max(30, "Imię może mieć maksymalnie 30 znaków")
    .required("Imię jest wymagane"),
  surname: yup
    .string()
    .min(2, "Nazwisko musi mieć co najmniej 2 znaki")
    .max(30, "Nazwisko może mieć maksymalnie 30 znaków")
    .required("Nazwisko jest wymagane"),
  email: yup
    .string()
    .email("Nieprawidłowy format email")
    .min(2, "Email musi mieć co najmniej 2 znaki")
    .max(60, "Email może mieć maksymalnie 30 znaków")
    .required("Email jest wymagany"),
  message: yup
    .string()
    .max(100, "Treść może mieć maksymalnie 100 znaków")
    .required("Treść jest wymagana"),
  privatePolicy: yup
    .bool()
    .oneOf([true], "Musisz zaakceptować politykę prywatności"),
});
const ContactForm = ({ ref, onSubmit }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const handleFormSubmit = async () => {
    await onSubmit();
    reset();
  };

  return (
    <form
      ref={ref}
      onSubmit={handleSubmit(handleFormSubmit)}
      className=" flex overflow-auto w-full  gap-5 items-center flex-col p-4 bg-white  
 "
    >
      <TextField
        label="Name"
        name="name"
        {...register("name")}
        error={errors.name?.message}
      />
      <TextField
        label="Surname"
        name="surname"
        {...register("surname")}
        error={errors.surname?.message}
      />

      <TextField
        label="Email"
        name="email"
        type="email"
        {...register("email")}
        error={errors.email?.message}
      />
      <TextArea
        label={"Treść"}
        name="message"
        {...register("message")}
        error={errors.message?.message}
      />
      <input
        type="checkbox"
        name="privatePolicy"
        // {...register("privatePolicy")}
      />
      <Loader />

      <span className="text-[10px]">
        Wyrażam zgodę na przesyłanie na mój adres e-mail podany w formularzu
        środkami komunikacji elektronicznej informacji takich jak oferty i
        informacje handlowe przez administratora danych tj. Firma XYZ z siedzibą
        w Nowym Mieście, ul. Przykładowa 123, 00-123 Nowe Miasto. W tym samym
        celu podane dane osobowe mogą być przekazywane podwykonawcom
        administratora w dostarczaniu informacji handlowych. Dane podane w
        formularzu przechowywane będą do momentu przesłania indywidualnej prośby
        o ich usunięcie. Przyjmuję do wiadomości, że podanie danych osobowych
        jest dobrowolne, jak też że przysługuje mi prawo dostępu do treści
        danych oraz ich sprostowania, usunięcia, ograniczenia przetwarzania, a
        także prawo sprzeciwu, zażądania zaprzestania przetwarzania i
        przenoszenia danych, jak również prawo do cofnięcia zgody w dowolnym
        momencie oraz prawo do wniesienia skargi do organu nadzorczego – Prezesa
        Urzędu Ochrony Danych Osobowych. Oświadczenie dotyczące przetwarzania
        danych osobowych
      </span>

      <CustomButton type="submit">Submit</CustomButton>
    </form>
  );
};
export default ContactForm;
