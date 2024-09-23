// src/components/Dashboard.tsx
import React from 'react';
import { Card, Row, Col, Statistic, Button } from 'antd';
import './Dashboard.less';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
          <Card className="dashboard-card">
            <Statistic
              title="Total Balance"
              value={12500.75}
              precision={2}
              prefix="$"
              valueStyle={{ color: '#fff' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card className="dashboard-card">
            <Statistic
              title="Monthly Expenses"
              value={2300.45}
              precision={2}
              prefix="$"
              valueStyle={{ color: '#fff' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={8}>
          <Card className="dashboard-card">
            <Button type="primary" size="large" block>
              Transfer Funds
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;