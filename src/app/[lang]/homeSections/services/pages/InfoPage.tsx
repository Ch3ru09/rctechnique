import { Dict } from "@/app/[lang]/homeDictionnaries/getDictionary";
import { useTransition, animated } from "@react-spring/web";
import Link from "next/link";

export default function InfoPage({ dictionnary }: InfoPageProps) {
  const radius = 10;

  const transition = useTransition(dictionnary, {
    from: {
      rotate: "-10deg",
      transform: `translate(${-radius * Math.cos(Math.PI / 4)}em, ${
        -radius * Math.cos(Math.PI / 4)
      }em)`,
    },
    enter: {
      rotate: "0deg",
      transform: `translate(${radius * Math.cos(Math.PI / 4)}em, ${
        radius * Math.cos(Math.PI / 4)
      }em)`,
    },
    leave: {
      rotate: "10deg",
      transform: `translate(${-radius * Math.cos(Math.PI / 4)}em, ${
        radius * Math.cos(Math.PI / 4)
      }em)`,
    },
  });

  return transition((style, dict) => (
    <animated.div
      style={style}
      className={`bg-${dict.image} bg-cover bg-center shadow-lg rounded-lg p-6 pt-40`}
    >
      <div className="bg-backglass bg-frontglass bg-ram"></div>
      <h3 className="text-gray-300 text-xl font-bold mb-2">{dict.title}</h3>
      <p className="text-gray-300 leading-relaxed mb-4">{dict.description}</p>
      <Link
        className="bg-transparent hover:bg-gray-950 text-green-500 transition-colors font-bold py-3 px-4 rounded after:content-['↗'] after:text-xs"
        href="/services"
      >
        {dict.button} &nbsp;
      </Link>
    </animated.div>
  ));
}

type InfoPageProps = {
  dictionnary: Dict["services"]["services"][0];
};

