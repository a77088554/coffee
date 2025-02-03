const About = () => {
  return (
    <div className="font-bold flex flex-col text-center">
      <div className="mx-auto">
        <h1 className="w-fit">使用框架及技術 : react、tailwindcss</h1>
        <h1 className="w-fit">網站目的 : 練習使用useState等Hook操作、加強tailwindcss技巧、加強RWD網站的生成技巧</h1>
        <h1>
          <a 
            href="https://github.com/a77088554" 
            target="_blank"
            className="text-red-700 hover:text-blue-700 focus:text-blue-700 underline"
          >
              My GitHub
            </a>
        </h1>
      </div>
    </div>
  )
}

export default About