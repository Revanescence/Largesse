import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex justify-center flex-col items-center text-white h-[40vh]">
      <div className="flex font-bold gap-2 text-5xl justify-center items-center">Give me Cookies <span>
        <img src="/cookie.webp" width={80} alt="" /></span></div>
        <div className="flex flex-col items-center">
          <p className="text-center mb-4">
            Largesse is a platform that enables individuals to support creators and causes through generous contributions, fostering a community of giving and appreciation.
          </p>
          <div><button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Purple to Blue</button>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Purple to Blue</button>
          </div> 
    </div>
  </div>
    <div className="bg-white h-1 opacity-15"> </div>

    <div className="text-white container mx-auto py-32 pt-14">
      <h2 className="font-bold text-white text-center mb-14 text-3xl">
        Your Backers can buy you a Cookie
      </h2>
      <div className="flex gap-5 justify-around ">
      <div className="item space-y-3 flex flex-col items-center justify-center">
          <img className="bg-slate-400 rounded-full p-2 text-black" src="/man.gif" width = {80}  alt="" />
          <p className="font-bold  text-white">Fund Youself</p>
          <p className=" text-center">Your admirers are available for you to support you</p>
        </div>
        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img className="bg-slate-400 rounded-full p-2 text-black" src="/coin.gif" width = {80}  alt="" />
          <p className="font-bold  text-white">Fund Youself</p>
          <p className=" text-center">Your admirers are available for you to support you</p>
        </div>
        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img className="bg-slate-400 rounded-full p-2 text-black" src="/group.gif" width = {80}  alt="" />
          <p className="font-bold">Bakers for you</p>
          <p className=" text-center">Your admirers are available for you to support you</p>
        </div>
      </div>
    </div>
    <div className="bg-white h-1 opacity-15"> </div>
    <div className="text-white container mx-auto py-32 pt-14">
      <h2 className=" font-bold text-white text-center mb-14 text-3xl">
        Learn more about us
      </h2>
      <div className="flex flex-row justify-center items-center gap-4">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/InyT9Gyoz_o?si=LPKcFzRYv3WSXdyX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/uD4izuDMUQA?si=aU_1jCVZbTfzgF3U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/R0krUthYxF4?si=oBReL20aYWZ_x_bH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    </div>
</>
  );
}
