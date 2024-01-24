import React from "react";
import { useNavigate } from "react-router-dom";
function LoginBtn() {
  const navigate = useNavigate();
  return (
    <button
      onClick={()=>navigate('/login')}
      type="button"
      class="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Log In
    </button>
  );
}

export default LoginBtn;
