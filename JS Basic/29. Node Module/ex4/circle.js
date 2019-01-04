function circle(x, y, radius) {
	// body...
	this.x = x;
	this.y = y;
	this.radius = radius;
};

circle.prototype.isOverlapped = function (otherCircle) {
	var c1c2 = Math.sqrt((this.x - otherCircle.x) * (this.x - otherCircle.x) + (this.y - otherCircle.y) * (this.y - otherCircle.y));
	if (c1c2 === (this.radius + otherCircle.radius)) {
		return 0;
	} else if (c1c2 > (this.radius + otherCircle.radius)) {
		return 1;
	} else {
		return -1;
	}
};

module.exports = circle;