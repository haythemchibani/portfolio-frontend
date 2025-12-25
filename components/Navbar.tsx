// src/components/Navbar.tsx

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow p-4 flex justify-between">
      <h1 className="font-bold">CH Haythem</h1>
      <div className="space-x-4">
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}
