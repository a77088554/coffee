import Card from "../../components/card"

// eslint-disable-next-line react/prop-types
const HomeBenefit = ({benefit}) => {
  const Benefit = benefit

  return (
    <section className="flex flex-col justify-center items-center max-w-max mt-10">
      <div className="text-2xl text-center font-extrabold">
        咖啡對於人體的益處
      </div>

      {/* 功效卡 */}
      <div className="flex justify-center items-center gap-4 flex-wrap">
        {Benefit[0].map((item,index)=>(
          <Card key={index} benefit={item} benefit_content={Benefit[1][index]} number={index}/>
        ))}
      </div>
        
    </section>
  )
}

export default HomeBenefit