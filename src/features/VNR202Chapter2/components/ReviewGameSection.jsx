import { useEffect, useMemo, useState } from 'react'
import { reviewQuestions } from '../data/reviewQuestions'
import GameResultScreen from './GameResultScreen'
import GameStartScreen from './GameStartScreen'
import QuizQuestionCard from './QuizQuestionCard'

const allQuestionIds = reviewQuestions.map(question => question.id)

function shuffleArray(items) {
  const shuffled = [...items]
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0')
  const seconds = (totalSeconds % 60).toString().padStart(2, '0')
  return `${minutes}:${seconds}`
}

export default function ReviewGameSection() {
  const [gameStarted, setGameStarted] = useState(false)
  const [completedIds, setCompletedIds] = useState([])
  const [queue, setQueue] = useState([])
  const [currentQuestionId, setCurrentQuestionId] = useState(null)
  const [wrongAttempts, setWrongAttempts] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [feedback, setFeedback] = useState(null)
  const [startTime, setStartTime] = useState(null)
  const [elapsedSeconds, setElapsedSeconds] = useState(0)
  const [finished, setFinished] = useState(false)

  const currentQuestion = useMemo(
    () => reviewQuestions.find(question => question.id === currentQuestionId),
    [currentQuestionId],
  )
  const completedSet = useMemo(() => new Set(completedIds), [completedIds])
  const currentNumber = currentQuestionId ? allQuestionIds.indexOf(currentQuestionId) + 1 : 0
  const totalQuestions = reviewQuestions.length

  useEffect(() => {
    if (!gameStarted || finished || !startTime) return undefined
    const timer = setInterval(() => {
      setElapsedSeconds(Math.floor((Date.now() - startTime) / 1000))
    }, 1000)
    return () => clearInterval(timer)
  }, [finished, gameStarted, startTime])

  function startGame() {
    const shuffled = shuffleArray(allQuestionIds)
    setCompletedIds([])
    setQueue(shuffled.slice(1))
    setCurrentQuestionId(shuffled[0])
    setWrongAttempts(0)
    setSelectedAnswer(null)
    setFeedback(null)
    setStartTime(Date.now())
    setElapsedSeconds(0)
    setFinished(false)
    setGameStarted(true)
  }

  function goToNextQuestion(nextCompletedIds, nextQueue) {
    if (nextCompletedIds.length === totalQuestions) {
      setElapsedSeconds(startTime ? Math.floor((Date.now() - startTime) / 1000) : elapsedSeconds)
      setFinished(true)
      setCurrentQuestionId(null)
      setQueue([])
      return
    }

    const availableQueue = nextQueue.filter(id => !nextCompletedIds.includes(id))
    let nextId = availableQueue.shift()
    let remainingQueue = availableQueue

    if (!nextId) {
      const unanswered = allQuestionIds.filter(id => !nextCompletedIds.includes(id))
      const rebuilt = shuffleArray(unanswered)
      nextId = rebuilt.shift()
      remainingQueue = rebuilt
    }

    setQueue(remainingQueue)
    setCurrentQuestionId(nextId || null)
    setSelectedAnswer(null)
    setFeedback(null)
  }

  function handleAnswer(answerIndex) {
    if (!currentQuestion || selectedAnswer !== null) return

    setSelectedAnswer(answerIndex)
    const isCorrect = answerIndex === currentQuestion.correctIndex

    if (isCorrect) {
      setFeedback('correct')
      window.setTimeout(() => {
        const nextCompletedIds = completedSet.has(currentQuestion.id)
          ? completedIds
          : [...completedIds, currentQuestion.id]
        setCompletedIds(nextCompletedIds)
        goToNextQuestion(nextCompletedIds, queue)
      }, 1300)
      return
    }

    setFeedback('wrong')
    setWrongAttempts(previous => previous + 1)
    window.setTimeout(() => {
      goToNextQuestion(completedIds, [...queue, currentQuestion.id])
    }, 1600)
  }

  const accuracy = `${totalQuestions} / ${totalQuestions + wrongAttempts}`

  return <div className="review-game-shell">
    {!gameStarted && <GameStartScreen totalQuestions={totalQuestions} onStart={startGame} />}
    {gameStarted && finished && <GameResultScreen accuracy={accuracy} elapsedTime={formatTime(elapsedSeconds)} totalQuestions={totalQuestions} wrongAttempts={wrongAttempts} onRestart={startGame} />}
    {gameStarted && !finished && currentQuestion && <QuizQuestionCard
      completedCount={completedIds.length}
      currentNumber={currentNumber}
      elapsedTime={formatTime(elapsedSeconds)}
      feedback={feedback}
      onAnswer={handleAnswer}
      question={currentQuestion}
      selectedAnswer={selectedAnswer}
      totalQuestions={totalQuestions}
      wrongAttempts={wrongAttempts}
    />}
  </div>
}

