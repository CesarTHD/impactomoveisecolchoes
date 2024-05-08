"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useCoordinatesContext } from "@/context/UseCoordinatesContext";
import { motion } from 'framer-motion';
// import {registerLicense} from '@syncfusion/ej2-base';
// registerLicense("")

export default function Home() {

  function MeuObjeto({ x, y }) {
    return (
      <motion.div
        animate={{ x, y }}
        transition={{ duration: .3 }}
        style={{ position: 'absolute', border: "solid red 2px" }}
      >
      </motion.div>
    );
  }

  const { coordinates, setCoordinates } = useCoordinatesContext();

  const [play, setPlay] = useState(false);

  const mouseMove = (e) => {
    setCoordinates([...coordinates, { x: e.clientX, y: e.clientY }]);
  }

  const startStop = () => {
    play ? setPlay(false) : setPlay(true);
    console.log(coordinates)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between"
      onMouseMove={mouseMove}
      onClick={startStop}
    >
      {play && coordinates.map((coordinate, i) => (
        <div key={i} style={{ position: 'absolute', width: '100%', height: '100vh' }}>
          {
            <MeuObjeto x={coordinate.x} y={coordinate.y} />
          }
        </div>
      ))}
      <div className="p-16">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur itaque nam error quas hic voluptatibus ipsum aliquam quibusdam illo facere ducimus nihil ipsa, officia quae, at ipsam commodi fugit officiis inventore veritatis mollitia totam iste aliquid? Aspernatur sapiente nisi exercitationem corporis dolorem totam, similique vero nesciunt ex eaque dolor in vitae quod voluptas. Nesciunt alias optio inventore non ab enim voluptatibus eos asperiores explicabo ad magni, dolorum cum ipsum temporibus! Officia, quo officiis! Quod illum quasi cupiditate libero error accusantium qui fugit! Libero voluptate suscipit sint enim sequi laboriosam quae doloribus, sed vero nisi, tempore laborum optio quibusdam aut, deserunt officia aperiam ad facere labore error quos voluptatum perspiciatis dolorem? Labore reprehenderit earum, qui soluta accusamus adipisci! Ullam maxime facilis eaque? Nulla fugit minus quam voluptas amet exercitationem expedita ratione hic? Velit, harum expedita reprehenderit quos corporis enim esse, architecto eum cumque ea totam veritatis eligendi illum sit. Totam laborum excepturi eaque maxime earum optio illum quis? Quas eum vero natus iusto incidunt doloribus laboriosam non ducimus sequi exercitationem, architecto ipsa, perferendis perspiciatis officiis distinctio totam. Fugiat ex, molestiae exercitationem tempora deserunt consequatur voluptatem fuga porro quod earum neque voluptate non sit excepturi debitis cum praesentium odio eligendi ipsa animi.
        </p>
        <div className="bg-black text-white w-28 mt-32">
          <p>X: {coordinates[coordinates.length - 1].x}</p>
          <p>Y: {coordinates[coordinates.length - 1].y}</p>
        </div>
      </div>
    </main>
  );
}
