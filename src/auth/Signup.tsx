import React from 'react';
import { register } from '../services/authApi';
import { observer } from 'mobx-react-lite';
import { SignupFormModel } from '../models/forms/signupFormModel';
import { roleMap, roleOptions } from '../common/common';
import { useNavigate } from 'react-router-dom';
const form = new SignupFormModel();

const SignupPage = observer(() => {
  const [error, setError] = React.useState('');
  const navigate = useNavigate();
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    form.validateAll();

    if (!form.isValid) {
      setError('Please fix the errors before submitting');
      return;
    }

    const user = {
      fullName: form.name.value,
      email: form.email.value,
      password: form.password.value,
      role: roleMap[form.role.value],
    };

    try {
      await register(user);
      form.reset();
      navigate('/login');
    } catch (err: unknown) {
      if (err && typeof err === 'object' && 'response' in err) {
        setError((err as { response?: { data?: { message?: string } } }).response?.data?.message || 'Signup failed');
      } else {
        setError('Signup failed');
      }
    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-300 p-4">
      <form
        onSubmit={handleSignup}
        className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md space-y-6"
      >
        <h2 className="text-3xl font-extrabold text-center text-green-700">Create an Account</h2>
        <p className="text-center text-gray-500 text-sm">Join the TeamDesk platform</p>

        {error && <p className="text-red-600 text-sm text-center">{error}</p>}

        <div>
          <label className="block mb-1 text-gray-700 font-medium">Name</label>
          <input
            type="text"
            value={form.name.value}
            onChange={(e) => form.name.setValue(e.target.value)}
            onBlur={() => form.name.setTouched(true)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Your name"
          />
          {form.name.touched && form.name.error && (
            <p className="text-red-500 text-sm">{form.name.error}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-gray-700 font-medium">Email</label>
          <input
            type="email"
            value={form.email.value}
            onChange={(e) => form.email.setValue(e.target.value)}
            onBlur={() => form.email.setTouched(true)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="you@example.com"
          />
          {form.email.touched && form.email.error && (
            <p className="text-red-500 text-sm">{form.email.error}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-gray-700 font-medium">Password</label>
          <input
            type="password"
            value={form.password.value}
            onChange={(e) => form.password.setValue(e.target.value)}
            onBlur={() => form.password.setTouched(true)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Create a password"
          />
          {form.password.touched && form.password.error && (
            <p className="text-red-500 text-sm">{form.password.error}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-gray-700 font-medium">Confirm Password</label>
          <input
            type="password"
            value={form.confirmPassword.value}
            onChange={(e) => form.confirmPassword.setValue(e.target.value)}
            onBlur={() => form.confirmPassword.setTouched(true)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Repeat your password"
          />
          {form.confirmPassword.touched && form.confirmPassword.error && (
            <p className="text-red-500 text-sm">{form.confirmPassword.error}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-gray-700 font-medium">Role</label>
          <select
            value={form.role.value}
            onChange={(e) => form.role.setValue(e.target.value)}
            onBlur={() => form.role.setTouched(true)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {roleOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled ?? false}
              >
                {option.label}
              </option>
            ))}
          </select>
          {form.role.touched && form.role.error && (
            <p className="text-red-500 text-sm">{form.role.error}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          Sign Up
        </button>

        <div className="text-sm text-center text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-green-600 hover:underline">
            Log In
          </a>
        </div>
      </form>
    </div>
  );
});

export default SignupPage;
