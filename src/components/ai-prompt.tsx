
export default function AIPrompt(props: {message: string | null, length: number}){
    const {message, length} = props;
    return(<div className="d-flex ai-dialog gap-2 p-4">
            <span>
                🔍 Query:
            </span>
            {
                message?message.split(" ").map((word, index) =>{
                    if (word[0] == '[') return (<span key={index} className="message-keyword">{word}</span>)
                    if (word[0] == "'") return (<span key={index} className="message-attribute">{word}</span>)
                return (<span>{word}</span>)
                }):"Get all Projects."
            }
            <span>Total Projects: {length}</span>
        </div>)
}