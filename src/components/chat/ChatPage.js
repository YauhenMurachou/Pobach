import React, { useEffect, useState } from "react"

const ws = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")

export const ChatPage = () => {
  return (
    <div>
      <Messages />
      <AddMessageForm />
    </div>
  )
}

export const Messages = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    ws.addEventListener("message", (e) =>
      setMessages((prevState) => [...prevState, ...JSON.parse(e.data)])
    )
  }, [])

  return (
    <div>
      {messages.map((item, index) => (
        <Message key={item.userName + index.toString()} message={item} />
      ))}
    </div>
  )
}

export const Message = ({ message }) => {
  return (
    <div>
      <img src={message.photo} alt={message.userName} />
      <div>{message.userName}</div>
      <div>{message.message}</div>
    </div>
  )
}

export const AddMessageForm = () => {
  const [message, setMessage] = useState("")

  const sendMessage = () => {
    if (!message) {
      return
    }
    ws.send(message)
  }

  return (
    <div>
      <textarea onChange={(e) => setMessage(e.currentTarget.value)}></textarea>
      <button type="submit" onClick={sendMessage}>
        send
      </button>
    </div>
  )
}
