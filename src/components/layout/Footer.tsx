// https://carnivalresort.in/wp-content/uploads/2023/02/images.png

const Footer = () => {
  return (

      <div className="flex flex-col items-center mb-30">
         <div className="relative flex justify-center">
         <img
      src="https://adventvista.com/assets/img/avbiglogo.jpeg"
      alt=" Logo"
      loading="lazy"
      className="h-[240px] w-[200px] object-contain"
    />

    <h1 className="absolute z-10 rounded-md text-orange-500 font-cinzel bottom-8 text-sm whitespace-nowrap ">
      Loving the AdventVista experience?
    </h1>
  </div>

  {/* Normal flow text */}
  <p className="mt-2 text-center font-cinzel">
    Check out our{" "}
    <a
      href="https://adventvista.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium font-bungee text-blue-600 underline"
    >
      website
    </a>{" "}
    to learn more and discover other participating venues.
  </p>
</div>

  )
}

export default Footer
