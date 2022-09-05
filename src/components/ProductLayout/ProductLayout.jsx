import React, { useState, useEffect } from 'react';

export default function ProductLayout ({ productos }) {
  return (
    <div>
      <div>
        <div>{JSON.stringify(productos)}</div>
      </div>
    </div>
  );
}