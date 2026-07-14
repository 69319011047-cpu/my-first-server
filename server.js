// 1. เรียกใช้งาน Module http
const http = require('http');

// 2. กำหนด Port ที่ Cloud กำหนด ถ้าไม่มีให้ใช้ 3000
const port = process.env.PORT || 3000;

// 3. สร้าง Server
const server = http.createServer((req, res) => {

  // ส่งสถานะ OK
  res.statusCode = 200;

  // กำหนดรูปแบบข้อมูล
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  // ส่งหน้าเว็บกลับ
  res.end(`
    <h1>สวัสดีครับ! นี่คือ Web Server ของ นางสาวสุชาดา วงค์ตรี 69319011047</h1>
    <p>เครื่องแม่ข่ายทำงานปกติบนระบบ Railway แล้วครับผม!</p>
  `);

});

// 4. เปิด Server
server.listen(port, () => {
  console.log(`Server is running! เครื่องแม่ข่ายเปิดทำงานแล้วที่ช่องทาง: ${port}`);
});
