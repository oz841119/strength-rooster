export default function Page() {
  return (
    <div className="w-full min-h-screen text-slate-700 flex">
      <div className="w-5/12 min-h-screen bg-white">
        <div className="flex flex-col items-center pt-36 px-3">
          <h2>STRENGTH ROOSTER</h2>
          <div className="text-slate-500 mb-10">
            Record each training session and visualize more useful data.
          </div>
          <div className="w-3/5 flex flex-col">
            <label className="mb-4">
              <div className="text-lg">Account</div>
              <input type="text" className="w-full h-9 px-2" />
            </label>
            <label className="mb-2">
              <div className="text-lg">Password</div>
              <input type="password" className="w-full h-9 px-2" />
            </label>
            <div className="flex justify-between mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-1" />
                <span className="text-xs">Remember</span>
              </label>
              <span className="cursor-pointer text-xs text-slate-600">Forgot</span>
            </div>
            <div className="w-full text-center bg-slate-700 text-white py-2 cursor-pointer mb-4">
              LOGIN
            </div>
            <div className="w-full text-center bg-slate-400 text-white py-2 cursor-pointer">
              REGISTER
            </div>
          </div>
        </div>
      </div>

      <div className=" text-white">畫不出來</div>
    </div>
  )
}