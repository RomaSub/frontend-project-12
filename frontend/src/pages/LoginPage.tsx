import { Button, Card, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import loginImage from '../assets/enterAvatar.jpeg';
import { getRoutes } from '../routes';

export const LoginPage = () => {
  return (
    <Container className='h-100' fluid>
      <Row className='justify-content-center align-content-center h-100'>
        <Col xs={12} xxl={6} md={8}>
          <Card className='shadow-sm'>
            <Card.Body className='row p-5'>
              <Col xs={12} md={6} className='d-flex align-items-center justify-content-center'>
                <img className='rounded-circle' src={loginImage} />
              </Col>

              <Form className='col-12 col-md-6 mt-3 mt-mb-0'>
                <h1 className='text-center mb-4'>Войти</h1>
                <FloatingLabel className='mb-3' label='Ваш ник'>
                  <Form.Control
                    type='text'
                    name='username'
                    autoComplete='username'
                    required
                    id='username'
                    placeholder='Ваш ник'
                  />
                </FloatingLabel>
                <FloatingLabel className='mb-4' label='Пароль'>
                  <Form.Control
                    type='password'
                    name='password'
                    autoComplete='password'
                    required
                    id='password'
                    placeholder='Пароль'
                  />
                </FloatingLabel>

                <Button type='submit' className='w-100 mb-3' variant='outline-primary'>
                  Войти
                </Button>
              </Form>
            </Card.Body>

            <Card.Footer className='p-4'>
              {' '}
              <div className='text-center'>
                <span>Нет аккаунта?</span> <NavLink to={getRoutes.signUpPagePath()}>Регистрация</NavLink>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
