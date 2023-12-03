import { GET, GETPOSTS } from "./api/post/route";
import Person from "./components/Person";

// const getPost = async () => {
//   try {
//     const res = await fetch("http://localhost:3000/api/post", {
//       cache: "no-store",
//     });
//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     } else {
//       return res.json();
//     }
//   } catch (e) {
//     console.log(e);
//   }
// };

export default async function Home() {
  // const data = AXIOS_GET_DATA();

  // const { posts } = await getPost();
  // console.log();

  const posts = await GETPOSTS();
  console.log(`RS : `, posts);
  return (
    <main>
      <div>POST</div>
      <div>
        <form action="">
          <div>Name : </div>
          <input type="text" />
          <div>Age : </div>
          <input type="number" />
          <div>Address :</div>
          <input type="text" />
        </form>
        <button className="bg-gray-600 p-3">POST</button>
      </div>
      {/* <div>
        {posts.map(
          (
            post: { _id: string; name: string; age: number; address: string },
            index: number
          ) => {
            return (
              <Person
                key={`Post-${index}`}
                id={post._id}
                name={post.name}
                age={post.age}
                address={post.address}
              />
            );
          }
        )}
      </div> */}
    </main>
  );
}
