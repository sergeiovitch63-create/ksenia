export function PregnancyCard({ onClick }: { onClick: () => void }) {
  return (
    <div className="cf-card" data-i="3" onClick={onClick}>
      <img className="cf-photo" src="/images/photo-exterieur.JPG" alt="Фотосессия для беременных" />
      <div className="cf-label">Уличная съемка</div>
    </div>
  );
}

