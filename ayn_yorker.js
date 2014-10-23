function randomSelection (object_length) {
    return Math.floor(Math.random() * object_length);
}

$('#getdata-button').on('click', function() {
	generateImage();
});

function generateImage() {

	var images = [];
	for (var i = 1; i != 35; ++i) images.push(i);

	//can you tell how many images are in a directory?

	var image_index = String(randomSelection(images.length));
	$('#cartoon').attr("src", "img/" + image_index + ".jpg");

	var caption_index = randomSelection(Object.keys(quotes).length);
	$('#caption').html(quotes[caption_index]);

	// console.log(quotes.length)
}

generateImage();