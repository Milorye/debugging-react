import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

it('adds two items correctly in one click', async () => {
  const user = userEvent.setup()

  render(<App />)

  await user.click(screen.getByRole('button', { name: /add two items/i }))

  expect(screen.getByText('2')).toBeInTheDocument()
})
