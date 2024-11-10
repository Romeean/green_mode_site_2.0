import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './ContactUs.css';

export default function ContactUs() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [notificationMessage, setNotificationMessage] = useState("");

  const onSubmit = async (data) => {
    data.access_key = "4d04926f-f400-4bdb-8464-c98ada8cbb25"; // Замените YOUR_ACCESS_KEY_HERE на свой ключ Web3forms

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      if (result.success) {
        setNotificationMessage("Ваше сообщение успешно отправлено!", setTimeout=3000);
        reset(); // Сбрасываем форму после успешной отправки
      } else {
        setNotificationMessage("Произошла ошибка при отправке сообщения.", setTimeout='3000');
      }
    } catch (error) {
      setNotificationMessage("Произошла ошибка при отправке. Попробуйте позже.", setTimeout='3000');
    }
  };

  return (
    <div className="ContactUs">
      <div className="text_block_contact_us">
        <h2 className="title_main">Связаться с нами</h2>
        <p className="description_text">
          Отправьте сообщение на email или заполните форму, чтобы мы узнали, как мы можем решить вашу проблему.
        </p>
        <p className="description_gmail">greenmodecompany@gmail.com</p>
        <p className="description_phone_number">
          Менеджер: <span className="number_of_telephone">+380 68 889 3445</span>
        </p>
        <p className="description_phone_number">
          Инженер: <span className="number_of_telephone">+380 97 364 9765</span>
        </p>
      </div>
      <div className="background_of_form">
        <p className="form_title" id="contactUsPage">Форма</p>
        <form className="form_grid" onSubmit={handleSubmit(onSubmit)}>
          <input
            name="name"
            className="name_input"
            placeholder="Имя"
            maxLength="20"
            autoComplete="off"
            {...register("name", { required: "Имя обязательно" })}
          />
          {errors.name && <p className="error_message">{errors.name.message}</p>}

          <input
            name="phoneNumber"
            className="phonenumber_input"
            placeholder="Номер телефона"
            maxLength="12"
            autoComplete="off"
            onInput={(e) => e.target.value = e.target.value.replace(/\D/g, "")}
            {...register("phoneNumber", { 
              required: "Номер телефона обязателен", 
              pattern: {
                value: /^[0-9, -]+$/,
                message: "Только цифры допустимы"
              }
            })}
          />
          {errors.phoneNumber && <p className="error_message">{errors.phoneNumber.message}</p>}

          <textarea
            name="problem"
            className="problem_input"
            placeholder="Какую проблему вы хотите решить?"
            maxLength="250"
            {...register("problem", { required: "Поле обязательно для заполнения" })}
          ></textarea>
          {errors.problem && <p className="error_message">{errors.problem.message}</p>}

          <button type="submit" className="button_form">Отправить заявку</button>
        </form>
        {notificationMessage && (
          <div className="notification">{notificationMessage}</div>
        )}
      </div>
    </div>
  );
}
