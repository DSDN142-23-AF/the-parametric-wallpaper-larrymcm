//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;

var s = 0.4; // scale of symbol
var v = 100; // y position of centre of symbol
var h = 100; // x position of centre of symbol
var b = 0; // ladybird wingspan
var d = 1.1; // scale of wing dots 

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  rect(40 ,40, rect_width, rect_height);
  strokeWeight(s * 3);
  line(h - 58 * s, v + 63 * s, h - 58 * s, v + 25 * s); //left antenna stick
  line(h - 63 * s, v + 58 * s, h - 25 * s, v + 58 * s); //right antenna stick
  ellipse(h - 58 * s, v + 25 * s, 3 * s, 3 * s); //left antenna dot
  ellipse(h - 25 * s, v + 58 * s, 3 * s, 3 * s); //right antenna dot

  fill(15, 15, 15);
  ellipse(h - 63 * s, v + 63 * s, 50 * s, 50 * s); //head
  ellipse(h - 93 * s, v + 93 * s, 90 * s, 90 * s); //body

  fill(144, 20, 30);
  arc(h - 93 * s + b, v + 93 * s + b, 100 * s, 100 * s, radians(315 - 27 / 17 * b), radians(135 - b), CHORD); //right wing
  arc(h - 93 * s - b, v + 93 * s - b, 100 * s, 100 * s, radians(135 + b), radians(315 + 27 / 17 * b), CHORD); //left wing
  fill(15, 15, 15);
  strokeWeight(0);

  fill(249, 240, 242);
  ellipse(h - 67 * s, v + 39 * s, 10 * s, 10 * s) //left eye
  ellipse(h - 39 * s, v + 66 * s, 10 * s, 10 * s) //right eye

  fill(15, 15, 15);
  ellipse(h - 82 * s - b, v + 58 * s - b, d * 12 * s, d * 12 * s); //left wing dots R-L
  ellipse(h - 58 * s + b, v + 82 * s + b, d * 12 * s, d * 12 * s); //right wing dots R-L

  ellipse(h - 101 * s - b, v + 59 * s - b, d * 14 * s, d * 14 * s);
  ellipse(h - 59 * s + b, v + 101 * s + b, d * 14 * s, d * 14 * s);

  ellipse(h - 107 * s - b, v + 77 * s - b, d * 12 * s, d * 12 * s);
  ellipse(h - 77 * s + b, v + 107 * s + b, d * 12 * s, d * 12 * s);

  ellipse(h - 126 * s - b, v + 77 * s - b, d * 14 * s, d * 14 * s);
  ellipse(h - 77 * s + b, v + 126 * s + b, d * 14 * s, d * 14 * s);

  ellipse(h - 130 * s - b, v + 95 * s - b, d * 12 * s, d * 12 * s);
  ellipse(h - 95 * s + b, v + 130 * s + b, d * 12 * s, d * 12 * s);

  //LADYBIRD 2
  strokeWeight(3 * s);
  line(h + 58 * s, v + 63 * s, h + 58 * s, v + 25 * s) //right antenna stick
  line(h + 63 * s, v + 58 * s, h + 25 * s, v + 58 * s) //left antenna stick
  ellipse(h + 58 * s, v + 25 * s, 3 * s, 3 * s) //right antenna dot
  ellipse(h + 25 * s, v + 58 * s, 3 * s, 3 * s) //left antenna dot

  fill(15, 15, 15);
  ellipse(h + 63 * s, v + 63 * s, 50 * s, 50 * s); //head

  ellipse(h + 93 * s, v + 93 * s, 90 * s, 90 * s); //body

  fill(144, 20, 30);
  arc(h + 93 * s + b, v + 93 * s - b, 100 * s, 100 * s, radians(225 - 27 / 17 * b), radians(45 - b), CHORD); //right wing
  arc(h + 93 * s - b, v + 93 * s + b, 100 * s, 100 * s, radians(45 + b), radians(225 + 27 / 17 * b), CHORD); //left wing
  fill(15, 15, 15);
  strokeWeight(0);

  fill(249, 240, 242);
  ellipse(h + 67 * s, v + 39 * s, 10 * s, 10 * s) //right eye
  ellipse(h + 39 * s, v + 66 * s, 10 * s, 10 * s) //left eye

  fill(15, 15, 15);
  ellipse(h + 82 * s + b, v + 58 * s - b, d * 12 * s, d * 12 * s); //right wing dots L-R
  ellipse(h + 58 * s - b, v + 82 * s + b, d * 12 * s, d * 12 * s); //left wing dots L-R

  ellipse(h + 101 * s + b, v + 59 * s - b, d * 14 * s, d * 14 * s);
  ellipse(h + 59 * s - b, v + 101 * s + b, d * 14 * s, d * 14 * s);

  ellipse(h + 107 * s + b, v + 77 * s - b, d * 12 * s, d * 12 * s);
  ellipse(h + 77 * s - b, v + 107 * s + b, d * 12 * s, d * 12 * s);

  ellipse(h + 126 * s + b, v + 77 * s - b, d * 14 * s, d * 14 * s);
  ellipse(h + 77 * s - b, v + 126 * s + b, d * 14 * s, d * 14 * s);

  ellipse(h + 130 * s + b, v + 95 * s - b, d * 12 * s, d * 12 * s);
  ellipse(h + 95 * s - b, v + 130 * s + b, d * 12 * s, d * 12 * s);

  //LADYBIRD 3
  let y = 167
  strokeWeight(3 * s);
  line(h + 58 * s, v - 63 * s, h + 58 * s, v - 25 * s); //left antenna stick
  line(h + 63 * s, v - 58 * s, h + 25 * s, v - 58 * s); //right antenna stick
  ellipse(h + 58 * s, v - 25 * s, 3 * s, 3 * s); //left antenna dot
  ellipse(h + 25 * s, v - 58 * s, 3 * s, 3 * s); //right antenna dot

  fill(15, 15, 15);
  ellipse(h + 63 * s, v - 63 * s, 50 * s, 50 * s); //head

  ellipse(h + 93 * s, v - 93 * s, 90 * s, 90 * s); //body

  fill(144, 20, 30);
  arc(h + 93 * s + b, v - 93 * s + b, 100 * s, 100 * s, radians(315 + b), radians(135 + 27 / 17 * b), CHORD); //left wing
  arc(h + 93 * s - b, v - 93 * s - b, 100 * s, 100 * s, radians(135 - 27 / 17 * b), radians(315 - b), CHORD); //right wing
  fill(15, 15, 15);
  strokeWeight(0);

  fill(249, 240, 242);
  ellipse(h + 67 * s, v - 39 * s, 10 * s, 10 * s) //left eye
  ellipse(h + 39 * s, v - 66 * s, 10 * s, 10 * s) //right eye

  fill(15, 15, 15);
  ellipse(h + 82 * s + b, v - 58 * s + b, d * 12 * s, d * 12 * s); //left wing dots L-R
  ellipse(h + 58 * s - b, v - 82 * s - b, d * 12 * s, d * 12 * s); //right wing dots L-R

  ellipse(h + 101 * s + b, v - 59 * s + b, d * 14 * s, d * 14 * s);
  ellipse(h + 59 * s - b, v - 101 * s - b, d * 14 * s, d * 14 * s);

  ellipse(h + 107 * s + b, v - 77 * s + b, d * 12 * s, d * 12 * s);
  ellipse(h + 77 * s - b, v - 107 * s - b, d * 12 * s, d * 12 * s);

  ellipse(h + 126 * s + b, v - 77 * s + b, d * 14 * s, d * 14 * s);
  ellipse(h + 77 * s - b, v - 126 * s - b, d * 14 * s, d * 14 * s);

  ellipse(h + 130 * s + b, v - 95 * s + b, d * 12 * s, d * 12 * s);
  ellipse(h + 95 * s - b, v - 130 * s - b, d * 12 * s, d * 12 * s);


  //LADYBIRD 4
  let z = 167
  strokeWeight(3 * s);
  line(h - 58 * s, v - 63 * s, h - 58 * s, v - 25 * s) //right antenna stick
  line(h - 63 * s, v - 58 * s, h - 25 * s, v - 58 * s) //left antenna stick
  ellipse(h - 58 * s, v - 25 * s, 3 * s, 3 * s) //right antenna dot
  ellipse(h - 25 * s, v - 58 * s, 3 * s, 3 * s) //left antenna dot

  fill(15, 15, 15);
  ellipse(h - 63 * s, v - 63 * s, 50 * s, 50 * s); //head

  ellipse(h - 93 * s, v - 93 * s, 90 * s, 90 * s); //body

  fill(144, 20, 30);
  arc(h - 93 * s - b, v - 93 * s + b, 100 * s, 100 * s, radians(45 - 27 / 17 * b), radians(225 - b), CHORD); //right wing
  arc(h - 93 * s + b, v - 94 * s - b, 100 * s, 100 * s, radians(225 + b), radians(45 + 27 / 17 * b), CHORD); //left wing
  fill(15, 15, 15);
  strokeWeight(0);

  fill(249, 240, 242);
  ellipse(h - 67 * s, v - 39 * s, 10 * s, 10 * s) //right eye
  ellipse(h - 39 * s, v - 66 * s, 10 * s, 10 * s) //left eye

  fill(15, 15, 15);

  ellipse(h - 82 * s - b, v - 58 * s + b, d * 12 * s, d * 12 * s); //right wing dots R-L
  ellipse(h - 58 * s + b, v - 82 * s - b, d * 12 * s, d * 12 * s); //left wing dots R-L

  ellipse(h - 101 * s - b, v - 59 * s + b, d * 14 * s, d * 14 * s);
  ellipse(h - 59 * s + b, v - 101 * s - b, d * 14 * s, d * 14 * s);

  ellipse(h - 107 * s - b, v - 77 * s + b, d * 12 * s, d * 12 * s);
  ellipse(h - 77 * s + b, v - 107 * s - b, d * 12 * s, d * 12 * s);

  ellipse(h - 126 * s - b, v - 77 * s + b, d * 14 * s, d * 14 * s);
  ellipse(h - 77 * s + b, v - 126 * s - b, d * 14 * s, d * 14 * s);

  ellipse(h - 130 * s - b, v - 95 * s + b, d * 12 * s, d * 12 * s);
  ellipse(h - 95 * s + b, v - 130 * s - b, d * 12 * s, d * 12 * s);


}
