import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="wrapper">
        <div className="wrapper-box">
            <h2>404</h2>
            <p>Oops, no such page exists</p>
            <Link to="/">home</Link>
        </div>
    </div>
  );
};

export default Error404;
