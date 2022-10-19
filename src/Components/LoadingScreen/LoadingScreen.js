import "./LoadingScreen.css"

export default function LoadingScreen() {
  return (
    <div className="container">
      <div className="animation-wrapper">
        <div className="triangle fade-up one"></div>
        <div className="triangle fade-up two"></div>
        <div className="triangle fade-up three"></div>
        <div className="triangle fade-up four"></div>
        <div className="triangle fade-up five"></div>
      </div>
    </div>
  )
}
