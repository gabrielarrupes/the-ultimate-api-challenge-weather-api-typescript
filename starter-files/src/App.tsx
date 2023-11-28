const App = () => {
  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
      <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg text-zinc-700">
        <h1 className="text-4xl font-thin">Weather <span className="font-black"> Forecast</span></h1>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto repellendus in ipsum. Recusandae neque, consequatur facere sed porro cumque, beatae vero voluptatem quos ab alias. Alias iusto sequi adipisci.
        </p>

        <input type="text" value={'k'} className="px-2 py-1 rounded-l-md border-2 border-white" />
      </section>


    </main>
  )
}

export default App
