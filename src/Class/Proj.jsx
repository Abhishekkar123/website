import React, { Component } from 'react'
import Nav from './Nav'
import News from './News'
import { BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom'

export default class Proj extends Component {
  render() {
    return (
      <>
  <Router>
      <Nav/>
    <Routes>
    <Route path='/' element={<News pageSize={5} country="in" category="business" />} exact  />
    
    <Route path='/business' element={<News pageSize={5} country="in" category="business" />} />
            <Route path='/entertainment' element={<News pageSize={5} country="in" category="entertainment" />} />
            <Route path='/general' element={<News pageSize={5} country="in" category="general" />} />
            <Route path='/health' element={<News pageSize={5} country="in" category="health" />} />
            <Route path='/science' element={<News pageSize={5} country="in" category="science" />} />
            <Route path='/sport' element={<News pageSize={5} country="in" category="sports" />} />
            <Route path='/technology' element={<News pageSize={5} country="in" category="technology" />} />
    </Routes>
  </Router>
      </>
    )
  }
}
{/* <News pageSize={5} country="in" category="sports"/> */}