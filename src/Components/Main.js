import React from 'react';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Single from './Single';

export default class Main extends React.Component {

  render() {
    return (<div>
      <h1>
        <Link to='/' >Photogram</Link>
      </h1>
      <Route exact path="/" render={() => (
        <div>
          <PhotoWall {...this.props} />
        </div>
      )} />

      <Route path="/AddPhoto" render={({ history }) => (
        <AddPhoto {...this.props} onHistory={history} />
      )} />

      <Route path="/single/:id" render={(params) => (
        <Single {...this.props} {...params}/>
      )} />
    </div>);
  }
}
