# Flexbox

1. **parent element**

`.container {
  display: flex;
  flex-direction: row | column | row-reverse | column-reverse;
}`

2. **Properties**
- *justify*: flex-start | flex-end | space-around | space-between (align items follow current flex direction)
- *align-items*: center | flex-start | flex-end | stretch | baseline (align items PERPENDICULAR to current flex direction)
- *flex-basis* (initial length of a flex item)
- *flex grow*: number (how much a flex item will grow relative to the rest of the flex items) (0 - no grow)
- *flex-shrink*: 1* (0 - no shrink)
- *order*: number (0*)
