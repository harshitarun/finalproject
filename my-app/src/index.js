import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render()
  {
    

    return(
            <label>
          <b>{this.props.holder}</b>:
          <input type="text" value={this.state.value} onChange={this.handleChange} placeholder={this.props.holder}/>
            </label>
          );
  }
}
class Textarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render()
  {
    

    return(
           <label>
          <b>{this.props.holder}</b>:
          <textarea value={this.state.value} onChange={this.handleChange} placeholder={this.props.holder} />
        </label>
          );
  }
}
class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    
    event.preventDefault();
  }
  render()
  {
    

    return(
           <label>
              <b>{this.props.holder}</b>:
                  <select value={this.state.value} onChange={this.handleChange} multiple={this.props.multiple}>
                      <option value="All">All</option>
                        <option value="Computer Science And Engineering">Computer Science And Engineering</option>
                        <option value="Information Science">Information Science</option>
                        <option value="Electronics and Communication">Electronics And Communication</option>
                        <option value="Electronics and Electrical">Electronics and Electrical</option>
                        <option value="Mechanical Engineering">Mechanical Enineering</option>
                        <option value="Inustrial Production Engineering">Industrial Production Engineering</option>
                        <option value="Civil Engineering">Civil Engineering</option>
                        <option value="M-Tech">M-Tech</option>
              </select>    
        </label>
          );
  }
}
class Select1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render()
  {
    

    return(
           <label>
          <b>{this.props.holder}</b>:
           <select value={this.state.value} onChange={this.handleChange}>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>  
        </label>
          );
  }
}
class Square extends React.Component {
   handleSubmit(event) {
    
    event.preventDefault();
  }  
  render()
  {
    return(
              <div>
                <div className="header">
                  <img src="nie.jpg" alt="nie" />
                  <div> 
                    <h1>NIE PLACEMENT PORTAL</h1>
                  </div>    
                </div>
                <br /><br /><br /><br/><br/><br /><br />
                <div>
                  <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                  </ul>        
                </div>  
                <div>
                    <h2><center><strong> Fill the Following Company Details in the form </strong></center></h2>
                </div>
                <div class="company">
                  <form onSubmit={this.handleSubmit}>
                        <h2>Company Details</h2>
                              <Input holder="Company Name" />
                              <Textarea holder="About the Company" />
                        <h2>Job Details</h2>
                              <Input holder="Position" />
                              <Input holder="Job Location" />
                              <Input holder="Salary" />  
                        <h2>Job Eligibilty</h2>
                              <Select holder="branch" multiple={true} />
                              <Input holder="10th percentage" />
                              <Input holder="12th percentage" /> 
                              <Select1 holder="History(Cleared/Uncleared)" />
                              <Input holder="CGPA" />   
                              <input type="submit" value="Submit"/>   
                  </form>
                </div>                    
                </div>


      );
  }


}
ReactDOM.render(
  <Square />,
  document.getElementById('root')
);



