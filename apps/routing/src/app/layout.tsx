import 'ui/styles.css';
import LayoutFile from '../components/layout-file';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>
        <LayoutFile route="App">{children}</LayoutFile>
      </body>
    </html>
  );
}
