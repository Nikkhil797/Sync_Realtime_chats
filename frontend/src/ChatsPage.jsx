import {MultiChatSocket , MultiChatWindow , useMultiChatLogic} from 'react-chat-engine-advanced'
const ChatsPage = (props) =>{
    const ChatProps = useMultiChatLogic(
        "e69f4bf6-1e62-46f3-bdb3-1325aa007834",
        props.user.username, 
        props.user.secret
    );
    
    return <div style={{height : '100vh'}}>
        <MultiChatSocket {...ChatProps}/>
        <MultiChatWindow {...ChatProps} style={{height : "100%"}}/>
    </div>

}

export default ChatsPage;