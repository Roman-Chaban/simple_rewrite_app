import { render, screen } from '@testing-library/react';

import { Sidebar } from '../ui/Sidebar';

describe('Sidebar', () => {
   test('Sidebar renders correctly', () => {
      render(<Sidebar />);

      const sidebar = screen.getByRole('complementary');
      expect(sidebar).toBeInTheDocument();
   });
});
