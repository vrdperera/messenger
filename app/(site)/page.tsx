import Image from 'next/image';
import AuthForm from './components/AuthForm';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-zinc-900 p-12 text-3xl text-black sm:p-6 md:p-8">
      <div className="">
        <div className="relative h-[96px] w-[96px] object-cover sm:mx-auto sm:w-full sm:max-w-md">
          <Image alt="Logo" src="/images/logo.svg" className="mx-auto w-auto" fill priority />
        </div>
        <h2 className="mt-6 text-center text-3xl font-medium tracking-tight text-zinc-50 ">Create your MSG account</h2>
      </div>
      <AuthForm />
    </div>
  );
}
