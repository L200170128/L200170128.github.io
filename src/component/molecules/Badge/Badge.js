import Badge from 'react-bootstrap/Badge';
import PropTypes from "prop-types";

export const GBadge = ({ BadgeContent }) => {
    return (
        <div>
            <Badge bg="success">
                { BadgeContent }
            </Badge>{' '}
            <Badge bg="danger">
                { BadgeContent }
            </Badge>{' '}
            <Badge bg="warning">
                { BadgeContent }
            </Badge>{' '}
            <Badge bg="info">
                { BadgeContent }
            </Badge>
        </div>
    )
}

GBadge.propTypes = {
    BadgeContent: PropTypes.string
};

GBadge.defaultProps = {
    BadgeContent: "Status"
};

export default GBadge;