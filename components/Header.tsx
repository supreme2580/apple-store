export default function Header() {
    const toggleMobileMenu = () => {
        const sideBar = document.querySelector(".side-bar")
        sideBar?.classList.toggle("-translate-x-full")
    }
  return (
    <header>
        <div className="bg-zinc-800 text-gray-300 flex items-center justify-between lg:hidden">
        
        {
        //mobile-menu-button
        }

        <button className="focus:outline-none focus:bg-zinc-700 p-4 mobile-menu-btn" onClick={toggleMobileMenu}>
        <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path></svg>
        </button>

        {
          //logo
        }

        <img
          className="w-8 h-8"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/800px-Apple_logo_grey.svg.png"
          alt="logo" />

        {
          //store-icon
        }

        <a href="" className="block p-4 text-white font-bold">
        <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
        </a>

      </div>

      {
        //sidebar
      }

      <div className="bg-black text-gray-300 w-full absolute inset-y-0 left-0 transform
      -translate-x-full transition duration-200 ease-in-out side-bar lg:hidden">

        <div className='flex justify-center items-center mt-4'>

          <button className="absolute left-0 p-4" onClick={toggleMobileMenu}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          <img
            className="w-8 h-8"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/800px-Apple_logo_grey.svg.png"
            alt="logo" />

        </div>

          <form className="text-gray-300">
              <div className="bg-zinc-800 m-5 rounded-lg flex items-center p-1">
              <input type="text" className="w-full bg-transparent p-2 outline-none" placeholder="Search" />
              <a href="">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
                  </path></svg>
              </a>
              </div>
              <hr className="bg-gray-300 w-full" />
          </form>

          <div className="text-gray-300 text-lg mx-10">
            <a href="" className="block py-2 px-4 hover:text-white border border-gray-300 border-x-0 border-t-0">Store</a>
            <a href="" className="block py-2 px-4 hover:text-white border border-gray-300 border-x-0 border-t-0">Mac</a>
            <a href="" className="block py-2 px-4 hover:text-white border border-gray-300 border-x-0 border-t-0">iPad</a>
            <a href="" className="block py-2 px-4 hover:text-white border border-gray-300 border-x-0 border-t-0">iPhone</a>
            <a href="" className="block py-2 px-4 hover:text-white border border-gray-300 border-x-0 border-t-0">Watch</a>
            <a href="" className="block py-2 px-4 hover:text-white border border-gray-300 border-x-0 border-t-0">AirPods</a>
            <a href="" className="block py-2 px-4 hover:text-white border border-gray-300 border-x-0 border-t-0">TV & Home</a>
            <a href="" className="block py-2 px-4 hover:text-white border border-gray-300 border-x-0 border-t-0">Only on Apple</a>
            <a href="" className="block py-2 px-4 hover:text-white border border-gray-300 border-x-0 border-t-0">Accessories</a>
            <a href="" className="block py-2 px-4 hover:text-white border-gray-300">Support</a>
          </div>
          
        </div>

      {
        //content
      }

      <div>

      <div className="hidden lg:flex flex-row w-screen h-14 items-center
    bg-zinc-800 text-gray-300 text-sm justify-center">
        <a href="" className="block py-2 px-4">
          <img
            className="w-6 h-6"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/800px-Apple_logo_grey.svg.png"
            alt="logo" />
        </a>
        <a href="" className="block py-2 px-4 hover:text-white">Store</a>
        <a href="" className="block py-2 px-4 hover:text-white">Mac</a>
        <a href="" className="block py-2 px-4 hover:text-white">iPad</a>
        <a href="" className="block py-2 px-4 hover:text-white">iPhone</a>
        <a href="" className="block py-2 px-4 hover:text-white">Watch</a>
        <a href="" className="block py-2 px-4 hover:text-white">AirPods</a>
        <a href="" className="block py-2 px-4 hover:text-white">TV & Home</a>
        <a href="" className="block py-2 px-4 hover:text-white">Only on Apple</a>
        <a href="" className="block py-2 px-4 hover:text-white">Accessories</a>
        <a href="" className="block py-2 px-4 hover:text-white">Support</a>
        <a href="" className="block py-2 px-4">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </a>
        <a href="" className="block py-2 px-4">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
        </a>
      </div>
      </div>
    </header>
  )
}