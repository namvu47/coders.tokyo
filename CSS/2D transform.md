# CSS Transition

### 1. 2D Transform
- translate (X,Y)
- rotate (30deg)
- scale (0.5)
- skew
- matrix

#### References
https://tympanus.net/codrops/2013/06/18/caption-hover-effects/

### 2. Transition
- https://easings.net/

`.button {
	text-decoration: none;
	font-family: Arial, sans-serif;
	color: #333;
	padding: 8px 16px;
	background-color: #DDD;
	display: inline-block;
	transition: all 600ms cubic-bezier(0.215, 0.61, 0.355, 1);
}

.button:hover {
	background-color: #a00808;
	color: #FFF;
}`
