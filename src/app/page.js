import Link from "next/link";
export default function page() {
  return (
    <>
      <h1 className="text-3xl font-bold underline m-4"> Home Page</h1>
      <div className="m-2">
        <button  className="rounded-md m-2 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
          {" "}
          <Link href="/about">About</Link>
        </button>
        <button  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          {" "}
          <Link href="/profile">Profile</Link>
        </button>
      </div>
    </>
  );
}
