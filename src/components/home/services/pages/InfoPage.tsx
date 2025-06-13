import { Dict } from "@/components/home/dictionaries/getDictionary";
import { animated, easings, useTransition } from "@react-spring/web";
import Link from "next/link";

export default function InfoPage({ dictionnary }: InfoPageProps) {
  const radius = 10;

  const transition = useTransition(dictionnary, {
    from: {
      rotate: "-10deg",
      translate: "0%, -50%",
      opacity: 0,
    },
    enter: {
      rotate: "0deg",
      translate: "0em, 0%",
      opacity: 1,
    },
    leave: {
      rotate: "10deg",
      translate: "0%, 50%",
      opacity: 0,
    },
    config: {
      duration: 1000,
      easing: easings.easeOutCubic,
    },
  });

  return transition((style, dict) => (
    <animated.div
      style={style}
      className={`absolute -top-32 bg-${dict.image} bg-cover bg-center shadow-lg rounded-lg p-6 pt-40`}
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
