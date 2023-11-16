function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6XvWSUw9RaY":
        Script1();
        break;
      case "5k4TamZjW8C":
        Script2();
        break;
      case "5gIFmYmwP3b":
        Script3();
        break;
      case "5d9gEjfC2su":
        Script4();
        break;
      case "6o7LSap2cCX":
        Script5();
        break;
      case "5jxIfZWHpuN":
        Script6();
        break;
      case "5atuqcVRMsL":
        Script7();
        break;
      case "5ZQIp6WqqF4":
        Script8();
        break;
      case "661za2FtDct":
        Script9();
        break;
      case "64f6pdc45q4":
        Script10();
        break;
      case "65Sc2VVLA6W":
        Script11();
        break;
      case "6UPRI0QtBHF":
        Script12();
        break;
      case "5UsYLVRtVdI":
        Script13();
        break;
      case "6EaWYMoPSJX":
        Script14();
        break;
      case "6CsJknowRc0":
        Script15();
        break;
      case "66OafKz7RJu":
        Script16();
        break;
      case "6Lj7f8qPxT0":
        Script17();
        break;
      case "6oeDZXBzB7o":
        Script18();
        break;
      case "62mgZP62Tnw":
        Script19();
        break;
  }
}

function Script1()
{
  var markers = document.querySelectorAll("[data-acc-text='markers']");
var why = document.querySelector("[data-acc-text='why']");
var why_def = document.querySelector("[data-acc-text='why_def']");
var box = document.querySelector("[data-acc-text='box']");
var points = document.querySelectorAll("[data-acc-text='points']");
var points_array = Array.from(points); // Convert NodeList to Array
var bullets = document.querySelectorAll("[data-acc-text='bullets']");
var bullets_array = Array.from(bullets);
const tl = gsap.timeline();

// Animate "why" element
tl.from(why, {
  delay: 0.5,
  opacity: 0,
  duration: 1, // Set duration to 1 second
});

// Animate "why_def" element
tl.from(why_def, {
  opacity: 0,
});

// Animate "box" element
tl.from(box, {
  delay: 0.5,
  opacity: 0,
  x: 960, // Animate from x-position 960
});
tl.from(bullets_array[0], {
   opacity: 0,
   x: 960, // Animate from x-position 960
});
tl.from(points_array[0], {
   opacity: 0,
   x: 960, // Animate from x-position 960
});
tl.from(bullets_array[1], {
   opacity: 0,
   x: 960, // Animate from x-position 960
});
tl.from(points_array[1], {
   opacity: 0,
   x: 960, // Animate from x-position 960
});
tl.from(bullets_array[2], {
   opacity: 0,
   x: 960, // Animate from x-position 960
});
tl.from(points_array[2], {
   opacity: 0,
   x: 960, // Animate from x-position 960
});
// Animate "markers" elements
markers.forEach(function (marker) {
  tl.from(marker, {
    opacity: 0,
  });
});
}

function Script2()
{
  var hide = document.querySelector("[data-acc-text='hide']");
const tl_2 = gsap.timeline();
tl_2.to(hide,{
  opacity: 0,
});
}

function Script3()
{
  var box_1 = document.querySelector("[data-acc-text='box_1']");
var text_1 = document.querySelector("[data-acc-text='text_1']");
const tl = gsap.timeline(); 

tl.from(box_1, {
  opacity: 0,
  duartion: 1,
});

tl.from(text_1, {
  opacity: 0,
});
}

function Script4()
{
  var box_2 = document.querySelector("[data-acc-text='box_2']");
var text_2 = document.querySelector("[data-acc-text='text_2']");
const tl = gsap.timeline(); 

tl.from(box_2, {
  opacity: 0,
  duartion: 1,
});

tl.from(text_2, {
  opacity: 0,
});
}

function Script5()
{
  var box_3 = document.querySelector("[data-acc-text='box_3']");
var text_3 = document.querySelector("[data-acc-text='text_3']");
const tl = gsap.timeline(); 

tl.from(box_3, {
  opacity: 0,
  duartion: 1,
});

tl.from(text_3, {
  opacity: 0,
});
}

function Script6()
{
  var image = document.querySelector("[data-acc-text='image']");
var how = document.querySelector("[data-acc-text='how']");
var how_def = document.querySelector("[data-acc-text='how_def']");
var points = document.querySelectorAll("[data-acc-text='points']");
points_array = Array.from(points);
var markers = document.querySelectorAll("[data-acc-text='markers']");

const tl = gsap.timeline();


tl.from(how, {
  delay: 0.5,
  opacity: 0,
  scale: 1
});

tl.from(how_def, {
  opacity: 0,
  duartion: 0.75,
});

tl.from(image, {
  opacity: 0,
  duration: 2.5,
  ease: "expo.inOut",
  scale: 0.6,
});

tl.from(points_array, {
  opacity: 0,
  scale: 0.75,
  stagger: 0.4,
});

markers.forEach(function (marker) {
  tl.from(marker, {
    opacity: 0,
  });
});
}

function Script7()
{
  var hide = document.querySelector("[data-acc-text='hide']");
const tl_2 = gsap.timeline();
tl_2.to(hide,{
  opacity: 0,
});
}

