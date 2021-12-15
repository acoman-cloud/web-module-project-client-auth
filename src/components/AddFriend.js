import React from 'react';
import axios from 'axios';

class AddFriend extends React.Component {
	state={
		friend: {
			name: '',
			email: '',
		}
	}
	handleChange = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    });
  };

	addFriend = e =>{
		e.preventDefault();
		const token = localStorage.getItem("token");
		axios.post('http://localhost:9000/api/friends', this.state.friend, {
      headers: {
        authorization: token,
      }
    })
			.then(esp=>{
				console.log(esp.data);
			})
			.catch(err=>{
				console.error(err);
			})
	}

	render() {
    return (
      <div>
        <form onSubmit={this.addFriend} className='addFriend' >
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <button>Add Friend</button>
        </form>
      </div>
    );
  }
}

export default AddFriend;