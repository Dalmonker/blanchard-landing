(() => {
    function setBurger(params) {
        const btn = document.querySelector(`.${params.btnClass}`);
        const menu = document.querySelector(`.${params.menuClass}`);
        const links = menu.querySelectorAll(`.${params.link}`);
      
        function scrollToSection(link) {
          console.log(link);
          const href = link.getAttribute("href").substring(1);
          const scrollTarget = document.getElementById(href);
          const elementPosition = scrollTarget.getBoundingClientRect().top;
      
          window.scrollBy({
            top: elementPosition,
            behavior: "smooth"
          });
        }
      
        function onBtnClick() {
          console.log('click');
          if (window.screen.width <= 1280) {
            btn.classList.toggle(params.activeClass);
      
            if (
              !menu.classList.contains(params.activeClass) &&
              !menu.classList.contains(params.hiddenClass)
            ) {
              menu.classList.add(params.activeClass);
              document.body.style.overflow = "hidden";
              btn.setAttribute("aria-label", 'Закрыть главное меню');
            } else {
              menu.classList.add(params.hiddenClass);
              document.body.removeAttribute("style");
              this.classList.toggle(params.hiddenClass);
              btn.setAttribute("aria-label", 'Открыть главное меню');
            }
          }
        }
      
        menu.addEventListener("animationend", function () {
          if (this.classList.contains(params.hiddenClass)) {
            this.classList.remove(params.activeClass);
            this.classList.remove(params.hiddenClass);
            btn.classList.remove(params.hiddenClass);
          }
        });
      
        btn.setAttribute("aria-expanded", false);
        btn.addEventListener("click", window.debounce(onBtnClick, 500));

      }
      
      // здесь мы вызываем функцию и передаем в нее классы наших элементов
      setBurger({
        btnClass: "js-burger", // класс бургера
        menuClass: "js-menu-wrap", // класс меню
        activeClass: "is-opened", // класс открытого состояния
        hiddenClass: "is-closed", // класс закрывающегося состояния (удаляется сразу после закрытия)
        link: "js-menu-link"
      });
})();