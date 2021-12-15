import React from 'react';
import axios from 'axios';

class FriendsList extends React.Component {
  state = {
    friends: []
  };
	componentDidMount(){
		const token = localStorage.getItem("token");

		axios.get('http://localhost:9000/api/friends', {
      headers: {
        authorization: token,
      }
    })
			.then(esp=>{
				console.log(esp.data);
				this.setState({
					friends: esp.data,
				});
			})
			.catch(err=>{
				console.error(err);
			})
	}
	render() {
		return(
			<ol>
				{ this.state.friends.map(friend=>{
					return <li>{friend.name} {friend.email}</li>
				})}
			</ol>
		)
	}
}

export default FriendsList;