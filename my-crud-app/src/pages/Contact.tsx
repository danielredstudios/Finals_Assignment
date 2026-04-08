import { useState } from 'react'
import { useForm } from 'react-hook-form'
import MessageModal from '../components/MessageModal'

type ContactFormValues = {
  sender: string
  message: string
}

function Contact() {
  const [modalData, setModalData] = useState<ContactFormValues | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>()

  const onSubmit = (data: ContactFormValues) => {
    setModalData(data)
    reset()
  }

  const closeModal = () => {
    setModalData(null)
  }

  return (
    <section className="card">
      <h1>Contact</h1>
      <p>Send your note using the advanced form orchestration module.</p>

      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="sender">Sender</label>
          <input
            id="sender"
            type="text"
            placeholder="Your name"
            {...register('sender', {
              required: 'Sender is required.',
              minLength: {
                value: 2,
                message: 'Sender must be at least 2 characters.',
              },
            })}
          />
          {errors.sender && <p className="error-text">{errors.sender.message}</p>}
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows={5}
            placeholder="Type your message"
            {...register('message', {
              required: 'Message is required.',
              minLength: {
                value: 8,
                message: 'Message must be at least 8 characters.',
              },
            })}
          />
          {errors.message && <p className="error-text">{errors.message.message}</p>}
        </div>

        <button type="submit" className="submit-button">
          Send
        </button>
      </form>

      <MessageModal
        isOpen={Boolean(modalData)}
        sender={modalData?.sender ?? ''}
        message={modalData?.message ?? ''}
        onClose={closeModal}
      />
    </section>
  )
}

export default Contact
