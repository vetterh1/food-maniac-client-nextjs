
const InfoPaperCss = () => (
    <div className="info">
        <input className="alert-state" id="info-input" type="checkbox" />
        <div className="alert alert-primary dismissible">
            Info area
            <label className="btn-close" htmlFor="info-input">X</label>
        </div>
    </div>
)

const Info = () => (
    <div className="alert alert-primary alert-dismissible fade show" role="alert">
        Info area
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
)

export default Info
