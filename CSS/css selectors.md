# CSS Selector

1. Element Selector
- .class
- #id
- *descendant selector*: 
`.list-2 .item` (format element with class "item" in class "list-2") - also apply to child of class item
- *child selector*: 
`.list-2 > .item` (find in list-2, CHILD with class "item")
- *adjacent sibling selector*: 
`.list-2 .item-1 + .item` (only select ONE next sibling)
- *general siblign selector*: 
`.list-2 .item-1 ~ .item` (select ALL next sibling)
  
2. Attribute Selector
- input[type='text'] {
  border: 1px solid red;
}
- google css selector cheat sheet
- https://gist.github.com/magicznyleszek/809a69dd05e1d5f12d01
