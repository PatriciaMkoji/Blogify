import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const API = () => {
  return (
    <div>
      <h1>API Documentation</h1>
      <SwaggerUI url="/api-docs" />
    </div>
  );
};

export default API;
