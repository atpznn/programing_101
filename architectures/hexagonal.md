hexagonal architecture
ใช้ 2 pattern คือ
port/adaptor เเละ dependency injection
ส่วนประกอบ
interface layer

- ส่วนที่ติดต่อผู้ใช้งาน เเละรับข้อมูลเพื่อส่งต่อไปหา service หรือ server ภายใน ซึ่งก็คือ domain layer โดยมักจะมี
  - database
  - extranal service
  - api framework

domain layer
ส่วนที่ใช้ในการประมวลผลหลัก เเละเป็น core หลักในการทำงาน ซึ่งมักจะเป็น code base เพียวๆ ไม่มีการใช้งานของภายนอกที่ไม่รู้จัก หรือไม่ได้รับมาตามช่องทางที่ถูกต้องเช่น รับผ่าน constructure / param
ส่วนนี้มักประกอบด้วย

- service
- model
- other interface

องประกอบหลักๆคือ

- ports คือ interface หรือเเบบพิมพ์เขียวมาตราฐาน ที่กำหนดหน้าตาหรือสเปคข้อมูลเอาไว้ มันคือ รูปลั๊ก หรือ รู้เสียบ usb  
  port มี 2 ประเภท
  primary port หน้าตาข้อมูลขารับเข้า service
  secondary port หน้าตาข้อมูลฝั่งขาออกจาก service
- adapters คือ สิ่งที่จะใช้งานที่มีรูปแบบตามสเปคหรือหน้าตาข้อมูลของ port เปรียบเสมื่อน เมาท์ คีบอร์ด หรือพวก framework ต่างๆ
  adapter มี 2 ประเภทคือ
  primary adapter ตัวที่มาทำงานตาม primary port
  secondary adapter ตัวที่มาทำงานตาม secondary port
- domain-centric คือ service

concept
repository ใช้ในการคุยกับ data base
service ใช้ในการประมวลผลต่างๆ
