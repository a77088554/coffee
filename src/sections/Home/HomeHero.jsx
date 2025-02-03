const HomeHero = () => {
  return (
    <section className="flex max-lg:flex-col">
      <div className="max-w-[60%] max-lg:max-w-full max-lg:home_hero max-lg:h-screen">
        <img 
          src="../public/coffee_hero.jpg" 
          alt="coffee hero img"
          className="w-full h-full object-cover max-lg:hidden" 
        />
        <div className="lg:hidden text-white font-bold text-4xl text-right flex justify-center mt-[40dvh]">
          COFFEE CAN CHANGE YOUR LIFE.<br/>
          —深山晋作先生
        </div>
      </div>
      <div className="h-auto flex-1 bg-slate-300 flex justify-center items-center text-right max-lg:hidden">
        <div className="text-3xl font-bold">
          COFFEE CAN CHANGE YOUR LIFE.<br/>
          —深山晋作先生
        </div>
      </div>
    </section>
  )
}

export default HomeHero