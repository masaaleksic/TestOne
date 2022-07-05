import ApiConstants from "../../../constants/api";
import errorImg from "./img/error.png";
import "./scss/index.scss";

const ErrorPage = (props) => {
    const { status } = props;

    const errorSentence = (status) => {
        switch(status) {
            case ApiConstants.STATUS_FORBIDDEN:
                return "403 - Forbidden: Access is denied.";
            case ApiConstants.STATUS_NOT_MODIFIED:
                return "304 - Not Modified: Access is denied.";
            case ApiConstants.STATUS_VALIDATION_FAILED:
                return "422 - Validation Failed: Access is denied.";
            default:
                return "Unexpected error";
        }
    }

    return(
        <div className="d-flex flex-column align-items-center justify-content-center mt-5">            
            <img src={errorImg} alt="errorImg" />
            <div className="page-layout">
                {errorSentence(status)}
            </div>
        </div>
    );
}

export default ErrorPage;