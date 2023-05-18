
import React, { Component } from 'react'
import { Link } from 'react-router-dom' ;


export class Dashboard extends Component {
  render() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={`user/1`}>friends1</Link>
                </li>
                <li>
                    <Link to={`user/2`}>Your Friend</Link>
                </li>
                <li>
                    <Link to={`user/3`}>Your Friend</Link>
                </li>
                <li>
                    <Link to={`user/4`}>Your Friend</Link>
                </li>
                <li>
                    <Link to={`user/5`}>Your Friend</Link>
                </li>
                <li>
                    <Link to={`user/6`}>Your Friend</Link>
                </li>
                <li>
                    <Link to={`user/7`}>Your Friend</Link>
                </li>
                <li>
                    <Link to={`user/8`}>Your Friend</Link>
                </li>
                <li>
                    <Link to={`user/9`}>Your Friend</Link>
                </li>
                <li>
                    <Link to={`user/10`}>Your Friend</Link>
                </li>
            </ul>
      </nav>

    )
  }
}

export default Dashboard