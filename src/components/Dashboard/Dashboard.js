
import React, { Component } from 'react'
import { Link } from 'react-router-dom' ;

import '../styles/dashboard.css';


export class Dashboard extends Component {
  render() {
    return (
        <nav>
            <h1>Users Gallery</h1>
            <ul className="dashboard-list">
                <li className='dashboard-item'>
                    <Link to={`user/1`}>Leanne Graham</Link>
                </li>
                <li className='dashboard-item'>
                    <Link to={`user/2`}>Ervin Howell</Link>
                </li>
                <li className='dashboard-item'>
                    <Link to={`user/3`}>Clementine Bauch</Link>
                </li>
                <li className='dashboard-item'>
                    <Link to={`user/4`}>Patricia Lebsack</Link>
                </li>
                <li className='dashboard-item'>
                    <Link to={`user/5`}>Chelsey Dietrich</Link>
                </li>
                <li className='dashboard-item'>
                    <Link to={`user/6`}>Mrs. Dennis Schulist</Link>
                </li>
                <li className='dashboard-item'>
                    <Link to={`user/7`}>Kurtis Weissnat"</Link>
                </li>
                <li className='dashboard-item'>
                    <Link to={`user/8`}>Nicholas Runolfsdottir V</Link>
                </li>
                <li className='dashboard-item'>
                    <Link to={`user/9`}>Glenna Reicher</Link>
                </li>
                <li className='dashboard-item'>
                    <Link to={`user/10`}>Clementina DuBuque</Link>
                </li>
            </ul>
      </nav>

    )
  }
}

export default Dashboard