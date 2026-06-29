export default function GameStartScreen({ onStart, totalQuestions }) {
  return <article className="review-game-card review-start-card">
    <div>
      <p className="review-game-label">Mini review game</p>
      <h3>Sẵn sàng ôn tập?</h3>
      <p className="review-game-intro">Trò chơi giúp cả lớp kiểm tra nhanh các mốc chính trước khi kết thúc phần trình bày.</p>
    </div>
    <ul className="review-rule-list">
      <li>{totalQuestions} câu hỏi.</li>
      <li>Mỗi câu có 4 đáp án.</li>
      <li>Sai sẽ được hỏi lại sau.</li>
      <li>Hoàn thành khi trả lời đúng toàn bộ {totalQuestions} câu.</li>
    </ul>
    <button className="review-primary-button" type="button" onClick={onStart}>Bắt đầu trò chơi</button>
  </article>
}

