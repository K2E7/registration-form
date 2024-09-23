// src/components/Transactions.tsx
import React from 'react';
import { List, Avatar } from 'antd';
import './Transactions.less';
import { Transaction } from '../types';
import { CreditCardOutlined } from '@ant-design/icons';

const data: Transaction[] = [
  {
    title: 'Payment to John Doe',
    amount: -150.0,
    date: 'Oct 12, 2024',
  },
  {
    title: 'Salary from Company XYZ',
    amount: 3000.0,
    date: 'Oct 10, 2024',
  },
  // Add more transactions as needed
];

const Transactions: React.FC = () => (
  <div className="transactions">
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item className="transaction-item">
          <List.Item.Meta
            avatar={
              <Avatar
                icon={<CreditCardOutlined />}
                style={{ backgroundColor: '#0A1F44' }}
              />
            }
            title={<a href="#">{item.title}</a>}
            description={item.date}
          />
          <div style={{ color: item.amount < 0 ? '#f5222d' : '#52c41a' }}>
            {item.amount < 0 ? '-' : '+'}${Math.abs(item.amount).toFixed(2)}
          </div>
        </List.Item>
      )}
    />
  </div>
);

export default Transactions;