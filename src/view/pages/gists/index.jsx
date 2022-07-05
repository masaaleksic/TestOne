import { useEffect } from "react";
import Gist from "./gist";
import '../../assets/scss/index.scss';
import './scss/index.scss';
import { connect } from "react-redux";
import bindActionCreators from "react-redux/es/utils/bindActionCreators";
import { fetchGists } from "../../../app/store/gists/actions";
import Loader from "../loader";
import Header from "../../components/header";
import Pagination from "../../components/pagination";
import ApiConstants from "../../../constants/api";
import ErrorPage from "../errorPage";

const Gists = (props) => {
    const { gists, loader, currentPage, statusCode } = props;
    const isStatusOK = statusCode === ApiConstants.STATUS_OK;

    useEffect(() => {
        props.fetchGists();
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }, [currentPage]);
    return (
        <>
            <Header />
            {
                loader ?
                    <Loader /> :
                    gists && isStatusOK ?
                    <>
                        <div className='gists-layout'>
                            {
                                gists?.map((item, i) => {
                                    return (
                                        <Gist gistInfo={item} key={i} />
                                    );
                                })
                            }
                        </div>
                        <Pagination />
                    </>
                    : <ErrorPage status={statusCode}/>
            }
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        gists: state.gists?.gists,
        loader: state.ui.loader,
        currentPage: state.pagination.page,
        statusCode: state.status.statusCode
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        fetchGists,
    }, dispatch
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Gists);