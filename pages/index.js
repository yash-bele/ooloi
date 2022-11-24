import Head from 'next/head';
import { FaMobileAlt, FaDesktop, FaLongArrowAltRight } from 'react-icons/fa';
import { FiAlertTriangle } from 'react-icons/fi';
import TableComponent from '../components/TableComponent';
import testTableData from '../testTableData.json';

const Home = () => (
  <>
    <Head>
      <title>Ooloi</title>
      <meta name='description' content='Website' />
      <link
        rel='icon'
        href='https://static.wixstatic.com/media/d379bd_b94591f1c31044119a66824f17465179%7Emv2.png/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/d379bd_b94591f1c31044119a66824f17465179%7Emv2.png'
      />
    </Head>
    <main className='absolute w-full h-full hidden lg:flex justify-center'>
      <section className='space-y-10'>
        <div className='w-px h-px'></div>
        <TableComponent
          data={testTableData}
          tableConfig={[
            'nameWithSort',
            'cityWithSort',
            'emailWithSort',
            'dateWithSort',
            'roleWithSort',
          ]}
        />
        <TableComponent
          data={testTableData}
          tableConfig={['nameWithSort', 'email', 'role']}
        />
        <TableComponent
          data={testTableData}
          tableConfig={['email', 'dateWithSort', 'roleWithSort']}
        />
        <TableComponent
          data={testTableData}
          tableConfig={['name', 'cityWithSort', 'date', 'roleWithSort']}
        />
        <div className='w-px h-px'></div>
      </section>
    </main>
    <main className='absolute w-full h-full flex lg:hidden justify-center items-center'>
      <section className='-mt-32 shadow-md p-5 rounded-md bg-red-50'>
        <FiAlertTriangle className='text-center text-5xl w-full mb-5 text-red-500' />
        <h1 className='font-bold text-center text-base text-slate-700'>
          You are on small screen.
        </h1>
        <h1 className='font-bold text-center text-base text-slate-700'>
          Switch to desktop size screen...
        </h1>
        <div className='flex items-center justify-center mt-5'>
          <FaMobileAlt className='text-5xl text-blue-500' />
          <FaLongArrowAltRight className='text-4xl text-slate-700 mx-10 ml-9' />
          <FaDesktop className='text-5xl text-blue-500' />
        </div>
      </section>
    </main>
  </>
);

export default Home;
