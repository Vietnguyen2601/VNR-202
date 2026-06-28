import { useEffect, useMemo, useState } from 'react'
import { reviewQuestions } from '../data/reviewQuestions'
import GameResultScreen from './GameResultScreen'
import GameStartScreen from './GameStartScreen'
import QuizQuestionCard from './QuizQuestionCard'

function shuffleArray(array) {
  const shuffled = [...array]
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1))
    ;[shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]]
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

  const questionMap = useMemo(() => new Map(reviewQuestions.map(question => [question.id, question])), [])
  const allIds = useMemo(() => reviewQuestions.map(question => question.id), [])
  const currentQuestion = currentQuestionId ? questionMap.get(currentQuestionId) : null

  useEffect(() => {
    if (!gameStarted || finished || !startTime) return undefined
    const interval = setInterval(() => {
      setElapsedSeconds(Math.floor((Date.now() - startTime) / 1000))
    }, 1000)
    return () => clearInterval(interval)
  }, [finished, gameStarted, startTime])

  function startGame() {
    const shuffled = shuffleArray(allIds)
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

  function getNextQuestion(nextQueue, newCompleted) {
    const cleanQueue = nextQueue.filter(id => !newCompleted.includes(id))
    const nextId = cleanQueue.shift()
    if (nextId) return { nextId, nextQueue: cleanQueue }

    const unanswered = allIds.filter(id => !newCompleted.includes(id))
    const rebuilt = shuffleArray(unanswered)
    return { nextId: rebuilt.shift() || null, nextQueue: rebuilt }
  }

  function handleAnswer(answerIndex) {
    if (!currentQuestion || selectedAnswer !== null) return

    setSelectedAnswer(answerIndex)
    const isCorrect = answerIndex === currentQuestion.correctIndex

    if (isCorrect) {
      setFeedback('correct')
      setTimeout(() => {
        const newCompleted = completedIds.includes(currentQuestion.id) ? completedIds : [...completedIds, currentQuestion.id]
        setCompletedIds(newCompleted)

        if (newCompleted.length === reviewQuestions.length) {
          setElapsedSeconds(Math.floor((Date.now() - startTime) / 1000))
          setFinished(true)
          setCurrentQuestionId(null)
          setSelectedAnswer(null)
          setFeedback(null)
          return
        }

        const { nextId, nextQueue } = getNextQuestion(queue, newCompleted)
        setQueue(nextQueue)
        setCurrentQuestionId(nextId)
        setSelectedAnswer(null)
        setFeedback(null)
      }, 1400)
      return
    }

    setFeedback('wrong')
    setWrongAttempts(previous => previous + 1)
    setTimeout(() => {
      const nextQueue = [...queue, currentQuestion.id]
      const { nextId, nextQueue: cleanedQueue } = getNextQuestion(nextQueue, completedIds)
      setQueue(cleanedQueue)
      setCurrentQuestionId(nextId || currentQuestion.id)
      setSelectedAnswer(null)
      setFeedback(null)
    }, 1600)
  }

  const accuracy = `${reviewQuestions.length}/${reviewQuestions.length + wrongAttempts}`

  return <div className="review-game-shell">
    {!gameStarted && <GameStartScreen onStart={startGame} />}
    {gameStarted && finished && <GameResultScreen accuracy={accuracy} elapsedTime={formatTime(elapsedSeconds)} onRestart={startGame} totalCount={reviewQuestions.length} wrongAttempts={wrongAttempts} />}
    {gameStarted && !finished && currentQuestion && <QuizQuestionCard completedCount={completedIds.length} currentIndex={currentQuestion.id.replace('q', '')} elapsedTime={formatTime(elapsedSeconds)} feedback={feedback} onAnswer={handleAnswer} question={currentQuestion} selectedAnswer={selectedAnswer} totalCount={reviewQuestions.length} wrongAttempts={wrongAttempts} />}
  </div>
}
