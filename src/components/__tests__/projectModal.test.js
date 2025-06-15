import { render, screen, fireEvent } from '@testing-library/react';
import Projects from '../pages/projects';
import projects from '../utils/projectsData';
import '@testing-library/jest-dom';

describe('Projects component', () => {
  test('clicking a project card opens modal with project details', () => {
    render(<Projects />);

    const firstProject = projects[0];

    const projectCard = screen.getByText(firstProject.title);
    expect(projectCard).toBeInTheDocument();

    fireEvent.click(projectCard);

    const modalTitle = screen.getByRole('heading', { name: firstProject.title });
    expect(modalTitle).toBeInTheDocument();

    const description = screen.getByText(firstProject.description);
    expect(description).toBeInTheDocument();

    const overlay = screen.getByTestId('modal-overlay');
    fireEvent.click(overlay);

    expect(screen.queryByText(firstProject.description)).not.toBeInTheDocument();
  });
});
