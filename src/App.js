import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      age: '',
      color: '',
      breed: '',
      gender: '',
      weight: '',
      formComplete: false
    }
  }


  render() {
    return (
      <div className="App">
        <div className='left-div'>
          <h2>Pawtastic</h2>
          <h4>We offer a range of preventative and wellness services - including exams, vaccinations, nutrition, and more. We can also treat your pet should they become sick from illness or injury. At this time, we do not see critical and/or emergency care, though there are several clinics we work with throughout the area that can provide these services if needed.</h4>
          <h3>Wellness Exams</h3>
          <h4>Preventative medicine is the key to keeping your pet happy and healthy. We believe that all pets should undergo a comprehensive wellness exam annually, which focuses on all body systems and helps us identify health conditions in your pet before they become difficult and expensive to treat. These exams enable us to create an overall picture of your pet's health status, combining aspects of your pet's at home routine and history with physical exam findings to create straightforward recommendations for your pet's continued wellbeing.</h4>
        </div>

        <div className='right-div'>
          <h2>Schedule a Consultation for Your Pup</h2>
          <form className='pup-form'>
            <label>Name</label>
            <input 
              type='name'
              placeholder='Ace'
              value={this.state.name}
            />
            <label>Age</label>
            <input 
              type='number'
              // placeholder='Golden Retriever'
              value={this.state.age}
            />
            <label>Color</label>
            <input 
              type='text'
              placeholder='Black with white spots'
              value={this.state.color}
            />
            <label>Breed</label>
            <input 
              type='text'
              placeholder='Golden Retriever'
              value={this.state.breed}
            />
            <label>Weight</label>
            <input 
              type='name'
              placeholder='Rough estimate in lbs'
              value={this.state.weight}
            />
            <label>Gender</label>
            <input 
              type='text'
              placeholder='Male'
              value={this.state.gender}
            />
            <button
              type='submit'
              >Submit</button>

          </form>
        </div>
      </div>
    );
  }
}

export default App;
