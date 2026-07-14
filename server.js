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
    <html>
    <head>
      <title>Shinchan Web Server</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: #fff3b0;
          text-align: center;
          padding: 50px;
        }

        .box {
          background: white;
          border: 5px solid #e60012;
          border-radius: 25px;
          padding: 30px;
          max-width: 600px;
          margin: auto;
          box-shadow: 0px 8px 15px gray;
        }

        h1 {
          color: #e60012;
          font-size: 35px;
        }

        p {
          color: #333;
          font-size: 20px;
        }

        .shinchan {
          font-size: 60px;
        }

        .footer {
          margin-top: 20px;
          color: #0066cc;
          font-weight: bold;
        }
      </style>
    </head>

    <body>

      <div class="box">
        <div class="shinchan">🧒🌟</div>

        <h1>
          สวัสดีครับ! Web Server ของ<br>
          นางสาวสุชาดา วงค์ตรี 69319011047
        </h1>

        <p>
          🎈 เครื่องแม่ข่ายทำงานปกติบนระบบ Railway แล้วครับผม!
        </p>

        <p>
          💻 ระบบ Server พร้อมใช้งานแล้ว
        </p>

        <div class="footer">
          ✨ Shinchan Style Web Server ✨
        </div>
      </div>

    </body>
    </html>
  `);

});

// 4. เปิด Server
server.listen(port, () => {
  console.log(`Server is running! เครื่องแม่ข่ายเปิดทำงานแล้วที่ช่องทาง: ${port}`);
});
