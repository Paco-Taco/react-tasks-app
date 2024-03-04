import PropTypes from 'prop-types'
import {createContext} from 'react'

export const TaskContext = createContext()

export function TaskContextProvider({ children }) {
  return (
    <TaskContext.Provider>
        {children}
    </TaskContext.Provider>
  )
}

TaskContextProvider.propTypes = {
    children: PropTypes.element
}