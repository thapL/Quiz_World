import { motion } from "framer-motion";
import Background from "../components/Background";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      {/* <Sidebar /> */}
      <div className="p-0">
        {/* Parallax Background */}
        <Background className="relative bg-[url('/images/oxford-bg.jpg')] bg-cover bg-center bg-fixed min-h-screen">
          {/* Overlay โปร่งใส ไม่บล็อกการกด */}
          <div className="absolute inset-0 pointer-events-none"></div>

          <div className="relative z-10 p-6 sm:p-10 text-white max-w-5xl mx-auto">
            {/* Title with animation */}
            <motion.h1
              className="text-4xl sm:text-6xl font-extrabold text-center drop-shadow-lg mb-6"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Oxford 3000 Words Game
            </motion.h1>

            <motion.p
              className="text-base sm:text-xl text-slate-200 text-center mb-12 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              คำศัพท์{" "}
              <span className="font-bold text-fuchsia-300">Oxford 3000</span>
              คือชุดคำศัพท์ที่ผู้เชี่ยวชาญด้านภาษาอังกฤษคัดเลือกมาแล้วว่า
              เป็นคำที่ใช้บ่อยและจำเป็นที่สุดในการสื่อสารจริง ทั้งการพูด อ่าน
              เขียน และฟัง
              <br />
              <br />
              การจดจำคำศัพท์เหล่านี้จะช่วยให้คุณ:
              <ul className="list-disc list-inside text-left max-w-2xl mx-auto mt-4 space-y-2 text-slate-300">
                <li>เข้าใจบทสนทนาและบทความภาษาอังกฤษได้มากขึ้น</li>
                <li>สื่อสารได้อย่างมั่นใจ ทั้งในชีวิตประจำวันและการทำงาน</li>
                <li>เตรียมตัวสำหรับการสอบมาตรฐาน เช่น TOEIC, IELTS, TOEFL</li>
                <li>วางรากฐานที่แข็งแรงสำหรับการเรียนภาษาอังกฤษขั้นสูง</li>
              </ul>
              <br />
              ยิ่งคุณจำคำศัพท์เหล่านี้ได้มากเท่าไร
              การเรียนภาษาอังกฤษก็จะง่ายขึ้นและเร็วขึ้น 🚀
            </motion.p>

            {/* Section Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 mb-16">
              {[
                // {
                //   title: "📚 ศัพท์พื้นฐาน",
                //   desc: "เริ่มเรียนรู้คำศัพท์ A-Z",
                //   link: "/vocab",
                // },
                {
                  title: "🎮 เกมทายคำ",
                  desc: "ทดสอบความจำของคุณ",
                  link: "/Quiz_World/guess",
                },
                // { title: "🚀 พัฒนาทักษะ", desc: "ฝึกภาษาอังกฤษให้มั่นใจ" },
              ].map((item, i) => (
                <Link key={i} to={item.link} className="block">
                  <motion.div
                    key={i}
                    className="bg-white/10 rounded-2xl p-6 text-center hover:bg-white/20 transition shadow-lg"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                    <p className="text-slate-200 text-sm">{item.desc}</p>
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              className="text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              {/* <button className="px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-white font-semibold text-lg rounded-xl shadow-lg hover:scale-105 transform transition">
                เริ่มเล่นเลย 🚀
              </button> */}
            </motion.div>
          </div>
        </Background>
      </div>
    </>
  );
}
