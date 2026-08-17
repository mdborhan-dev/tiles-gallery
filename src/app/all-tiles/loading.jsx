import { PropagateLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="contaienr flex justify-center items-center my-auto h-[80vh]">
            <PropagateLoader color="#c88651"/>
        </div>
    );
};

export default Loading;