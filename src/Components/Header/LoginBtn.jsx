import React from "react";

function LoginBtn() {
  return (
    <button
    // Navigate this login btn
      onClick={'#'}
      type="button"
      class="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Log In
    </button>
  );
}

export default LoginBtn;
