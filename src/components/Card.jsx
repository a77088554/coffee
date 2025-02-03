// eslint-disable-next-line react/prop-types
const Card = ({benefit, benefit_content, number}) => {
  return (
    <div className="bg-slate-300 max-w-fit mx-6 my-4 border-slate-600 rounded-md drop-shadow-md">
      <div className="flex flex-col items-center px-4 py-2">
        <div className="w-full text-left font-bold">
          {number+1}. {benefit}
        </div>
        <div className="text-green-800">
          {benefit_content}
        </div>
      </div>
    </div>
  )
}

export default Card