import Navigation from '../Navigation/Navigation';
import { Toaster } from 'react-hot-toast';
import css from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <Navigation />
      {children}{' '}
      <Toaster
        toastOptions={{
          style: {
            background: 'red',
            color: 'white',
          },
        }}
        containerStyle={{
          top: 150,
          left: 20,
          bottom: 20,
          right: 20,
        }}
      />
    </div>
  );
}
