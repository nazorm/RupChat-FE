import React from 'react'



class ChatRoom extends React.Component{
    constructor(){
        super()
        this.state = {
         user : "",
        }
    }
    componentDidMount(){
        console.log(this.props)
        let accessToken = localStorage.getItem('accessToken');
        fetch(`https://wechatpro.herokuapp.com/api/chat/history/messages?page=1&user_id=${this.props.match.params.id}`, {
           method : 'GET',
           headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
        },
        })
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}


export default ChatRoom