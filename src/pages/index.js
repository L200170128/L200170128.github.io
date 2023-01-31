import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Accordion, Col, Form as BsForm, Row } from 'react-bootstrap';
import { Envelope, InfoCircle, Person, Telephone, TypeH1 } from 'react-bootstrap-icons';
import PublicTemplate from 'component/templates/PublicTemplate';
import FormItem from 'component/molecules/FormItem';
import Form from 'component/atoms/Form';
import Button from 'component/atoms/Button';
import FormItemContainer from 'component/molecules/FormItemContainer';
import FormText from 'component/molecules/FormText';
import Card from 'react-bootstrap/Card';
import Alerts from 'component/molecules/Alert/alert';
import AlertVarian from 'component/molecules/Alert/alertVarian';
import Breadcrumbs from 'component/molecules/Breadcurm/Breadcurm';
import CardFile, { GCard } from 'component/molecules/Card/gCard';
import GBadge from 'component/molecules/Badge/Badge';
import GBadgeLB from 'component/molecules/Badge/BadgeVarian';
import GCloseButton from 'component/molecules/CloseButton/CloseButton';
import Bottomsheet from 'component/molecules/Dropdown/Dropdown';
import GImage from 'component/molecules/image/image';
import BasicList from 'component/molecules/ListGroup/List';
import BasicModal from 'component/molecules/Modal/BasicModal';
import BasicNavs from 'component/molecules/Navs/BasicNavs/BasicNav';
import BasicNavbar from 'component/molecules/Navbar/BasicNavbar';
import BasicPagination from 'component/molecules/Pagination/BasicPagination';
import BasicOverlay from 'component/molecules/Overlay/BasicOverlay';
import BasicCounter from 'component/molecules/Counter/BasicCounter';
import BasicContextual from 'component/molecules/ContextualMenu/BasicContextual';
import BasicRadio from 'component/molecules/Inpiut/Radio/BasicRadio';
import BasicCheck from 'component/molecules/Inpiut/Checkbox/BasicCheck';
import TabNav from 'component/molecules/Navs/TabNavs/TabNav';
import BasicAccordion from 'component/molecules/Accordion/accordion';
import BasicProgress from 'component/molecules/Chart/Progress/Progress';
import BasicTable from 'component/molecules/Table/BasicTable';
import ModalBasic from 'component/molecules/Modal/ModalBasic/ModalBasic';
import ModalForm from 'component/molecules/Modal/ModalForm/BasicForm';
import BasicCarousel from 'component/molecules/Carousel/Carousel';
import VariantProgress from 'component/molecules/Chart/Progress/ProgressVarian/VarianProgress';
// import Accordion from 'component/molecules/Accordion/accordion';

const pageTitle = 'New Pegadaian UI KIT';

