console.log("JS загружен");
const userIcon = document.querySelector(".user-icon");
const overlay = document.getElementById("burgerOverlay");
const modal = document.getElementById("burgerModal");
const closeModalBtn = document.getElementById("closeModal");
const modalContent = document.getElementById("modalContent");

// Переменная авторизации
let isLoggedIn = false;

// Отображение меню
function openModal() {
  console.log("Нажатие на аватар");
  overlay.classList.remove("hidden");
  renderMenu();
}

// Закрытие
function closeModal() {
  overlay.classList.add("hidden");
}

// Отрисовка меню в зависимости от авторизации и ширины
function renderMenu() {
  const isMobile = window.innerWidth <= 1024;
  modalContent.innerHTML = "";

  // Навигация только на мобилке
  if (isMobile) {
    modalContent.innerHTML += `
      <a href="#">СООБЩЕСТВО</a><br />
      <a href="#">ПОДДЕРЖКА</a><br />
      <a href="#">НОВОСТИ</a><br /><hr />
    `;
  }

  if (isLoggedIn) {
    modalContent.innerHTML += `
      <button onclick="alert('Изменить фото')">Изменить фото</button><br />
      <button onclick="alert('Профиль')">Профиль</button><br />
      <button onclick="logout()">Выйти</button>
    `;
  } else {
    modalContent.innerHTML += `
      <button class="modal-btn">Войти</button><br />
      <button class="modal-btn">Зарегистрироваться</button>
    `;
  }
}

// События
userIcon.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeModal();
});

// Пример выхода
function logout() {
  isLoggedIn = false;
  closeModal();
}

// Скрипт открытия/закрытия модального окна
document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.querySelector(".hero-button");
    const modal = document.getElementById("beta-modal");
    const closeBtn = modal.querySelector(".close-button");
  
    openBtn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "flex";
        modal.scrollTop = 0;
        document.body.style.overflow = 'hidden';
    });
  
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    });
  
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  
  function createDust(canvas) {
    const ctx = canvas.getContext("2d");
    const particles = [];
  
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
  
    window.addEventListener("resize", resize);
    resize();
  
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        speedY: Math.random() * 0.3 + 0.1,
        alpha: Math.random() * 0.3 + 0.1,
      });
    }
  
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.fill();
        p.y += p.speedY;
        if (p.y > canvas.height) {
          p.y = 0;
          p.x = Math.random() * canvas.width;
        }
      }
      requestAnimationFrame(animate);
    }
  
    animate();
  }
  
  // Инициализация для каждой канвы
  document.querySelectorAll(".dust-canvas").forEach(createDust);

  // Пример — плавное появление света при скролле
document.addEventListener('scroll', () => {
    const glow = document.querySelectorAll('.light-glow');
    const scrollY = window.scrollY;
  
    glow.forEach(g => {
      g.style.opacity = Math.min(1, scrollY / 600);
    });
  });
  

  // Имитация отправки формы обратной связи
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
  
      if (!name || !email || !message) {
        alert("Пожалуйста, заполните все поля.");
        return;
      }
  
      // Имитируем отправку
      const submitButton = form.querySelector(".submit-button");
      submitButton.disabled = true;
      submitButton.textContent = "Отправка...";
  
      setTimeout(() => {
        alert("Спасибо! Ваше сообщение отправлено.");
        form.reset();
        submitButton.disabled = false;
        submitButton.textContent = "Отправить";
      }, 1500);
    });
  });
  
  // Скролл наверх по клику на кнопку
document.addEventListener("DOMContentLoaded", () => {
    const toTopBtn = document.querySelector(".to-top-button");
  
    toTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });

//   const userImg = document.querySelector('.user-icon img');

// // Заменить иконку на новую
// userImg.src = 'images/user-avatar.png'; // путь к аватару
// userImg.alt = 'Аватар пользователя'; // описание аватара

// Скрытие прелоадера после полной загрузки страницы
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    preloader.classList.add("hidden");
  });
  
