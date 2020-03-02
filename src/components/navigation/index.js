import React from 'react';
import { Router as ReachRouter, Link as ReachLink} from '@reach/router'

const BASE_PATH='/dev-tools'

const Router = () => {
  return (
    <ReachRouter basepath={BASE_PATH} >

    </ReachRouter>
  )
}

const Link = ({to = '', children, ...props}) => {
  const path = `${BASE_PATH}${(!!to[0]&&to[0]!='/')?'/':''}${to}`
  return (
    <ReachLink {...props} to={path}>
      {children}
    </ReachLink>
  )
}

export { Router, Link }