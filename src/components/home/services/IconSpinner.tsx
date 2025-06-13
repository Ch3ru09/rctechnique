import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";

import RepairImage from "./icons/repair.png";
// <a href="https://www.flaticon.com/free-icons/maintenance" title="maintenance icons">Maintenance icons created by Freepik - Flaticon</a>
import PhoneIcon from "./icons/phone.png";
// <a href="https://www.flaticon.com/free-icons/smartphone" title="smartphone icons">Smartphone icons created by Freepik - Flaticon</a>
import ComputerIcon from "./icons/computer.png";
// <a href="https://www.flaticon.com/free-icons/computer" title="computer icons">Computer icons created by Freepik - Flaticon</a>
import IpadIcon from "./icons/ipad.png";
// <a href="https://www.flaticon.com/free-icons/gadget" title="gadget icons">Gadget icons created by Freepik - Flaticon</a>

export default function IconSpinner({
  currentIconIndex,
  setCurrentIconIndex,
}: IconSpinnerProps) {
  const icons = [PhoneIcon, ComputerIcon, IpadIcon];

  return (
    <div className="grid place-items-center relative my-64 transition-all w-1/4 duration-1000">
      <span className="absolute border-solid border-2 border-gray-500 w-80 h-80 rounded-full">
      </span>

      <Image
        src={RepairImage}
        alt=""
        className="h-32 w-auto"
        style={{ transform: "translate(-3px, -4px)" }}
      />

      <ul
        className={"absolute w-auto h-20 aspect-square origin-center transition-all duration-1000 rotate-0"}
        style={{
          rotate: `${(currentIconIndex * 360) / icons.length}deg`,
        }}
      >
        {icons.map((icon, i) => {
          return (
            <li
              className="absolute h-full w-auto aspect-square cursor-pointer"
              style={{ transform: getPosition(i, icons.length) }}
              key={i}
              onClick={() => {
                setCurrentIconIndex(
                  (r) =>
                    r +
                    ((icons.length - (r % icons.length) + i) % icons.length),
                );
              }}
            >
              <Image
                src={icon}
                alt=""
                className="absolute h-full w-auto aspect-square transition-all duration-1000 rotate-0"
                style={{
                  rotate: `-${(currentIconIndex * 360) / icons.length}deg`,
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function getPosition(index: number, total: number): string {
  const RADIUS = 10;
  const ONE_ANGLE = -(2 * Math.PI) / total;
  let x: number, y: number;

  x = Math.cos(index * ONE_ANGLE) * RADIUS;
  y = Math.sin(index * ONE_ANGLE) * RADIUS;

  return `translate(${x}rem, ${y}rem)`;
}

type IconSpinnerProps = {
  currentIconIndex: number;
  setCurrentIconIndex: Dispatch<SetStateAction<number>>;
};
