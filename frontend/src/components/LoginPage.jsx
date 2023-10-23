import React from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import {
  Form, Container, Row, Col, Card, Button, FloatingLabel,
} from 'react-bootstrap';
import * as Yup from 'yup';
import totoImage from '../assets/avatar.jpg';

const LoginPage = () => {
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required(t('InvalidUsernameOrPassword')),
      password: Yup.string().required(t('InvalidUsernameOrPassword')),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik.values);

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
                <Form.Group className="form-floating mb-3">
                  <FloatingLabel controlId="username" label={t('username')}>
                    <Form.Control
                      onChange={formik.handleChange}
                      value={formik.values.username}
                      type="text"
                      className="form-control"
                      name="username"
                      placeholder={t('username')}
                      autoComplete="username"
                      required
                    />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group className="form-floating mb-4">
                  <FloatingLabel controlId="password" label={t('password')}>
                    <Form.Control
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder={t('password')}
                      autoComplete="current-password"
                      required
                    />
                  </FloatingLabel>
                  <Form.Control.Feedback className="invalid-tooltip">{t('InvalidUsernameOrPassword')}</Form.Control.Feedback>
                </Form.Group>
                <Button type="submit" variant="outline-primary" className="w-100 mb-3">{t('enter')}</Button>
              </Form>
            </Card.Body>
            <Card.Footer className="p-4">
              <div className="text-center">
                <span>{t('notHaveAccount')}</span>
                {' '}
                <a href="/signup">{t('signUp')}</a>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
