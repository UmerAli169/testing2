export default function Header() {
  return (
    <>
      <div className="w-full h-[38px] bg-black flex items-center justify-center relative">
        <div className="w-[372px] h-[17px] flex justify-between">
          <header className="text-white font-abeezee text-[14px] font-normal leading-[16.55px]">
            Sign up and get 20% off your first order.{" "}
            <span className="underline decoration-solid">Sign Up Now</span>
          </header>
        </div>
        {/* Cross Icon */}
        <img
          src="svgs/header/cross.svg"
          alt="Close"
          className="absolute w-[13.13px] *: h-[13.13px] top-1/2  right-4 transform -translate-y-1/2 cursor-pointer mx-[75px] sm:block hidden"
        />
      </div>
    </>
  );
}
