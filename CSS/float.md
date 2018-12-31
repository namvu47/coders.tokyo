# Float
1. <a href = "https://css-tricks.com/all-about-floats/"></a>
2. clear: left | right | both (don't let any element float on the left | right | or both sides)
3. ` wrapper::after {
  content: "";
  display: block;
  clear: both; 
  height: 0px;
}
`
