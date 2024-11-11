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
        setNotificationMessage("Ваше повідомлення успішно надіслано!", setTimeout=3000);
        reset(); // Сбрасываем форму после успешной отправки
      } else {
        setNotificationMessage("Сталася помилка під час надсилання повідомлення.", setTimeout='3000');
      }
    } catch (error) {
      setNotificationMessage("Сталася помилка під час надсилання. Спробуйте пізніше..", setTimeout='3000');
    }
  };

  return (
    <div className="ContactUs">
      <div className="text_block_contact_us">
        <h2 className="title_main">Зв'язатися з нами</h2>
        <p className="description_text">
          Надішліть повідомлення на email або заповніть форму, щоб ми дізналися, як можемо вирішити вашу проблему.
        </p>
        <p className="description_gmail">greenmodecompany@gmail.com</p>
        <p className="description_phone_number">
          Відділ продажу: <span className="number_of_telephone">+380 68 889 3445</span>
        </p>
        <p className="description_phone_number">
          Відділ технічної підтримки: <span className="number_of_telephone">+380 97 364 9765</span>
        </p>
      </div>
      <div className="background_of_form">
        <p className="form_title" id="contactUsPage">Форма</p>
        <form className="form_grid" onSubmit={handleSubmit(onSubmit)}>
          <input
            name="name"
            className="name_input"
            placeholder="Им'я"
            maxLength="20"
            autoComplete="off"
            {...register("name", { required: "Им'я обов'язково" })}
          />
          {errors.name && <p className="error_message">{errors.name.message}</p>}

          <input
            name="phoneNumber"
            className="phonenumber_input"
            placeholder="Номер телефону"
            maxLength="12"
            autoComplete="off"
            onInput={(e) => e.target.value = e.target.value.replace(/\D/g, "")}
            {...register("phoneNumber", { 
              required: "Номер телефону обов'язковий", 
              pattern: {
                value: /^[0-9, -]+$/,
                message: "Лише цифри дозволенні"
              }
            })}
          />
          {errors.phoneNumber && <p className="error_message">{errors.phoneNumber.message}</p>}

          <textarea
            name="problem"
            className="problem_input"
            placeholder="Яку проблему Ви хочете вирішити?"
            maxLength="250"
            {...register("problem", { required: "Поле обов’язкове для заповнення" })}
          ></textarea>
          {errors.problem && <p className="error_message">{errors.problem.message}</p>}

          <button type="submit" className="button_form">Відправити заявку</button>
        </form>
        {notificationMessage && (
          <div className="notification">{notificationMessage}</div>
        )}
      </div>
    </div>
  );
}
