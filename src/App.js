import React , {Component} from 'react';
import Courselist from './component/coursList/CourseList';
import Formlist from './component/form/Form';

class App extends Component {
  state = {
    courses:[
      {name:'php'},
      {name:'html'},
      {name:'javascript'},
      {name:'react js '}
    ],
    current : "",
  }


//update course
updatecourse = (e) =>{
 this.setState({
   current: e.target.value
 })
}



//add course
addcourse =(e) =>{
  e.preventDefault();
 let  current= this.state.current;
 let courses = this.state.courses;
 courses.push({name:current});
  this.setState ({
    courses,
    current:''
  })
}



// deletcourse 

deletcourse = (index) => {
  let courses = this.state.courses;
  courses.splice(index ,1);
  this.setState ({
    courses
  })

}
/// editcourse 

editecourse = (index, value) =>{
  let courses = this.state.courses;
  let course = courses[index];
  course['name'] = value ;
  this.setState({
    courses
  })

}

//////////*///////////

 render(){
 const {courses} =  this.state;
 const courselist = courses.map((course , index ) => {
  return <Courselist details={course}  key={index} index={index}  updata={this.hand} deletcourse={this.deletcourse} editecourse={this.editecourse}/>
 });





return(
  <div className ="App">
 
    <ul>{courselist}</ul>
    <Formlist current={this.state.current} updatecourse = {this.updatecourse} addcourse={this.addcourse}/>

  </div>
);

 }
}
export default App ;