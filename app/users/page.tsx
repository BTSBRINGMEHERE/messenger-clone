"use client";

import { signOut } from "next-auth/react";

const page = () => {
  return <button onClick={() => signOut()}>Hello Users.</button>;
};

export default page;
