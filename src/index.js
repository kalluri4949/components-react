import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
const faker = window.faker;

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="rakesh"
          timeAgo="Today at 6PM"
          comment="Nice rakesh"
          image={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="kalluri"
          timeAgo="Today at 8PM"
          comment="Awesome Kalluri"
          image={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="reddy"
          timeAgo="Today at 9PM"
          comment="Well Played Reddy"
          image={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};
ReactDom.render(<App />, document.querySelector('#root'));
