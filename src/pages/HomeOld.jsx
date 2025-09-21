import Background from "../components/Background";
import Sidebar from "../components/Sidebar";
export default function Home() {
  return (
    <>
      {/* <Sidebar /> */}
      <div className="p-4 ">
        <Background>
          <div className="p-4 text-white text-xl ">
            <h2>Grammar คืออะไร</h2> <br />
            Grammar (ไวยากรณ์) คือระบบของกฎเกณฑ์ที่ควบคุมโครงสร้างของภาษา
            ไม่ว่าจะเป็นภาษาพูดหรือภาษาเขียน ไวยากรณ์จะกำหนดวิธีการรวมคำ วลี
            และอนุประโยคเข้าด้วยกันเพื่อสร้างประโยคที่มีความหมายและถูกต้องตามหลักภาษา{" "}
            <br />
            <br />
            พูดง่ายๆ คือ Grammar
            เป็นเหมือนพิมพ์เขียวหรือคู่มือที่ช่วยให้เราเข้าใจและสร้างประโยคได้อย่างถูกต้อง
            เพื่อให้ผู้ฟังหรือผู้อ่านสามารถเข้าใจสิ่งที่เราต้องการสื่อสารได้อย่างชัดเจน
            <br />
            <br />
            <b>องค์ประกอบหลักของ Grammar มักจะครอบคลุมถึง:</b>
            <br />
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Parts of Speech (ชนิดของคำ):</strong> เช่น คำนาม
                (nouns), คำสรรพนาม (pronouns), คำกริยา (verbs), คำคุณศัพท์
                (adjectives), คำวิเศษณ์ (adverbs), คำบุพบท (prepositions),
                คำสันธาน (conjunctions), และคำอุทาน (interjections)
              </li>
              <li>
                <strong>Sentence Structure (โครงสร้างประโยค):</strong>{" "}
                การจัดเรียงคำและวลีในประโยค เช่น ประธาน (subject), กริยา (verb),
                กรรม (object)
              </li>
              <li>
                <strong>Tenses (กาลเวลา):</strong>{" "}
                การใช้กริยาเพื่อแสดงเวลาของการกระทำ เช่น อดีต ปัจจุบัน อนาคต
              </li>
              <li>
                <strong>Agreement (ความสอดคล้อง):</strong> การที่องค์ประกอบต่างๆ
                ในประโยคสอดคล้องกัน เช่น ประธาน-กริยา (subject-verb agreement),
                คำสรรพนาม-คำนาม (pronoun-antecedent agreement)
              </li>
              <li>
                <strong>Punctuation (เครื่องหมายวรรคตอน):</strong>{" "}
                การใช้เครื่องหมายต่างๆ เพื่อช่วยให้การสื่อสารชัดเจนขึ้น เช่น จุด
                (.) ลูกน้ำ (,) เครื่องหมายคำถาม (?)
              </li>
              <li>
                <strong>Syntax (วากยสัมพันธ์):</strong>{" "}
                กฎเกณฑ์ที่เกี่ยวกับการเรียงคำเพื่อสร้างประโยคที่ถูกต้อง
              </li>
              <li>
                <strong>Morphology (สัทวิทยา):</strong>{" "}
                การศึกษาโครงสร้างของคำและการเปลี่ยนแปลงรูปของคำ
              </li>
            </ul>
          </div>
        </Background>
      </div>
    </>
  );
}
