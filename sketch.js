var mouse_stack;
var starting_color;

function setup(){
	createCanvas(1280, 912);
	colorMode(HSB, 257);
	background(0, 0, 0);

	mouse_stack = [];
	starting_color = Math.floor(random()*257);
}

function draw(){
	background(0, 0, 0);
	
	if(frameCount > 60){
		mouse_stack.push([mouseX, mouseY]);
		if(mouse_stack.length > 10000){
			mouse_stack.shift();
		}

		for(let i = 0; i < 9900; ++i){
			if(mouse_stack.length > i){
				if(i%200 > 100){
					let color = (starting_color + Math.floor(i/100)*50)%257;

					noStroke();
					fill(color, 220, 257);
					let coords = mouse_stack[mouse_stack.length-(i+1)];
					let p_coords = mouse_stack[mouse_stack.length-(i)];
					let x_off = random()*40 - 20;
					let y_off = random()*40 - 20;
					circle(coords[0]+x_off, coords[1]+y_off, 20);

					stroke(color, 220, 257);
					strokeWeight(20);
					line(coords[0]+x_off, coords[1]+y_off, p_coords[0], p_coords[1]);
				}
			} else {
				break;
			}
		}
	}
}

