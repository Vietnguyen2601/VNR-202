export default function GameResultScreen({ accuracy, elapsedTime, onRestart, totalQuestions, wrongAttempts }) {
  return <article className="review-game-card review-result-card">
    <p className="review-game-label">Hoàn tất</p>
    <h3>Hoàn thành {totalQuestions}/{totalQuestions} câu!</h3>
    <div className="result-stats">
      <div><span>Thời gian</span><strong>{elapsedTime}</strong></div>
      <div><span>Số lượt sai</span><strong>{wrongAttempts}</strong></div>
      <div><span>Độ chính xác</span><strong>{accuracy}</strong></div>
    </div>
    <p>Bạn đã hoàn thành toàn bộ câu hỏi trong phạm vi bài thuyết trình.</p>
    <button className="review-primary-button" type="button" onClick={onRestart}>Chơi lại</button>
  </article>
}
