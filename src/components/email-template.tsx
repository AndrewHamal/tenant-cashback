import * as React from 'react';

export const EmailTemplate: React.FC = (data: any) => (
  <div>
    <h1>Deposit details</h1>

    <div>
        <div style={{display: 'flex', gap: 10}}>
            <p><b>How much was the deposit you paid?* (£): </b></p>
            <p> {data?.deposit}</p>
        </div>
        <div style={{display: 'flex', gap: 10}}>
            <p><b>Name: </b></p>
            <p> {data?.first_name} {data?.last_name}</p>
        </div>

        <div style={{display: 'flex', gap: 10}}>
            <p><b>Phone Number: </b></p>
            <p> {data?.phone}</p>
        </div>

        {data?.phone_2 &&  <div style={{display: 'flex', gap: 10}}><p><b>Another Phone Number: </b></p>
        <p> {data?.phone_2}</p></div>}

        <div style={{display: 'flex', gap: 10}}>
            <p><b>Email: </b></p>
            <p> {data?.email}</p>
        </div>
    </div>
  </div>
);