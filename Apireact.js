import React, { Component } from 'react'
import axios from 'axios'

export class Apireact extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
        }
    

    }
    componentDidMount(){
          axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(response =>{
              console.log(response.data)
              this.setState({posts: response.data})
          })
          .catch(error =>{
              console.log(error)
           })

    }
   // componentDidCatch(){}
   // componentWillUnmount(){}
    // componentWillUpdate() {}
    
    
    render() {
        const {posts} =this.state
        return (
            <div>
                list of posts
                {
                    posts.length ?
                    posts.map(posts => <div key={posts.id}>{posts.title}</div>):
                        null
                }
            </div>
        )
    }
}

export default Apireact
