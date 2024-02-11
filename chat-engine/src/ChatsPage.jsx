import {PrettyChatWindow} from "react-chat-engine-pretty"

const ChatsPage = (props)=>
{
    
    return (
        <div style={{height : "100vh"}}>
            <PrettyChatWindow 
                projectId='3b70fc09-6cce-4d98-9234-cf245d47693f'
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