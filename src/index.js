import React from 'react';
import ReactDOM from 'react-dom';
import spidey1 from './image/spidey-1.jpg';
import spidey2 from './image/spidey-2.png';
import spidey3 from './image/spidey-3.jpg';
import SingleComment from './SingleComment';
import UserCard from './UserCard';

const App = () => {
    return(
        <div className='ui comments'>
            <UserCard>
              <SingleComment
                name='Peter 1'
                date='Today at 4:30PM'
                comment='Wow! This is amazing. React is amazing!'
                picture={spidey1}
              />
            </UserCard>
            <UserCard>
              <SingleComment
                name='Peter 2'
                date='Today at 9:30PM'
                comment='Hello! Good day :)'
                picture={spidey2}
              />
            </UserCard>
            <UserCard>
              <SingleComment
                name='Peter 3'
                date='Today at 10:00AM'
                comment='ReactJS is indeed incredible!'
                picture={spidey3}
              />
            </UserCard>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
