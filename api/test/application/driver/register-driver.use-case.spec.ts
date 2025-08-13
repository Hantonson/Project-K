// RegisterDriverUseCase test - Antonio Gabarrús Nerin
// Tests for correct registration of new drivers and prevention of duplicates
// Uses a manual mock of DriverRepository

import { RegisterDriverUseCase } from '@app/driver/register-driver.use-case';
import { DriverRepository } from '@dom/driver/driver.repository.interface';
import { Driver } from '@dom/driver/driver.entity';

describe('RegisterDriverUseCase', () => {
  let useCase: RegisterDriverUseCase;
  let mockRepo: jest.Mocked<DriverRepository>;

  beforeEach(() => {
    mockRepo = {
      findByEmail: jest.fn(),
      save: jest.fn(),
    };

    useCase = new RegisterDriverUseCase(mockRepo);
  });

  it('should register a new driver successfully', async () => {
    mockRepo.findByEmail.mockResolvedValue(null); // no existing driver

    await useCase.execute('Antonio', 'antonio@example.com');

    expect(mockRepo.findByEmail).toHaveBeenCalledWith('antonio@example.com');
    expect(mockRepo.save).toHaveBeenCalled();
  });

  it('should throw if driver with same email exists', async () => {
    const existing = new Driver('uuid', 'Existing', 'antonio@example.com');
    mockRepo.findByEmail.mockResolvedValue(existing);

    await expect(
      useCase.execute('Antonio', 'antonio@example.com')
    ).rejects.toThrow('Driver already exists with this email');

    expect(mockRepo.save).not.toHaveBeenCalled();
  });
});
