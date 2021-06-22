
import { useState, useEffect } from "react";
import { clearError, fieldError } from "../utils/errorField";
import client from "./axios";

export const useForm = () => {
  const [form, setForm] = useState({
    nama_produk: "",
    deskripsi: "",
    price: "",
    stock: "",
    image: "",
  });

  const inputChangeHanlder = (e) => {
    console.log(e.target.files)
    const { value, id } = e.target;
    const { files } = e.target;

    if (form[id] !== "") {
      clearError(id);
    }

    if (id === "price" || id === "stock") {
      setForm({ ...form, [id]: parseInt(value) });
      return;
    }

    if (id === "image") {
      setForm({ ...form, [id]: files[0] });
      return;
    }

    setForm({ ...form, [id]: value });
  };

  let dataForm = new FormData();

  for (const [key, val] of Object.entries(form)) {
    dataForm.append(key, val);
  }

  console.log(dataForm)
  return {
    form: dataForm,
    inputChangeHanlder,
  };
};

export const insertData = async (form, history, loader) => {
  client
    .post(`/api/v1/products`, form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      if (res.data.status) {
        alert("Produk berhasil di tambahkan");
        history.goBack();
      }
    })
    .catch((err) => {
      fieldError(err.response.data.message);
      return;
    })
    .then(() => {
      setTimeout(() => {
        loader(false);
      }, 1500);
    });
};