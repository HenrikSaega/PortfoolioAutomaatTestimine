import { render, screen } from '@testing-library/react';
import EmailCopy from '../utils/emailcopy';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

test('emailcopy on olemas ja nähtav',async () => {
    render(<EmailCopy />);
  
    const emailContainer = screen.getByText(/henrik.saega@voco\.ee/i).parentElement;
    expect(emailContainer).toBeInTheDocument();
    expect(emailContainer).toBeVisible();

    const user = userEvent.setup();
    await user.click(emailContainer);

    const copiedText = await screen.findByText(/Copied to Clipboard!/i);
    expect(copiedText).toBeInTheDocument();
});
