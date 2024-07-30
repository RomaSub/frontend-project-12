import { Button, Card, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import loginImage from '../assets/enterAvatar.jpeg';
import { getRoutes } from '../routes';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../services/authSlice';

export const LoginPage = () => {
  const dispatch = useDispatch()
  const [authFailed, setAuthFailed] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: async values => {
      try {
        const { data } = await axios.post(getRoutes.loginPath(), values);
        const {username, token} = data
        dispatch(logIn({username, token}))
        navigate(getRoutes.chatPagePath())
      } catch (err) {
        formik.setSubmitting(false);
        if (err.isAxiosError && err.response.status === 401) {
          setAuthFailed(true);
          return;
        }
      }
    }
  });

  return (
    <Container className='h-100' fluid>
      <Row className='justify-content-center align-content-center h-100'>
        <Col xs={12} xxl={6} md={8}>
          <Card className='shadow-sm'>
            <Card.Body className='row p-5'>
              <Col xs={12} md={6} className='d-flex align-items-center justify-content-center'>
                <img className='rounded-circle' src={loginImage} />
              </Col>

              <Form onSubmit={formik.handleSubmit} className='col-12 col-md-6 mt-3 mt-mb-0'>
                <h1 className='text-center mb-4'>{t('loginPage.enter')}</h1>
                <FloatingLabel className='mb-3' label={t('loginPage.yourUsername')}>
                  <Form.Control
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    disabled={formik.isSubmitting}
                    onBlur={formik.handleBlur}
                    isInvalid={authFailed}
                    type='text'
                    name='username'
                    autoComplete='username'
                    required
                    id='username'
                    placeholder={t('loginPage.yourUsername')}
                  />
                </FloatingLabel>
                <FloatingLabel className='mb-4' label={t('password')}>
                  <Form.Control
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    disabled={formik.isSubmitting}
                    isInvalid={authFailed}
                    onBlur={formik.handleBlur}
                    type='password'
                    name='password'
                    autoComplete='password'
                    required
                    id='password'
                    placeholder={t('password')}
                  />
                  <Form.Control.Feedback type='invalid' tooltip>
                    {t('loginPage.noValidUsername')}
                  </Form.Control.Feedback>
                </FloatingLabel>

                <Button type='submit' disabled={formik.isSubmitting} className='w-100 mb-3' variant='outline-primary'>
                  {t('loginPage.enter')}
                </Button>
              </Form>
            </Card.Body>

            <Card.Footer className='p-4'>
              {' '}
              <div className='text-center'>
                <span>{t('loginPage.noAccount')}</span> <NavLink to={getRoutes.signUpPagePath()}>{t('signUp')}</NavLink>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
