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

* {
    box-sizing: border-box;
}

body {

    margin: 0;
    min-height: 100vh;
    font-family: "Comic Sans MS", Arial, sans-serif;
    background: linear-gradient(#ffe66d,#fff5c3);
    text-align: center;
    padding: 40px;
    overflow: hidden;

}


/* ฟองอากาศ */

.bubble {

    position: absolute;
    bottom: -100px;
    width: 40px;
    height: 40px;
    background: rgba(255,255,255,0.6);
    border-radius: 50%;
    animation: float 8s infinite;

}


@keyframes float {

    0% {
        transform: translateY(0);
        opacity:0;
    }

    50% {
        opacity:1;
    }

    100% {
        transform: translateY(-900px);
        opacity:0;
    }

}


/* กล่องหลัก */

.container {

    background:white;
    max-width:650px;
    margin:auto;
    padding:35px;

    border-radius:40px;

    border:6px solid #ff4d4d;

    box-shadow:
    0 15px 25px rgba(0,0,0,0.2);

    animation: show 1s ease;

}


@keyframes show {

    from {
        transform:scale(0.5);
        opacity:0;
    }

    to {
        transform:scale(1);
        opacity:1;
    }

}



/* รูปชินจัง */

.shinchan-img {

    width:180px;

    animation:
    bounce 2s infinite,
    shake 4s infinite;

}



@keyframes bounce {

    0%,100% {
        transform:translateY(0);
    }

    50% {
        transform:translateY(-20px);
    }

}



@keyframes shake {

    0%,90%,100% {
        rotate:0deg;
    }

    95% {
        rotate:8deg;
    }

}



h1 {

    color:#e60012;
    font-size:35px;

    animation: blink 2s infinite;

}



@keyframes blink {

    50% {
        opacity:0.6;
    }

}



.name {

    color:#0066cc;
    font-size:26px;
    font-weight:bold;

}



.message {

    background:#fff0f5;

    border-radius:25px;

    padding:20px;

    margin-top:20px;

    font-size:20px;

    animation:pulse 2s infinite;

}



@keyframes pulse {

    50% {

        transform:scale(1.05);

    }

}



button {

    margin-top:20px;

    padding:12px 30px;

    border:none;

    border-radius:30px;

    background:#ff4d4d;

    color:white;

    font-size:18px;

    cursor:pointer;

    box-shadow:0 5px 10px gray;

}



button:hover {

    background:#e60012;

    transform:scale(1.1);

}



.footer {

    margin-top:25px;

    color:#ff6600;

    font-size:20px;

    font-weight:bold;

}



.star {

    font-size:35px;

    animation: rotate 3s infinite;

}


@keyframes rotate {

    50% {
        transform:rotate(20deg);
    }

}


</style>

</head>


<body>


<div class="bubble" style="left:10%; animation-delay:1s"></div>
<div class="bubble" style="left:30%; animation-delay:3s"></div>
<div class="bubble" style="left:70%; animation-delay:2s"></div>
<div class="bubble" style="left:90%; animation-delay:5s"></div>



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



<button onclick="alert('🧒 ชินจังบอกว่า Server ทำงานเรียบร้อยแล้ว! 🎉')">

กดดูข้อความจากชินจัง 💕

</button>



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
