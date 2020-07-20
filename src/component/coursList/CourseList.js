import React , {Component , Fragment} from 'react';

class Courselist extends Component {

state = {
  isEdit : false 
}
editecourse

updateitems = (e) =>{
  e.preventDefault();
  this.props.editecourse(this.props.index, this.input.value);
  this.togglestate();
}


/// function update form   
renderupdateform = () =>{
  return (
    <form onSubmit={this.updateitems}>
      <input type="text"ref={(v) => {this.input = v}} defaultValue={this.props.details.name}/>
      <button>update course</button>
    </form>
  )
}

/// switch togglestate 
togglestate = () =>{
  let {isEdit} = this.state;
  this.setState({
    isEdit:!isEdit
  })
}


rendercourse = () =>{
  return(
     <li>
       <span>{this.props.details.name}</span>
       <button onClick={() => {this.togglestate()}}>edit course</button>
       <button onClick={() => {this.props.deletcourse(this.props.index)}}>delet</button>

     </li>
  )
}

 render(){
  let {isEdit} = this.state;
return(
   <Fragment >
     {isEdit ? this.renderupdateform(): this.rendercourse()}
    
   </Fragment>
);

 }
}
export default Courselist ;