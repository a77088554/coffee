// eslint-disable-next-line react/prop-types
const CategoryContent = ({nowCategory}) => {
  const content = {
    義式濃縮:'比其他方法製作出來的咖啡更加濃厚，含有更高濃度的懸浮固體和溶解固體，如表層的咖啡脂。',
    美式:'由義式濃縮咖啡加入熱水製作而成。',
    拿鐵:'拿鐵咖啡成分是三分之一的濃縮咖啡加三分之二的鮮奶，並打入些許奶泡。它與卡布奇諾咖啡相比，有更多奶味。',
    卡布奇諾:'在濃縮咖啡上，倒入以蒸汽發泡的牛奶。',
    摩卡:'由三分之一的義式濃縮咖啡和三分之二的奶沫配成，還會加入少量巧克力。',
    瑪奇朵:'使用少量牛奶或奶泡加上濃縮咖啡製作而成的咖啡飲料。',
    阿法奇朵:'一杯阿芙佳朵包括杯底的義大利濃縮咖啡和覆蓋在上面的冰淇淋，為了增加甜味和促進口感，常會向裡面加入焦糖。'
  }

  return (
    <div className="text-xl flex justify-center items-center my-auto">
      <img 
        src={`../src/assets/${nowCategory}.jpg`} 
        alt={`${nowCategory}`}
        className="rounded-2xl h-[50dvh]" 
      />
      <div className="mx-8 text-left w-[30%] max-md:hidden max-w-2xl">
        {nowCategory} :<br/>
        {content[nowCategory]}
      </div>
    </div>
  )
}

export default CategoryContent