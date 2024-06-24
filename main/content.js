window.addEventListener('load', function () {
	// repository-details-container id'sine sahip div'i seçiyoruz
	var container = document.getElementById('repository-details-container');

	// Eğer container bulunduysa (null değilse), içine buton ekleyeceğiz
	if (container) {
		// Buton elementi oluşturuyoruz
		var button = document.createElement('button');
		button.id = 'demo-button'; // Butonun id'si "demo-button" olarak ayarlandı

		// SVG elementini oluşturuyoruz
		var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
		svg.setAttribute('viewBox', '0 0 640 512');
		svg.setAttribute(
			'class',
			'svg-inline--fa fa-solid fa-user fa-w-14 svg-code-css'
		);
		svg.style.verticalAlign = 'middle'; // Orta hizalamak için stil ekliyoruz

		// Path elementini oluşturuyoruz
		var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		path.setAttribute('fill', 'currentColor');
		path.setAttribute(
			'd',
			'M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z'
		);

		// SVG elementini path ile dolduruyoruz
		svg.appendChild(path);

		// SVG'yi butona ekliyoruz
		button.appendChild(svg);

		// Butonun metnini ekliyoruz
		var buttonText = document.createTextNode(' index.html');
		button.appendChild(buttonText);

		// Container'a butonu ekliyoruz
		container.appendChild(button);

		// Demo butonuna tıklanma olayı ekliyoruz
		button.addEventListener('click', function () {
			// Mevcut sayfanın URL'sini alıyoruz
			var currentUrl =
				'https://raw.githack.com' +
				window.location.pathname +
				'/master/index.html';

			// Yeni sekmede mevcut sayfanın URL'sini açma işlemi
			window.open(currentUrl, '_blank');
		});

		// Tüm tbody elementlerini seç
		var tbodyElements = document.getElementsByTagName('tbody');

		// Bayrak tanımla
		var found = false;

		// Her bir tbody elementi için döngü
		outerloop: for (var i = 0; i < tbodyElements.length; i++) {
			var tbody = tbodyElements[i];

			// tbody içindeki tüm tagları seç
			var tags = tbody.getElementsByTagName('*');

			// Her bir tag için döngü
			for (var j = 0; j < tags.length; j++) {
				var tag = tags[j];

				// Eğer tag bir <a> (link) ise
				if (tag.tagName.toLowerCase() === 'a') {
					// Linkin href özelliğini kontrol et
					var href = tag.getAttribute('href');

					// href içinde 'index.html' geçiyorsa
					if (href && href.indexOf('index.html') !== -1) {
						button.disabled = false;
						console.log('index.html dosyası bulundu!');
						found = true; // Bayrağı true yap
						break outerloop; // Dış döngüyü durdur
					}
				}
			}
		}

		// Bayrağa göre sonuç mesajını yazdır
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
