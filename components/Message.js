
const MessagePaperCss = () => (
    <div className="message">
        <input className="alert-state" id="message-input" type="checkbox" />
        <div className="alert alert-success dismissible">
            Message area (success, warning, danger...)
            <label className="btn-close" htmlFor="message-input">X</label>
        </div>
    </div>
)

const Message = () => (
    <div className="alert alert-success alert-dismissible fade show" role="alert">
        Message area (success, warning, danger...)
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
)

export default Message
