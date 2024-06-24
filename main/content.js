window.addEventListener('load', function () {
	var container = document.getElementById('repository-details-container');

	if (container) {
		var button = document.createElement('button');
		button.id = 'demo-button';

		var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
		svg.setAttribute('viewBox', '0 0 640 512');
		svg.setAttribute(
			'class',
			'svg-inline--fa fa-solid fa-user fa-w-14 svg-code-css'
		);
		svg.style.verticalAlign = 'middle';

		var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		path.setAttribute('fill', 'currentColor');
		path.setAttribute(
			'd',
			'M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z'
		);

		svg.appendChild(path);
		
		button.appendChild(svg);

		var buttonText = document.createTextNode(' Index Viewer');
		button.appendChild(buttonText);

		container.appendChild(button);

		button.addEventListener('click', function () {
			var currentUrl =
				'https://raw.githack.com' +
				window.location.pathname +
				'/master/index.html';

			window.open(currentUrl, '_blank');
		});

		var tbodyElements = document.getElementsByTagName('tbody');

		var found = false;

		outerloop: for (var i = 0; i < tbodyElements.length; i++) {
			var tbody = tbodyElements[i];

			var tags = tbody.getElementsByTagName('*');

			for (var j = 0; j < tags.length; j++) {
				var tag = tags[j];

				if (tag.tagName.toLowerCase() === 'a') {
					var href = tag.getAttribute('href');

					if (href && href.indexOf('index.html') !== -1) {
						button.disabled = false;
						console.log('index.html dosyası bulundu!');
						found = true;
						break outerloop;
					}
				}
			}
		}
		
		if (!found) {
			console.log('index.html dosyası bulunamadı! :[');
			button.disabled = true;
		}
	} else {
		console.log('repository-details-container bulunamadı!');
	}
});

var script = document.createElement('script');
script.src = 'https://kit.fontawesome.com/4171a75ee4.js';
script.crossOrigin = 'anonymous';
document.head.appendChild(script);
