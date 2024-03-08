import {PrettyChatWindow} from "react-chat-engine-pretty"

const ChatsPage = (props)=>
{
    
    return (
        <div style={{height : "100vh"}}>
            <PrettyChatWindow 
                projectId='7386da20-fa83-46d1-9913-cbfa5180031c'
                // eslint-disable-next-line react/prop-types
                username={props.user.username}
                // eslint-disable-next-line react/prop-types
                secret={props.user.secret}
                style={{height : '100vh'}}
                />
        </div>
    )
}

export default ChatsPage;