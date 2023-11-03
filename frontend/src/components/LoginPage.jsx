import axios from 'axios';
import React, {
  useEffect, useRef, useState,
} from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import {
  Form, Container, Row, Col, Card, Button, FloatingLabel,
} from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import routes from '../routes.js';
import totoImage from '../assets/avatar.jpg';

const LoginPage = () => {
  const [authFailed, setAuthFailed] = useState(false);
  const { t } = useTranslation();
  const inputRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .typeError(t('InvalidUsernameOrPassword'))
        .required(t('InvalidUsernameOrPassword')),
      password: Yup.string()
        .typeError(t('InvalidUsernameOrPassword'))
        .required(t('InvalidUsernameOrPassword')),
    }),
    onSubmit: async (values) => {
      setAuthFailed(false);

      try {
        const { data } = await axios.post(routes.loginPath(), values);
        localStorage.setItem('userId', JSON.stringify(data));
        const { from } = location.state;
        navigate(from);
      } catch (err) {
        if (err.isAxiosError && err.response === 401) {
          setAuthFailed(true);
          inputRef.current.select();
          return;
        }
        throw err;
      }
    },
  });
  console.log(formik.values);
  console.log(localStorage);

  return (
    <Container className="h-100" fluid>
      <Row className="justify-content-center align-content-center h-100">
        <Col className="col-12 col-md-8 col-xxl-6">
          <Card className="shadow-sm">
            <Card.Body className="row p-5">
              <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                <img src={totoImage} className="rounded-circle" alt="Войти" />
              </div>
              <Form onSubmit={formik.handleSubmit} className="col-12 col-md-6 mt-3 mt-mb-0">
                <h1 className="text-center mb-4">{t('enter')}</h1>
                <fieldset disabled={formik.isSubmitting}>

                  <Form.Group className="form-floating mb-3">
                    <FloatingLabel controlId="username" label={t('username')}>
                      <Form.Control
                        onChange={formik.handleChange}
                        value={formik.values.username}
                        type="text"
                        onBlur={formik.handleBlur}
                        disabled={formik.isSubmitting}
                        name="username"
                        placeholder="username"
                        autoComplete="username"
                        isInvalid={authFailed}
                        ref={inputRef}
                        required
                      />
                    </FloatingLabel>
                  </Form.Group>
                  <Form.Group className="form-floating mb-4">
                    <FloatingLabel controlId="password" label={t('password')}>
                      <Form.Control
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                        disabled={formik.isSubmitting}
                        name="password"
                        placeholder="password"
                        autoComplete="current-password"
                        isInvalid={authFailed}
                        required
                      />
                    </FloatingLabel>
                    <Form.Control.Feedback type="invalid" className="invalid-feedback">{t('InvalidUsernameOrPassword')}</Form.Control.Feedback>
                  </Form.Group>
                  <Button type="submit" disabled={formik.isSubmitting} variant="outline-primary" className="w-100 mb-3">{t('enter')}</Button>
                </fieldset>
              </Form>
            </Card.Body>
            <Card.Footer className="p-4">
              <div className="text-center">
                <span>{t('notHaveAccount')}</span>
                {' '}
                <a href={routes.signupPagePath}>{t('signUp')}</a>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
