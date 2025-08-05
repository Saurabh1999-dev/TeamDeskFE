import { makeAutoObservable } from 'mobx';
import { TextObservable } from '../observables/form/TextObservable';

export class SignupFormModel {
  name = new TextObservable();
  email = new TextObservable();
  password = new TextObservable();
  confirmPassword = new TextObservable();
  role = new TextObservable();

  constructor() {
    makeAutoObservable(this);
  }

  validateAll() {
    this.name.validate();
    this.email.validate();
    this.password.validate();
    this.confirmPassword.validate();
    this.role.validate();

    if (this.password.value !== this.confirmPassword.value) {
      this.confirmPassword.setError('Passwords do not match');
    }
  }

  get isValid() {
    return [
      this.name,
      this.email,
      this.password,
      this.confirmPassword,
      this.role,
    ].every((field) => !field.error);
  }

  reset() {
    this.name.reset();
    this.email.reset();
    this.password.reset();
    this.confirmPassword.reset();
    this.role.reset();
  }
}
