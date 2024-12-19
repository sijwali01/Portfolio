import Link from 'next/link'
export default function page() {
  return(
    <>
    <h1 className='text-3xl font-bold underline'> Home Page</h1>
    
    <button> <Link href="/about">About</Link></button>
    <button> <Link href="/profile">Profile</Link></button>

    </>

  ) 
  
};
