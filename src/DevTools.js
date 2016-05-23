import React from 'react'
import { createDevTools } from 'redux-devtools'
import SliderMonitor from 'redux-slider-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

export default createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h'
    defaultPosition='bottom'
    changePositionKey='ctrl-q'>
    <SliderMonitor />
  </DockMonitor>
)
