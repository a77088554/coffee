const GoTop = () => {
  const scrollTop = () =>[
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
  ]

  return (
    <div className="fixed bottom-4 right-4 w-10 h-10 bg-slate-800 text-center text-white rounded-full p-2">
      <button onClick={scrollTop}>
        Top
      </button>
    </div>
  )
}

export default GoTop