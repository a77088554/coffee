import GoTop from "../components/GoTop"
import HomeBenefit from "../sections/Home/HomeBenefit"
import HomeCoffee from "../sections/Home/HomeCoffee"
import HomeHero from "../sections/Home/HomeHero"

const Home = () => {
  // 這裡也可以用createContext創建資料傳遞，並用useContext在其他components中使用
  const benefit = [['抗氧化、預防動脈硬化', '改善血糖', '降低死亡風險', '改善肝功能', '對腦部健康有益'],['含有「綠原酸」可抑制發炎以及預防動脈硬化', '經過實驗確認咖啡有降低血糖的功效', '每天3~4杯是最健康的喝法，可以降低糖尿病等各種疾病的機率', '每天3杯咖啡可以降低肝硬化、慢性肝炎有預防及感善之功效', '咖啡富含100種以上的活性物質，有助於減少失智、中風的風險']]
  const category = ['義式濃縮', '美式', '拿鐵', '卡布奇諾', '摩卡', '瑪奇朵', '阿法奇朵']

  return (
    <>
      <HomeHero/>
      <HomeBenefit benefit={benefit}/>
      <HomeCoffee category={category}/>
      <GoTop/>
    </>
  )
}

export default Home