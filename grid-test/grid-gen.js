var temp = "<div class='brick {size}' style='background-color: {color}'><div class='cover'>{size}</div></div>";
var sizes = ["size11", "size12", "size21", "size22", "size13", "size31", "size23"];
var colour = [
	"rgb(142, 68, 173)",
	"rgb(211, 84, 0)",
	"rgb(0, 106, 63)",
	"rgb(135, 0, 0)",
	"rgb(39, 174, 96)",
	"rgb(192, 57, 43)",
	"rgb(41, 128, 185)",
	"rgb(243, 156, 18)"
];
var html = '', size = '', color = '', limitItem = 100;
for (var i = 0; i < limitItem; ++i) {
	size = sizes[sizes.length * Math.random() << 0];
	color = colour[colour.length * Math.random() << 0];
	html += temp.replace(/\{size\}/g, size).replace("{color}", color);
}
$("#freewall").html(html);

$(function() {
	var wall = new freewall("#freewall");
	wall.reset({
		selector: '.brick',
		animate: true,
		cellW: 160,
		cellH: 160,
		fixSize: 0,
		onResize: function() {
			wall.refresh();
		}
	});
	wall.filter(".size23");
	$(".filter-label").click(function() {
		$(".filter-label").removeClass("active");
		var filter = $(this).addClass('active').data('filter');
		if (filter) {
			wall.filter(filter);
		} else {
			wall.unFilter();
		}
	});

	wall.fitWidth();
});