import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Rect extends React.Component {
  constructor(){
         super();

         this.state = {
                        color_black: true
                      }
    }
  handleClick()
  {
    this.state = {
                    color_black: !this.state.color_black
                 }
  }

  render()
  {
    let bgColor = this.state.color_black ? "black" : "white"

    return(
      <div>
          <div className="rcorners4">
            <button style={{backgroundColor: bgColor}} onClick={this.handleClick.bind(this)}>Button</button>
              <div className="desc">{this.props.data}</div>
                  <div className="desc1">{this.props.points}</div>
          </div>      
      </div>
  );
  }
}
class Square extends React.Component {
  
  renderRect(i,data,points)
  {
    return <Rect data={data} points={points}
     /> 
  }
  render()
  {
    return(
              <div>
                <div className="sidenav1">
                    <h1>Bs</h1>
                </div>
                <div>
                  <div className="div1">
                    <u><b>The Book SHelf</b></u>
                  </div>
                  <div className="div3">
                    J K Rowling 
                   
                  </div>    
                </div> 
                  <div className="div2">

                    {this.renderRect(0,"How you doing",4.7)}
                    {this.renderRect(1,"How you doing",4.7)}
                    {this.renderRect(2,"How you doing",4.7)}
                    {this.renderRect(3,"How you doing",4.7)}
                  </div> 
                  <div className="div4">
                      Sidney  Sheldon 
                  </div> 
                  <div className="div2">
                    {this.renderRect(0,"How you doing",4.7)}
                    {this.renderRect(1,"How you doing",4.7)}
                    {this.renderRect(2,"How you doing",4.7)}
                    {this.renderRect(3,"How you doing",4.7)}
                  </div> 
              </div>


      );
  }


}
ReactDOM.render(
  <Square />,
  document.getElementById('root')
);



