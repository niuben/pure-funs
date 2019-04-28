export var easeout = function (x) {
    return 1 - Math.pow(1 - x, 2);
  };
  
export var easein = function (x) {
    return Math.pow(x, 2);
};

export var easeinout = function (x) {
    return x - Math.sin(x * 2 * Math.PI) / (2 * Math.PI);
};
  