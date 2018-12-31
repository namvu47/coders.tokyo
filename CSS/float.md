# Float: wrap text (like in magazine)
1. https://css-tricks.com/all-about-floats/
2. clear: left | right | both (don't let any element float on the left | right | or both sides)
3. ` wrapper::after {
  content: "";
  display: block;
  clear: both; 
  height: 0px;
}
`
