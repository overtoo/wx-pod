function randomRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let startingPoint = [randomRange(0, 400), randomRange(0, 600)];
let startingBoxes = [
  [25, 25],
  [25, 25],
];

let startingPoints = startingBoxes.map(([w, h]) => [
  randomRange(0, 400),
  w,
  randomRange(0, 600),
  h,
]);

console.log(startingPoints);

// if (i%5==0) {
//     particles[i] = new Particle(4,start1[0],start1[0]+5,start1[1],start1[1]+2);
// } else if (i%5==1)
// {particles[i] = new Particle(4,start2[0],start2[0]+250,start2[1],start2[1]+2);
// } else if (i%5==2) {
//   {particles[i] = new Particle(4,start3[0],start3[0]+250,start3[1],start3[1]+2);
// }}else if (i%5==3) {
//   {particles[i] = new Particle(4,start4[0],start4[0]+250,start4[1],start4[1]+2);
// }} else if (i%5==4) {
//   {particles[i] = new Particle(2,40,55,40,55)};
//       console.log([numbPart,zOffInc,start1[0],start1[1],start2[0],start2[1]]);
// }
// }
