import React from 'react'
import './ChatRoom.scss'



class ChatRoom extends React.Component{
    constructor(){
        super()
        this.state = {
         user : "",
         newMessage : "",
        }
        this.sendMessage = this.sendMessage.bind(this)
        this.getMessage = this.getMessage.bind(this)
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
    getMessage(e){
      e.preventDefault()
      this.setState({
        newMessage : e.target.value,
      })
    }
    sendMessage(){
        document.querySelector('.chat-input').value = ''
        if(this.state.newMessage === ""){
            return
        }else{
            alert(this.state.newMessage)
        }
        
    }
    render(){
        return(
            <div className = 'chat-area'>
                <p className = 'chat-begining-notice'>This is the beinning of your chat.</p>
                <div></div>
                <div className='chat-input-area'>
                <input type = 'text' placeholder = 'Type a message' className = 'chat-input' onChange = {this.getMessage}/>
                <button className = 'chat-send-btn' onClick = {this.sendMessage}>send</button>
                </div>
            </div>
        )
    }
}


export default ChatRoom