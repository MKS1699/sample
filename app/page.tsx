import Image from "next/image";

export default function Home() {
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
        <div>POST</div>
      </div>
    </main>
  );
}
