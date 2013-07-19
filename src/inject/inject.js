chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		$('div.c12').prepend('<div id="qrCode"></div>');
		var address = $('div.middle b:last-child').html();
		var amount = $('b.price').html();
		$('#qrCode').qrcode({
			render : 'div',
			width : 150,
			height : 150,
			color : '#000',
			bgColor : null,
			text : 'bitcoin:'+ address +'?amount='+ amount +'&label=Coingig'
		});

	}
	}, 10);
});