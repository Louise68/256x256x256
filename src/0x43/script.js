/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:59:14
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function setup(){
	var trigger = interact('.trigger');
	trigger.draggable({onmove: dragMoveHandler});
	interact('.trigger')

	.resizable({
		// resize from all edges and corners
		edges: { left: true, right: true, bottom: true, top: true },
	})
	.on('resizemove', function (event) {
		var target = event.target,
		x = (parseFloat(target.getAttribute('data-x')) || 0),
		y = (parseFloat(target.getAttribute('data-y')) || 0);

		// update the element's style
		target.style.width  = event.rect.width + 'px';
		target.style.height = event.rect.height + 'px';

		// translate when resizing from top or left edges
		x += event.deltaRect.left;
		y += event.deltaRect.top;

		target.style.webkitTransform = target.style.transform =
		'translate(' + x + 'px,' + y + 'px)';

		target.setAttribute('data-x', x);
		target.setAttribute('data-y', y);
		target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height);

		if(event.rect.width > 10000 && event.rect.height > 10000){
			resizedHandler();
		}
	});

	
}

function resizedHandler(){
	
		var div = document.querySelector("dropzone");
	dropzone.classList.remove("hidden");
	
	var trigger = interact('.trigger');
	trigger.draggable({onmove: dragMoveHandler});
	interact('.trigger')

	console.log("resizedHandler");

}

function resizedEndHandler(event){
	console.log("dragEndHandler");
	}

function dragMoveHandler (event){
	
	var target = event.target,
	// keep the dragged position in the data-x/data-y attributes
	x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
	y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
	// translate the element
	target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
	// update the posiion attributes
	target.setAttribute('data-x', x);
	target.setAttribute('data-y', y);
	interact('.trigger')
	
}

function dragEndHandler(event){
	
	console.log("dragEndHandler");
	}

