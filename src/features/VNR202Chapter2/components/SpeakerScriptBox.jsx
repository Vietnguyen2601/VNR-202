export default function SpeakerScriptBox({ analysisFocus, keyMessage, opening, transition }) {
  return <aside className="key-event-speaker-panel">
    <p>{opening}</p>
    <p>{keyMessage}</p>
    <p>{analysisFocus}</p>
    <p>{transition}</p>
  </aside>
}

