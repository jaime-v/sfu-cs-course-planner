import './App.css'

function App() {
  return (
    <main className="welcome">
      <p className="eyebrow">SFU Computing Science</p>
      <h1>Plan your path through your degree.</h1>
      <p className="intro">
        SFU CS Course Planner is getting ready. This frontend is the starting
        point for planning courses, checking prerequisites, and tracking degree
        progress.
      </p>
      <div className="status" role="status">
        <span className="status-dot" aria-hidden="true" />
        Frontend scaffold is ready
      </div>
    </main>
  )
}

export default App
