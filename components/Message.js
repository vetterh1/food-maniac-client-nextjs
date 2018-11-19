
const Message = () => (
    <div className="message">
        <input className="alert-state" id="message-input" type="checkbox" />
        <div className="alert alert-success dismissible">
            Message area (success, warning, danger...)
            <label class="btn-close" for="message-input">X</label>
        </div>
    </div>
)

export default Message
