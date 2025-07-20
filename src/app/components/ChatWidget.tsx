"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

type Message = {
  sender: "user" | "bot";
  text: string;
};

export default function ChatBox() {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState<Message[]>([]);
  const [open, setOpen] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: "user", text: input };
    const botMessage: Message = getBotResponse(input);

    setChat((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  const getBotResponse = (msg: string): Message => {
    const text = msg.toLowerCase();
    if (text.includes("próbka")) {
      return { sender: "bot", text: "Tak, próbki dachówek są dostępne na życzenie." };
    } else if (text.includes("zamówić")) {
      return { sender: "bot", text: "Zamówienia można składać przez formularz lub doradcę." };
    } else if (text.includes("kontakt")) {
      return { sender: "bot", text: "Skontaktuj się z nami pod adresem info@meyer-holsen.de." };
    } else {
      return {
        sender: "bot",
        text: "Przepraszam, nie rozumiem. Spróbuj inaczej lub napisz do naszego doradcy.",
      };
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Floating bubble button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat window */}
      {open && (
        <div className="w-80 max-h-[600px] bg-white border rounded-lg shadow-lg flex flex-col overflow-hidden animate-fadeInUp">
          {/* Header */}
          <div className="bg-blue-600 text-white px-4 py-2 flex justify-between items-center">
            <span className="font-semibold">💬 Mayaholsen Chat</span>
            <button onClick={() => setOpen(false)}>
              <X className="w-5 h-5 hover:opacity-80" />
            </button>
          </div>

          {/* Chat content */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {chat.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`px-3 py-2 rounded-lg max-w-[75%] text-sm ${
                    msg.sender === "user" ? "bg-blue-100 text-right" : "bg-gray-100 text-left"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="border-t p-2 flex gap-2">
            <input
              type="text"
              className="flex-1 border rounded px-2 py-1 text-sm"
              placeholder="Napisz wiadomość..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
            >
              Wyślij
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
