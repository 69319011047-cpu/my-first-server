const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  res.end(`
<!DOCTYPE html>
<html>
<head>
<title>Shinchan Web Server</title>

<style>

body {
    margin: 0;
    font-family: "Comic Sans MS", Arial, sans-serif;
    background: linear-gradient(#ffe66d, #fff8dc);
    text-align: center;
    padding: 40px;
}

.container {
    background: white;
    max-width: 650px;
    margin: auto;
    padding: 30px;
    border-radius: 35px;
    border: 6px solid #ff4d4d;
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

.shinchan-img {
    width: 180px;
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%,100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-15px);
    }
}

h1 {
    color: #e60012;
    font-size: 32px;
}

.name {
    color: #0066cc;
    font-size: 25px;
    font-weight: bold;
}

.message {
    background: #fff0f5;
    border-radius: 20px;
    padding: 15px;
    margin-top: 20px;
    font-size: 20px;
}

.star {
    font-size: 30px;
}

.footer {
    margin-top: 25px;
    color: #ff6600;
    font-size: 18px;
    font-weight: bold;
}

</style>

</head>

<body>

<div class="container">

<div class="star">
⭐ 🌈 ⭐
</div>

<img class="shinchan-img" src="shinchan.png">

<h1>
🎉 Welcome to Web Server 🎉
</h1>

<div class="name">
นางสาวสุชาดา วงค์ตรี<br>
69319011047
</div>

<div class="message">

🧒✨ สวัสดีครับ!<br><br>

🎈 เครื่องแม่ข่ายทำงานปกติ<br>
บนระบบ Railway แล้วครับผม!<br><br>

💻 Server พร้อมใช้งานแล้ว

</div>


<div class="footer">

❤️ Shinchan Cute Server Style ❤️

</div>

<div class="star">
🌟 🧡 🌟
</div>

</div>

</body>
</html>
  `);

});


server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
