async function fetchProfile() {
	const res = await fetch('http://localhost:3000/api/me', {
	  headers: {
		 'Authorization': 'Bearer ' + localStorage.getItem('token')
	  }
	});
 
	if (res.ok) {
	  const user = await res.json();
	  document.getElementById('userInfo').innerHTML = `
		 <p>Имя: ${user.name}</p>
		 <p>Роль: ${user.role}</p>
		 <p>Email: ${user.email}</p>
		 ${user.role === 'specialist' ? `<p>Специализация: ${user.specialization}</p><p>О себе: ${user.bio}</p>` : ''}
	  `;
	} else {
	  document.getElementById('userInfo').innerText = 'Не удалось получить данные';
	}
 }
 
 fetchProfile();