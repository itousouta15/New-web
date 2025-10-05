var posts=["2025/08/27/hexo/","2025/07/11/ais3preexam/","2025/04/04/firstblog/","2025/10/05/devlog/","2025/07/11/zerojudge/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、簡單且強大的網誌框架"},{"name":"anzhiyu主题","link":"https://hexo.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"img/anheyu.webp"},{"name":"Small R","link":"https://smallr-portfolio.vercel.app/en","avatar":"/img/smallR.webp","descr":"全端電佬一個"},{"name":"PepperSauce","link":"https://peppersauce0712.github.io/","avatar":"/img/3.webp","descr":"程式路上的小白"},{"name":"Small Z","link":"https://yuzen9622.github.io/","avatar":"/img/smallZ.webp","descr":"前端電佬一個"},{"name":"南宮柳信","link":"https://nangong5421.github.io/","avatar":"/img/南宮.webp","descr":"電到我抬不起頭"},{"name":"Chumy","link":"https://blog.chummydns.com","avatar":"https://blog.chummydns.com/images/me.png","descr":"AIS3隊友 | 資安大電神"},{"name":"Frank","link":"https://frankk.uk/","avatar":"/img/frank.webp","descr":"AIS3隊友 | 資安大電神"},{"name":"yochan06","link":"https://yochan06.github.io/","avatar":"https://yochan06.github.io/images/132590659.png","descr":"AIS3隊友 | 資安電神"},{"name":"伊藤喵喵","link":"https://www.instagram.com/shooting.twcat?igsh=OWx2djZmbDB6ZW1k","avatar":"https://avatars.githubusercontent.com/u/130988476?v=4","descr":"喵"},{"name":"UmmIt Kin","link":"https://l.ummit.dev","avatar":"https://avatars.githubusercontent.com/u/128139875?v=4","descr":"Can't life without GNU/Linux"},{"name":"橘子","link":"https://橘.tw","avatar":"https://橘.tw/resource/佩佩.png","descr":"橘子喵"},{"name":"伊藤有梄","link":"https://siewilly.github.io","avatar":"https://cdn.discordapp.com/avatars/1340926461749629011/4fc9caf6dcc197a3137319f2885f2eee.png?size=512","descr":"競程新手"},{"name":"小一","link":"https://www.instagram.com/littleonechung/","avatar":"https://avatars.githubusercontent.com/u/67142736?v=4","descr":"一個喜歡開發遊戲的人類"},{"name":"鴨鴨","link":"https://ya-ya-12.github.io/","avatar":"https://cdn.discordapp.com/avatars/1124954310527164456/66d8378f5e4b614d2a4c81e99c944468.png?size=512","descr":"我是一個小廢廢"},{"name":"匿名用戶9487","link":"https://qwo877.github.io/me/","avatar":"https://avatars.githubusercontent.com/u/178977233?v=4","descr":"被電爛的廢物"},{"name":"su2u4","link":"https://github.com/su2u4-1/","avatar":"https://avatars.githubusercontent.com/u/70791378?v=4","descr":"蘇"},{"name":"檸檬茶","link":"https://blog-lemontea.pages.dev/","avatar":"https://blog-lemontea.pages.dev/avatar/avator.png","descr":"一個小廢物(才怪)"},{"name":"Justin","link":"https://justin0711.com/","avatar":"https://qwo877.github.io/me/images/ju.png","descr":"大電神"},{"name":"jackoha","link":"https://jackoha.github.io/about/","avatar":"https://jackoha.github.io/avatar/jackoha.webp","descr":"東方廚"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };