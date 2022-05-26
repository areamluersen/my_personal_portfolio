import React from 'react';
import { RedirectButton } from './RedirectButton';

const Table: React.FC = () => {
  return (
    <table className="table-auto text-2xl">
      <thead>
        <tr>
          <th className="rounded-l-2xl bg-dark-850 px-4">Page</th>
          <th className="bg-dark-850 mx-2">Description</th>
          <th className="rounded-r-2xl bg-dark-850 px-4">Access</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b">
          <td>Login</td>
          <td className="px-10">Recreate Login Page of Tripsy</td>
          <RedirectButton name="Login Page" redirectsTo="/login" />
        </tr>
        <tr className="border-b">
          <td>Geoprocessing</td>
          <td>Geo Estado Nutricional do Brasil</td>
          <td>Soon</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
