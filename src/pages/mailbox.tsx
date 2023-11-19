import { useState } from "react";
import Head from "next/head";

export default function Mailbox() {
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState(null);

  const handleSendMessage = async () => {
    if (message.trim() === "") {
      setStatusMessage("Please enter a message before sending.");
      return;
    }

    if (message.length > 2000) {
      setStatusMessage("Message is too long. Please keep it within 2000 characters.");
      return;
    }

    try {
      const response = await fetch(`/api/mail/send?content=${encodeURIComponent(message)}`, {
        method: "POST",
      });

      if (response.ok) {
        setStatusMessage("Message sent successfully!");
        setMessage("");
      } else {
        setStatusMessage("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatusMessage("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <>
      <Head>
        <title>10near project</title>
        <meta name="description" content="The 10near project" />
      </Head>
      <main className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-r from-pink-900 to-blue-900 py-4 text-gray-100">
        <div className="flex h-screen w-full items-center justify-center">
          <div className="form-control rounded-md border-2 border-base-300 bg-gray-700 bg-opacity-40 p-4 shadow-md">
            <div className="label mb-4 text-2xl font-bold">
              Send any message to 10near
            </div>
            <textarea
              className="textarea textarea-bordered bg-transparent text-semibold text-gray-100 mb-2"
              placeholder="Your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className="p-2 text-bold">
            {statusMessage && <p className={statusMessage.includes("success") ? "text-green-600" : "text-red-600"}>{statusMessage}</p>}
            </div>
            <button
              className="btn btn-outline btn-block hover:bg-zinc-200"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
