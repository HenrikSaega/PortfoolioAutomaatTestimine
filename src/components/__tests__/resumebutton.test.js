import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ResumeButton from '../utils/resumebutton';
import '@testing-library/jest-dom';

describe('ResumeButton component', () => {
  test('avaneb CV aken, sisaldab Close ja Download nuppe', async () => {
    render(<ResumeButton />);
    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: /resume/i }));

    const closeBtn = await screen.findByRole('button', { name: /close/i });
    const downloadLink = await screen.findByRole('link');

    expect(closeBtn).toBeInTheDocument();
    expect(downloadLink).toHaveAttribute('download', 'resume_Henrik_Saega.pdf');

    await user.click(closeBtn);
    
    expect(screen.queryByRole('button', { name: /close/i })).not.toBeInTheDocument();
  });
});
