import { makeAutoObservable } from 'mobx';

export class TextObservable {
  value: string = '';
  touched: boolean = false;
  error: string = '';

  constructor(initialValue: string = '') {
    this.value = initialValue;
    makeAutoObservable(this);
  }

  setValue(newValue: string) {
    this.value = newValue;
    this.validate(); // auto-validate on change (optional)
  }

  setTouched(touched: boolean) {
    this.touched = touched;
    if (touched) this.validate();
  }

  setError(message: string) {
    this.error = message;
  }

  reset() {
    this.value = '';
    this.touched = false;
    this.error = '';
  }

  validate(required = true) {
    if (required && this.value.trim() === '') {
      this.error = 'This field is required';
    } else {
      this.error = '';
    }
  }

  get hasError() {
    return this.touched && !!this.error;
  }
}
