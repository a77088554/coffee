// eslint-disable-next-line react/prop-types
const CategoryCard = ({category, nowCategory, setNowCategory}) => {
  return (
    <button onClick={()=>setNowCategory(category)} className={ nowCategory===category ? 'font-bold bg-slate-400 px-2 rounded-t-md hover:bg-slate-700 hover:text-white max-md:text-sm' : 'font-bold bg-amber-600 px-2 rounded-t-md hover:bg-slate-700 hover:text-white max-md:text-sm' }>
      <span className={ nowCategory===category ? '' : 'hidden' }>↓</span>{category}
    </button>
  )
}

export default CategoryCard