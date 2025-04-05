import { ClipLoader } from 'react-spinners';

const override = {
  display: 'block',
  margin: '100px auto',
};

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color='#4338ca'
      size={150}
      loading={loading}
      cssOverride={override}
    />
  );
};

export default Spinner;
