ymaps.ready(init);
function init(){
	// Создание карты.
	const map = new ymaps.Map('map', {
		center: [55.185313, 83.089364],
		zoom: 16,
	});

	const myPlacemark = new ymaps.Placemark(
		[55.185313, 83.089364],
        {},
		{
		iconLayout: 'default#image',
        iconImageHref: './img/map/map-icon.svg',
        iconImageSize: [48, 50],
        iconImageOffset: [-3, -42],
		}
	);

	map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

	    map.geoObjects.add(myPlacemark);
}