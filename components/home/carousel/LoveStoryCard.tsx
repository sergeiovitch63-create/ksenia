export function LoveStoryCard({ onClick }: { onClick: () => void }) {
  return (
    <div className="cf-card" data-i="2" onClick={onClick}>
      <img className="cf-photo" src="/images/love-story.JPEG" alt="Съёмка лав-стори" />
      <div className="cf-label">Лав-стори</div>
    </div>
  );
}

