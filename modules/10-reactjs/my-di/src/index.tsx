import React from 'react'
import ReactDOM from 'react-dom'
import 'reflect-metadata'
import DIContainer from "./di-container";
import {Service} from "./di-service";

const service : Service = DIContainer.resolve<Service>(Service)


ReactDOM.render(<h1>{service.assist('Jesús')}</h1>, document.getElementById('root'))
