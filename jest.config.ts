import type { Config } from 'jest';

const config: Config = {
   preset: 'ts-jest',
   testEnvironment: 'jsdom',
   moduleDirectories: ['node_modules', '<rootDir>/'],
   moduleNameMapper: {
      '^@/components/(.*)$': '<rootDir>/components/$1',
      '^@/lib/(.*)$': '<rootDir>/lib/$1',
      '^@/pages/(.*)$': '<rootDir>/pages/$1',
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '^@/(.*)$': '<rootDir>/src/$1',
   },
   setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
   transform: {
      '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
   },
   testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
};

export default config;
