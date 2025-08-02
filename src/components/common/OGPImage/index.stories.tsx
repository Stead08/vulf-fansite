import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import OGPImage from './index'

const meta: Meta<typeof OGPImage> = {
  title: 'Components/Common/OGPImage',
  component: OGPImage,
  tags: ['autodocs'],
  argTypes: {
    image: {
      control: 'text',
      description: 'The URL of the image to display',
    },
    title: {
      control: 'text',
      description: 'The alt text for the image',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    image: 'https://picsum.photos/1200/630',
    title: 'Sample Article Title',
  },
}

export const WithoutImage: Story = {
  args: {
    title: 'Article without OGP image',
  },
}

export const CustomSize: Story = {
  args: {
    image: 'https://picsum.photos/800/400',
    title: 'Custom sized OGP image',
    className: 'max-w-md',
  },
}

export const ImageLoadError: Story = {
  args: {
    image: 'https://invalid-image-url.com/image.jpg',
    title: 'Image that fails to load',
  },
}