import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Contact from '../pages/contact';
import emailjs from 'emailjs-com';

jest.mock('emailjs-com', () => ({
  sendForm: jest.fn(),
}));

describe('Contact form submit', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('shows error for invalid email and does not send', async () => {
    render(<Contact />);
    const user = userEvent.setup();

    await user.type(screen.getByPlaceholderText(/your subject/i), 'Test Pealkiri');
    await user.type(screen.getByPlaceholderText(/your name/i), 'Henrik Saega');
    await user.type(screen.getByPlaceholderText(/your email address/i), 'invalidemail');
    await user.type(screen.getByPlaceholderText(/your message here/i), 'Test sõnum');

    await user.click(screen.getByRole('button', { name: /send/i }));

    expect(
      await screen.findByText(/please enter a valid email address ending!/i)
    ).toBeInTheDocument();
    expect(emailjs.sendForm).not.toHaveBeenCalled();
  });

  test('sends message successfully with valid email', async () => {
    emailjs.sendForm.mockResolvedValue({ text: 'OK' });

    render(<Contact />);
    const user = userEvent.setup();

    await user.type(screen.getByPlaceholderText(/your subject/i), 'Test Pealkiri');
    await user.type(screen.getByPlaceholderText(/your name/i), 'Henrik Saega');
    await user.type(screen.getByPlaceholderText(/your email address/i), 'henrik@example.ee');
    await user.type(screen.getByPlaceholderText(/your message here/i), 'Test sõnum');

    await user.click(screen.getByRole('button', { name: /send/i }));

    await waitFor(() => expect(emailjs.sendForm).toHaveBeenCalled());

    expect(
      await screen.findByText(/message sent!/i)
    ).toBeInTheDocument();
    expect(screen.queryByText(/please enter a valid email address ending!/i)).not.toBeInTheDocument();
  });

  test('shows error message when sending fails', async () => {
    emailjs.sendForm.mockRejectedValue({ text: 'Error' });

    render(<Contact />);
    const user = userEvent.setup();

    await user.type(screen.getByPlaceholderText(/your subject/i), 'Test Pealkiri');
    await user.type(screen.getByPlaceholderText(/your name/i), 'Henrik Saega');
    await user.type(screen.getByPlaceholderText(/your email address/i), 'Henrik.sageea@voco.ee');
    await user.type(screen.getByPlaceholderText(/your message here/i), 'Test sõnum');

    await user.click(screen.getByRole('button', { name: /send/i }));

    await waitFor(() => expect(emailjs.sendForm).toHaveBeenCalled());

    expect(
      await screen.findByText(/failed to send message./i)
    ).toBeInTheDocument();
  });
});
