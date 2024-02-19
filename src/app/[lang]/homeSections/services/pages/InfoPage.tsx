import { Dict } from "@/app/[lang]/homeDictionnaries/getDictionary";

export default function InfoPage({ deviceIndex, dictionnary }: InfoPageProps) {
  return (
    <div className="">
      <h2>{dictionnary[deviceIndex].title} Repairs</h2>
      <p></p>
      {/* <div
        className={`bg-${dictionnary.image} bg-cover bg-center shadow-lg rounded-lg p-6 pt-40`}>
        <div className="bg-backglass bg-frontglass bg-ram"></div>
        <h3 className="text-gray-300 text-xl font-bold mb-2">
          {dictionnary.title}
        </h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          {dictionnary.description}
        </p>
        <Link
          className="bg-transparent hover:bg-gray-950 text-green-500 transition-colors font-bold py-3 px-4 rounded after:content-['↗'] after:text-xs"
          href="/services">
          {dictionnary.button} &nbsp;
        </Link>
      </div> */}
    </div>
  );
}

type InfoPageProps = {
  deviceIndex: number;
  dictionnary: Dict["services"]["services"];
};
