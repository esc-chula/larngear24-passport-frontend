import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1 className='text-xl font-bold text-red-500'>Hi this is main page</h1>
      <ul className='mt-4 flex flex-col gap-4'>
        <li>
          <Link href='/ItemCollection'>Item Collection page</Link>
        </li>
        <li>
          <Link href='/Profile'>Profile page</Link>
        </li>
        <li>
          <Link href='/Memory'>Memory Collection page</Link>
        </li>
      </ul>
    </div>
  );
}
