import axios from 'axios';
import { useFormik } from 'formik';
import { useEffect, useRef, useState } from 'react';
import { Button, Card, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import signupImage from '../assets/regAvatar.jpg';
import { getRoutes } from '../routes';
import { logIn } from '../services/authSlice';
import { signupSchema } from '../utils/validations';

export const SignUpPage = () => {
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userAlreadyExist, setUserAlreadyExist] = useState(false);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: signupSchema(t),
    onSubmit: async ({ username, password }) => {
      try {
        const { data } = await axios.post(getRoutes.signUpPath(), { username, password });
        dispatch(logIn(data));
        navigate(getRoutes.chatPagePath());
      } catch (err) {
        if (err.isAxiosError && err.response.status === 409) {
          setUserAlreadyExist(true);
          return;
        }
        formik.setSubmitting(false);
        console.error(err);
      }
    },
  });

  return (
    <Container className='h-100' fluid>
      <Row className='justify-content-center align-content-center h-100'>
        <Col xs={12} md={8} xxl={6}>
          <Card className='shadow-sm'>
            <Card.Body className='d-flex flex-column flex-md-row justify-content-around align-items-center p-5'>
              <div>
                <img className='rounded-circle' src={signupImage} />
              </div>

              <Form className='w-50' onSubmit={formik.handleSubmit}>
                <h1 className='text-center mb-4'>{t('signUp')}</h1>
                <FloatingLabel className='mb-3' label={t('signUpPage.username')} controlId='username'>
                  <Form.Control
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    disabled={formik.isSubmitting}
                    isInvalid={!!(formik.touched.username && formik.errors.username) || userAlreadyExist}
                    ref={inputRef}
                    name='username'
                    autoComplete='username'
                    type='text'
                    placeholder={t('signUpPage.username')}
                    required
                  />
                  <Form.Control.Feedback type='invalid' tooltip>
                    {formik.errors.username}
                  </Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel className='mb-3' label={t('password')} controlId='password'>
                  <Form.Control
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={!!(formik.touched.password && formik.errors.password) || userAlreadyExist}
                    disabled={formik.isSubmitting}
                    name='password'
                    autoComplete='password'
                    type='password'
                    placeholder={t('password')}
                    required
                  />
                  <Form.Control.Feedback type='invalid' tooltip>
                    {formik.errors.password}
                  </Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel className='mb-4' label={t('signUpPage.confirmPassword')} controlId='confirmPassword'>
                  <Form.Control
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={!!(formik.touched.confirmPassword && formik.errors.confirmPassword) || userAlreadyExist}
                    disabled={formik.isSubmitting}
                    name='confirmPassword'
                    autoComplete='new-password'
                    type='password'
                    placeholder={t('signUpPage.confirmPassword')}
                    required
                  />
                  <Form.Control.Feedback type='invalid' tooltip>
                    {userAlreadyExist ? t('signUpPage.userAlreadyExist') : formik.errors.confirmPassword}
                  </Form.Control.Feedback>
                </FloatingLabel>

                <Button disabled={formik.isSubmitting} type='submit' className='w-100' variant='outline-primary'>
                  {t('signUpPage.signUp')}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
