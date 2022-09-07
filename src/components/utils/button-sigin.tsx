import React from 'react';
import { AiOutlineGithub, AiOutlineGoogle } from 'react-icons/ai';

function ButtonSignIn() {
  return (
    <>
      <button className="rounded-lg bg-slate-900 px-5 py-2 text-white">
        <div className="flex items-center gap-2">
          <AiOutlineGithub className="w-4 h-4" />
          Sign in with Github
        </div>
      </button>
      <button className="rounded-lg bg-slate-900 px-5 py-2 text-white">
        <div className="flex items-center gap-2">
          <AiOutlineGoogle className="w-4 h-4" />
          Sign in with Google
        </div>
      </button>
    </>
  );
}

export default ButtonSignIn;
