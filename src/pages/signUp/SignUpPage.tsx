import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../router/routes';

const SignUpPage = () => {
  return (
    <section className="p-4 grow flex items-center justify-around">
      <div className="mb-52">
        <h1 className="mb-4 text-4xl text-center font-semibold">Sign Up</h1>
        <form className="max-w-md mx-auto">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button
            type="submit"
            className="mt-8 bg-darkCoral p-2 w-full text-white rounded-2xl"
          >
            Sign Up
          </button>
          <div className="mt-6 text-center">
            <span className="mr-3 text-gray-400">Already have an account?</span>
            <Link to={ROUTES.LOGIN} className="text-black underline decoration-solid">
              Login
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUpPage;
