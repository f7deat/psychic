import Navbar from "./components/navbar";

function App() {
  return (
    <div className="flex">
      <Navbar />
      <main className="flex-grow p-10 border-r">
        <div className="flex justify-between mb-4">
          <h1 className="text-3xl">Hi, Dinh Tan</h1>
          <div className="w-96 h-14 border rounded-full flex px-6 items-center text-gray-400">
            <input className="w-full text-lg" placeholder="Search any thing..." />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </main>
      <div className="w-1/4 h-screen p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl py-6 mb-4">My Profile</h1>
          <button className="h-12 w-12 rounded-full border hover:bg-slate-100 flex items-center justify-center text-slate-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-center flex-col items-center">
          <div className="h-40 w-40 bg-gadient rounded-full p-1 mb-4">
            <div className="w-full h-full bg-white rounded-full"></div>
          </div>
          <div className="text-3xl mb-2">Đinh Công Tân</div>
          <div className="text-gray-500">f7deat@gmail.com</div>
        </div>
      </div>
    </div>
  );
}

export default App;
