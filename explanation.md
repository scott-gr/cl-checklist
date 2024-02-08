## Tools
- Next.js, a JavaScript framework built on React. It uses server-side rendering and includes numerous performance optimizations.
- CSS modules, controls CSS scope to just the component folder that contains it.

## Structure
- Reusable parts of code have been split into seperate components: Category, Task, Checklist, Button, etc. 
- These components have properties that can be changed whenever you use them, so the content can be changed dynamically.
- Back End data can be imported just at the highest level, the root page file in this project. Components are imported to the page file and the properties are applied there.

## Design
- To demonstrate how it might look on a web page, the checklist is placed as a widget taking up 
- Checklist is a familiar table design, using css flexbox and grid
- Fonts and colors follow brand guidelines.