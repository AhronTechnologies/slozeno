document
  .querySelector("#modra")
  .addEventListener("mouseenter", () =>
    document.querySelector("#modra").classList.add("floating")
  );
document
  .querySelector("#modra")
  .addEventListener("mouseleave", () =>
    document.querySelector("#modra").classList.remove("floating")
  );
document
  .querySelector("#cervena")
  .addEventListener("mouseenter", () =>
    document.querySelector("#cervena").classList.add("floating")
  );
document
  .querySelector("#cervena")
  .addEventListener("mouseleave", () =>
    document.querySelector("#cervena").classList.remove("floating")
  );

function animateBlueCan() {}

function makeNewPosition($container) {
  // Get viewport dimensions (remove the dimension of the div)
  var h = $container.height() - 50;
  var w = $container.width() - 50;

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh, nw];
}

function animateDiv($target, speedModifier) {
  var newq = makeNewPosition($target.parent());
  var oldq = $target.offset();
  var speed = calcSpeed([oldq.top, oldq.left], newq);

  $target.animate(
    {
      top: newq[0],
      left: newq[1],
    },
    speed,
    function () {
      animateDiv($target);
    }
  );
}

function calcSpeed(prev, next, speedModifier) {
  var x = Math.abs(prev[1] - next[1]);
  var y = Math.abs(prev[0] - next[0]);

  var greatest = x > y ? x : y;

  var speedModifier = 0.1;

  var speed = Math.ceil(greatest / speedModifier);

  return speed;
}
