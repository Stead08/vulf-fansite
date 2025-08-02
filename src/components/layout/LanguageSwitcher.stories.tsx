import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import LanguageSwitcher from './LanguageSwitcher'
import { i18nConfig } from '@/lib/i18n/config'

const meta = {
  title: 'Components/Layout/LanguageSwitcher',
  component: LanguageSwitcher,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/en',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    currentLocale: {
      control: 'select',
      options: i18nConfig.locales,
      description: 'The current active locale',
    },
  },
} satisfies Meta<typeof LanguageSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const English: Story = {
  args: {
    currentLocale: 'en',
  },
}

export const Japanese: Story = {
  args: {
    currentLocale: 'ja',
  },
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/ja',
      },
    },
  },
}

// Different page paths
export const OnHomePage: Story = {
  args: {
    currentLocale: 'en',
  },
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/en',
      },
    },
  },
}

export const OnDiscographyPage: Story = {
  args: {
    currentLocale: 'en',
  },
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/en/discography',
      },
    },
  },
}

export const OnNestedPage: Story = {
  args: {
    currentLocale: 'ja',
  },
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/ja/media/interviews/2024',
      },
    },
  },
}

// Visual states
export const InHeader: Story = {
  args: {
    currentLocale: 'en',
  },
  decorators: [
    (Story) => (
      <div className="bg-cream-50 p-4 rounded-lg">
        <Story />
      </div>
    ),
  ],
}

export const OnDarkBackground: Story = {
  args: {
    currentLocale: 'ja',
  },
  decorators: [
    (Story) => (
      <div className="bg-brown-900 p-4 rounded-lg">
        <Story />
      </div>
    ),
  ],
}