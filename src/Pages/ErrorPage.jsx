import { useRouteError } from "react-router-dom";
import useTitle from "../Utils/Scripts/useTitle";

function ErrorPage() {
  useTitle("ErrorPage");
  const error = useRouteError();
  return (
    <section className="h-screen grid place-items-center bg-black/15">
      <section className=" h-fit p-6 shadow-lg bg-orange-200/10 backdrop-blur-lg rounded-2xl">
        <section className="bg-gradient-to-br from-orange-400 via-blue-400 to-red-500 backdrop-blur-3xl p-6 h-fit rounded-xl min-w-[50vw]">
          <section id='error-page' className="text-center h-full rounded-xl bg-white/55 p-9">
            <h1 className="text-3xl text-center font-semibold text-blue-600">Oops!</h1>
            <p className="text-xl my-3 italic">Sorry, an unexpected error has occurred.</p>
            
              <h2 className="text-9xl text-red-500 text-center font-black tracking-wider">{error.status}</h2>
              <p className="text-2xl text-gray-800/65 font-bold uppercase tracking-widest">{error.statusText && error.statusText}</p><br />
              <p className="text-red-500 text-xl">{error.message && error.message}</p><br />
              <p className="text-lg font-semibold text-amber-800">{error.data}</p>
            
          </section>
        </section>
      </section>
    </section>
  );
}

export default ErrorPage;
