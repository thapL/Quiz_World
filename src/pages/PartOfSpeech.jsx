import Background from "../components/Background";
import Sidebar from "../components/Sidebar";
export default function Home() {
  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <Background>
          <div className="p-4 text-white text-xl ">
            <h2>Parts of Speech คืออะไร มีอะไรบ้าง</h2>
            <br />
            <div>
              Parts of Speech คือ ชนิดของคำในภาษาอังกฤษ มีทั้งหมด 8 ชนิด
              ซึ่งหากสามารถทำความเข้าใจกับประเภทของคำทั้งหมดนี้ได้
              ก็จะช่วยให้เข้าใจประโยคในภาษาอังกฤษได้ดีมากยิ่งขึ้น
              โดยคำในแต่ละชนิดจะมีหน้าที่ที่แตกต่างกันไป
            </div>
            <br />
            <h3>Part of Speech มีอะไรบ้าง</h3>
            <div>
              <ul className="list-disc pl-5">
                <li>Noun (คำนาม)</li>
                <li>Pronoun (คำสรรพนาม)</li>
                <li>Verb (คำกริยา)</li>
                <li>Adjective (คำคุณศัพท์)</li>
                <li>Adverb (คำวิเศษณ์)</li>
                <li>Preposition (คำบุพบท)</li>
                <li>Conjunction (คำสันธาน)</li>
                <li>Interjection (คำอุทาน)</li>
              </ul>
            </div>
          </div>
        </Background>
      </div>
    </>
  );
}
