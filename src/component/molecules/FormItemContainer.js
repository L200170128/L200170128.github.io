import { Form, InputGroup } from "react-bootstrap";
import { FormSpinner } from "component/atoms/FormSpinner";
import classNames from "classnames";
import AnimateHeight from "component/atoms/AnimateHeight";

const FormItemContainer = ({
                       name,
                       title,
                       isRequired,
                       isLoading,
                       children,
                       ...props
                   }) => {
    return <Form.Group className="mb-4"
                       controlId={name}>

        <Form.Label>
            {title}
            {isRequired && <span className="form-label__mandatory">*</span>}
            {isLoading && <FormSpinner />}
        </Form.Label>
            {children}

    </Form.Group>
}

export default FormItemContainer;