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
        hoverBg: 'hover:bg-gray-100',
        activeBg: 'active:bg-gray-100'
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
        hoverBorderBg: 'hover:border-indigo-700',
        activeText: 'active:text-white',
        activeBg: 'active:bg-indigo-700'
      },
      'secondary-solid': {
        text: 'text-white',
        bg: 'bg-gray-600',
        border: 'border-gray-600',
        hoverText: 'hover:text-white',
        hoverBg: 'hover:bg-gray-700',
        hoverBorderBg: 'hover:border-gray-700',
        activeText: 'active:text-white',
        activeBg: 'active:bg-gray-700'
      },
      'success-solid': {
        text: 'text-white',
        bg: 'bg-green-600',
        border: 'border-green-600',
        hoverText: 'hover:text-white',
        hoverBg: 'hover:bg-green-700',
        hoverBorderBg: 'hover:border-green-700',
        activeText: 'active:text-white',
        activeBg: 'active:bg-green-700'
      },
      'danger-solid': {
        text: 'text-white',
        bg: 'bg-red-400',
        border: 'border-red-400',
        hoverText: 'hover:text-white',
        hoverBg: 'hover:bg-red-700',
        hoverBorderBg: 'hover:border-red-700',
        activeText: 'active:text-white',
        activeBg: 'active:bg-red-700'
      },
      'warning-solid': {
        text: 'text-white',
        bg: 'bg-yellow-600',
        border: 'border-yellow-600',
        hoverText: 'hover:text-white',
        hoverBg: 'hover:bg-yellow-700',
        hoverBorderBg: 'hover:border-yellow-700',
        activeText: 'active:text-white',
        activeBg: 'active:bg-yellow-700'
      },
      'info-solid': {
        text: 'text-white',
        bg: 'bg-blue-600',
        border: 'border-blue-600',
        hoverText: 'hover:text-white',
        hoverBg: 'hover:bg-blue-700',
        hoverBorderBg: 'hover:border-blue-700',
        activeText: 'active:text-white',
        activeBg: 'active:bg-blue-700'
      },
      'light-solid': {
        text: 'text-white',
        bg: 'bg-gray-600',
        border: 'border-gray-600',
        hoverText: 'hover:text-white',
        hoverBg: 'hover:bg-gray-700',
        hoverBorderBg: 'hover:border-gray-700',
        activeText: 'active:text-white',
        activeBg: 'active:bg-gray-700'
      },
      'dark-solid': {
        text: 'text-white',
        bg: 'bg-gray-800',
        border: 'border-gray-800',
        hoverText: 'hover:text-white',
        hoverBg: 'hover:bg-gray-900',
        hoverBorderBg: 'hover:border-gray-900',
        activeText: 'active:text-white',
        activeBg: 'active:bg-gray-900'
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
      default: {
        text: 'text-gray-700',
        bg: 'bg-white',
        border: 'border-white',
        hoverBg: 'hover:bg-gray-100',
        activeBg: 'active:bg-gray-100'
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
        bg: 'bg-gray-600',
        border: 'border-gray-600',
        hoverText: 'hover:text-white',
        hoverBg: 'hover:bg-gray-700',
        activeText: 'active:text-white',
        activeBg: 'active:bg-gray-700'
      },
      'success-solid': {
        text: 'text-white',
        bg: 'bg-green-600',
        border: 'border-green-600',
        hoverText: 'hover:text-white',
        hoverBg: 'hover:bg-green-700',
        activeText: 'active:text-white',
        activeBg: 'active:bg-green-700'
      },
      'danger-solid': {
        text: 'text-white',
        bg: 'bg-red-400',
        border: 'border-red-400',
        hoverText: 'hover:text-white',
        hoverBg: 'hover:bg-red-700',
        activeText: 'active:text-white',
        activeBg: 'active:bg-red-700'
      },
      'warning-solid': {
        text: 'text-white',
        bg: 'bg-yellow-600',
        border: 'border-yellow-600',
        hoverText: 'hover:text-white',
        hoverBg: 'hover:bg-yellow-700',
        activeText: 'active:text-white',
        activeBg: 'active:bg-yellow-700'
      },
      'info-solid': {
        text: 'text-white',
        bg: 'bg-blue-600',
        border: 'border-blue-600',
        hoverText: 'hover:text-white',
        hoverBg: 'hover:bg-blue-700',
        activeText: 'active:text-white',
        activeBg: 'active:bg-blue-700'
      },
      'light-solid': {
        text: 'text-white',
        bg: 'bg-gray-600',
        border: 'border-gray-600',
        hoverText: 'hover:text-white',
        hoverBg: 'hover:bg-gray-700',
        activeText: 'active:text-white',
        activeBg: 'active:bg-gray-700'
      },
      'dark-solid': {
        text: 'text-white',
        bg: 'bg-gray-800',
        border: 'border-gray-800',
        hoverText: 'hover:text-white',
        hoverBg: 'hover:bg-gray-900',
        activeText: 'active:text-white',
        activeBg: 'active:bg-gray-900'
      }
    }
  },
  textSize: {
    xs: 'text-xs',
    sm: 'text-sm',
    nl: 'text-base',
    lg: 'text-lg'
  },
  paddingSize: {
    xs: 'py-1 px-2',
    sm: 'py-2 px-4',
    nl: 'py-3 px-4',
    lg: 'py-3 px-5'
  },
  avatar: {
    size: {
      xs: 'w-6 h-6 text-xs',
      sm: 'w-8 h-8 text-sm',
      nl: 'w-10 h-10',
      md: 'w-12 h-12 text-xl',
      lg: 'w-16 h-16 text-2xl',
      xl: 'w-20 h-20 text-3xl',
      xxl: 'w-24 h-24 text-4xl'
    },
    groupMargin: {
      xs: '-ml-2',
      sm: '-ml-3',
      nl: '-ml-4',
      md: '-ml-5',
      lg: '-ml-6',
      xl: '-ml-8',
      xxl: '-ml-10'
    },
    status: {
      online: 'bg-green-600',
      offline: 'bg-gray-600'    
    },
    statusPosition: {
      xs: 'bottom-0 right-0 w-2 h-2',
      sm: 'bottom-0 right-0 w-3 h-3',
      nl: 'bottom-0 right-0 w-3 h-3',
      md: 'bottom-0 right-0 w-4 h-4',
      lg: 'bottom-0 right-0 w-4 h-4',
      xl: 'bottom-3 right-3 w-4 h-4',
      xxl: 'bottom-5 right-5 w-4 h-4'
    }
  },
  breadcrumbs: {
    align: {
      left: 'flex justify-start',
      center: 'flex justify-center',
      right: 'flex justify-end'
    }
  },
  badges: {
    size: {
      sm: 'py-1 px-1 text-2xs',
      nl: 'py-1 px-1 text-xs',
      lg: 'py-1 px-1 text-lg'
    },
    pill: {
      sm: 'px-2',
      nl: 'px-2',
      lg: 'px-2'
    }
  },
  radius: {
    square: 'rounded-none',
    rounded: 'rounded',
    'rounded-circle': 'rounded-full'  
  },
  typography: {
    h1: 'text-6xl font-light',
    h2: 'text-5xl font-light',
    h3: 'text-3xl font-normal',
    h4: 'text-2xl font-normal',
    h5: 'text-xl font-normal',
    h6: 'text-lg font-normal',
    subtitle1: 'text-base font-normal',
    subtitle2: 'text-sm font-medium',
    body1: 'text-base',
    body2: 'text-sm'
  }
};

export default theme;
