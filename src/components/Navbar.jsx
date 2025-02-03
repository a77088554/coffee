import { useState } from "react"
import { useLocation } from "react-router"

const Navbar = () => {
  // 確認md裝置的導覽列按鈕是否有被點擊
  const [btnClick, setBtnClick] = useState(false)
  
  // 使用function改變btnClick的狀態，並給button的onClick使用
  const handleBtnClick = () =>{
    setBtnClick(!btnClick)
  }
  
  // 確認目前所在分頁
  const location = useLocation()

  return (
    <nav className="bg-slate-500 text-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 text-2xl">
          <img 
            src="/coffee_shop.png" 
            alt="coffee_bean" 
            className="h-8"
          />
          <span className="self-center font-semibold whitespace-nowrap">
            coffee
          </span>
        </a>
        <button 
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
          onClick={handleBtnClick}  
        >
          <span className="sr-only">開啟導覽列</span>
          <img 
            src="/navigation_bar.png" 
            alt="navbar_icon"
            className="w-5" 
          />
        </button>
        {/* 這裡需要用到useStatus來處理hidden屬性 */}
        <div className={btnClick ? "w-full md:block md:w-auto" : "hidden w-full md:block md:w-auto"} id="navbar_default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            <li>
              <a href="/" className={location.pathname==='/' ? 'navbar_li text-blue-700' : 'navbar_li'}>首頁</a>
            </li>
            <li>
              <a href="/about" className={location.pathname==='/about' ? 'navbar_li text-blue-700' : 'navbar_li'}>關於</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar