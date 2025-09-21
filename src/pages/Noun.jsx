import Background from "../components/Background";
import Sidebar from "../components/Sidebar";

export default function NounPage() {
  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <Background>
          <div className="p-4 text-white text-xl space-y-4">
            <h2 className="text-2xl font-bold">คำนาม (Noun)</h2>
            <p>
              คำนาม (Noun) เป็นส่วนสำคัญของคลังคำศัพท์ในภาษาอังกฤษ
              เพราะคำที่เราใช้ในชีวิตประจำวันส่วนใหญ่มักเป็นคำนาม
              คำนามใช้เรียกคน สัตว์ สิ่งของ สถานที่ ความรู้สึก หรือแนวคิดต่าง ๆ
              และสามารถแบ่งออกได้หลากหลายประเภทตามลักษณะและหน้าที่ในประโยค
            </p>

            <h3 className="text-xl font-semibold">
              1. ประเภทของคำนามตามลักษณะทั่วไป
            </h3>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>1.1 คำนามทั่วไป (Common Nouns)</strong> เช่น dog, city,
                teacher <br />
                <strong>คำนามเฉพาะ (Proper Nouns)</strong> เช่น John, Thailand,
                Da Nang
                <br />
                <em>ตัวอย่าง:</em> We’re planning to visit{" "}
                <strong>Da Nang</strong> at least twice a year.
              </li>
              <li>
                <strong>1.2 คำนามรูปธรรม (Concrete Nouns)</strong>:
                สิ่งที่สัมผัสได้ เช่น meat, phone
                <br />
                <em>ตัวอย่าง:</em> The meat was really bland and chewy.
              </li>
              <li>
                <strong>1.3 คำนามนามธรรม (Abstract Nouns)</strong>:
                แนวคิดหรือความรู้สึก เช่น love, idea
                <br />
                <em>ตัวอย่าง:</em> This idea is way too crazy.
              </li>
              <li>
                <strong>1.4 สมุหนาม (Collective Nouns)</strong>: เรียกกลุ่ม เช่น
                team, herd
                <br />
                <em>ตัวอย่าง:</em> They’re observing a herd of cows.
              </li>
            </ul>

            <h3 className="text-xl font-semibold">
              2. ประเภทของคำนามตามโครงสร้างคำ
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>2.1 คำนามธรรมดา (Simple Nouns)</strong>: เช่น book, tree
              </li>
              <li>
                <strong>2.2 คำนามประสม (Compound Nouns)</strong>:
                <br />• Noun + Noun → airport, shoplifter
                <br />• Adjective + Noun → greenhouse, goldfish
                <br />• Verb + Noun → swimming pool, drinking water
                <br />
                <em>หมายเหตุ: อาจเขียนติดกัน, มีขีดกลาง หรือแยกคำ</em>
              </li>
            </ul>

            <h3 className="text-xl font-semibold">3. คำนามกับการนับจำนวน</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>3.1 คำนามนับได้ (Countable Nouns)</strong>: เช่น cat,
                book
                <br />
                <em>ตัวอย่าง:</em> a book, two books, many books
              </li>
              <li>
                <strong>3.2 คำนามนับไม่ได้ (Uncountable Nouns)</strong>: เช่น
                water, information
                <br />
                <em>ต้องใช้หน่วยนับ:</em> a piece of advice, a glass of water
              </li>
              <li>
                <strong>3.3 เอกพจน์และพหูพจน์</strong>: a cat → cats, child →
                children
              </li>
            </ul>

            <h3 className="text-xl font-semibold">
              4. รูปแสดงความเป็นเจ้าของ (Possessive Case)
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>คำนามเอกพจน์:</strong> the girl’s bag
              </li>
              <li>
                <strong>คำนามพหูพจน์ลงท้ายด้วย -s:</strong> the teachers’ room
              </li>
              <li>
                <strong>คำนามพหูพจน์ไม่ลงท้ายด้วย -s:</strong> children’s toys
              </li>
              <li>
                <em>ตัวอย่าง:</em> My boss’s cat is his only best friend.
                <br />
                My parents’ house will be donated to charity.
              </li>
            </ul>

            <h3 className="text-xl font-semibold">
              5. กลุ่มคำนาม (Noun Phrases)
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                กลุ่มคำที่มีคำนามเป็นศูนย์กลาง เช่น:
                <br />• a big red car (คำนามหลัก = car)
                <br />• the famous actor from Italy
              </li>
            </ul>
          </div>
        </Background>
      </div>
    </>
  );
}
