import { useRecoilValue } from "recoil";
import { filteredPortfolioDataState } from "../../recoil/portfolioState";
import PortfolioCard from "./PortfolioCard";

export default function FilteredPortfolio() {
  const filteredPortfolioData = useRecoilValue(filteredPortfolioDataState);

  return (
    <>
      {filteredPortfolioData.map((item) => (
        <PortfolioCard key={item.id} image={item.image} alt={item.alt} />
      ))}
    </>
  );
}
