// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import background from "./images/pattern-bg.png";
import arrow from "./images/icon-arrow.svg";

// import arrow from "../"

// https://geo.ipify.org/api/v2/country,city?apiKey=at_gky8J1cad3eyynFJRTBgYzg9WkMXi&ipAddress=8.8.8.8
function App() {
  return (
    <>
      <section>
        <div className="absolute w-full -z-10">
          <img src={background} alt="" className="w-full h-80" />
        </div>
        <div className="max-w-xl mx-auto p-8">
          <h1 className="font-bold text-2xl lg:text-3xl text-white pb-8 text-center">
            IP Address Tracker
          </h1>

          <form
            // onSubmit={handleSubmit}
            autoComplete="off"
            className="w-full flex"
          >
            <input
              type="text"
              name="ipaddress"
              id="ipaddress"
              placeholder="Search for any IP address or domain"
              className="w-full py-2 px-4 rounded-l-lg"
              // value={ipAddress}
              // onChange={(e) => setIpAddress(e.target.value)}
            />
            <button
              type="submit"
              className="bg-black py-2 px-4 rounded-r-lg hover:opacity-60"
            >
              <img src={arrow} alt="" />
            </button>
          </form>
        </div>
        
        <div
          className="bg-white rounded-xl p-8 shadow max-w-6xl mx-auto grid grid-cols-1 gap-5 text-center md:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:text-left -mb-10 relative lg:-mb-32"
          style={{
            zIndex: 10000,
          }}
        >
          <article className="lg:border-r lg:border-slate-400 p-6">
            <h2 className="text-sm uppercase text-slate-600">IP Address</h2>
            <p className="font-bold text-slate-900 text-2xl">
              {/* {address.ip} */}
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

export default App;
