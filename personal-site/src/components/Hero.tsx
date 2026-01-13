
export default function Hero() {
  return (
    <section className="relative bg-lpurple min-h-[80vh] w-full -z-2 ">
    
      <div className="absolute left-0 -translate-x-1/4 -translate-y-1/2 top-0 w-52 h-52 bg-wpurple rounded-full blur-sm -z-1" />
      <div className="absolute right-20 top-0 -translate-y-1/4  w-52 h-52 bg-wpurple rounded-full blur-sm -z-1" />
      <div className="absolute right-72 top-8 w-52 h-52 bg-laven rounded-full blur-sm -z-1" />
      <div className="absolute right-10 bottom-0 translate-y-1/4  w-52 h-52 bg-wpurple rounded-full blur-sm -z-1" />

      
      {/* personal circle decorations */}
      <div className="absolute left-60 bottom-1/2 w-56 h-56 bg-wpurple rounded-full -z-1" />
      <div className="absolute left-4 top-1/4 w-56 h-56 bg-laven rounded-full -z-1 " />
      <div className="absolute left-56 bottom-1 w-56 h-56 bg-wpurple rounded-full -z-1" />

      {/* hero content */}
      <div className="absolute right-20 top-1/3 z-10  justify-end h-full">
        <h1 className="font-boldbloom text-8xl md:text-8xl text-while">
          Hi,<br />I’m Shreeya!
        </h1>
      </div>
    </section>
  );
}