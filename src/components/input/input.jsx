import React from "react";

export default function Input({ type, placeholder, verifier }) {
  return <input onInput={verifier} type={type} placeholder={placeholder} />;
}
