import { useState } from "react"
import CategoryCard from "../../components/CategoryCard"
import CategoryContent from "../../components/CategoryContent"

// eslint-disable-next-line react/prop-types
const HomeCoffee = ({category}) => {
  const Category = category
  const [nowCategory, setNowCategory] = useState(Category[0])

  return (
    <section className="bg-slate-300 flex flex-col items-center justify-center text-center mt-10">
      <div className="text-2xl font-extrabold">
        咖啡的種類
      </div>
        {/* 下面做一個依靠點擊標籤來顯示咖啡的種類 */}
      <div className="flex gap-1 mt-4">
        {Category.map((item)=>{
          return(
            <CategoryCard key={item} category={item} nowCategory={nowCategory} setNowCategory={setNowCategory}/>
          )
        })}
      </div>
      <div className="bg-slate-400 w-full h-[60dvh] flex justify-center">
        <CategoryContent nowCategory={nowCategory} />
      </div>
    </section>
  )
}

export default HomeCoffee