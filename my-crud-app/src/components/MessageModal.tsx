type MessageModalProps = {
  isOpen: boolean
  sender: string
  message: string
  onClose: () => void
}

function MessageModal({ isOpen, sender, message, onClose }: MessageModalProps) {
  if (!isOpen) {
    return null
  }

  return (
    <div className="modal-overlay" role="presentation" onClick={onClose}>
      <div
        className="modal-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="message-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <p className="eyebrow">Message Sent</p>
        <h2 id="message-modal-title">Thanks for reaching out</h2>
        <div className="modal-content">
          <p>
            <span>Sender:</span> {sender}
          </p>
          <p>
            <span>Message:</span> {message}
          </p>
        </div>
        <button type="button" className="modal-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}

export default MessageModal
