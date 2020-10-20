import React from 'react'
const faker = window.faker

const CommentDetail = ()=> {
  return (
    <div className="comment">
            <a href="/" className="avatar"
            >
              <img alt="avatar" src = {faker.image.avatar()}/>
            </a>
            <div className="content">
              <a href="/" alt="author">Rakesh</a>
              <div className= "metadata">
               <span className="date">Today ate 6.00pm</span>
              </div>
              <div className="text">
                Nice blog post
              </div>
            </div>
         </div>
  )
}
export default CommentDetail