import React from 'react';

export function sendEmail(data) {
  const apiEndpoint = 'contact';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response);
    })
    .catch((err) => {
      alert(err);
    });
}
