// import getJoke from "@/utils/getJoke";
// import RandomJokes from "./components/RandomJokes";

// export default async function Home() {
//   // const theme = cookies().get("theme");
//   const joke = await getJoke();

//   return (
//     <main className='flex min-h-screen flex-col items-center justify-center p-24 gap-5'>
//       <h1 className='text-xl'>{joke.value}</h1>
//       <RandomJokes />
//     </main>
//   );
// }

import NewUserForm from "./components/users/NewUserForm";

export default async function Home() {
  return (
    <div>
      <h1 className='text-gray-800'>USER REGISTRATION</h1>
      <NewUserForm />
      {/* <UserList /> */}
    </div>
  );
}
