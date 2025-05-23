import Image from "next/image";

export default function Corolla() {
  return (
    <main className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-32">
      <p className="flex justify-center font-bold text-xl underline my-10 text-center">
        Toyota Corolla 2024 Price in Pakistan, Images, Reviews and Specs
      </p>
      <div className="flex justify-center">
        <Image src="/Corolla.jpg" alt="New Toyota Corolla" width={500} height={300} />
      </div>
      <p className="text-center my-10 mx-4 sm:mx-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusamus
        fugiat omnis maxime unde laborum ut consequuntur assumenda porro vitae!
        Rerum molestiae inventore laudantium? Ea est dolor velit eum placeat. Eum
        minima dolore voluptatum adipisci? Error qui excepturi commodi at, vero
        voluptatem tempore autem blanditiis eaque obcaecati sequi velit! Fugit
        qui saepe assumenda, eveniet atque neque temporibus vel suscipit
        similique? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Deleniti molestiae obcaecati eaque voluptas dolorum vel modi saepe,
        quasi nam numquam mollitia tempora vitae fugiat, nisi deserunt?
        Repudiandae at modi non. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Veritatis!
      </p>
      <p className="flex justify-center text-lg text-green-700 mt-10 font-semibold">
        PKR 50 00 000
      </p>
      <p className="flex justify-center my-5">
        <button className="bg-blue-700 text-white p-2 rounded-sm">Make Payment</button>
      </p>
    </main>
  );
}