function Script8()
{
  var callout = document.querySelector("[data-acc-text='callout']");
gsap.to(callout,
{
x:528,
y:214,
ease: "elastic.out(1,0.3)",
duartion: 2.5,
});
}

function Script9()
{
  const box_2 = document.querySelector("[data-acc-text='box_2']");
const pic_2 = document.querySelector("[data-acc-text='pic_2']");
const tl = gsap.timeline();

tl.from(
    box_2,
    {
        x: -510, // Specify the starting position for the box animation
        duration: 0.75, // Specify the duration for the box animation
        opacity: 0, // Specify the starting opacity for the box animation
    }
);

tl.from(
    pic_2,
    {
        duration: 1, // Specify the duration for the text animation
        opacity: 0, // Specify the starting opacity for the text animation
    }
);
}

function Script10()
{
  const box = document.querySelector("[data-acc-text='box']");
const pic = document.querySelector("[data-acc-text='pic']");
const tl = gsap.timeline();

tl.from(
    box,
    {
        x: 960, // Specify the starting position for the box animation
        duration: 0.75, // Specify the duration for the box animation
        opacity: 0, // Specify the starting opacity for the box animation
    }
);

tl.from(
    pic,
    {
        duration: 1, // Specify the duration for the text animation
        opacity: 0, // Specify the starting opacity for the text animation
    }
);
}

function Script11()
{
  var callout = document.querySelector("[data-acc-text='callout']");
gsap.to(callout,
{
x:528,
y:214,
ease: "elastic.out(1,0.3)",
duartion: 2.5,
});
}

function Script12()
{
  const box_2 = document.querySelector("[data-acc-text='box_2']");
const text_2 = document.querySelector("[data-acc-text='text_2']");
const tl = gsap.timeline();

tl.from(
    box_2,
    {
        x: -510, // Specify the starting position for the box animation
        duration: 0.75, // Specify the duration for the box animation
        opacity: 0, // Specify the starting opacity for the box animation
    }
);

tl.from(
    text_2,
    {
        duration: 1, // Specify the duration for the text animation
        opacity: 0, // Specify the starting opacity for the text animation
    }
);
}

function Script13()
{
  const box = document.querySelector("[data-acc-text='box']");
const text = document.querySelector("[data-acc-text='text']");
const tl = gsap.timeline();

tl.from(
    box,
    {
        x: 960, // Specify the starting position for the box animation
        duration: 0.75, // Specify the duration for the box animation
        opacity: 0, // Specify the starting opacity for the box animation
    }
);

tl.from(
    text,
    {
        duration: 1, // Specify the duration for the text animation
        opacity: 0, // Specify the starting opacity for the text animation
    }
);
}

function Script14()
{
  var callout = document.querySelector("[data-acc-text='callout']");
gsap.to(callout,
{
x:528,
y:214,
ease: "elastic.out(1,0.3)",
duartion: 2.5,
});
}

function Script15()
{
  const box_2 = document.querySelector("[data-acc-text='box_2']");
const text_2 = document.querySelector("[data-acc-text='text_2']");
const tl = gsap.timeline();

tl.from(
    box_2,
    {
        x: -510, // Specify the starting position for the box animation
        duration: 0.75, // Specify the duration for the box animation
        opacity: 0, // Specify the starting opacity for the box animation
    }
);

tl.from(
    text_2,
    {
        duration: 1, // Specify the duration for the text animation
        opacity: 0, // Specify the starting opacity for the text animation
    }
);
}

function Script16()
{
  const box = document.querySelector("[data-acc-text='box']");
const text = document.querySelector("[data-acc-text='text']");
const tl = gsap.timeline();

tl.from(
    box,
    {
        x: 960, // Specify the starting position for the box animation
        duration: 0.75, // Specify the duration for the box animation
        opacity: 0, // Specify the starting opacity for the box animation
    }
);

tl.from(
    text,
    {
        duration: 1, // Specify the duration for the text animation
        opacity: 0, // Specify the starting opacity for the text animation
    }
);
}

function Script17()
{
  var callout = document.querySelector("[data-acc-text='callout']");
gsap.to(callout,
{
x:528,
y:214,
ease: "elastic.out(1,0.3)",
duartion: 2.5,
});
}

function Script18()
{
  const box_2 = document.querySelector("[data-acc-text='box_2']");
const text_2 = document.querySelector("[data-acc-text='text_2']");
const tl = gsap.timeline();

tl.from(
    box_2,
    {
        x: -510, // Specify the starting position for the box animation
        duration: 0.75, // Specify the duration for the box animation
        opacity: 0, // Specify the starting opacity for the box animation
    }
);

tl.from(
    text_2,
    {
        duration: 1, // Specify the duration for the text animation
        opacity: 0, // Specify the starting opacity for the text animation
    }
);
}

function Script19()
{
  const box = document.querySelector("[data-acc-text='box']");
const text = document.querySelector("[data-acc-text='text']");
const tl = gsap.timeline();

tl.from(
    box,
    {
        x: 960, // Specify the starting position for the box animation
        duration: 0.75, // Specify the duration for the box animation
        opacity: 0, // Specify the starting opacity for the box animation
    }
);

tl.from(
    text,
    {
        duration: 1, // Specify the duration for the text animation
        opacity: 0, // Specify the starting opacity for the text animation
    }
);
}

