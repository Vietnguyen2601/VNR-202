export default function GameStartScreen({ onStart }) {
  return <div className="game-start-card reveal">
    <p className="game-chip">MINI REVIEW GAME</p>
    <h3>Sẵn sàng ôn tập?</h3>
    <ul>
      <li>25 câu hỏi.</li>
      <li>Mỗi câu có 4 đáp án.</li>
      <li>Sai sẽ được hỏi lại sau.</li>
      <li>Hoàn thành khi trả lời đúng toàn bộ 25 câu.</li>
    </ul>
    <button className="primary-button game-start-button" type="button" onClick={onStart}>Bắt đầu trò chơi</button>
  </div>
}
