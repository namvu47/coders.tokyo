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
```
.album-item {
	width: 200px;
	height: 200px;
	background-image: url("https://loremflickr.com/320/240/dog");
	background-size: cover; 
	background-position: center;
}

.overlay {
	background-color: rgba(0, 0, 0, 0.5);
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: 0;
	transition: all 600ms cubic-bezier(0.215, 0.61, 0.355, 1);
}

.overlay img {
	height: 50%;
	transform: scale(0.7);
	transition: all 600ms cubic-bezier(0.215, 0.61, 0.355, 1)
}

.album-item:hover .overlay {
	opacity: 1;
}

.album-item:hover .overlay img {
	transform: scale(1);
}


```
