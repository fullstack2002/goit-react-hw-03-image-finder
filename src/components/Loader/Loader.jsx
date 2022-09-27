import { Blocks } from 'react-loader-spinner';
import { LoaderCover } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderCover>
      <Blocks>
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
    </Blocks>
    </LoaderCover>
  );
};

export default Loader;