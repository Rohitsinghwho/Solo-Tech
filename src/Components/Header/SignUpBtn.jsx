import React from 'react'

function SignUpBtn() {
  return (
    <button
    // add navigation 
    onClick={'#'}
      type="button"
      class="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Sign Up
    </button>
  )
}

export default SignUpBtn