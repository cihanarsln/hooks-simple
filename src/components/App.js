import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
    const [resource, setResource] = useState('posts');

    return(
        <div className="ui container">
            <UserList />
            <div className="large ui buttons" style={{marginTop: '10px'}}>
                <button className="ui button primary" onClick={() => setResource('posts')}>Posts</button>
                <button className="ui button positive" onClick={() => setResource('todos')} style={{marginLeft:'5px'}}>Todos</button>
            </div>
            <ResourceList resource={resource} />
        </div>
    );
};

export default App;