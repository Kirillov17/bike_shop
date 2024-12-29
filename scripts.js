function toggleMenu()
        {
            var sidebar = document.getElementById("mySidebar");
            if (sidebar.style.left === "0px")
            {
                sidebar.style.left = "-250px"; // скрыто
                document.body.style.marginLeft = "0";
            }
            else
            {
                sidebar.style.left = "0px"; // показано
                document.body.style.marginLeft = "250px";
            }
        }

function toggleSubmenu(event)
{
    event.preventDefault(); // предотвращаем переход по ссылке
    var submenu = document.getElementById("aboutSubmenu");
    if (submenu.style.display === "block")
    {
        submenu.style.display = "none"; // скрыть подпункты
    }
    else
    {
        submenu.style.display = "block"; // показать подпункты
    }
}
function toggleForms() {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    loginForm.classList.toggle("hidden");
    registerForm.classList.toggle("hidden");
}

function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    // Здесь должна быть логика проверки пользователя
    alert(`Вход выполнен для: ${email}`);
    // После успешного входа можно перенаправить пользователя
}

function register() {
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    // Здесь должна быть логика регистрации пользователя
    alert(`Регистрация выполнена для: ${email}`);
    // После успешной регистрации можно перенаправить пользователя
}

const link = document.getElementById('nextPage');

link.addEventListener('click', function(event)
{
    event.preventDefault(); // Отменяем стандартное поведение ссылки
    document.body.classList.remove('visible');
    document.body.classList.add('hidden1');

    setTimeout
    (() =>
        {
            window.location.href = link.href; // Переход на новую страницу после анимации
        }, 200
    ); // Задержка равна времени анимации
});