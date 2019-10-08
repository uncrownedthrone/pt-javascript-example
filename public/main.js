const main = () => {
	if (document.querySelector('h1.hello-world')) {
		document.querySelector('h1.hello-world').textContent = 'Hello, World!';
	}
	if (document.querySelector('h2')) {
		document.querySelector('h2').style.color = 'blue';
	}
	document.querySelector('body').style.backgroundColor = '#666';
};

document.addEventListener('DOMContentLoaded', main);
