import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-center p-12 text-3xl text-black sm:p-6 md:p-8">
      <div className="relative h-12 w-12 object-cover sm:mx-auto sm:w-full sm:max-w-md">
        <Image alt="Logo" src="/vercel.svg" fill className="mx-auto w-auto" />
      </div>
    </div>
  );
}
