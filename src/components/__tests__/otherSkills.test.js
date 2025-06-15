import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import OtherSkillsToggle from '../functions/otherSkills';
import '@testing-library/jest-dom';

test('Other skills nupp avab lisasektsiooni', async () => {
  render(<OtherSkillsToggle />);

  const toggleText = screen.getByText(/Show Other Skills/i);
  expect(toggleText).toBeInTheDocument();

  expect(screen.queryByText(/Linux/i)).not.toBeInTheDocument();

  await userEvent.click(toggleText);

  expect(screen.getByText(/Hide Other Skills/i)).toBeInTheDocument();

  expect(screen.getByText(/Linux/i)).toBeInTheDocument();
});
