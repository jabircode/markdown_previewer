const initialState = `# Welcome to my React Markdown Previewer!
---
## This is a sub-heading...
---
### And here's some other cool stuff:
Heres some code, \`<div></div>\`.
\`\`\`
// this is multi-line code:
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
Let's make a text **bold** !
Or _italic_.
Or **_both!_**
And feel free to ~~cross stuff out~~.
There's also [links](https://reactjs.org/), and
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
          - That look like this.

1. And there are numbered lists too.
1. Use just one though!
1. And last but not least, 

Embedded images:

![ReactJS Logo](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K)
`;

class App extends React.Component {
  state = {
    text: initialState
  }
  
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  
  render(){
    const {text} = this.state
    const markdown = marked(text, {breaks: true})
    
    return (
      <div>
        <h3 className='text-center mt-4' id='title'>Markdown Previewer</h3>
        
        <div className='col mt-3'>
          <h5 className='text-center'
            ><i class="fa-solid fa-pen"></i> Editor:</h5>
          <textarea className='form-control shadow' id='editor' value={text} onChange={this.handleChange}/>
        </div>
        
        <div className='col mt-3' >
          <h5 className='text-center'><i class="fa-solid fa-eye"></i> Previewer:</h5>
          <div className='preview rounded form-control shadow' id='preview' dangerouslySetInnerHTML={{__html: markdown}} />     
      </div>
          </div>
    )
  }
  
}

ReactDOM.render(<App />, document.getElementById('app'))
