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

