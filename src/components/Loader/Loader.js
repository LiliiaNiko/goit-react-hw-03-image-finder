import { Audio } from 'react-loader-spinner';
import { AudioLoader } from './Loader.styled';

export default function Loader() {
  return (
    <AudioLoader align="center">
      <Audio />
    </AudioLoader>
  );
}
