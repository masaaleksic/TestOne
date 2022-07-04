import {connect} from "react-redux";
import bindActionCreators from "react-redux/es/utils/bindActionCreators";
import { setPage } from "../../../app/store/pagination/actions";
import "./scss/index.scss";

const Pagination = (props) => {
    const { loader, currentPage, lastPage } = props;
    const notInital = currentPage > 2 && currentPage < lastPage - 1;
    const isFirstPage = currentPage === 1;
    const isSecondPage = currentPage === 2;
    const isLastPage = currentPage === lastPage;
    const isNextToLast = currentPage === lastPage - 1;
    console.log(lastPage);
    return(
        <>
        {
            !loader &&
            <div className="pagination-layout d-flex align-items-center justify-content-end pe-4">
                <span className={`pe-1 pointer ${isFirstPage && 'selected'}`} onClick={()=> props.setPage(1)}>1</span>
                <span className={`pe-1 pointer ${isSecondPage && 'selected'}`} onClick={()=> props.setPage(2)}>2</span>
                <span className="pe-1 pointer">...</span>
                {
                    notInital &&
                    <span className="pe-1 pointer selected" onClick={()=> props.setPage(currentPage)}>{currentPage} ...</span>
                }
                <span className={`pe-1 pointer ${isNextToLast && 'selected'}`} onClick={()=> props.setPage(lastPage - 1)}>{lastPage - 1}</span>
                <span className={`pe-1 pointer ${isLastPage && 'selected'}`} onClick={()=> props.setPage(lastPage)}>{lastPage}</span> 
                <div className={`pe-1 pointer ${isFirstPage && 'disabled'}`} onClick={()=> props.setPage(currentPage-1)}>levo</div>
                <div className={`pointer ${isLastPage && 'disabled'}`} onClick={()=> props.setPage(currentPage+1)}>desno</div>
            </div>
        }
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        loader: state.ui.loader,
        currentPage: state.pagination.page,
        lastPage: state.pagination.last,
        nextPage: state.pagination?.next,

    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        setPage,
    }, dispatch
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pagination);