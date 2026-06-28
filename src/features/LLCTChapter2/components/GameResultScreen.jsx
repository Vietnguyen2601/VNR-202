export default function GameResultScreen({ accuracy, elapsedTime, onRestart, totalCount, wrongAttempts }) {
  return <div className="game-result-card reveal">
    <p className="game-chip">HOÀN THÀNH</p>
    <h3>Hoàn thành {totalCount}/{totalCount} câu!</h3>
    <div className="result-stats">
      <span><b>{elapsedTime}</b><small>Thời gian</small></span>
      <span><b>{wrongAttempts}</b><small>Lượt sai</small></span>
      <span><b>{accuracy}</b><small>Độ chính xác</small></span>
    </div>
    <p>Bạn đã hoàn thành toàn bộ câu hỏi trong phạm vi bài thuyết trình.</p>
    <button className="primary-button game-start-button" type="button" onClick={onRestart}>Chơi lại</button>
  </div>
}
