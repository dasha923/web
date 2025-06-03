document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('loginForm');
	if (!form) return;
 
	form.addEventListener('submit', async (e) => {
	  e.preventDefault();
 
	  const email = document.getElementById('email').value.trim();
	  const password = document.getElementById('password').value.trim();
 
	  if (!email || !password) {
		 document.getElementById('loginError').innerText = 'Пожалуйста, введите email и пароль';
		 return;
	  }
 
	  try {
		 const res = await fetch('http://localhost:3000/api/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password })
		 });
 
		 const data = await res.json();
 
		 if (res.ok) {
			localStorage.setItem('token', data.token);
			localStorage.setItem('user', JSON.stringify(data.user));
			window.location.href = 'cabinet.html';
		 } else {
			document.getElementById('loginError').innerText = data.error || 'Ошибка входа';
		 }
	  } catch (error) {
		 console.error('Ошибка при входе:', error);
		 document.getElementById('loginError').innerText = 'Ошибка подключения к серверу';
	  }
	});
 });
 