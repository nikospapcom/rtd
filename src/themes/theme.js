const theme = {
  light: {
    root: 'bg-white text-gray-800',
    appBg: 'bg-gray-200',
    defaultBorderColor: 'border-gray-300',
    defaultTextColor: 'text-gray-800',
    secondaryTextColor: 'text-gray-600',
    sidebar: {
      textColor: 'text-gray-700',
      linkColor: 'text-gray-700 hover:text-blue-600',
      linkColorActive: 'text-blue-600'
    },
    colors: {
      default: {
        text: 'text-gray-700',
        bg: 'bg-white',
        border: 'border-white',
        hoverBg: 'hover:bg-gray-200',
        activeBg: 'active:bg-gray-200'
      },
      black: {
        text: 'text-white',
        bg: 'bg-black',
        border: 'border-black',
        hoverBg: 'hover:bg-black',
        activeBg: 'active:bg-black'
      },
      primary: {
        text: 'text-indigo-600',
        bg: 'bg-indigo-200',
        border: 'border-indigo-400',
        hoverBg: 'hover:bg-indigo-300',
        activeBg: 'active:bg-indigo-300'
      },
      secondary: {
        text: 'text-gray-800',
        bg: 'bg-gray-300',
        border: 'border-gray-400',
        hoverBg: 'hover:bg-gray-400',
        activeBg: 'active:bg-gray-400'
      },
      success: {
        text: 'text-green-800',
        bg: 'bg-green-200',
        border: 'border-green-400',
        hoverBg: 'hover:bg-green-300',
        activeBg: 'active:bg-green-300'
      },
      danger: {
        text: 'text-red-800',
        bg: 'bg-red-200',
        border: 'border-red-400',
        hoverBg: 'hover:bg-red-300',
        activeBg: 'active:bg-red-300'
      },
      warning: {
        text: 'text-yellow-800',
        bg: 'bg-yellow-200',
        border: 'border-yellow-400',
        hoverBg: 'hover:bg-yellow-300',
        activeBg: 'active:bg-yellow-300'
      },
      info: {
        text: 'text-blue-800',
        bg: 'bg-blue-200',
        border: 'border-blue-400',
        hoverBg: 'hover:bg-blue-300',
        activeBg: 'active:bg-blue-300'
      },
      light: {
        text: 'text-gray-600',
        bg: 'bg-gray-100',
        border: 'border-gray-200',
        hoverBg: 'hover:bg-gray-200',
        activeBg: 'active:bg-gray-200'
      },
      dark: {
        text: 'text-gray-800',
        bg: 'bg-gray-500',
        border: 'border-gray-800',
        hoverBg: 'hover:bg-gray-600',
        activeBg: 'active:bg-gray-600'
      },
      'primary-outline': {
        text: 'text-indigo-600',
        bg: 'bg-transparent',
        border: 'border-indigo-600',
        hoverText: 'hover:text-white',
        hoverBg: 'hover:bg-indigo-600',
        activeText: 'active:text-white',
        activeBg: 'active:bg-indigo-600'
      },
      'secondary-outline': {
        text: 'text-gray-600',
        bg: 'bg-transparent',
        border: 'border-gray-600',
        hoverText: 'hover:text-white',
        hoverBg: 'hover:bg-gray-600',
        activeText: 'active:text-white',
        activeBg: 'active:bg-gray-600'
      },
      'success-outline': {
        text: 'text-green-600',
        bg: 'bg-transparent',
        border: 'border-green-600',
        hoverText: 'hover:text-white',
        hoverBg: 'hover:bg-green-600',
        activeText: 'active:text-white',
        activeBg: 'active:bg-green-600'
      },
      'danger-outline': {
        text: 'text-red-600',
        bg: 'bg-transparent',
        border: 'border-red-600',
        hoverText: 'hover:text-white',
        hoverBg: 'hover:bg-red-600',
        activeText: 'active:text-white',
        activeBg: 'active:bg-red-600'
      },
      'warning-outline': {
        text: 'text-yellow-600',
        bg: 'bg-transparent',
        border: 'border-yellow-600',
        hoverText: 'hover:text-white',
        hoverBg: 'hover:bg-yellow-600',
        activeText: 'active:text-white',
        activeBg: 'active:bg-yellow-600'
      },
      'info-outline': {
        text: 'text-blue-600',
        bg: 'bg-transparent',
        border: 'border-blue-600',
        hoverText: 'hover:text-white',
        hoverBg: 'hover:bg-blue-600',
        activeText: 'active:text-white',
        activeBg: 'active:bg-blue-600'
      },
      'light-outline': {
        text: 'text-gray-500',
        bg: 'bg-transparent',
        border: 'border-gray-500',
        hoverText: 'hover:text-white',
        hoverBg: 'hover:bg-gray-500',
        activeText: 'active:text-white',
        activeBg: 'active:bg-gray-500'
      },
      'dark-outline': {
        text: 'text-gray-800',
        bg: 'bg-transparent',
        border: 'border-gray-800',
        hoverText: 'hover:text-white',
        hoverBg: 'hover:bg-gray-800',
        activeText: 'active:text-white',
        activeBg: 'active:bg-gray-800'
      },
      'primary-solid': {
        text: 'text-white',
        bg: 'bg-indigo-600',
        border: 'border-indigo-600',
        hoverText: 'hover:text-white',
        hoverBg: 'hover:bg-indigo-700',
        activeText: 'active:text-white',
        activeBg: 'active:bg-indigo-700'
      },
      'secondary-solid': {
        text: 'text-white',
        bg: 'bg-indigo-600',
        border: 'border-indigo-600',
        hoverText: 'hover:text-white',
        hoverBg: 'hover:bg-indigo-700',
        activeText: 'active:text-white',
        activeBg: 'active:bg-indigo-700'
      }
    }
  },
  dark: {
    root: 'bg-gray-900 text-white',
    appBg: 'bg-gray-800',
    defaultBorderColor: 'border-gray-800',
    defaultTextColor: 'text-gray-400',
    secondaryTextColor: 'text-gray-600',
    sidebar: {
      textColor: 'text-gray-400',
      linkColor: 'text-gray-400 hover:text-blue-500',
      linkColorActive: 'text-blue-600'
    },
    colors: {
      primary: {
        text: 'text-indigo-600',
        bg: 'bg-indigo-200',
        border: 'border-indigo-400',
        hoverBg: 'hover:bg-indigo-300',
        activeBg: 'active:bg-indigo-300'
      }
    }
  }
};

export default theme;
