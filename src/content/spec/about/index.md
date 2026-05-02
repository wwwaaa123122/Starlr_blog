# About
初中生一位

## 联系我？

企微：
![企微](./qiwei.svg)
QQ：
![QQ](./QQ.svg)

邮箱：i@mcxclr.top

<a target="_blank" href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=wquCuqHvrrDsoaw" style="text-decoration:none;"><img src="http://rescdn.qqmail.com/zh_CN/htmledition/images/function/qm_open/ico_mailme_01.png"/></a>

[B站](https://space.bilibili.com/3493078983772353)

[telegram](https://t.me/wwwaaa123122)

<h2>成年倒计时</h2>
<div id="five-year-countdown" style="font-size:1.5em;font-weight:bold;color:#ff6600;"></div>

<script>
(function() {
  const endDate = new Date("2030-07-20T00:00:00").getTime();
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = endDate - now;

    if (distance <= 0) {
      document.getElementById("five-year-countdown").innerText = "成年了！🎉🎉🎉";
      clearInterval(timer);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("five-year-countdown").innerText =
      `${days} 天 ${hours} 小时 ${minutes} 分 ${seconds} 秒`;
  }

  updateCountdown();
  const timer = setInterval(updateCountdown, 1000);
})();
</script>

<script src="https://giscus.app/client.js"
        data-repo="wwwaaa123122/blogcomment"
        data-repo-id="R_kgDOPX1knA"
        data-category="Announcements"
        data-category-id="DIC_kwDOPX1knM4CtwEh"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="preferred_color_scheme"
        data-lang="zh-CN"
        data-loading="lazy"
        crossorigin="anonymous"
        async>
</script>

::github{repo="wwwaaa123122/Starlr_blog"}