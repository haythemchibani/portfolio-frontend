export default function About() {
  return (
    <section id="about" className="py-16 px-6 max-w-4xl mx-auto"> {/* Added id="about" */}
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">About Me</h2>
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Master's graduate in <span className="font-semibold text-blue-600 dark:text-blue-400">Computer Systems Engineering</span>, 
          specializing in <span className="font-semibold text-blue-600 dark:text-blue-400">Computer Networks and Telecommunications</span> 
          from the National School of Electronics and Telecommunications of Sfax (Enet'com).
        </p>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          With hands-on experience in network administration, telecommunication systems, and full-stack development. 
          Proficient in <span className="font-semibold">MERN stack</span>, 
          <span className="font-semibold"> cybersecurity</span>, 
          <span className="font-semibold"> Big Data technologies (Hadoop, Spark)</span>, 
          and <span className="font-semibold">IoT systems</span>. 
          Passionate about building intelligent applications and maintaining robust IT infrastructure.
        </p>
      </div>
    </section>
  )
}