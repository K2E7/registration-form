import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

// Define the types for the form values
interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

// Define the Yup validation schema
const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const RegistrationForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  // Handle form submission
  const onSubmit = async (data: IFormInputs) => {
    try {
      // Make a POST request to your registration API
      const response = await axios.post('https://example.com/api/register', data);
      console.log('Registration successful:', response.data);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Register</h2>
      <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        {/* First Name */}
        <Form.Item
          label="First Name"
          validateStatus={errors.firstName ? 'error' : ''}
          help={errors.firstName?.message}
        >
          <Input
            {...register('firstName')}
            prefix={<UserOutlined />}
            placeholder="First Name"
          />
        </Form.Item>

        {/* Last Name */}
        <Form.Item
          label="Last Name"
          validateStatus={errors.lastName ? 'error' : ''}
          help={errors.lastName?.message}
        >
          <Input
            {...register('lastName')}
            prefix={<UserOutlined />}
            placeholder="Last Name"
          />
        </Form.Item>

        {/* Email */}
        <Form.Item
          label="Email"
          validateStatus={errors.email ? 'error' : ''}
          help={errors.email?.message}
        >
          <Input
            {...register('email')}
            prefix={<MailOutlined />}
            placeholder="Email"
          />
        </Form.Item>

        {/* Password */}
        <Form.Item
          label="Password"
          validateStatus={errors.password ? 'error' : ''}
          help={errors.password?.message}
        >
          <Input.Password
            {...register('password')}
            prefix={<LockOutlined />}
            placeholder="Password"
          />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegistrationForm;