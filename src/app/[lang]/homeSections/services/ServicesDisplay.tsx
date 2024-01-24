import ComputerPage from "./pages/ComputerPage";
import IpadPage from "./pages/IpadPage";
import PhonePage from "./pages/PhonePage";

export default function ServicesDisplay({ currentIcon }: ServicesDisplayProps) {
  const pages = [<PhonePage />, <ComputerPage />, <IpadPage />];

  return (
    <div className="h-1/2 ml-[20%] my-auto">
      {pages[currentIcon % pages.length]}
    </div>
  );
}

type ServicesDisplayProps = {
  currentIcon: number;
};

/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
  {dict.services.map((dictionnary) => {
    return (
      <>
        <div
          className={`bg-${dictionnary.image} bg-cover bg-center shadow-lg rounded-lg p-6 pt-40`}
        >
          <div className="bg-backglass bg-frontglass bg-ram"></div>
          <h3 className="text-gray-300 text-xl font-bold mb-2">
            {dictionnary.title}
          </h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            {dictionnary.description}
          </p>
          <Link
            className="bg-transparent hover:bg-gray-950 text-green-500 transition-colors font-bold py-3 px-4 rounded after:content-['↗'] after:text-xs"
            href="/services"
          >
            {dictionnary.button} &nbsp;
          </Link>
        </div>
      </>
    );
  })}
</div> */
