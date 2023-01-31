import PropTypes from "prop-types";

const Breadcrumbs = ({ items = [] }) => {
    return (
        <>
        <nav aria-label="breadcrumb" className="container">
            <ol className="breadcrumb">
                {items.length > 0 && items.map((item, idx) => (
                    <li key={item} className={`breadcrumb-item ${ idx === items.length - 1 ? "active" : "" }`}  >
                        {idx === items.length - 1 && item}
                        {idx !== items.length - 1 && (
                            <a href="#">{item}</a>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
        </>
    )
}

Breadcrumbs.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string)
};

Breadcrumbs.defaultProps = {
    items: ["Root", "Level 1", "Level 2", "Level 3"],
};

export default Breadcrumbs;