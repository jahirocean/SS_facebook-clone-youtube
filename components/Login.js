import Image from "next/image";
import { signIn } from "next-auth/client";

function Login() {
  return (
    <div className="grid place-items-center mt-5">
      <Image
        src="https://links.papareact.com/5me"
        width={200}
        height={200}
        objectfit="contain"
      />
      <h1
        onClick={signIn}
        className="p-5 mt-10 text-white bg-blue-500 rounded-full text-center cursor-pointer"
      >
        Login with Facebook
      </h1>
    </div>
  );
}

export default Login;
