
type starProps = {
  size: number;
  top: number;
  left: number;
  degrees: number;
};

export function Star({size, top, left, degrees}: starProps) {

  return (
    <div
      className="shadow-[0_0_10px_5px_rgba(255, 255, 255, 0.8)] absolute z-0 inline-block animate-pulse bg-white"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}%`,
        left: `${left}%`,
        transform: `rotate(${degrees}deg)`,
      }}
    ></div>
  );
}

export default function Star_Map(numberOfStars: number) {
  const stars = [];
  for (let i = 0; i < numberOfStars; i++) {
    const size = Math.random() * 3 + 1;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const degrees = Math.random() * 360;
    stars.push(
      <Star key={i} size={size} top={top} left={left} degrees={degrees} />
    );
  } 
  return <>{stars}</>;
}