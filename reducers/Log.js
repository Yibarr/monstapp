export default function counter(state = false, action) {
    switch (action.type) {
        case 'LOG':
        console.log(action.type)
        return !state 
      break
    }
  }