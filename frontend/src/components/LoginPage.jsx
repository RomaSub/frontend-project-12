import React from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import {
  Form, Container, Row, Col, Card, Button,
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
      username: Yup.string(),
      password: Yup.string(),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik);
  return (
    <Container className="h-100" fluid>
      <Row className="row justify-content-center align-content-center h-100">
        <Col className="col-12 col-md-8 col-xxl-6">
          <Card className="shadow-sm">
            <Card.Body className="row p-5">
              <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                <img src={totoImage} className="rounded-circle" alt="Войти" />
              </div>
              <Form onSubmit={formik.handleSubmit} className="col-12 col-md-6 mt-3 mt-mb-0">
                <h1 className="text-center mb-4">{t('enter')}</h1>
                <Form.Group className="form-floating mb-3">
                  <Form.Control
                    className="form-control"
                    autoComplete="username"
                    placeholder="Ваш ник"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    id="username"
                    name="username"
                  />
                </Form.Group>
                <Form.Group className="form-floating mb-3">
                  <Form.Control
                    className="form-control"
                    autoComplete="password"
                    placeholder="Пароль"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    id="password"
                    name="password"
                  />
                </Form.Group>
                <Form.Group>
                  <Button className="w-100 mb-3 btn btn-outline-primary">{t('enter')}</Button>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
