export function PortraitCard({ onClick }: { onClick: () => void }) {
  return (
    <div className="cf-card" data-i="0" onClick={onClick}>
      <img className="cf-photo" src="/images/portait.PNG" alt="Портретная фотосессия" />
      <div className="cf-label">Портрет</div>
    </div>
  );
}

