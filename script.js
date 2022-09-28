function clock() {
	const hoursBlock = document.querySelector('.hours');
	const minutesBlock = document.querySelector('.minutes');
	const secondsBlock = document.querySelector('.seconds');

	setInterval(() => {
		const day = new Date();
		const hours = day.getHours() * 30;
		const minutes = day.getMinutes() * 6;
		const seconds = day.getSeconds() * 6;
		hoursBlock.style.transform = `rotateZ(${hours + (minutes / 12)}deg)`
		minutesBlock.style.transform = `rotateZ(${minutes}deg)`
		secondsBlock.style.transform = `rotateZ(${seconds}deg)`
	}, 0)
}
clock();