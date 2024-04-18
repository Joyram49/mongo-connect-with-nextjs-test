import getJoke from "@/utils/getJoke";

export default async function RandomJokes() {
  const joke = await getJoke();
  return (
    <div className='mt-10 text-3xl'>
      <h1>{joke.value}</h1>
    </div>
  );
}
