const Loading = () => {
  return (
    <div className="w-full flex gap-5 items-center justify-center lg:h-[calc(100vh-360px)] h-[calc(100vh-300px)]">
      <span className="size-[30px] bg-blue-500 rounded-full animate-bounce [animation-delay:0ms]"></span>
      <span className="size-[30px] bg-blue-500 rounded-full animate-bounce [animation-delay:20ms]"></span>
      <span className="size-[30px] bg-blue-500 rounded-full animate-bounce [animation-delay:50ms]"></span>
      <span className="size-[30px] bg-blue-500 rounded-full animate-bounce [animation-delay:80ms]"></span>
    </div>
  );
};

export default Loading;
