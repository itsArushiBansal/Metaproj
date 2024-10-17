function Header() {
  return (
    <header className="mt-8 relative">
      <h1 className=" text-4xl font-bold text-blue-600 ms-3 mb-5">
        Help Desk.
      </h1>
      <div className="relative">
        <img
          src="/Smiling Woman On Phone 1 (1).png"
          className="w-[90vw] h-[30vw] ms-8 me-8"
          style={{ clipPath: "polygon(0% 10%, 95% 0%, 100% 100%, 0% 100%)" }}
        />
        <div
          className="absolute w-[50vw] h-24 bg-blue-600 -bottom-10 left-0 z-0"
          style={{ clipPath: "polygon(0% 0%, 95% 0%, 100% 100%, 0% 100%)" }}
        >
          <p className="font-bold text-white text-xl p-4">
            How can we help you?{" "}
          </p>
          <div className="flex ">
            <input type="text" className="w-[50%] h-5 px-4 ms-4 text-black" />
            <input
              type="text"
              placeholder="Search"
              className="w-[10%] h-5 px-4 ms-4 text-blue-500"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
