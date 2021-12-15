import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Logout = (props)=> {
  // const { push } = props.history;
  const { push } = useHistory();
	const token = localStorage.getItem('token');
	
	useEffect(()=> {
    axios.post('http://localhost:9000/api/logout', {},{
        headers: {
          authorization: token
        }
			})
      .then(esp => {
				localStorage.removeItem('token');
        push('http://localhost:9000/api/login');
      });
    }, []);

    return(<div></div>);
}

export default Logout;