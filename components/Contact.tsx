// src/components/Contact.tsx

"use client"

import { useState } from "react"

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })

    alert("Message sent!")
  }

  return (
    <section id="contact" className="p-10">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} />
        <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
        <textarea placeholder="Message" onChange={e => setForm({...form, message: e.target.value})} />
        <button className="bg-blue-600 text-white px-4 py-2">Send</button>
      </form>
    </section>
  )
}
