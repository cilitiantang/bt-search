import React from 'react';
import Layout from '@/pages/components/_layout';
import { Input } from 'antd';

const { Search } = Input;

const page = () => {
  return (
    <Layout hiddenSearch>
      <div style={{ width: '50%', textAlign: 'center', margin: '90px auto' }}>
        <p
          style={{
            fontSize: '30px',
            color: 'rgba(0,0,0,.8)',
            fontWeight: 'lighter',
          }}
        >
          搜索你想搜索的任何资源 😁
        </p>
        <Search
          onSearch={value => console.log(value)}
          enterButton
          size="large"
        />
      </div>
    </Layout>
  );
};

export default page;
