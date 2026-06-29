export default function QuizQuestionCard({
  completedCount,
  currentNumber,
  elapsedTime,
  feedback,
  onAnswer,
  question,
  selectedAnswer,
  totalQuestions,
  wrongAttempts,
}) {
  const answered = selectedAnswer !== null

  return <article className="review-game-card quiz-card">
    <header className="quiz-status-row">
      <div><span>Thời gian</span><strong>{elapsedTime}</strong></div>
      <div><span>Đã hoàn thành</span><strong>{completedCount}/{totalQuestions}</strong></div>
      <div><span>Câu đang làm</span><strong>{currentNumber}</strong></div>
      <div><span>Số lượt sai</span><strong>{wrongAttempts}</strong></div>
    </header>

    <div className="quiz-question-head">
      <span className="quiz-category">{question.category}</span>
      <div className="quiz-lo-list">{question.relatedLO.map(lo => <b key={lo}>{lo}</b>)}</div>
    </div>
    <h3>{question.question}</h3>

    <div className="quiz-options">
      {question.options.map((option, index) => {
        const isSelected = selectedAnswer === index
        const isCorrectAnswer = question.correctIndex === index
        const stateClass = answered && isSelected
          ? feedback === 'correct' ? ' correct' : ' wrong'
          : answered && isCorrectAnswer && feedback === 'wrong' ? ' correct-answer' : ''

        return <button
          className={`quiz-option${stateClass}`}
          disabled={answered}
          key={option}
          onClick={() => onAnswer(index)}
          type="button"
        >
          <span>{String.fromCharCode(65 + index)}</span>
          {option}
        </button>
      })}
    </div>

    <div className={`quiz-feedback ${feedback || ''}`} aria-live="polite">
      {feedback && <><strong>{feedback === 'correct' ? 'Chính xác!' : 'Sai rồi, câu này sẽ quay lại sau.'}</strong><p>{question.explanation}</p></>}
    </div>
  </article>
}

