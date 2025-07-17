document.addEventListener("DOMContentLoaded", function () {
    // Open Side Nav
    document.querySelector(".span-one").addEventListener("click", function () {
      document.getElementById("mySidenav").style.width = "250px";
    });

    // Close Side Nav
    document.querySelector(".closebtn").addEventListener("click", function () {
      document.getElementById("mySidenav").style.width = "0";
    });
  });

document.addEventListener("DOMContentLoaded", function () {
  let lastScrollY = window.scrollY;
  
  const topNav = document.querySelector(".top-header-pos");
  const spam = document.querySelector(".span-one");
  const notify = document.querySelector(".my-notify");

  window.addEventListener("scroll", () => {
    const scrollingDown = window.scrollY > lastScrollY;

    // Top nav hide/show
    if (topNav) {
      topNav.style.top = scrollingDown ? "-100px" : "0";
    }

    // Menu icon hide/show
    if (spam) {
      spam.style.opacity = scrollingDown ? "0" : "1";
      spam.style.pointerEvents = scrollingDown ? "none" : "auto";
    }

    // Notification bell hide/show
    if (notify) {
      notify.style.opacity = scrollingDown ? "0" : "1";
      notify.style.pointerEvents = scrollingDown ? "none" : "auto";
    }

    lastScrollY = window.scrollY;
  });
});