const Home = () => {

    const useFormRHF = useForm({
                                   mode: 'onChange',
                                   reValidateMode: 'onChange'
                               });
    const {
        register, getValues, reset, setValue,
        formState: {
            isSubmitting,
            isDirty,
            isValid,
            errors
        }
    } = useFormRHF;

    const initState = {
        username: 'Loid forger',
        email: 'loid@forger.com',
        phone: '0888 7777 8888',
        name: '',
        description: '',
        option: '2',
        header: "Header Content"
    };

    const [initialValues, setInitialValues] = useState({});

    useEffect(() => {
        setTimeout(() => {
            setInitialValues(initState);
        }, 1000);
    }, []);

    return <PublicTemplate pageTitle={pageTitle}>
        <h5 className='my-3'>{pageTitle}</h5>
        <Row>
            <Col className='mb-3' lg={6} md={6} xs={12}>
                <Card>
                    <Card.Header>
                        <Card.Title>
                            <h5>Button</h5>
                        </Card.Title>
                    </Card.Header>
                    <Card.Body>
                        {[
                            {disabled: false},
                            {
                                disabled: false,
                                leftIcon: true
                            },
                            {
                                disabled: false,
                                rightIcon: true
                            },
                            {disabled: true},
                            {
                                disabled: true,
                                leftIcon: true
                            },
                            {
                                disabled: true,
                                rightIcon: true
                            },
                            ].map((object, index) => {
                                return <div className="mb-3">
                                    <Button variant="primary" ripple="light" className="me-2 mb-2" disabled={object?.disabled} leftIcon={object?.leftIcon && <Envelope />} rightIcon={object?.rightIcon && <Telephone />}>
                                        Primary
                                    </Button>
                                    <Button variant="secondary" ripple="dark" className="me-2 mb-2"  disabled={object?.disabled} leftIcon={object?.leftIcon && <Envelope />} rightIcon={object?.rightIcon && <Telephone />}>
                                        Secondary
                                    </Button>
                                    <Button variant="tertiary" ripple="dark" className="me-2 mb-2" disabled={object?.disabled} leftIcon={object?.leftIcon && <Envelope />} rightIcon={object?.rightIcon && <Telephone />}>
                                        Tertiary
                                    </Button>
                                    <Button variant="neutral" ripple="dark" className="me-2 mb-2" disabled={object?.disabled} leftIcon={object?.leftIcon && <Envelope />} rightIcon={object?.rightIcon && <Telephone />}>
                                        Neutral
                                    </Button>
                                </div>;
                            })}
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mb-3' lg={6} md={6} xs={12}>
                <Card>
                    <Card.Header>
                        <h5>Form Group</h5>
                    </Card.Header>
                    <Card.Body>
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
                                <Col>
                                    <FormItemContainer name="option" title="Option">
                                        <BsForm.Select name="option" {...register('option', {required: 'Required!'})}>
                                            <option value="">Please select</option>
                                            <option value={1}>Option 1</option>
                                            <option value={2}>Option 2</option>
                                            <option value={3}>Option 3</option>
                                        </BsForm.Select>
                                        <FormText   type="invalid"
                                                    content={errors?.option?.message}
                                                    show={errors?.option?.message !== undefined}
                                                    triggerChange={errors?.option?.message} />
                                        <FormText content="Option helper" />
                                    </FormItemContainer>
                                    <FormItem   name="username"
                                                title="Username"
                                                placeholder="Placeholder Username"
                                                leftIcon={<Person />}
                                                registerProps={{
                                                required: 'Username is required'
                                            }} />
                                    <FormItem   name="email"
                                                title="Email"
                                                placeholder="Placeholder Email"
                                                leftIcon={<Envelope />}
                                                helperText={['Example: gmail@yohan.com']}
                                                registerProps={{
                                                    required: 'Email is required',
                                                    pattern: {
                                                        value: /^\S+@\S+\.\S+$/,
                                                        message: 'Email is not valid'
                                                    }
                                                  }} />
                                    <FormItem type="tel"
                                            name="phone"
                                            title="Phone"
                                            placeholder="Phone text"
                                            leftIcon={<Telephone />}
                                            rightIcon={<InfoCircle className="small" title="Phone number contains at least 10 characters" />}
                                            registerProps={{
                                                required: 'Phone is required',
                                                pattern: { value: /[0-9]/, 
                                                message: 'Phone is not valid',
                                                },
                                                minLength: {
                                                    value: 10,
                                                    message: 'Min length is 10',
                                                },
                                                onChange: (event) => {
                                                    const newValue = event.target.value.replace(/\D/, '');
                                                    setValue('phone', newValue);
                                                }
                                            }} />
                                    <FormItem name="name"
                                            title="Name"
                                            placeholder="Name text"
                                            leftIcon={<Person />}
                                            rightAction={<a href="#!" onClick={() => setValue('name', 'Mr. ' + getValues('name'), {shouldDirty: true})}>Action</a>}
                                            registerProps={{required: 'Name is required'}} />
                                    <FormItem name="description"
                                            title="Description"
                                            placeholder="Description text"
                                            as="textarea"
                                            leftIcon={<Person />}
                                            registerProps={{required: 'Description is required'}} />
                                    <FormItem type="password"
                                            name="password"
                                            title="Password"
                                            placeholder="Placeholder Password"
                                            registerProps={{
                                                required: 'Password is required'
                                            }} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} lg={7}>
                                    <Button type="submit" className="me-2" disabled={!isDirty || isSubmitting}>{isSubmitting ? 'Submitting..' : 'Submit'} </Button>
                                    <Button variant="secondary"  ripple="dark"  onClick={() => reset(initState)}>{initState ? 'Default' : 'Reset'}</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mb-3' lg={6} md={6} xs={12}>
                <Card>
                    <Card.Header>
                        Alert
                    </Card.Header>
                    <Card.Body>
                        <Alerts className="mb-3" variant="danger"> Lorem ipsum dolor sit amet, consectetur adipiscing.Lorem ipsum dolor sit amet, consectetur adipiscing.Lorem ipsum dolor sit amet </Alerts>
                        <AlertVarian className="mb-3" variant="info"> Lorem ipsum dolor sit amet, consectetur adipiscing.Lorem ipsum dolor sit amet, consectetur adipiscing.Lorem ipsum dolor sit amet </AlertVarian>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mb-3' lg={6} md={6} xs={12}>
                <Card>
                    <Card.Header>
                        Accordion
                    </Card.Header>
                    <Card.Body>
                        <BasicAccordion title='Heading Ones' descriptions="This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow." />
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mb-3' lg={6} md={6} xs={12}>
                <Card>
                    <Card.Header>
                        Breadcrumbs
                    </Card.Header>
                    <Card.Body>
                        <Breadcrumbs />
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mb-3' lg={6} md={6} xs={12}>
                <Card>
                    <Card.Header>
                        Badge
                    </Card.Header>
                    <Card.Body>
                        <GBadge />
                        <GBadgeLB bgVarian="warning" ContentLeft='cek' ContentRight={
                                <svg width="16" height="16" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10 5C9.21299 5 8.57269 5.71144 8.57269 6.5859C8.57269 7.02714 8.73572 7.42685 8.99836 7.71459C8.77096 8.88605 7.83126 9.76659 6.70994 9.76659C6.01727 9.76659 5.39389 9.43061 4.96491 8.89762C5.20633 8.61345 5.3545 8.23048 5.3545 7.80978C5.3545 6.93532 4.71432 6.22388 3.92731 6.22388C3.1403 6.22388 2.5 6.93532 2.5 7.80978C2.5 8.56765 2.98095 9.20308 3.62153 9.35904C3.77344 10.7517 4.095 12.5092 4.77554 13.7044V15.1681C4.77554 15.4392 4.9733 15.6589 5.21729 15.6589H10.0001H14.7827C15.0267 15.6589 15.2245 15.4392 15.2245 15.1681V13.7045C15.905 12.5093 16.2265 10.7516 16.3784 9.35893C17.019 9.203 17.5 8.56757 17.5 7.80978C17.5 6.93532 16.8597 6.22388 16.0727 6.22388C15.2857 6.22388 14.6455 6.93532 14.6455 7.80978C14.6455 8.23044 14.7937 8.61339 15.0351 8.89755C14.6061 9.43059 13.9828 9.76659 13.2901 9.76659C12.1688 9.76659 11.229 8.88613 11.0016 7.71475C11.1986 7.49892 11.3396 7.22009 11.3977 6.90798C11.4171 6.80395 11.4273 6.69622 11.4273 6.5859C11.4273 6.32977 11.3724 6.08763 11.2749 5.87325C11.0397 5.35575 10.5566 5.00005 10.0001 5H10Z" fill="#E07E26"/>
                                </svg>
                            } 
                        />
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mb-3' lg={6} md={6} xs={12}>
                <Card>
                    <Card.Header>
                        Card
                    </Card.Header>
                    <Card.Body>
                        <GCard title='Example' body='This is an  example' buttonValue='Test Button Value' />
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mb-3' lg={6} md={6} xs={12}>
                <Card>
                    <Card.Header>
                        Close Button & Varian
                    </Card.Header>
                    <Card.Body>
                        <GCloseButton />
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mb-3' lg={6} md={6} xs={12}>
                <Card>
                    <Card.Header>
                        Dropdown / Bottomsheet
                    </Card.Header>
                    <Card.Body>
                        <Bottomsheet />
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mb-3' lg={6} md={6} xs={12}>
                <Card>
                    <Card.Header>
                        Image
                    </Card.Header>
                    <Card.Body>
                        <GImage />
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mb-3' lg={6} md={6} xs={12}>
                <Card>
                    <Card.Header>
                        Basic List Group
                    </Card.Header>
                    <Card.Body>
                        <BasicList activeIndex={0} />
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mb-3' lg={6} md={6} xs={12}>
                <Card>
                    <Card.Header>
                        Basic Modal
                    </Card.Header>
                    <Card.Body>
                        <BasicModal />
                        <ModalBasic className="ms-2" ButtonTrigger="Modal Basic" />
                        <ModalForm />
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mb-3' lg={6} md={6} xs={12}>
                <Card>
                    <Card.Header>
                        Basic Nav
                    </Card.Header>
                    <Card.Body>
                        <BasicNavs />
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mb-3' lg={6} md={6} xs={12}>
                <Card>
                    <Card.Header>
                        Basic Pagination
                    </Card.Header>
                    <Card.Body>
                        <BasicPagination />
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mb-3' lg={12} md={12} xs={12}>
                <Card>
                    <Card.Header>
                        Basic Navbar
                    </Card.Header>
                    <Card.Body>
                        <BasicNavbar />
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mb-3' lg={6} md={6} xs={12}>
                <Card>
                    <Card.Header>
                        Basic Overlay / Info Tips
                    </Card.Header>
                    <Card.Body>
                         <BasicOverlay />
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mb-3' lg={6} md={6} xs={12}>
                <Card>
                    <Card.Header>
                        Basic Counter
                    </Card.Header>
                    <Card.Body>
                        <BasicCounter />
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mb-3' lg={6} md={6} xs={12}>
                <Card>
                    <Card.Header>
                        Basic Contextual Menu
                    </Card.Header>
                    <Card.Body>
                        <BasicContextual />
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mb-3' lg={6} md={6} xs={12}>
                <Card>
                    <Card.Header>
                        Tab Nav
                    </Card.Header>
                    <Card.Body>
                        <TabNav />
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mb-3' lg={6} md={6} xs={12}>
                <Card>
                    <Card.Header>
                        Basic Radio
                    </Card.Header>
                    <Card.Body>
                        <BasicRadio
                            items={[
                                {
                                    value: "1",
                                    label: "Pilihan Satu",
                                    checked: true,
                                },
                                {
                                    value: "3",
                                    label: "Disabled",
                                    disabled: true
                                },
                            ]}
                        />
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mb-3' lg={6} md={6} xs={12}>
                <Card>
                    <Card.Header>
                        Basic Checkbox
                    </Card.Header>
                    <Card.Body>
                        <BasicCheck
                            items={[
                                {
                                    value: "1",
                                    label: "Pilihan Satu",
                                    checked: true,
                                },
                                {
                                    value: "3",
                                    label: "Disabled",
                                    disabled: true
                                },
                            ]}
                        />
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mb-3' lg={6} md={6} xs={12}>
                <Card>
                    <Card.Header>
                        Progress Bar
                    </Card.Header>
                    <Card.Body>
                        <BasicProgress />
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mb-3' lg={6} md={6} xs={12}>
                <Card>
                    <Card.Header>
                        Varian Progress Bar
                    </Card.Header>
                    <Card.Body>
                        <VariantProgress />
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mb-3' lg={6} md={6} xs={12}>
                <Card>
                    <Card.Header>
                        Basic Table
                    </Card.Header>
                    <Card.Body>
                        <BasicTable />
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mb-3' lg={6} md={6} xs={12}>
                <Card>
                    <Card.Header>
                        Name Component
                    </Card.Header>
                    <Card.Body>
                        Code Component
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mb-3' lg={12} md={12} xs={12}>
                <Card>
                    <Card.Header>
                        Basic Carousel
                    </Card.Header>
                    <Card.Body>
                        <BasicCarousel />
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mb-3' lg={6} md={6} xs={12}>
                <Card>
                    <Card.Header>
                        Name Component
                    </Card.Header>
                    <Card.Body>
                        Code Component
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mb-3' lg={6} md={6} xs={12}>
                <Card>
                    <Card.Header>
                        Name Component
                    </Card.Header>
                    <Card.Body>
                        Code Component
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mb-3' lg={6} md={6} xs={12}>
                <Card>
                    <Card.Header>
                        Name Component
                    </Card.Header>
                    <Card.Body>
                        Code Component
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mb-3' lg={6} md={6} xs={12}>
                <Card>
                    <Card.Header>
                        Name Component
                    </Card.Header>
                    <Card.Body>
                        Code Component
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mb-3' lg={6} md={6} xs={12}>
                <Card>
                    <Card.Header>
                        Name Component
                    </Card.Header>
                    <Card.Body>
                        Code Component
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mb-3' lg={6} md={6} xs={12}>
                <Card>
                    <Card.Header>
                        Name Component
                    </Card.Header>
                    <Card.Body>
                        Code Component
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        
    </PublicTemplate>;
};

export default Home;