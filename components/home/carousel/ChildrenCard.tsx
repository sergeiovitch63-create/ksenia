export function ChildrenCard({ onClick }: { onClick: () => void }) {
  return (
    <div className="cf-card" data-i="4" onClick={onClick}>
      <img className="cf-photo" src="/images/enfant.PNG" alt="Детская фотосессия" />
      <div className="cf-label">Дети</div>
    </div>
  );
}
