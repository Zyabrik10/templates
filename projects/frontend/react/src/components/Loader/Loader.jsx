import { Oval } from 'react-loader-spinner';

export default function Loader() {
  return (
    <Oval
      visible={true}
      height="80"
      width="80"
      color="red"
      secondaryColor="transparent"
      ariaLabel="oval-loading"
      wrapperStyle={{
        display: 'block',
        margin: '0 auto',
        width: '100%',
        textAlign: 'center',
      }}
      wrapperClass=""
    />
  );
}
