import React, { Component } from 'react'
import { map } from 'lodash'

import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'
import Image from '../../components/Image/Image'

require('./start.scss')

class Start extends Component {

  constructor (props) {
    super(props)
    this.data = {}
    this.data.email = 'mailto:hi@manuelvilling.de'
    this.data.github = 'https://github.com/theotow/'
    this.data.skills = ['html5', 'css5', 'angularjs', 'react', 'wordpress', 'linux', 'aws', 'seo', 'hapi', 'loopback', 'nodejs']
    this.data.projects = [{
      name: 'gitmonitor',
      url: 'https://github.com/theotow/gitmonitor-ios'
    }, {
      name: 'bottlesxo.com',
      url: 'http://bottlesxo.com'
    }, {
      name: 'need.io',
      url: 'https://github.com/theotow/need.io'
    }, {
      name: 'sensisworld.com',
      url: 'https://sensisworld.com'
    }]
    this.data.customers = ['bottlesxo']

    this.customers = this.customers.bind(this)
    this.projects = this.projects.bind(this)
    this.skills = this.skills.bind(this)
  }

  skills () {
    return map(this.data.skills, (skill, key) => {
      if (!skill) return null
      return (
        <div key={key} className={'start__list-item'}>
          <Button text={skill} />
        </div>
      )
    })
  }

  customers () {
    return map(this.data.customers, (customer, key) => {
      return (
        <Image key={key} image={customer} />
      )
    })
  }

  projects () {
    return map(this.data.projects, (project, key) => {
      if (!project) return null
      return (
        <a href={project.url} key={key} className={'start__list-item'}>
          <Button text={project.name} />
        </a>
      )
    })
  }

  render () {
    return (
      <div>
        <a href={this.data.email} className={'start__contact start__contact--left'}>
          <Button text={'Contact'} />
        </a>

        <a href={this.data.email} className={'start__contact start__contact--right'}>
          <Button text={'Hire me'} />
        </a>
        <div className={'row'}>
          <div className={'col-lg-12'}>
            <div className={'start__article start__article--first start__article--blue'}>
              <Header />
            </div>
            <div className={'start__article start__article--blue'}>
              <h2 className={'h2 start__h2'}>Skills</h2>
              <div className={'start__list'}>
                {this.skills()}
              </div>
            </div>
            <div className={'start__article start__article--white'}>
              <h2 className={'h2 start__h2'}>Customers</h2>
              <div className={'start__imagelist'}>
                {this.customers()}
                <div className={'start__info'}>
                  + various Agencies i can not name here
                </div>
              </div>
            </div>
            <div className={'start__article start__article--blue'}>
              <h2 className={'h2 start__h2'}>Projects</h2>
              <div className={'start__list'}>
                {this.projects()}
                <div className={'start__info'}>
                  <a href={this.data.github}>more on my Github</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Start
