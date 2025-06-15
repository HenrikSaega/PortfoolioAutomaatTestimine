import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from '../pages/contact';
import '@testing-library/jest-dom';

describe('Contact form validation', () => {
  test('shows error for invalid email format', async () => {
    render(<Contact />);
    const user = userEvent.setup();

    await user.type(screen.getByPlaceholderText(/your subject/i), 'Test Pealkiri');
    await user.type(screen.getByPlaceholderText(/your name/i), 'Henrik Saega');
    await user.type(screen.getByPlaceholderText(/your email address/i), 'invalid-email');
    await user.type(screen.getByPlaceholderText(/your message here/i), 'Test');

    await user.click(screen.getByRole('button', { name: /send/i }));

    expect(
      await screen.findByText(/please enter a valid email address ending!/i)
    ).toBeInTheDocument();
  });

  test('does not show error for valid email format', async () => {
    render(<Contact />);
    const user = userEvent.setup();

    await user.type(screen.getByPlaceholderText(/your subject/i), 'Test Pealkiri');
    await user.type(screen.getByPlaceholderText(/your name/i), 'Henrik Saega');
    await user.type(screen.getByPlaceholderText(/your email address/i), 'henrik.saega@voco.ee');
    await user.type(screen.getByPlaceholderText(/your message here/i), 'Test');

    await user.click(screen.getByRole('button', { name: /send/i }));

    expect(
      screen.queryByText(/please enter a valid email address ending!/i)
    ).not.toBeInTheDocument();
  });
});
