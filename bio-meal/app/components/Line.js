export default function Line() {
  return (
    <div className="flex gap-0 w-full items-center justify-center mt-4">
      <div className="bg-gray-300 h-[3px] w-[5px] rounded-l-md"></div>
      <div className="bg-gray-300 h-[8px] w-[3px] rounded-md"></div>
      <div className="bg-gray-300 h-[3px] w-[80%]"></div>
      <div className="bg-gray-300 h-[8px] w-[3px] rounded-md"></div>
      <div className="bg-gray-300 h-[3px] w-[5px] rounded-r-md"></div>
    </div>
  );
}
