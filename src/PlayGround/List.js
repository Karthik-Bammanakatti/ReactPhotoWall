import React from 'react';

export default class List extends React.Component{
    render(){
      return (<ol>
                {this.props.tasks.map((x, i) => <li key = {i}> {x} </li>)}
              </ol>
        );
    }
  }