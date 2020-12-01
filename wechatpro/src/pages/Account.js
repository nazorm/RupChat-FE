import React from 'react';
import './Account.scss';
import {Link} from 'react-router-dom'

class Account extends React.Component {
	constructor() {
		super();
		this.state = {
      serviceUsers : [],
    };
	}

	componentDidMount() {
		let accessToken = localStorage.getItem('accessToken');
		fetch('https://wechatpro.herokuapp.com/api/chat/', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${accessToken}`,
			},
		})
			.then((resp) => resp.json())
			.then((d) => {
        this.setState({
          serviceUsers : d.data,
		})
			});
	}

	render() {

   const friend = this.state.serviceUsers.map((d)=>{
     return (
      <Link to={`/pages/chatroom/${d.id}`} className="friend" key = {d.id}>
      <h1>{d.username}</h1>
      <span className={d.online? 'isOnline': ''}></span>
    </Link>
     )
   })
  

		return (
			<section className="account-section">
				<main className="account-content">
					<section className="friends">
            {friend}
					</section>
					<section className="chatArea"></section>
				</main>
			</section>
		);
	}
}

export default Account;
