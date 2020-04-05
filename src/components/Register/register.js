import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { reduxForm, Field } from "redux-form";

import RegisterLogo from "../../img/undraw_access_account_99n5.svg";
import ProfileLogo from "../../img/undraw_profile_pic_ic5t.svg";
import { Link } from "react-router-dom";
import "../../styles/style.css";

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

const Register = ({ handleSubmit, submitting }) => {
  return (
    <div className="container">
      <div className="img">
        <img src={RegisterLogo} />
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
          <Link to="/">
            <small>¿Ya tienes una cuenta?</small>
          </Link>
          <button className="btn" type="submit" disabled={submitting}>
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default reduxForm({
  form: "registerForm",
  destroyOnUnmount: false,
  onSubmit(values, dispatch) {
    //TODO Validacion y manejo del estado
  },
  validate,
})(Register);
