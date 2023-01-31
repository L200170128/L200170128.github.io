import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Col, Row } from 'react-bootstrap';
import { Person } from 'react-bootstrap-icons';
import PublicTemplate from 'component/templates/PublicTemplate';
import FormItem from 'component/molecules/FormItem';
import Form from 'component/atoms/Form';
import Button from 'component/atoms/Button/Button';


const pageTitle = 'Animation';

const Animation = () => {

    const useFormRHF = useForm({
                                   mode: 'onChange',
                                   reValidateMode: 'onChange'
                               });
    const {
        register,
        getValues,
        reset,
        setValue,
        formState: {
            isSubmitting,
            isDirty,
            isValid,
            errors
        }
    } = useFormRHF;

    const initState = {
        nama: null
    };

    const [initialValues, setInitialValues] = useState({});

    useEffect(() => {
        setTimeout(() => {
            setInitialValues(initState);
        }, 1000);
    }, []);

    return <PublicTemplate pageTitle={pageTitle}>
        <h1>{pageTitle}</h1>
        <Form useFormRHF={useFormRHF}
              defaultValues={initialValues}
              onSubmit={async (values) => {
                  console.log('Values:::', values);
                  console.log('Values:::', JSON.stringify(values));
                  await new Promise(resolve => setTimeout(resolve, 1000));
              }}
              onError={(error) => {
                  console.log('ERROR:::', error);

              }}
              onWatch={(watch) => {
                  const subscription = watch((value, {
                      name,
                      type
                  }) => {
                      // console.log("Watch:::", value, name, type);
                  });
                  return () => subscription.unsubscribe();
              }}>
            <Row>
                <Col xs={12}
                     lg={7}>
                    <FormItem name="nama"
                              title="Nama"
                              placeholder="Placeholder Nama"
                              leftIcon={<Person />}
                              registerProps={{
                                  required: 'Nama is required'
                              }} />
                </Col>
            </Row>
            <Row>
                <Col xs={12}
                     lg={7}>
                    <Button type="submit"
                            className="me-2"
                            disabled={!isDirty || isSubmitting}>{isSubmitting
                                                                 ? 'Submitting..'
                                                                 : 'Submit'}</Button>
                    <Button variant="secondary"
                            onClick={() => reset(initState)}>{initState
                                                              ? 'Default'
                                                              : 'Reset'}</Button>
                </Col>
            </Row>
        </Form>
    </PublicTemplate>;
};

export default Animation;