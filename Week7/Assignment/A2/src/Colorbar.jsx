export function Colorbar({ setBgColor }) {
  return (
    <div className="grid grid-cols-7 divide-x items-center ml-[400px] mr-[400px] gap-5 fixed bottom-10 left-0 right-0 z-50 bg-slate-300 justify-center rounded-md py-2">
      <button
        type="button"
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-auto dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ml-2"
        onClick={() => setBgColor("red")}
      >
        Red
      </button>
      <button
        type="button"
        className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 my-auto dark:focus:ring-yellow-900"
        onClick={() => setBgColor("yellow")}
      >
        Yellow
      </button>
      <button
        type="button"
        className="text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 my-auto dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        onClick={() => setBgColor("black")}
      >
        Black
      </button>
      <button
        type="button"
        className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-2.5  my-auto dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        onClick={() => setBgColor("purple")}
      >
        Purple
      </button>
      <button
        type="button"
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 my-auto dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        onClick={() => setBgColor("green")}
      >
        Green
      </button>
      <button
        type="button"
        className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 my-auto dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => setBgColor("blue")}
      >
        Blue
      </button>
      <button
        type="button"
        className="focus:outline-none text-black bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 my-auto dark:focus:ring-yellow-900"
        onClick={() => setBgColor("white")}
      >
        Default
      </button>
    </div>
  );
}
