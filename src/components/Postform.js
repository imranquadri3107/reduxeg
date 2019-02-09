import React, { Component } from 'react'

 class Postform extends Component {
   // In newer version we need not declare constructor and can use es6 which doesn't loose the reference to 'this' keyword
   // We can skip binding the data 
   constructor(props){
         super(props);
         this.state = {
             title: '',
             body: '' 
         };

         this.onChange = this.onChange.bind(this);
         this.onSubmit = this.onSubmit.bind(this);
     }

     onChange(e){
         this.setState({[e.target.name]: e.target.value});
     }

     onSubmit(e){
         e.preventDefault();

         const post = {
             title: this.state.title,
             body: this.state.body
         }

         fetch('https://jsonplaceholder.typicode.com/posts', {
             method: 'POST',
             headers: {
                 'content-type': 'application/json'
             },
             body: JSON.stringify(post)
         })
         .then(res=> res.json())
         .then(data=> console.log(data));

     }

  render() {
      return (
        <div>
            <h1>Add Post</h1>
            <form onSubmit = {this.onSubmit}>
                <div>
                    <label>Title: </label><br/>
                    <input type = 'text' name = 'title' onChange = {this.onChange}value = {this.state.title}/>
                </div>
                <div>
                    <label>Body: </label><br/>
                    <textarea name  = 'body'onChange = {this.onChange} value = {this.state.body}/>
                </div>
                <br/>
                <div>
                    <button type = 'sumbit'>Sumbit</button>
                </div>
            </form>
            
        </div>
    )
  }
}

export default Postform
