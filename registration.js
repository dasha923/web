document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector('form');
	if (!form) return;
 
	form.addEventListener('submit', async (e) => {
	  e.preventDefault();
 
	  const username = document.querySelector('#username').value.trim();
	  const password = document.querySelector('#password').value.trim();
 
	  if (!username || !password) {
		 alert('Пожалуйста, заполните все поля.');
		 return;
	  }
 
	  try {
		 const response = await fetch('http://localhost:3000/register', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username, password })
		 });
 
		 const data = await response.json();
		 alert(data.message);
 
		 if (response.ok) {
			window.location.href = 'login.html'; // Перенаправление на страницу входа
		 }
 
	  } catch (error) {
		 console.error('Ошибка при регистрации:', error);
		 alert('Ошибка при подключении к серверу.');
	  }
	});
 });
 