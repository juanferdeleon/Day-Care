import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { reduxForm, Field } from "redux-form";

import BabyLogo from "../../img/undraw_baby_ja7a.svg";
import ProfileLogo from "../../img/undraw_profile_pic_ic5t.svg";
import "../../styles/style.css";
import { Link } from "react-router-dom";

const renderInput = ({ input, meta, label }) => (
  <div
    className={
      meta.active
        ? "input-div one focus"
        : meta.errors && meta.touched
        ? "input-div one form-error"
        : meta.dirty
        ? "input-div one focus"
        : "input-div one"
    }
  >
    <div className="i">
      <FontAwesomeIcon icon={label === "Usuario" ? faUser : faLock} />
    </div>
    <div>
      <h5>{label}</h5>
      <input
        {...input}
        className="input"
        type={label === "Contraseña" ? "password" : "text"}
      />
    </div>
    {meta.error && meta.touched && (
      <span className="errorMessage">{meta.error}</span>
    )}
  </div>
);

const validate = (values) => {
  const errors = {};

  if (!values.user) {
    errors.user = "Campo requerido";
  }

  if (!values.password) {
    errors.password = "Campo requerido";
  }

  return errors;
};

const Login = ({ handleSubmit, submitting }) => {
  return (
    <div className="container page">
      <div className="img">
        <img src={BabyLogo} />
      </div>
      <div className="login-container">
        <img className="avatar" src={ProfileLogo} />
        <form onSubmit={handleSubmit}>
          <h2>Bienvenido</h2>
          <Field
            name="user"
            type="text"
            label="Usuario"
            component={renderInput}
          />
          <Field
            name="password"
            type="password"
            label="Contraseña"
            component={renderInput}
          />
          <Link to="/register">
            <small>¿No tienes una cuenta?</small>
          </Link>
          <button className="btn" type="submit" disabled={submitting}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default reduxForm({
  form: "loginForm",
  destroyOnUnmount: false,
  onSubmit(values, dispatch) {
    //TODO Validacion y manejo del estado
  },
  validate,
})(Login);
