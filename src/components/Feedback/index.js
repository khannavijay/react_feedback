// Write your React code here.
import './index.css'

const Feedback = props => {
  const {feedbackData} = props
  const {emojis, loveEmojiUrl} = feedbackData

  const submitFeedback = () => {
    document.getElementById('feedback').style.display = 'none'
    document.getElementById('thankyou').style.display = 'flex'
  }

  return (
    <div className="bg-container">
      <div className="feedback-card">
        <div className="feedback" id="feedback">
          <h1>How satisfied are you with our customer support performance?</h1>
          <ul className="list-container">
            {emojis.map(eachItem => (
              <li key={eachItem.id} className="liItem">
                <img
                  className="FeedbackImage"
                  src={eachItem.imageUrl}
                  alt={eachItem.name}
                  onClick={submitFeedback}
                />
                <span>{eachItem.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="thankyou-card" id="thankyou">
          <img className="loveImg" src={loveEmojiUrl} alt="loveEmoji" />
          <h1>Thank you!</h1>
          <p>
            We will use your feedback to improve our customer support
            performance
          </p>
        </div>
      </div>
    </div>
  )
}

export default Feedback
