import { revalidatePath, revalidateTag } from "next/cache";

const currentDateTimestamp = async () => new Date().getTime();
const sleep = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
export default async function Home() {
  // const res = await fetch("http://localhost:3000/api", {
  //   next: {
  //     tags: ["time"],
  //   },
  // });
  // const now = await res.text();

  async function action() {
    "use server";
    revalidateTag("/anono");
  }

  return (
    <div>
      {/**<p>{now}</p>**/}
      <form action={action}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
