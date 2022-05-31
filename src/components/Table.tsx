import React from 'react';
import { RedirectButton } from './RedirectButton';

const Table: React.FC = () => {
  return (
    <table className="text-xs sm:text-base md:text-lg lg:text-xl overflow-scroll w-full md:w-8/12 lg:w-8/12 xl:w-6/12 ">
      <thead>
        <tr>
          <th className="rounded-l-2xl bg-dark-850 px-4  ">Page</th>
          <th className="bg-dark-850 mx-2 text-xs ">Description</th>
          <th className="rounded-r-2xl bg-dark-850 px-4 text-xs">Access</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b">
          <td>Login</td>
          <td className="px-10">Recreate Login Page of Tripsy</td>
          <td>
            <RedirectButton name="Login Page" redirectsTo="/login" />
          </td>
        </tr>
        <tr className="border-b">
          <td>Geoprocessing</td>
          <td>Geo Estado Nutricional do Brasil</td>
          <td>
            <RedirectButton name="New Layout" redirectsTo="/new" />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
