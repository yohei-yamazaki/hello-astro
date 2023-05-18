import { h } from 'preact';
import { useState } from 'preact/hooks';

export const Greeting = ({ messages }) => {
  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))]

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! Thank you for visitng!</h3>
      <button onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  )
}
