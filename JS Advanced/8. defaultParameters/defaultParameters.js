function greeting(name = 'friend', lang = 'ja') {
	if (lang === 'en') {
		return `Hi, ${name}`
	};

	if (lang === 'ja') {
		return `Konnichiwa, ${name}`
	};

	return 'Chao ban!'
};

greeting(); // Konnichiwa, friend.