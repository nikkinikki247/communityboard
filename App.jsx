/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'
import ReactDOM from 'react-dom/client'
import Card from './assets/Card.jsx'
import './assets/Card.css'
import dimage from 'dimage.jpeg'


const App = () => {

  return (
    <div className="App">
        <h1>Dallas Voluteer Locations</h1>
        <table>
          <tbody>
            <tr>
              <td>
              <Card location="Bonton Farms" page="https://bontonfarms.org/"/>
              </td>
              <td>
              <Card location="CitySquare" page="https://www.citysquare.org/volunteer"/>
              </td>
              <td>
              <Card location="Cornerstone Kitchen" page="http://www.cornerstonedallas.org/kitchen"/>
              </td>
            </tr>
            <tr>
              <td> 
                <Card location="Harvest Project" page="https://www.harvestprojectfoodrescue.org/"/>
              </td>
              <td>
                <Card location="North Texas Food Bank" page="https://ntfb.org/"/>
              </td>
              <td>
              <Card location="F.A.R.M" page="https://www.farmingveterans.org/"/>
              </td>
            </tr>
            <tr>
              <td>
              <Card location="Grace Bridge" page="https://www.gracebridge.us/food-bank"/>
              </td>
              <td>
              <Card location="Grow North Texas" page="https://grownorthtexas.org/"/>
              </td>
              <td>
              <Card location="The Storehouse of Collin County" page="https://www.thestorehousecc.org/volunteer/"/>
              </td>
            </tr>
            <tr>
              <td>
              <Card location="Elmwood Farm" page="https://www.elmwoodfarm.co/"/>
              </td>
              <td>
              <Card location="Metrocrest" page="https://www.metrocrestservices.org/index.php"/>
              </td>
              <td>
              <Card location="Forerunner" page="https://www.forerunnermentoring.com/home"/>
              </td>
            </tr>
          
          </tbody>
        </table>
    </div>

  )
}

export default App
