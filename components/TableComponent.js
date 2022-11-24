import { useState } from 'react';
import { BiSortAlt2 } from 'react-icons/bi';
const th = [
  ['name', 'Name'],
  ['city', 'City'],
  ['email', 'Email Address'],
  ['date', 'Joining Date'],
  ['role', 'Role'],
];

const TableComponent = ({ data, tableConfig }) => {
  const [sort, setSort] = useState(data);
  const [ascending, setAscending] = useState({
    name: 0,
    city: 0,
    email: 0,
    date: 0,
    role: 0,
  });

  const thFilter = th.filter((i) => tableConfig.some((j) => j.includes(i[0])));
  const x = tableConfig.filter((i) => i.includes('WithSort'));

  const handleClick = (action) => {
    if (action === 'name' && !ascending.name) {
      setSort(
        [...data].sort((a, b) => (a.person.name < b.person.name ? -1 : 1))
      );
      return setAscending({ name: 1, city: 0, email: 0, date: 0, role: 0 });
    }
    if (action === 'name' && ascending.name) {
      setSort(
        [...data].sort((a, b) => (a.person.name > b.person.name ? -1 : 1))
      );
      return setAscending({ name: 0, city: 0, email: 0, date: 0, role: 0 });
    }
    if (action === 'city' && !ascending.city) {
      setSort([...data].sort((a, b) => (a.city < b.city ? -1 : 1)));
      return setAscending({ name: 0, city: 1, email: 0, date: 0, role: 0 });
    }
    if (action === 'city' && ascending.city) {
      setSort([...data].sort((a, b) => (a.city > b.city ? -1 : 1)));
      return setAscending({ name: 0, city: 0, email: 0, date: 0, role: 0 });
    }
    if (action === 'email' && !ascending.email) {
      setSort([...data].sort((a, b) => (a.email < b.email ? -1 : 1)));
      return setAscending({ name: 0, city: 0, email: 1, date: 0, role: 0 });
    }
    if (action === 'email' && ascending.email) {
      setSort([...data].sort((a, b) => (a.email > b.email ? -1 : 1)));
      return setAscending({ name: 0, city: 0, email: 0, date: 0, role: 0 });
    }
    if (action === 'date' && !ascending.date) {
      setSort(
        [...data].sort((a, b) => {
          a = a.joiningDate.split('/').reverse().join();
          b = b.joiningDate.split('/').reverse().join();
          return a < b ? -1 : 1;
        })
      );
      return setAscending({ name: 0, city: 0, email: 0, date: 1, role: 0 });
    }
    if (action === 'date' && ascending.date) {
      setSort(
        [...data].sort((a, b) => {
          a = a.joiningDate.split('/').reverse().join();
          b = b.joiningDate.split('/').reverse().join();
          return a > b ? -1 : 1;
        })
      );
      return setAscending({ name: 0, city: 0, email: 0, date: 0, role: 0 });
    }
    if (action === 'role' && !ascending.role) {
      setSort([...data].sort((a, b) => (a.role < b.role ? -1 : 1)));
      return setAscending({ name: 0, city: 0, email: 0, date: 0, role: 1 });
    }
    if (action === 'role' && ascending.role) {
      setSort([...data].sort((a, b) => (a.role > b.role ? -1 : 1)));
      return setAscending({ name: 0, city: 0, email: 0, date: 0, role: 0 });
    }
  };

  return (
    <table>
      <thead>
        <tr>
          {thFilter.map((i, j) => {
            return (
              <th
                key={j}
                className={`h-[40px] ${
                  i[0] === 'email' ? 'w-[220px]' : 'w-[175px]'
                }`}
              >
                {i[1]}{' '}
                {x.some((k) => k.includes(i[0])) && (
                  <BiSortAlt2
                    className='inline cursor-pointer ml-1 -mt-0.5 text-lg'
                    onClick={() => handleClick(i[0])}
                  />
                )}
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody>
        {sort.map((i, j) => {
          const { person, city, email, joiningDate, role } = i;
          return (
            <tr
              key={person.name}
              className={`${j % 2 === 0 && 'bg-[#F5F5F5]'}`}
            >
              {thFilter.some((k) => k[0] === 'name') && (
                <td className='relative'>
                  <img
                    src={person.avatar}
                    alt={person.name}
                    className='inline bottom-1.5 absolute'
                  />
                  <p className='ml-[34px]'>{person.name}</p>
                </td>
              )}
              {thFilter.some((k) => k[0] === 'city') && <td>{city}</td>}
              {thFilter.some((k) => k[0] === 'email') && (
                <td>
                  <a href='#'>{email}</a>
                </td>
              )}
              {thFilter.some((k) => k[0] === 'date') && <td>{joiningDate}</td>}
              {thFilter.some((k) => k[0] === 'role') && <td>{role}</td>}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableComponent;
