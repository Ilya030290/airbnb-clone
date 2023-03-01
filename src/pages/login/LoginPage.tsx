import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../router/routes';

const LoginPage = () => {
  return (
    <section className="p-4 grow flex items-center justify-around">
      <div className="mb-52">
        <h1 className="mb-4 text-4xl text-center font-semibold">Login</h1>
        <form className="max-w-md mx-auto">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button
            type="submit"
            className="mt-8 bg-darkCoral p-2 w-full text-white rounded-2xl"
          >
            Login
          </button>
          <div className="mt-6 flex text-center">
            <span className="mr-3 text-gray-400">Do not have an account yet?</span>
            <Link to={ROUTES.SIGNUP} className="text-black underline decoration-solid">
              Click here to create an account
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
