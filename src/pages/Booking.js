import React from 'react'
import "./booking.css"
import AboutImg from "../assets/images/seminar-hall/1.jpeg";
import StartFirebase from "../Components/firebaseConfig";
import{ref,set,get,update,remove,child} from "firebase/database";
/*const Booking = () => {
  return (
    <div className="mt-5 container">     
    <img src={AboutImg} className="mt-5" />  
      <form>
        <div className="row">
          <div className="col-md-6 form-group mt-3 d-flex">
            <label>Date of Booking</label>
            <input type="date" name="name" className="form-control" id="date"  required/>
          </div>
          <div className="col-md-3 form-group mt-3 mt-3 d-flex">
            <label>Start time</label>
            <input type="time" className="form-control" name="startTime" id="startTime" placeholder="Enter Start time" required/>        
          </div>
          <div className="col-md-3 form-group mt-3 mt-3 d-flex">
            <label>End time</label>
            <input type="time" className="form-control" name="EndTime" id="EndTime" placeholder="Enter End time" required/>        
          </div>
          <div className="col-md-6 form-group mt-3 mt-3 d-flex">
            <label>Event of Booking</label>
            <input type="text" className="form-control" name="Event" id="Event" placeholder="Enter Event" required/>        
          </div>
          <div className="col-md-6 form-group mt-3 mt-3 d-flex">
            <label>Booking Type :</label>
            <select id="Booking Type" className="form-control" >
            <option value="form-control"placeholder="Booking Type" required>Full Day</option>
            <option value="form-control"placeholder="Booking Type" required>Half Day</option>
            </select>
             </div>
          <div className="col-md-6 form-group mt-3 mt-3 d-flex">
            <label>Name of Dept</label>
            <input type="text" className="form-control" name="EndTime" id="EndTime" placeholder="Enter Department" required/>        
          </div>
          <div className="col-md-6 form-group mt-3 mt-3 d-flex">
            <label>Name of SeminarHall</label>
            <input type="text" className="form-control" name="EndTime" id="EndTime" placeholder="Enter SeminarHall Name" required/>        
          </div>
          <div className='btn'>
            <button className='logbtn' >Submit</button>
          </div>
        </div>        
      </form>
  </div>
    )
}

export default Booking*/

export class Booking extends React.Component{
  constructor(props){
      super(props);
      this.state={
          db:'',
          username: '',
          dateofbooking: '',
          starttime: '',
          endtime: '',
          departmentname:'',
          seminarhall:''
      }
      this.interface=this.interface.bind(this);
  }
  componentDidMount(){
      this.setState({
          db:StartFirebase()
      });
  }

  render(){
      return(
          <>
          <label>Enter username</label>
          <input type='text' id="userbox" value={this.state.username} 
          onChange={e =>{this.setState({username:e.target.value});}}/>
          <br/><br/>

          <label>Enter DATEOFBOOING</label>
          <input type='date' id="datebox" value={this.state.dateofbooking} 
          onChange={e =>{this.setState({dateofbooking:e.target.value});}}/>
          <br/><br/>

          <label>Enter START TIME</label>
          <input type='time' id="timebox" value={this.state.starttime} 
          onChange={e =>{this.setState({starttime:e.target.value});}}/>
          <br/><br/>

          <label>Enter END TIME</label>
          <input type='time' id="endbox" value={this.state.endtime} 
          onChange={e =>{this.setState({endtime:e.target.value});}}/>
          <br/><br/>

          <label>Enter DEPARTMENT NAME</label>
          <input type='text' id="deptbox" value={this.state.departmentname} 
          onChange={e =>{this.setState({departmentname:e.target.value});}}/>
          <br/><br/>
          <label>Enter SEMINARHALL</label>
          <input type='text' id="seminarbox" value={this.state.seminarhall} 
          onChange={e =>{this.setState({seminarhall:e.target.value});}}/>
          <br/><br/>

          <button id="addBtn" onClick={this.interface}>Add Data</button>
          <button id="updateBtn" onClick={this.interface}>update Data</button>
          <button id="deleteBtn" onClick={this.interface}>delete Data</button>
          <button id="selectBtn" onClick={this.interface}>get data from DB</button>
          </>
      )
  }

  interface(event){
      const id=event.target.id;
      if(id=='addBtn'){
          this.insertData();
      }

      else if(id=='updateBtn'){
          this.updateData();
      }

      else if(id=='deleteBtn'){
          this.deleteData();
      }

      else if(id=='selectBtn'){
          this.selectData();
      }
  }

  
  getAllInputs(){
      return{
          username:this.state.username,
          dateofbooking:this.state.dateofbooking,
          //phone:Number(this.state.phonenumber),
          starttime:this.state.starttime,
          endtime:this.state.endtime,
          departmentname:this.state.departmentname,
          seminarhall:this.state.seminarhall
      }
  }
  insertData(){
      const db=this.state.db;
      const data=this.getAllInputs();

      set(ref(db,'Customer/'+data.username),
      {
        dateofbooking:data.dateofbooking,
        starttime:data.starttime,
        endtime:data.endtime,
        departmentname:data.departmentname,
        seminarhall:data.seminarhall
      })
      .then(()=>{alert('data was added suncessfulyy')})
      .catch((error)=>{alert("there was an error, details:"+error)});
      
  }

  updateData(){
      const db=this.state.db;
      const data=this.getAllInputs();

      update(ref(db,'Customer/'+data.username),
      {
        dateofbooking:data.dateofbooking,
        starttime:data.starttime,
        endtime:data.endtime,
        departmentname:data.departmentname,
        seminarhall:data.seminarhall
      })
      .then(()=>{alert('data was updated suncessfulyy')})
      .catch((error)=>{alert("there was an error, details:"+error)});
      
  }

  deleteData(){
      const db=this.state.db;
      const username=this.getAllInputs().username;

      remove(ref(db,'Customer/'+username) )
      .then(()=>{alert('data was deleted suncessfulyy')})
      .catch((error)=>{alert("there was an error, details:"+error)});
      
  }

  selectData(){
      const dbref=ref(this.state.db);
      const username=this.getAllInputs().username;

      get(child(dbref,'Customer/'+ username)).then((snapshot)=>{
          if(snapshot.exists()){
              this.setState({
                  
                dateofbooking: snapshot.val().dateofbooking,
                starttime: snapshot.val().starttime,
                endtime: snapshot.val().endtime,
                departmentname: snapshot.val().departmentname,
                seminarhall: snapshot.val().seminarhall
              })
          }

          else{
              alert("no data found");
          }
      })
      .catch((error)=>{alert("there was an error,details:"+error)});

  }



}