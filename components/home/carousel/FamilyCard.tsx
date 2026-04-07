export function FamilyCard({ onClick }: { onClick: () => void }) {
  return (
    <div className="cf-card" data-i="1" onClick={onClick}>
      <img className="cf-photo" src="/images/famille.CR2" alt="Семейная фотосессия" />
      <div className="cf-label">Семья</div>
    </div>
  );
}


