export default function QuizQuestionCard({ completedCount, currentIndex, elapsedTime, feedback, onAnswer, question, selectedAnswer, totalCount, wrongAttempts }) {
  return <article className="quiz-card reveal">
    <header className="quiz-status">
      <span>Thời gian: <b>{elapsedTime}</b></span>
      <span>Đã hoàn thành: <b>{completedCount}/{totalCount}</b></span>
      <span>Câu đang làm: <b>{currentIndex}</b></span>
      <span>Số lượt sai: <b>{wrongAttempts}</b></span>
    </header>
    <div className="quiz-question-head">
      <span className="category-badge">{question.category}</span>
      <div className="lo-badges">{question.relatedLO.map(lo => <span key={lo}>{lo}</span>)}</div>
    </div>
    <h3>{question.question}</h3>
    <div className="answer-grid">
      {question.options.map((option, index) => {
        const isSelected = selectedAnswer === index
        const isCorrect = index === question.correctIndex
        const stateClass = selectedAnswer === null ? '' : isSelected && isCorrect ? 'correct' : isSelected ? 'wrong' : isCorrect && feedback === 'correct' ? 'correct-muted' : ''
        return <button className={`answer-button ${stateClass}`} disabled={selectedAnswer !== null} key={option} type="button" onClick={() => onAnswer(index)}>
          <span>{String.fromCharCode(65 + index)}</span>
          {option}
        </button>
      })}
    </div>
    <div className={`quiz-feedback ${feedback || ''}`} aria-live="polite">
      {feedback === 'correct' && <><b>Chính xác!</b><p>{question.explanation}</p></>}
      {feedback === 'wrong' && <><b>Sai rồi, câu này sẽ quay lại sau.</b><p>{question.explanation}</p></>}
    </div>
  </article>
}
