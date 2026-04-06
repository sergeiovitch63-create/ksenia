import { ChildrenCard } from "./carousel/ChildrenCard";
import { FamilyCard } from "./carousel/FamilyCard";
import { LoveStoryCard } from "./carousel/LoveStoryCard";
import { PortraitCard } from "./carousel/PortraitCard";
import { PregnancyCard } from "./carousel/PregnancyCard";

export function CarouselCards({
  onCardClick,
}: {
  onCardClick: (index: number) => void;
}) {
  return (
    <>
      <PortraitCard onClick={() => onCardClick(0)} />
      <FamilyCard onClick={() => onCardClick(1)} />
      <LoveStoryCard onClick={() => onCardClick(2)} />
      <PregnancyCard onClick={() => onCardClick(3)} />
      <ChildrenCard onClick={() => onCardClick(4)} />
    </>
  );
}
