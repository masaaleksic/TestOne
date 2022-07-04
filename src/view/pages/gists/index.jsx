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

const Gists = (props) => {
    const { gists, loader, currentPage } = props;
    useEffect(() => {
        props.fetchGists();
    }, [currentPage]);
    return (
        <>
            <Header />
            {
                loader ?
                    <Loader /> :
                    gists &&
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
            }
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        gists: state.gists?.gists,
        loader: state.ui.loader,
        currentPage: state.pagination.page,
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